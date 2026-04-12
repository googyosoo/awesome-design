// ===== STATE =====
let state = {
  search: '',
  activeVibes: new Set(),
  activeFeatures: new Set(),
  sort: 'name',
  view: 'grid',
  filtered: [...DESIGN_SYSTEMS],
  theme: localStorage.getItem('theme') || 'dark',
  favorites: new Set(JSON.parse(localStorage.getItem('favorites') || '[]')),
  promptConfig: JSON.parse(localStorage.getItem('promptConfig') || '{"stack":"vanilla","tailwind":false,"typescript":false}'),
  isLoading: false
};

// ===== DOM REFS =====
const searchInput = document.getElementById('searchInput');
const cardGrid = document.getElementById('cardGrid');
const resultCount = document.getElementById('resultCount');
const vibeChipsWrap = document.getElementById('vibeChips');
const featureChipsWrap = document.getElementById('featureChips');
const activeFiltersWrap = document.getElementById('activeFilters');
const sortSelect = document.getElementById('sortSelect');
const viewGrid = document.getElementById('viewGrid');
const viewList = document.getElementById('viewList');
const clearBtn = document.getElementById('clearBtn');
const modalOverlay = document.getElementById('modalOverlay');
const toast = document.getElementById('toast');
const themeToggle = document.getElementById('themeToggle');

// ===== INIT =====
function init() {
  loadFromUrl();
  applyTheme();
  buildVibeChips();
  buildFeatureChips();
  render();
  bindEvents();
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('theme', state.theme);
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
}

// ===== BUILD SIDEBAR FILTERS =====
function buildVibeChips() {
  // Count vibes
  const vibeCounts = {};
  DESIGN_SYSTEMS.forEach(ds => {
    ds.vibes.forEach(v => {
      vibeCounts[v] = (vibeCounts[v] || 0) + 1;
    });
  });

  vibeChipsWrap.innerHTML = VIBE_CATEGORIES.map(vc => {
    const countKey = vc.id;
    const count = vibeCounts[countKey] || countVibeCategory(vc.id);
    return `
      <button class="vibe-chip" data-vibe="${vc.id}" onclick="toggleVibe('${vc.id}')">
        <span class="vibe-dot" style="background:${vc.color}"></span>
        <span>${vc.label}</span>
        ${count > 0 ? `<span class="vibe-count">${count}</span>` : ''}
      </button>
    `;
  }).join('');
}

function countVibeCategory(vibeId) {
  return DESIGN_SYSTEMS.filter(ds =>
    ds.vibes.some(v => v === vibeId) || ds.category === vibeId
  ).length;
}

function buildFeatureChips() {
  const features = Object.entries(FEATURE_LABELS);
  featureChipsWrap.innerHTML = features.map(([key, val]) => {
    const count = DESIGN_SYSTEMS.filter(ds => ds.features.includes(key)).length;
    return `
      <button class="feature-chip" data-feature="${key}" onclick="toggleFeature('${key}')">
        <span>${val.icon}</span>
        <span>${val.label}</span>
        <span class="vibe-count">${count}</span>
      </button>
    `;
  }).join('');
}

