// ===== STATE =====
let state = {
  search: '',
  activeVibes: new Set(),
  activeFeatures: new Set(),
  onlyFavorites: false,
  sort: 'name',
  view: 'grid',
  filtered: [...DESIGN_SYSTEMS],
  theme: localStorage.getItem('theme') || 'dark',
  favorites: new Set(JSON.parse(localStorage.getItem('favorites') || '[]')),
  promptConfig: JSON.parse(localStorage.getItem('promptConfig') || '{"stack":"vanilla","tailwind":false,"typescript":false}'),
  isLoading: false,
  mobileFilterOpen: false
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
const favFilterBtn = document.getElementById('favFilterBtn');
const favFilterCount = document.getElementById('favFilterCount');
const mobileFilterToggle = document.getElementById('mobileFilterToggle');
const mobileFilterBadge = document.getElementById('mobileFilterBadge');
const sidebar = document.querySelector('.sidebar');

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

  // Only Favorites Filter
  if (state.onlyFavorites) {
    results = results.filter(ds => state.favorites.has(ds.id));
  }

  // Search (이름, 회사, 설명, 분위기, 카테고리, 폰트 매칭)
  if (state.search) {
    const q = state.search.toLowerCase();
    results = results.filter(ds =>
      ds.name.toLowerCase().includes(q) ||
      ds.company.toLowerCase().includes(q) ||
      ds.description.toLowerCase().includes(q) ||
      ds.vibes.some(v => v.toLowerCase().includes(q)) ||
      ds.category.toLowerCase().includes(q) ||
      (ds.font && ds.font.toLowerCase().includes(q))
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
  if (state.onlyFavorites) params.set('fav', '1');
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
  if (params.get('fav') === '1') {
    state.onlyFavorites = true;
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
    if (state.onlyFavorites) {
      cardGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1/-1;">
          <div class="empty-icon">⭐</div>
          <div class="empty-title">즐겨찾기한 디자인 시스템이 없습니다</div>
          <p class="empty-sub">마음에 드는 카드의 우측 상단 별표(⭐)를 눌러 나만의 디자인 시스템을 모아보세요!</p>
          <button class="clear-btn" style="display:inline-block; margin-top:16px;" onclick="toggleFavoriteFilter()">
            전체 디자인 시스템 보기
          </button>
        </div>
      `;
      return;
    }
    cardGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1;">
        <div class="empty-icon">🔍</div>
        <div class="empty-title">검색 결과 없음</div>
        <p class="empty-sub">다른 검색어나 필터를 사용해보세요.</p>
        <button class="clear-btn" style="display:inline-block; margin-top:16px;" onclick="clearAllFilters()">
          필터 전체 초기화
        </button>
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
  const paletteHtml = ds.colors.map(c =>
    `<div class="color-swatch" style="background:${c}"></div>`
  ).join('');
  const dotsHtml = ds.colors.map(c =>
    `<div class="color-dot" title="${c}" style="background:${c}"></div>`
  ).join('');
  const vibeTagsHtml = ds.vibes.slice(0, 3).map(v =>
    `<button class="vibe-tag" onclick="event.stopPropagation(); toggleVibe('${v}')" title="'${v}' 분위기 필터 적용">${v}</button>`
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
              title="${isFav ? '즐겨찾기 해제' : '즐겨찾기 추가'}"
              aria-label="${isFav ? '즐겨찾기 해제' : '즐겨찾기 추가'}">
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
          <a href="${linkUrl}" target="_blank" rel="noopener noreferrer" class="card-link" title="공식 사이트" onclick="event.stopPropagation()">🌐</a>
          ${sourceUrl ? `<a href="${sourceUrl}" target="_blank" rel="noopener noreferrer" class="card-link" title="소스 코드" onclick="event.stopPropagation()">📂</a>` : ''}
        </div>
      </div>
      <div class="card-vibes">${vibeTagsHtml}</div>
      <div class="card-desc">${ds.description}</div>
      <div class="color-dots">${dotsHtml}</div>
      <div class="card-features">${featuresHtml}</div>
      <div class="card-prompt-area">
        <button class="style-copy-btn" onclick="copyStylePrompt(event, '${ds.id}', this)" title="바이브코딩 최적화 완성형 프롬프트 즉시 복사">
          <span class="btn-sparkle">✨</span> <strong>이 스타일로 만들어줘</strong>
        </button>
        <div class="prompt-preview-wrap">
          <div class="prompt-preview-head">
            <span class="prompt-preview-label">AI 프롬프트 요약</span>
            <span class="prompt-preview-action">클릭 시 전체 모달 보기</span>
          </div>
          <div class="prompt-box">${escapeHtml(ds.prompt.substring(0, 150))}...</div>
        </div>
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
  const countText = state.onlyFavorites
    ? `⭐ 즐겨찾기 <strong>${state.filtered.length}</strong>개 표시 (총 ${state.favorites.size}개)`
    : `<strong>${state.filtered.length}</strong> / ${DESIGN_SYSTEMS.length}개 표시`;
  resultCount.innerHTML = countText;

  const totalEl = document.getElementById('totalCount');
  if (totalEl) totalEl.textContent = DESIGN_SYSTEMS.length;

  if (favFilterCount) {
    favFilterCount.textContent = state.favorites.size;
  }
}

function updateFilterUI() {
  document.querySelectorAll('.vibe-chip').forEach(chip => {
    chip.classList.toggle('active', state.activeVibes.has(chip.dataset.vibe));
  });
  document.querySelectorAll('.feature-chip').forEach(chip => {
    chip.classList.toggle('active', state.activeFeatures.has(chip.dataset.feature));
  });
  
  if (favFilterBtn) {
    favFilterBtn.classList.toggle('active', state.onlyFavorites);
    favFilterBtn.setAttribute('aria-pressed', state.onlyFavorites ? 'true' : 'false');
  }

  // Mobile badge
  const totalActiveFilters = state.activeVibes.size + state.activeFeatures.size + (state.onlyFavorites ? 1 : 0);
  if (mobileFilterBadge) {
    mobileFilterBadge.textContent = totalActiveFilters > 0 ? totalActiveFilters : '';
    mobileFilterBadge.style.display = totalActiveFilters > 0 ? 'inline-block' : 'none';
  }

  clearBtn.style.display = (state.activeVibes.size > 0 || state.activeFeatures.size > 0 || state.onlyFavorites || state.search) ? 'block' : 'none';
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
    <div class="modal-color-item" onclick="copyHex(event, '${c}')" title="클릭하여 Hex 코드 복사">
      <div class="modal-color-swatch" style="background:${c}"></div>
      <span class="modal-color-hex">${c}</span>
    </div>
  `).join('');
  const vibeTagsHtml = ds.vibes.map(v =>
    `<button class="modal-vibe-tag" onclick="closeModal(); toggleVibe('${v}')" title="'${v}' 필터 적용">${v}</button>`
  ).join('');
  const featuresHtml = ds.features.map(f =>
    `<div class="modal-feature-item">${FEATURE_LABELS[f]?.icon || '•'} ${FEATURE_LABELS[f]?.label || f}</div>`
  ).join('');

  modal.innerHTML = `
    <div class="modal-palette">${paletteHtml}</div>
    <div class="modal-body" style="position:relative">
      <button class="modal-close" onclick="closeModal()" aria-label="모달 닫기">✕</button>
      <div class="modal-top">
        <div class="modal-brand" style="background: linear-gradient(135deg, ${ds.colors[0]}, ${ds.colors[1] || ds.colors[0]})">${initials}</div>
        <div class="modal-title">
          <div class="modal-name">${ds.name}</div>
          <div class="modal-company">by ${ds.company}</div>
          <div class="modal-action-links">
            ${ds.url ? `<a href="${ds.url}" target="_blank" rel="noopener noreferrer" class="modal-link">🌐 공식 사이트</a>` : ''}
            ${ds.source ? `<a href="${ds.source}" target="_blank" rel="noopener noreferrer" class="modal-link">📂 소스 코드</a>` : ''}
          </div>
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">소개</div>
        <p class="modal-desc">${ds.description}</p>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">분위기 태그 (클릭 시 필터)</div>
        <div class="modal-vibes-wrap">${vibeTagsHtml}</div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">컬러 팔레트 (클릭 시 Hex 복사)</div>
        <div class="modal-colors">${colorItemsHtml}</div>
      </div>

      ${ds.font ? `
      <div class="modal-section">
        <div class="modal-section-title">대표 폰트</div>
        <p class="modal-desc" style="font-family:monospace">${ds.font}</p>
      </div>` : ''}

      <div class="modal-section">
        <div class="modal-section-title">제공 항목</div>
        <div class="modal-features-grid">${featuresHtml}</div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">🤖 바이브코딩 최적화 프롬프트 생성기</div>
        
        <!-- Customizer UI -->
        <div class="customizer-box">
          <div class="customizer-title">⚡ 프롬프트 기술 스택 커스터마이징 (전역 유지)</div>
          <div class="opt-group">
            <div class="opt-label">기본 스택 선택</div>
            <button class="opt-btn ${state.promptConfig.stack === 'vanilla' ? 'active' : ''}" onclick="updateConfig('stack', 'vanilla', '${ds.id}')">Vanilla JS</button>
            <button class="opt-btn ${state.promptConfig.stack === 'react' ? 'active' : ''}" onclick="updateConfig('stack', 'react', '${ds.id}')">React</button>
            <button class="opt-btn ${state.promptConfig.stack === 'vue' ? 'active' : ''}" onclick="updateConfig('stack', 'vue', '${ds.id}')">Vue</button>
          </div>
          <div class="opt-group">
            <div class="opt-label">추가 스타일링 & 언어 옵션</div>
            <button class="opt-btn ${state.promptConfig.tailwind ? 'active' : ''}" onclick="updateConfig('tailwind', !state.promptConfig.tailwind, '${ds.id}')">Tailwind CSS</button>
            <button class="opt-btn ${state.promptConfig.typescript ? 'active' : ''}" onclick="updateConfig('typescript', !state.promptConfig.typescript, '${ds.id}')">TypeScript</button>
          </div>
        </div>

        <div class="modal-prompt-box ${isCustomized() ? 'customized' : ''}" id="modalPromptText">${escapeHtml(buildFullPrompt(ds))}</div>
        <button class="modal-copy-btn" id="modalCopyBtn" onclick="copyModalPrompt('${ds.id}')">
          <span>✨</span> "이 스타일로 만들어줘" 완성형 프롬프트 복사
        </button>
      </div>

      <div class="modal-footer-credit">
        출처: alexpate/awesome-design-systems · ${ds.company} ${ds.name}
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

// ===== PROMPT GENERATION ENGINE =====
function buildFullPrompt(ds) {
  const { stack, tailwind, typescript } = state.promptConfig;
  
  let stackDetails = '';
  if (stack === 'react') {
    stackDetails += '- 프레임워크: React 최신 함수형 컴포넌트 (Hooks: useState, useEffect, useMemo 활용)\n';
  } else if (stack === 'vue') {
    stackDetails += '- 프레임워크: Vue 3 Composition API (<script setup> 방식)\n';
  } else {
    stackDetails += '- 프레임워크: 순수 모던 HTML5, CSS3, ES6+ JavaScript (별도 빌드 도구 없이 브라우저에서 즉시 실행)\n';
  }

  if (tailwind) {
    stackDetails += '- 스타일링: Tailwind CSS 유틸리티 클래스 전면 적용 (반응형 및 테마 클래스 사용)\n';
  } else {
    stackDetails += '- 스타일링: CSS Custom Properties(Variables)를 활용한 체계적 디자인 시스템 토큰 구축\n';
  }

  if (typescript) {
    stackDetails += '- 언어: TypeScript 엄격 모드 (모든 Props, State, 컴포넌트 인터페이스 완벽 명시)\n';
  }

  const primaryColor = ds.colors[0] || '#2563eb';
  const secondaryColor = ds.colors[1] || '#ffffff';
  const otherColors = ds.colors.slice(2).join(', ') || '중립 그레이톤(#f3f4f6, #1f2937)';
  const fontFam = ds.font || 'Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

  return `[역할 정의]
당신은 세계 최고 수준의 프론트엔드 UI/UX 엔지니어이자 디자인 시스템 전문가입니다.

[디자인 시스템 스타일 요청]
아래 명시된 "${ds.name} (${ds.company})" 디자인 시스템의 시각적 언어와 철학을 계승하여 완성도 높은 반응형 웹 UI를 구현해주세요.

1. 디자인 시스템 정보:
- 시스템 명칭: ${ds.name} (소속/제작: ${ds.company})
- 디자인 분위기(Vibe): ${ds.vibes.join(', ')} (카테고리: ${ds.category})
- 기본 개요: ${ds.description}

2. 시각 디자인 가이드라인:
- 메인 브랜드 컬러(Primary): ${primaryColor}
- 보조 배경/서브 컬러(Secondary): ${secondaryColor}
- 추가 악센트 컬러: ${otherColors}
- 대표 타이포그래피: ${fontFam}
- 핵심 스타일 지침:
${ds.prompt}

3. 구현 기술 스택:
${stackDetails}
4. 필수 구현 요구사항 (바이브코딩 최적화):
- 레이아웃: 모바일(390px 스마트폰)부터 데스크톱(1440px)까지 오버플로우 없이 유려하게 동작하는 완전 반응형 레이아웃을 작성하세요.
- 컴포넌트 완성도: 헤더(로고/네비게이션), 히어로 섹션, 주요 기능 인터랙티브 카드 그리드, 상세 모달 또는 폼, 푸터를 모두 포함한 완전한 단일 코드로 작성하세요.
- 접근성 & 품질: WCAG AA 명도 대비 준수, 키보드 포커스 링, 적절한 hover/active 전환 애니메이션, ARIA 레이블을 철저히 적용하세요.
- 출력 형식: 코드 설명 없이 복사해서 바로 실행할 수 있는 완성된 코드를 제시해주세요.`;
}

function isCustomized() {
  const c = state.promptConfig;
  return c.stack !== 'vanilla' || c.tailwind || c.typescript;
}

function updateConfig(key, value, dsId) {
  state.promptConfig[key] = value;
  localStorage.setItem('promptConfig', JSON.stringify(state.promptConfig));
  openModal(dsId); 
}

// ===== COPY FUNCTIONS =====
async function copyStylePrompt(e, id, btn) {
  e.stopPropagation();
  const ds = DESIGN_SYSTEMS.find(d => d.id === id);
  if (!ds) return;
  const promptText = buildFullPrompt(ds);
  await copyToClipboard(promptText, btn);
}

async function copyPrompt(e, id, btn) {
  e.stopPropagation();
  const ds = DESIGN_SYSTEMS.find(d => d.id === id);
  if (!ds) return;
  const promptText = buildFullPrompt(ds);
  await copyToClipboard(promptText, btn);
}

async function copyModalPrompt(id) {
  const ds = DESIGN_SYSTEMS.find(d => d.id === id);
  if (!ds) return;
  const btn = document.getElementById('modalCopyBtn');
  const customizedPrompt = buildFullPrompt(ds);
  await copyToClipboard(customizedPrompt, btn);
}

async function copyHex(e, hex) {
  e.stopPropagation();
  await copyToClipboard(hex);
  showToast(`색상 코드 ${hex}가 복사되었습니다!`);
}

// ===== FAVORITES & FILTERS =====
function toggleFavorite(e, id) {
  e.stopPropagation();
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    showToast('즐겨찾기에서 제거되었습니다.');
  } else {
    state.favorites.add(id);
    showToast('즐겨찾기에 추가되었습니다! ⭐');
  }
  localStorage.setItem('favorites', JSON.stringify([...state.favorites]));
  render();
}

function toggleFavoriteFilter() {
  state.onlyFavorites = !state.onlyFavorites;
  simulateLoading();
  render();
}

function toggleMobileFilter() {
  state.mobileFilterOpen = !state.mobileFilterOpen;
  if (sidebar) {
    sidebar.classList.toggle('mobile-open', state.mobileFilterOpen);
  }
  if (mobileFilterToggle) {
    mobileFilterToggle.classList.toggle('active', state.mobileFilterOpen);
    mobileFilterToggle.setAttribute('aria-expanded', state.mobileFilterOpen ? 'true' : 'false');
  }
}

async function copyToClipboard(text, btn) {
  try {
    await navigator.clipboard.writeText(text);
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '<span>✅</span> 복사 완료!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.classList.remove('copied');
      }, 2000);
    }
    showToast('바이브코딩 최적화 프롬프트가 복사되었습니다! 🎉');
  } catch(err) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('복사 완료!');
  }
}

function showToast(msg) {
  toast.textContent = msg;
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
  }, 300);
}

function clearAllFilters() {
  state.activeVibes.clear();
  state.activeFeatures.clear();
  state.onlyFavorites = false;
  state.search = '';
  searchInput.value = '';
  simulateLoading();
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

  // Favorites Filter Button
  if (favFilterBtn) {
    favFilterBtn.addEventListener('click', toggleFavoriteFilter);
  }

  // Mobile Filter Toggle Button
  if (mobileFilterToggle) {
    mobileFilterToggle.addEventListener('click', toggleMobileFilter);
  }

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
