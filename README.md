# Design Systems Explorer 🎨

> **세계 유수 기업과 기관의 120+ 디자인 시스템 큐레이션 및 교사·바이브코더를 위한 원클릭 AI 프롬프트 허브**

- **공식 배포 주소**: [https://awesome-design-orcin.vercel.app](https://awesome-design-orcin.vercel.app)
- **원작 데이터 출처**: [alexpate/awesome-design-systems](https://github.com/alexpate/awesome-design-systems) (MIT License)

---

## 🚀 주요 기능

1. **원클릭 "이 스타일로 만들어줘" 프롬프트 복사**
   - 각 디자인 시스템 카드에서 클릭 한 번으로 바이브코딩(Claude, Cursor, v0 등) 최적화 완성형 프롬프트를 복사합니다.
   - 역할 정의, 시스템 철학, 핵심 Hex 컬러, 타이포그래피, 반응형(390px~1440px), 접근성(WCAG AA) 지침이 결합됩니다.

2. **AI 프롬프트 스택 커스터마이징 (전역 유지)**
   - 상세 모달에서 기본 프레임워크(Vanilla JS, React, Vue)와 추가 옵션(Tailwind CSS, TypeScript)을 선택할 수 있습니다.
   - 선택한 설정은 `localStorage`에 자동 저장되어 다른 카드를 열어도 유지됩니다.

3. **즐겨찾기(Favorites) 모아보기**
   - 카드 우측 상단의 ⭐를 눌러 나만의 디자인 시스템을 북마크하고, 툴바의 **"⭐ 즐겨찾기만"** 토글 버튼으로 원클릭 모아보기가 가능합니다.

4. **다차원 필터링 및 실시간 검색**
   - 20가지 분위기(미니멀, 엔터프라이즈, 다크 테마, 플레이풀 등) 및 제공 기능(컴포넌트, 디자이너 킷, 소스 등) 필터.
   - 카드의 분위기 태그를 클릭하면 해당 필터가 즉시 적용됩니다.
   - 검색어와 필터 상태가 URL 쿼리 파라미터(`?q=...&vibe=...&fav=1`)로 실시간 동기화되어 링크 공유가 가능합니다.

5. **모바일(390px) 완벽 대응 & 테마 토글**
   - iPhone, Galaxy 등 390px 뷰포트에서도 수평 오버플로우 없이 부드럽게 작동합니다.
   - 모바일용 접이식 필터 토글(⚡ 필터) 지원.
   - 라이트/다크 모드 지원.

---

## 🛠️ 새로운 디자인 시스템 데이터 추가 방법

`data.js` 파일의 `DESIGN_SYSTEMS` 배열에 아래 형식의 객체를 추가합니다:

```javascript
{
  id: 'my-design-system',           // 고유 식별자 (소문자, 하이픈)
  name: 'System Name',             // 디자인 시스템 공식 명칭
  company: 'Company / Org',        // 제작사 또는 기관명
  url: 'https://example.com/ds',   // 공식 가이드라인 웹사이트 URL
  source: 'https://github.com/...',// (선택) 오픈소스 저장소 URL 또는 null
  features: [                      // 제공 항목: 'components', 'voice', 'designers-kit', 'source'
    'components',
    'voice',
    'designers-kit',
    'source'
  ],
  category: 'enterprise',          // 대분류 카테고리
  vibes: ['clean', 'minimal', 'modern'], // 분위기 태그 배열 (소문자)
  colors: ['#0066cc', '#ffffff', '#f5f5f5', '#ff9900'], // Hex 컬러 팔레트 (1~4개)
  font: 'Pretendard, sans-serif',  // 대표 타이포그래피
  description: '디자인 시스템에 대한 직관적인 1~2줄 한글 요약 설명.',
  prompt: `System Name 스타일: 메인 컬러(#0066cc)와 깔끔한 여백, 카드 기반 UI 레이아웃.`
}
```

새로운 분위기 분류를 추가하려면 `data.js` 하단의 `VIBE_CATEGORIES` 배열에 `{ id: '...', label: '...', color: '...' }`를 함께 등록하세요.

---

## 💻 로컬 실행 방법

별도의 빌드 도구 없이 정적 웹 서버로 즉시 구동됩니다.

```bash
# Python 내장 서버로 실행할 경우 (포트 3456)
python -m http.server 3456

# 브라우저에서 접속
# http://localhost:3456
```

---

## 📄 라이선스

- 원본 리스트 데이터: [MIT License](https://github.com/alexpate/awesome-design-systems) © Alex Pate
- 웹 구현체: MIT License