// ===== FILTER & SORT =====
function applyFilters() {
  let results = [...DESIGN_SYSTEMS];

  // Search
  if (state.search) {
    const q = state.search.toLowerCase();
    results = results.filter(ds =>
      ds.name.toLowerCase().includes(q) ||
      ds.company.toLowerCase().includes(q) ||
      ds.description.toLowerCase().includes(q) ||
      ds.vibes.some(v => v.toLowerCase().includes(q)) ||
      ds.category.toLowerCase().includes(q)
    );
  }

  // Vibe filter
  if (state.activeVibes.size > 0) {
    results = results.filter(ds =>
      [...state.activeVibes].some(av =>
        ds.vibes.includes(av) || ds.category === av
      )
    );
  }

  // Feature filter
  if (state.activeFeatures.size > 0) {
    results = results.filter(ds =>
      [...state.activeFeatures].every(af => ds.features.includes(af))
    );
  }

  // Favorites sorting priority
  results.sort((a, b) => {
    const aFav = state.favorites.has(a.id);
    const bFav = state.favorites.has(b.id);
    if (aFav && !bFav) return -1;
    if (!aFav && bFav) return 1;
    return 0;
  });

  // Main Sort
  const favSort = (a, b) => {
     const aFav = state.favorites.has(a.id);
     const bFav = state.favorites.has(b.id);
     if (aFav && !bFav) return -1;
     if (!aFav && bFav) return 1;
     return 0;
  };

  switch (state.sort) {
    case 'name':
      results.sort((a, b) => favSort(a, b) || a.name.localeCompare(b.name));
      break;
    case 'company':
      results.sort((a, b) => favSort(a, b) || a.company.localeCompare(b.company));
      break;
    case 'features':
      results.sort((a, b) => favSort(a, b) || (b.features.length - a.features.length));
      break;
    case 'category':
      results.sort((a, b) => favSort(a, b) || a.category.localeCompare(b.category));
      break;
  }

  state.filtered = results;
  updateUrl();
}

// URL Sync
function updateUrl() {
  const params = new URLSearchParams();
  if (state.search) params.set('q', state.search);
  if (state.activeVibes.size > 0) params.set('vibe', [...state.activeVibes].join(','));
  if (state.activeFeatures.size > 0) params.set('feat', [...state.activeFeatures].join(','));
  if (state.sort !== 'name') params.set('sort', state.sort);
  
  const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
  window.history.replaceState({}, '', newUrl);
}

function loadFromUrl() {
  const params = new URLSearchParams(window.location.search);
  if (params.has('q')) {
    state.search = params.get('q');
    searchInput.value = state.search;
  }
  if (params.has('vibe')) {
    params.get('vibe').split(',').forEach(v => state.activeVibes.add(v));
  }
  if (params.has('feat')) {
    params.get('feat').split(',').forEach(f => state.activeFeatures.add(f));
  }
  if (params.has('sort')) state.sort = params.get('sort');
}

// ===== RENDER =====
function render() {
  applyFilters();
  renderCards();
  renderActiveFilters();
  updateResultCount();
  updateFilterUI();
}

function renderCards() {
  if (state.isLoading) {
    renderSkeletons();
    return;
  }

  if (state.filtered.length === 0) {
    cardGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1;">
        <div class="empty-icon">🔍</div>
        <div class="empty-title">검색 결과 없음</div>
        <p class="empty-sub">다른 검색어나 필터를 사용해보세요.</p>
      </div>
    `;
    return;
  }

  cardGrid.className = 'card-grid' + (state.view === 'list' ? ' list-view' : '');
  cardGrid.innerHTML = state.filtered.map(ds => buildCard(ds)).join('');
}

function renderSkeletons() {
  cardGrid.innerHTML = Array(6).fill(0).map(() => `
    <div class="ds-card skeleton">
      <div class="color-palette" style="height:6px"></div>
      <div class="card-visual" style="height:100px"></div>
      <div class="card-desc" style="height:60px"></div>
    </div>
  `).join('');
}

function buildCard(ds) {
  const initials = getInitials(ds.name);
  const bgColor = ds.colors[0] || '#6366f1';
  const paletteHtml = ds.colors.map(c =>
    `<div class="color-swatch" style="background:${c}"></div>`
  ).join('');
  const dotsHtml = ds.colors.map(c =>
    `<div class="color-dot" title="${c}" style="background:${c}"></div>`
  ).join('');
  const vibeTagsHtml = ds.vibes.slice(0, 3).map(v =>
    `<span class="vibe-tag">${v}</span>`
  ).join('');
  const featuresHtml = ds.features.map(f =>
    `<span class="feature-badge">${FEATURE_LABELS[f]?.icon || '•'} ${FEATURE_LABELS[f]?.label || f}</span>`
  ).join('');

  const linkUrl = ds.url || '#';
  const sourceUrl = ds.source || null;
  const isFav = state.favorites.has(ds.id);

  return `
    <div class="ds-card" onclick="openModal('${ds.id}')">
      <div class="color-palette">${paletteHtml}</div>
      <button class="card-favorite-btn ${isFav ? 'active' : ''}" 
              onclick="toggleFavorite(event, '${ds.id}')" 
              title="즐겨찾기">
        ${isFav ? '⭐' : '☆'}
      </button>
      <div class="card-visual">
        <div class="brand-preview" style="background: linear-gradient(135deg, ${ds.colors[0]}, ${ds.colors[1] || ds.colors[0]})">
          ${initials}
        </div>
        <div class="card-header-info">
          <div class="card-name">${ds.name}</div>
          <div class="card-company">${ds.company}</div>
        </div>
        <div class="card-links">
          <a href="${linkUrl}" target="_blank" class="card-link" title="공식 사이트" onclick="event.stopPropagation()">🌐</a>
          ${sourceUrl ? `<a href="${sourceUrl}" target="_blank" class="card-link" title="소스 코드" onclick="event.stopPropagation()">📂</a>` : ''}
        </div>
      </div>
      <div class="card-vibes">${vibeTagsHtml}</div>
      <div class="card-desc">${ds.description}</div>
      <div class="color-dots">${dotsHtml}</div>
      <div class="card-features">${featuresHtml}</div>
      <div class="card-prompt-area">
        <div class="prompt-label">AI 프롬프트</div>
        <div class="prompt-box">${escapeHtml(ds.prompt.substring(0, 200))}</div>
        <button class="copy-btn" onclick="copyPrompt(event, '${ds.id}', this)">
          <span>📋</span> 프롬프트 복사
        </button>
      </div>
    </div>
  `;
}

function renderActiveFilters() {
  const pills = [];

  state.activeVibes.forEach(v => {
    const vc = VIBE_CATEGORIES.find(c => c.id === v);
    if (vc) pills.push({ type: 'vibe', id: v, label: vc.label });
  });

  state.activeFeatures.forEach(f => {
    const fl = FEATURE_LABELS[f];
    if (fl) pills.push({ type: 'feature', id: f, label: fl.label });
  });

  if (pills.length === 0) {
    activeFiltersWrap.innerHTML = '';
    return;
  }

  activeFiltersWrap.innerHTML = pills.map(p => `
    <div class="filter-pill">
      ${p.label}
      <button class="filter-pill-remove" onclick="${p.type === 'vibe' ? `toggleVibe('${p.id}')` : `toggleFeature('${p.id}')`}">✕</button>
    </div>
  `).join('');
}

function updateResultCount() {
  resultCount.innerHTML = `<strong>${state.filtered.length}</strong> / ${DESIGN_SYSTEMS.length}개 표시`;
  const totalEl = document.getElementById('totalCount');
  if (totalEl) totalEl.textContent = DESIGN_SYSTEMS.length;
}

function updateFilterUI() {
  document.querySelectorAll('.vibe-chip').forEach(chip => {
    chip.classList.toggle('active', state.activeVibes.has(chip.dataset.vibe));
  });
  document.querySelectorAll('.feature-chip').forEach(chip => {
    chip.classList.toggle('active', state.activeFeatures.has(chip.dataset.feature));
  });
  clearBtn.style.display = (state.activeVibes.size > 0 || state.activeFeatures.size > 0) ? 'block' : 'none';
}

// ===== MODAL =====
function openModal(id) {
  const ds = DESIGN_SYSTEMS.find(d => d.id === id);
  if (!ds) return;

  const modal = document.getElementById('modalContent');
  const initials = getInitials(ds.name);
  const paletteHtml = ds.colors.map(c =>
    `<div class="modal-palette-swatch" style="background:${c}"></div>`
  ).join('');
  const colorItemsHtml = ds.colors.map(c => `
    <div class="modal-color-item" onclick="copyHex(event, '${c}')">
      <div class="modal-color-swatch" style="background:${c}"></div>
      <span class="modal-color-hex">${c}</span>
    </div>
  `).join('');
  const vibeTagsHtml = ds.vibes.map(v =>
    `<span class="modal-vibe-tag">${v}</span>`
  ).join('');
  const featuresHtml = ds.features.map(f =>
    `<div class="modal-feature-item">${FEATURE_LABELS[f]?.icon || '•'} ${FEATURE_LABELS[f]?.label || f}</div>`
  ).join('');

  modal.innerHTML = `
    <div class="modal-palette">${paletteHtml}</div>
    <div class="modal-body" style="position:relative">
      <button class="modal-close" onclick="closeModal()">✕</button>
      <div class="modal-top">
        <div class="modal-brand" style="background: linear-gradient(135deg, ${ds.colors[0]}, ${ds.colors[1] || ds.colors[0]})">${initials}</div>
        <div class="modal-title">
          <div class="modal-name">${ds.name}</div>
          <div class="modal-company">by ${ds.company}</div>
          <div class="modal-action-links">
            ${ds.url ? `<a href="${ds.url}" target="_blank" class="modal-link">🌐 공식 사이트</a>` : ''}
            ${ds.source ? `<a href="${ds.source}" target="_blank" class="modal-link">📂 소스 코드</a>` : ''}
          </div>
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">소개</div>
        <p class="modal-desc">${ds.description}</p>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">분위기 태그</div>
        <div class="modal-vibes-wrap">${vibeTagsHtml}</div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">컬러 팔레트</div>
        <div class="modal-colors">${colorItemsHtml}</div>
      </div>

      ${ds.font ? `
      <div class="modal-section">
        <div class="modal-section-title">主 폰트</div>
        <p class="modal-desc" style="font-family:monospace">${ds.font}</p>
      </div>` : ''}

      <div class="modal-section">
        <div class="modal-section-title">제공 항목</div>
        <div class="modal-features-grid">${featuresHtml}</div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">🤖 바이브코딩 AI 프롬프트</div>
        
        <!-- Customizer UI -->
        <div class="customizer-box">
          <div class="customizer-title">⚡ 프롬프트 커스터마이징</div>
          <div class="opt-group">
            <div class="opt-label">기본 스택</div>
            <button class="opt-btn ${state.promptConfig.stack === 'vanilla' ? 'active' : ''}" onclick="updateConfig('stack', 'vanilla', '${ds.id}')">Vanilla JS</button>
            <button class="opt-btn ${state.promptConfig.stack === 'react' ? 'active' : ''}" onclick="updateConfig('stack', 'react', '${ds.id}')">React</button>
            <button class="opt-btn ${state.promptConfig.stack === 'vue' ? 'active' : ''}" onclick="updateConfig('stack', 'vue', '${ds.id}')">Vue</button>
          </div>
          <div class="opt-group">
            <div class="opt-label">추가 옵션</div>
            <button class="opt-btn ${state.promptConfig.tailwind ? 'active' : ''}" onclick="updateConfig('tailwind', !state.promptConfig.tailwind, '${ds.id}')">Tailwind CSS</button>
            <button class="opt-btn ${state.promptConfig.typescript ? 'active' : ''}" onclick="updateConfig('typescript', !state.promptConfig.typescript, '${ds.id}')">TypeScript</button>
          </div>
        </div>

        <div class="modal-prompt-box ${isCustomized() ? 'customized' : ''}" id="modalPromptText">${escapeHtml(generateCustomPrompt(ds.prompt))}</div>
        <button class="modal-copy-btn" id="modalCopyBtn" onclick="copyModalPrompt('${ds.id}')">
          <span>📋</span> 복사하기 (커스텀 적용됨)
        </button>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ===== COPY =====
async function copyPrompt(e, id, btn) {
  e.stopPropagation();
  const ds = DESIGN_SYSTEMS.find(d => d.id === id);
  if (!ds) return;
  await copyToClipboard(ds.prompt, btn);
}

async function copyModalPrompt(id) {
  const ds = DESIGN_SYSTEMS.find(d => d.id === id);
  if (!ds) return;
  const btn = document.getElementById('modalCopyBtn');
  const customizedPrompt = generateCustomPrompt(ds.prompt);
  await copyToClipboard(customizedPrompt, btn);
}

// ===== PROMPT LOGIC =====
function isCustomized() {
  const c = state.promptConfig;
  return c.stack !== 'vanilla' || c.tailwind || c.typescript;
}

function updateConfig(key, value, dsId) {
  state.promptConfig[key] = value;
  localStorage.setItem('promptConfig', JSON.stringify(state.promptConfig));
  
  // Re-open/update modal content if open
  openModal(dsId); 
}

function generateCustomPrompt(base) {
  let extra = "\n\n### Additional Requirements:\n";
  const { stack, tailwind, typescript } = state.promptConfig;
  
  if (stack === 'react') {
    extra += "- Implement using React functional components.\n- Use modern Hooks (useState, useEffect).\n";
  } else if (stack === 'vue') {
    extra += "- Implement using Vue 3 Composition API.\n";
  }

  if (tailwind) {
    extra += "- Use Tailwind CSS utility classes for all styling.\n- Do not use custom CSS files unless necessary.\n";
  }

  if (typescript) {
    extra += "- Use TypeScript for all logic.\n- Define clear interfaces for props and states.\n";
  }

  if (!tailwind && !typescript && stack === 'vanilla') return base;
  return base + extra;
}

async function copyHex(e, hex) {
  e.stopPropagation();
  await copyToClipboard(hex);
  showToast(`색상 코드 ${hex}가 복사되었습니다!`);
}

// ===== FAVORITES =====
function toggleFavorite(e, id) {
  e.stopPropagation();
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
  } else {
    state.favorites.add(id);
  }
  localStorage.setItem('favorites', JSON.stringify([...state.favorites]));
  render();
}

async function copyToClipboard(text, btn) {
  try {
    await navigator.clipboard.writeText(text);
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '<span>✅</span> 복사됨!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.classList.remove('copied');
      }, 2000);
    }
    showToast('프롬프트가 클립보드에 복사되었습니다! 🎉');
  } catch(err) {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('복사됨!');
  }
}

function showToast(msg) {
  toast.textContent = '✅ ' + msg;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 3000);
}

// ===== TOGGLE FILTERS =====
function toggleVibe(id) {
  simulateLoading();
  if (state.activeVibes.has(id)) {
    state.activeVibes.delete(id);
  } else {
    state.activeVibes.add(id);
  }
  render();
}

function toggleFeature(id) {
  simulateLoading();
  if (state.activeFeatures.has(id)) {
    state.activeFeatures.delete(id);
  } else {
    state.activeFeatures.add(id);
  }
  render();
}

function simulateLoading() {
  state.isLoading = true;
  render();
  setTimeout(() => {
    state.isLoading = false;
    render();
  }, 400);
}

function clearAllFilters() {
  state.activeVibes.clear();
  state.activeFeatures.clear();
  state.search = '';
  searchInput.value = '';
  render();
}

// ===== EVENTS =====
function bindEvents() {
  // Search with debounce
  let searchTimer;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      simulateLoading();
      state.search = e.target.value.trim();
      render();
    }, 200);
  });

  // Sort
  sortSelect.addEventListener('change', (e) => {
    state.sort = e.target.value;
    render();
  });

  // View toggle
  viewGrid.addEventListener('click', () => {
    state.view = 'grid';
    viewGrid.classList.add('active');
    viewList.classList.remove('active');
    render();
  });

  viewList.addEventListener('click', () => {
    state.view = 'list';
    viewList.classList.add('active');
    viewGrid.classList.remove('active');
    render();
  });

  // Theme
  themeToggle.addEventListener('click', toggleTheme);

  // Clear
  clearBtn.addEventListener('click', clearAllFilters);

  // Modal close on overlay click
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// ===== UTILS =====
function getInitials(name) {
  const words = name.split(' ').filter(w => /[A-Za-z0-9]/.test(w));
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ===== START =====
document.addEventListener('DOMContentLoaded', init);
