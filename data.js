const DESIGN_SYSTEMS = [
  {
    id: 'aalto',
    name: 'Aalto University',
    company: 'Aalto University',
    url: 'https://brand.aalto.fi/',
    source: null,
    features: ['components', 'voice', 'designers-kit'],
    category: 'education',
    vibes: ['academic', 'minimal', 'bold'],
    colors: ['#ef3124', '#ffffff', '#1a1a1a', '#ffd200'],
    font: 'GT Flexa',
    description: '핀란드 알토 대학교의 브랜드 시스템. 대담한 레드와 강렬한 타이포그래피, 스칸디나비안 미니멀리즘이 결합된 학술 디자인.',
    prompt: `다음 Aalto University 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 강렬한 빨강(#ef3124) 포인트, 흰 배경, 검정 텍스트, 황금색(#ffd200) 보조
- 타이포그래피: GT Flexa처럼 기하학적 산세리프, 큰 헤딩
- 스타일: 스칸디나비안 미니멀리즘, 대담한 레이아웃, 많은 여백
- 특징: 학술적이면서 현대적, 컨텐츠 중심 레이아웃`
  },
  {
    id: 'adobe-spectrum',
    name: 'Adobe Spectrum',
    company: 'Adobe',
    url: 'https://spectrum.adobe.com',
    source: 'https://github.com/adobe/react-spectrum',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'creative',
    vibes: ['professional', 'dark', 'creative', 'polished'],
    colors: ['#1473e6', '#2c2c2c', '#1e1e1e', '#ea3829'],
    font: 'Adobe Clean',
    description: 'Adobe 전체 제품군을 관통하는 디자인 시스템. 다크 모드를 기반으로 한 크리에이티브 툴 특화 UI로 정밀한 컨트롤과 패널 기반 레이아웃이 특징.',
    prompt: `다음 Adobe Spectrum 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 파랑(#1473e6) 액션, 다크 패널(#2c2c2c), 더 어두운 배경(#1e1e1e), 빨간 경고(#ea3829)
- 타이포그래피: Adobe Clean 스타일 산세리프, 촘촘한 글자 간격
- 스타일: 다크 모드 우선, 크리에이티브 툴 UI, 패널 기반 레이아웃
- 특징: 정밀한 컨트롤, 밀도 높은 정보 표시, 전문 창작 도구 느낌`
  },
  {
    id: 'alaska-airlines',
    name: 'Alaska Airlines Auro',
    company: 'Alaska Airlines',
    url: 'https://auro.alaskaair.com/',
    source: 'https://github.com/AlaskaAirlines',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'travel',
    vibes: ['trustworthy', 'clean', 'professional', 'friendly'],
    colors: ['#01426a', '#00a4e4', '#ffffff', '#f0f8ff'],
    font: 'Alaska Sans',
    description: '알래스카 항공의 Auro 디자인 시스템. 신뢰감 있는 네이비와 스카이 블루로 항공 여행의 안전함과 현대성을 표현.',
    prompt: `다음 Alaska Airlines Auro 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 딥 네이비(#01426a) 주색, 스카이 블루(#00a4e4) 포인트, 흰 배경, 연한 파랑(#f0f8ff) 섹션
- 타이포그래피: 친근하고 읽기 좋은 산세리프
- 스타일: 신뢰감 있는 항공사 브랜딩, 깨끗한 레이아웃
- 특징: 예약 플로우, 명확한 CTA, 여행 정보 카드`
  },
  {
    id: 'ant-design',
    name: 'Ant Design',
    company: 'Alibaba',
    url: 'https://ant.design',
    source: 'https://github.com/ant-design/ant-design/',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'enterprise',
    vibes: ['enterprise', 'data-heavy', 'comprehensive', 'professional'],
    colors: ['#1677ff', '#001529', '#f5f5f5', '#52c41a'],
    font: 'PingFang SC',
    description: '알리바바가 만든 엔터프라이즈급 React UI 라이브러리. 방대한 컴포넌트 세트와 데이터 집약적 레이아웃으로 B2B 제품의 표준.',
    prompt: `다음 Ant Design 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 블루(#1677ff) 주색, 다크 네이비(#001529) 사이드바, 회색(#f5f5f5) 배경, 녹색(#52c41a) 성공
- 타이포그래피: 14px 기본, 계층적 폰트 크기
- 스타일: 엔터프라이즈 B2B, 데이터 집약적, 테이블/폼 중심
- 특징: 사이드 메뉴 레이아웃, 대시보드, 그리드 시스템`
  },
  {
    id: 'amplify-ui',
    name: 'Amplify UI',
    company: 'AWS',
    url: 'https://ui.docs.amplify.aws/',
    source: 'https://github.com/aws-amplify/amplify-ui/',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'enterprise',
    vibes: ['cloud', 'technical', 'professional'],
    colors: ['#ff9900', '#232f3e', '#0073bb', '#ffffff'],
    font: 'Amazon Ember',
    description: 'AWS Amplify의 React UI 컴포넌트 라이브러리. AWS 서비스와 연동된 인증, 스토리지, 데이터 컴포넌트 특화.',
    prompt: `다음 AWS Amplify UI 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 오렌지(#ff9900) 주색, 다크 네이비(#232f3e) 헤더/사이드바, 파랑(#0073bb) 링크
- 타이포그래피: Amazon Ember 스타일 읽기 좋은 산세리프
- 스타일: AWS 클라우드 서비스 UI, 기술적이고 전문적
- 특징: 인증 플로우, 파일 업로드, 클라우드 연결 컴포넌트`
  },
  {
    id: 'appear-here',
    name: 'Appear Here Bloom',
    company: 'Appear Here',
    url: 'https://bloom.appearhere.co.uk/',
    source: 'https://github.com/appearhere/bloom',
    features: ['components', 'source'],
    category: 'product',
    vibes: ['minimal', 'clean', 'marketplace'],
    colors: ['#ff5959', '#1e1e2e', '#ffffff', '#f8f8f8'],
    font: 'Circular',
    description: '공간 임대 마켓플레이스 Appear Here의 디자인 시스템. 코랄 핑크와 다크 배경의 깔끔한 마켓플레이스 스타일.',
    prompt: `다음 Appear Here Bloom 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 코랄 핑크(#ff5959) 포인트, 다크 배경(#1e1e2e), 흰 카드, 연회색 보조
- 타이포그래피: Circular 스타일 둥근 산세리프
- 스타일: 마켓플레이스 UI, 깔끔한 카드 레이아웃
- 특징: 공간/장소 리스팅 카드, 날짜 선택, 검색 필터`
  },
  {
    id: 'aragon-ui',
    name: 'Aragon UI',
    company: 'Aragon',
    url: 'https://ui.aragon.org/',
    source: 'https://github.com/aragon/ui',
    features: ['components', 'source'],
    category: 'web3',
    vibes: ['tech', 'decentralized', 'modern'],
    colors: ['#00c4d7', '#1c1e24', '#8a96a0', '#f0fbfc'],
    font: 'Overpass',
    description: '분산 자율 조직(DAO) 플랫폼 Aragon의 UI 라이브러리. 블록체인 거버넌스 앱을 위한 청록색 기반 컴포넌트.',
    prompt: `다음 Aragon UI 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 청록색(#00c4d7) 주색, 다크 배경(#1c1e24), 회색 텍스트(#8a96a0), 연한 청록(#f0fbfc)
- 타이포그래피: Overpass 모노/산세리프
- 스타일: Web3/블록체인 앱 스타일, 다크 테마, 기술적
- 특징: 투표 UI, 거버넌스 대시보드, DAO 관리 인터페이스`
  },
  {
    id: 'artsy-palette',
    name: 'Artsy Palette',
    company: 'Artsy',
    url: 'https://palette.artsy.net/',
    source: 'https://github.com/artsy/palette',
    features: ['components', 'source'],
    category: 'creative',
    vibes: ['artistic', 'minimal', 'elegant', 'luxury'],
    colors: ['#000000', '#ffffff', '#6e1fff', '#c2c2c2'],
    font: 'Unica77',
    description: '미술 마켓플레이스 Artsy의 디자인 시스템. 예술 작품이 돋보이도록 블랙&화이트 미니멀 기반에 퍼플 포인트.',
    prompt: `다음 Artsy Palette 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 순수 검정(#000) 주색, 흰 배경, 퍼플(#6e1fff) 포인트, 회색(#c2c2c2) 보조
- 타이포그래피: Unica77 스타일 럭셔리 산세리프, 얇은 획
- 스타일: 미술관 같은 미니멀리즘, 여백 극대화, 콘텐츠 우선
- 특징: 아트워크 갤러리 카드, 옥션 UI, 아티스트 프로필`
  },
  {
    id: 'astro-uxds',
    name: 'Astro UXDS',
    company: 'Rocket Communications',
    url: 'https://astrouxds.com/',
    source: 'https://github.com/RocketCommunicationsInc/astro-components',
    features: ['components', 'designers-kit', 'source'],
    category: 'aerospace',
    vibes: ['dark', 'technical', 'space', 'mission-critical'],
    colors: ['#4dacff', '#090b11', '#172635', '#56f000'],
    font: 'Roboto',
    description: '우주항공 지상 관제 시스템을 위한 UX 디자인 시스템. 어두운 배경에 빛나는 파란색, 미션 크리티컬 한 정보 표시 특화.',
    prompt: `다음 Astro UXDS 우주항공 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 빛나는 파랑(#4dacff) 주색, 거의 검은 배경(#090b11), 짙은 패널(#172635), 네온 그린(#56f000) 상태 표시
- 타이포그래피: Roboto, 단노/고정폭 데이터 표시
- 스타일: 우주 지상 관제소 UI, 다크 미션 크리티컬, 고밀도 정보
- 특징: 상태 표시 대시보드, 타임라인, 경고/알림 시스템`
  },
  {
    id: 'atlassian',
    name: 'Atlassian Design System',
    company: 'Atlassian',
    url: 'https://atlassian.design',
    source: null,
    features: ['components', 'voice', 'designers-kit'],
    category: 'enterprise',
    vibes: ['enterprise', 'productivity', 'collaborative', 'professional'],
    colors: ['#0052cc', '#172b4d', '#f4f5f7', '#00b8d9'],
    font: 'Charlie Display',
    description: 'Jira, Confluence, Trello를 만드는 Atlassian의 디자인 시스템. 팀 협업과 생산성 도구를 위한 신뢰감 있는 블루 팔레트.',
    prompt: `다음 Atlassian 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 강렬한 블루(#0052cc) 주색, 다크 네이비(#172b4d) 텍스트, 연회색(#f4f5f7) 배경, 시안(#00b8d9) 링크
- 타이포그래피: Charlie Display 스타일 친근한 산세리프
- 스타일: 협업 도구 UI, 이슈 트래킹, 프로젝트 관리 느낌
- 특징: 칸반 보드, 이슈 카드, 사용자 아바타, 진행 상태 배지`
  },
  {
    id: 'audi-ui',
    name: 'Audi UI Kit',
    company: 'Audi',
    url: 'https://brand.audi/en/welcome.html',
    source: 'https://github.com/audi/audi-ui',
    features: ['components', 'designers-kit', 'source'],
    category: 'automotive',
    vibes: ['luxury', 'premium', 'minimal', 'german'],
    colors: ['#bb0a14', '#000000', '#d0d0d0', '#ffffff'],
    font: 'Audi Type',
    description: '독일 프리미엄 자동차 브랜드 Audi의 UI 키트. 검정과 흰색 위주의 럭셔리 미니멀리즘에 Audi 레드 포인트.',
    prompt: `다음 Audi UI 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: Audi 레드(#bb0a14) 포인트, 순수 검정 배경, 밝은 회색(#d0d0d0) 보조, 흰 텍스트
- 타이포그래피: 얇고 우아한 산세리프 (세련된 느낌)
- 스타일: 독일 럭셔리 자동차 브랜드, 극도의 미니멀리즘, 프리미엄
- 특징: 차량 쇼케이스, 사양 목록, 딜러 찾기, 구성 옵션`
  },
  {
    id: 'aurora-canada',
    name: 'Aurora Design System',
    company: 'Government of Canada',
    url: 'https://design.gccollab.ca/',
    source: 'https://github.com/gctools-outilsgc/design-system',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'government',
    vibes: ['government', 'accessible', 'inclusive', 'trustworthy'],
    colors: ['#269abc', '#002d5c', '#ffffff', '#f5f5f5'],
    font: 'Nunito Sans',
    description: '캐나다 정부의 디자인 시스템. 캐나다 공무원을 위한 협업 툴의 접근성 높은 UI 가이드.',
    prompt: `다음 Aurora (캐나다 정부) 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 캐나다 블루(#269abc) 주색, 짙은 네이비(#002d5c) 헤더, 흰 배경
- 타이포그래피: Nunito Sans, 읽기 좋고 접근성 높은 폰트
- 스타일: 정부 기관 UI, 접근성 우선, 포용적 디자인
- 특징: 명확한 내비게이션, 양식/폼, 공문서 레이아웃`
  },
  {
    id: 'autoguru-overdrive',
    name: 'AutoGuru Overdrive',
    company: 'AutoGuru',
    url: 'http://overdrive.autoguru.io/',
    source: 'https://github.com/autoguru-au/overdrive',
    features: ['components', 'source'],
    category: 'product',
    vibes: ['clean', 'automotive', 'marketplace'],
    colors: ['#1b48e8', '#ffffff', '#f5f5f5', '#2dd164'],
    font: 'Inter',
    description: '호주 자동차 서비스 마켓플레이스 AutoGuru의 디자인 시스템. 깔끔한 블루와 초록으로 신뢰감 있는 서비스 예약 UI.',
    prompt: `다음 AutoGuru Overdrive 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 비비드 블루(#1b48e8) 주색, 흰 배경, 연회색 섹션, 초록(#2dd164) 성공/확인
- 타이포그래피: Inter, 명확하고 친근한 느낌
- 스타일: 서비스 마켓플레이스, 예약 플로우, 신뢰감
- 특징: 서비스 목록, 예약 폼, 가격 비교, 별점 리뷰`
  },
  {
    id: 'aws-cloudscape',
    name: 'AWS Cloudscape',
    company: 'Amazon Web Services',
    url: 'https://cloudscape.design/',
    source: 'https://github.com/cloudscape-design/components',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'enterprise',
    vibes: ['cloud', 'enterprise', 'technical', 'data-heavy'],
    colors: ['#ec7211', '#232f3e', '#0073bb', '#1d8102'],
    font: 'Amazon Ember',
    description: 'AWS 콘솔을 위한 공식 디자인 시스템. 클라우드 인프라 관리 UI를 위한 데이터 집약적 컴포넌트.',
    prompt: `다음 AWS Cloudscape 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 오렌지(#ec7211) 주색, 다크 네이비(#232f3e) 헤더, 파랑(#0073bb) 링크, 초록(#1d8102) 성공
- 타이포그래피: Amazon Ember, 명확한 계층
- 스타일: AWS 콘솔 스타일, 클라우드 인프라 관리 UI
- 특징: 리소스 테이블, 서비스 카드, 로그 뷰어, 구성 패널`
  },
  {
    id: 'backpack-skyscanner',
    name: 'Backpack (Skyscanner)',
    company: 'Skyscanner',
    url: 'https://skyscanner.design/',
    source: 'https://github.com/skyscanner/backpack',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'travel',
    vibes: ['travel', 'friendly', 'colorful', 'modern'],
    colors: ['#00b9f1', '#05203c', '#ffb01f', '#d1435b'],
    font: 'Skyscanner Relative',
    description: '항공권 검색 엔진 Skyscanner의 디자인 시스템. 여행의 설렘을 담은 밝은 시안과 친근한 컴포넌트.',
    prompt: `다음 Skyscanner Backpack 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 밝은 시안(#00b9f1) 주색, 짙은 네이비(#05203c) 텍스트, 노랑(#ffb01f) 강조, 핑크레드(#d1435b) 할인
- 타이포그래피: 둥글고 친근한 산세리프
- 스타일: 항공권/여행 검색 UI, 밝고 설레는 느낌
- 특징: 항공편 검색, 가격 캘린더, 목적지 카드, 필터`
  },
  {
    id: 'barnardos',
    name: "Barnardo's Design System",
    company: "Barnardo's",
    url: 'https://github.com/barnardos/design-system',
    source: 'https://github.com/barnardos/design-system',
    features: ['components', 'voice', 'source'],
    category: 'nonprofit',
    vibes: ['caring', 'accessible', 'warm', 'trustworthy'],
    colors: ['#af1b3f', '#005da5', '#ffffff', '#f9f9f9'],
    font: 'Frutiger',
    description: '영국 아동 자선단체 Barnardo\'s의 디자인 시스템. 따뜻하고 접근성 높은 디자인으로 어린이와 가족을 위한 서비스 UI.',
    prompt: `다음 Barnardo's 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 자주(#af1b3f) 주색, 블루(#005da5) 보조, 흰 배경, 연회색
- 타이포그래피: Frutiger 스타일 읽기 쉽고 따뜻한 폰트
- 스타일: 자선단체/NGO UI, 따뜻하고 접근성 높은 디자인
- 특징: 서비스 안내, 도움 요청 플로우, 기부 버튼, 스토리 카드`
  },
  {
    id: 'bbc-gel',
    name: 'BBC GEL',
    company: 'BBC',
    url: 'https://www.bbc.co.uk/gel',
    source: null,
    features: ['components', 'voice', 'designers-kit'],
    category: 'media',
    vibes: ['media', 'bold', 'trustworthy', 'accessible'],
    colors: ['#b80000', '#000000', '#f8f8f8', '#ffffff'],
    font: 'BBC Reith',
    description: '영국 공영방송 BBC의 Global Experience Language. 강렬한 레드와 블랙으로 미디어 콘텐츠를 위한 권위 있는 UI.',
    prompt: `다음 BBC GEL 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: BBC 레드(#b80000) 주색, 순수 검정 배경, 아이보리(#f8f8f8) 보조
- 타이포그래피: BBC Reith 스타일 권위 있는 세리프/산세리프 조합
- 스타일: 공영방송 미디어 UI, 권위감, 강한 타이포그래피
- 특징: 뉴스 피드, 비디오 플레이어, 프로그램 가이드, 카테고리 내비게이션`
  },
  {
    id: 'blueprint',
    name: 'Blueprint',
    company: 'Palantir',
    url: 'https://blueprintjs.com/',
    source: 'https://github.com/palantir/blueprint',
    features: ['components', 'designers-kit', 'source'],
    category: 'enterprise',
    vibes: ['enterprise', 'data-heavy', 'technical', 'dark'],
    colors: ['#215db0', '#1c2127', '#404854', '#2d72d2'],
    font: 'Blueprint',
    description: 'Palantir의 React UI toolkit. 데이터 분석과 데이터 시각화에 특화된 다크 테마 엔터프라이즈 컴포넌트.',
    prompt: `다음 Blueprint JS 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 딥 블루(#215db0) 주색, 거의 검은 배경(#1c2127), 중간 회색(#404854) 패널, 밝은 블루(#2d72d2) 인터랙티브
- 타이포그래피: 단노한 폰트, 데이터 표시 최적화
- 스타일: 데이터 분석 대시보드, 다크 테마, 고밀도 UI
- 특징: 데이터 테이블, 차트, 필터링, 트리 구조, 날짜 선택기`
  },
  {
    id: 'bold-bridge',
    name: 'Bold (Bridge Design System)',
    company: 'UFSC Bridge',
    url: 'https://bold.bridge.ufsc.br/',
    source: 'https://github.com/laboratoriobridge/bold',
    features: ['components', 'designers-kit', 'source'],
    category: 'healthcare',
    vibes: ['healthcare', 'accessible', 'clean', 'trustworthy'],
    colors: ['#2b8a3e', '#1971c2', '#ffffff', '#f8f9fa'],
    font: 'IBM Plex Sans',
    description: '브라질 연방대학교 Bridge Lab의 디자인 시스템. 의료 시스템을 위한 접근성과 사용성 중심 컴포넌트.',
    prompt: `다음 Bold Bridge 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 녹색(#2b8a3e) 주색, 블루(#1971c2) 보조, 흰 배경
- 타이포그래피: IBM Plex Sans, 명확하고 접근성 높은 폰트
- 스타일: 의료/헬스케어 시스템 UI, 접근성 우선
- 특징: 환자 정보 폼, 의료 데이터 표시, 예약 시스템`
  },
  {
    id: 'braid',
    name: 'Braid Design System',
    company: 'SEEK',
    url: 'https://seek-oss.github.io/braid-design-system/',
    source: 'https://github.com/seek-oss/braid-design-system',
    features: ['components', 'source'],
    category: 'product',
    vibes: ['job-platform', 'clean', 'professional', 'accessible'],
    colors: ['#1a72cc', '#1c1f2e', '#f8f7f5', '#ff6600'],
    font: 'Seekers Sans',
    description: '호주 구인구직 플랫폼 SEEK의 디자인 시스템. 취업 정보 서비스에 최적화된 접근성 높은 컴포넌트.',
    prompt: `다음 SEEK Braid 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 블루(#1a72cc) 주색, 다크(#1c1f2e) 텍스트, 크림(#f8f7f5) 배경
- 타이포그래피: 명확하고 읽기 좋은 산세리프
- 스타일: 잡 마켓플레이스 UI, 깔끔하고 접근성 높음
- 특징: 채용공고 카드, 이력서 업로드, 회사 프로필, 급여 필터`
  },
  {
    id: 'bumbag',
    name: 'Bumbag UI',
    company: 'Bumbag',
    url: 'https://bumbag.style/',
    source: 'https://github.com/bumbag/bumbag-ui',
    features: ['components', 'source'],
    category: 'open-source',
    vibes: ['playful', 'colorful', 'modern', 'friendly'],
    colors: ['#7c3aed', '#ff6b6b', '#1fb789', '#fbbf24'],
    font: 'Inter',
    description: '테마 가능한 React UI 키트. 다채로운 색상과 쉬운 커스터마이제이션으로 빠른 프로토타이핑에 최적.',
    prompt: `다음 Bumbag UI 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 퍼플(#7c3aed) 주색, 핑크레드(#ff6b6b), 터콰이즈(#1fb789), 노랑(#fbbf24) 포인트
- 타이포그래피: Inter, 친근하고 현대적
- 스타일: 밝고 활기찬 컬러풀 UI, 재미있고 현대적
- 특징: 다채로운 버튼 변형, 알림 토스트, 폼 요소`
  },
  {
    id: 'buzzfeed-solid',
    name: 'BuzzFeed Solid',
    company: 'BuzzFeed',
    url: 'https://solid.buzzfeed.com/',
    source: 'https://github.com/buzzfeed/solid',
    features: ['components', 'designers-kit', 'source'],
    category: 'media',
    vibes: ['playful', 'media', 'bold', 'viral'],
    colors: ['#ee3322', '#222222', '#ffe900', '#ffffff'],
    font: 'Proxima Nova',
    description: 'BuzzFeed의 CSS 기반 디자인 시스템. 바이럴 미디어를 위한 대담하고 재미있는 스타일.',
    prompt: `다음 BuzzFeed Solid 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 토마토 레드(#ee3322) 주색, 검정(#222) 텍스트, 밝은 노랑(#ffe900) 포인트
- 타이포그래피: Proxima Nova, 굵고 대담한 헤딩
- 스타일: 바이럴 미디어 UI, 강렬하고 즉각적인 반응
- 특징: 퀴즈 UI, 리스트 기사, 공유 버튼, 반응 이모지`
  },
  {
    id: 'ca-mineral-ui',
    name: 'CA Technologies Mineral UI',
    company: 'CA Technologies',
    url: 'https://mineral-ui.netlify.app/',
    source: 'https://github.com/mineral-ui/mineral-ui',
    features: ['components', 'source'],
    category: 'enterprise',
    vibes: ['enterprise', 'clean', 'professional'],
    colors: ['#1e88e5', '#4caf50', '#ffffff', '#f5f5f5'],
    font: 'Inter',
    description: 'CA Technologies의 React 컴포넌트 라이브러리. 엔터프라이즈 B2B 소프트웨어를 위한 깔끔한 UI 세트.',
    prompt: `다음 Mineral UI 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 블루(#1e88e5) 주색, 그린(#4caf50) 성공, 흰 배경, 회색 보조
- 스타일: 엔터프라이즈 B2B 소프트웨어, 명확하고 실용적
- 특징: 데이터 입력 폼, 테이블, 정렬/필터, 상태 배지`
  },
  {
    id: 'cedar-rei',
    name: 'Cedar (REI)',
    company: 'REI Co-op',
    url: 'https://rei.github.io/rei-cedar-docs/',
    source: 'https://github.com/rei/rei-cedar',
    features: ['components', 'designers-kit', 'source'],
    category: 'retail',
    vibes: ['outdoor', 'natural', 'warm', 'earthy'],
    colors: ['#3d851e', '#003087', '#f03825', '#f8f0e3'],
    font: 'REI Stuart',
    description: 'REI 아웃도어 브랜드의 디자인 시스템. 자연에서 영감받은 초록과 따뜻한 어스 톤으로 아웃도어 라이프스타일 표현.',
    prompt: `다음 REI Cedar 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 자연 초록(#3d851e) 주색, 딥 블루(#003087) 보조, 빨강(#f03825) 포인트, 크림(#f8f0e3) 배경
- 타이포그래피: 자연스럽고 활동적인 느낌의 산세리프
- 스타일: 아웃도어/스포츠 리테일, 자연에서 영감받은 따뜻한 UI
- 특징: 상품 카테고리, 장비 스펙 비교, 활동별 필터, 후기`
  },
  {
    id: 'chakra-ui',
    name: 'Chakra UI',
    company: 'Open Source',
    url: 'https://chakra-ui.com/',
    source: 'https://github.com/chakra-ui/chakra-ui',
    features: ['components', 'source'],
    category: 'open-source',
    vibes: ['modern', 'accessible', 'flexible', 'developer-friendly'],
    colors: ['#319795', '#285e61', '#e8c543', '#ffffff'],
    font: 'Inter',
    description: '접근성 높은 React UI 컴포넌트 라이브러리. 테마 시스템과 다크 모드를 기본 지원하는 개발자 친화적 라이브러리.',
    prompt: `다음 Chakra UI 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 틸/터콰이즈(#319795) 주색, 짙은 틸(#285e61) 어두운 버전, 노랑(#e8c543) 포인트
- 타이포그래피: Inter, 깔끔하고 현대적
- 스타일: 현대적이고 접근성 높은 웹 앱 UI, 라이트/다크 모드
- 특징: 유연한 컴포넌트, 계층적 색상 시스템, 반응형 레이아웃`
  },
  {
    id: 'cloudflare-cf-ui',
    name: 'Cloudflare CF UI',
    company: 'Cloudflare',
    url: 'https://cloudflare.github.io/cf-ui/',
    source: 'https://github.com/cloudflare/cf-ui',
    features: ['components', 'source'],
    category: 'enterprise',
    vibes: ['tech', 'security', 'professional', 'clean'],
    colors: ['#f6821f', '#1d1d1d', '#404040', '#f5f5f5'],
    font: 'Aloha Neue',
    description: 'Cloudflare의 React UI 컴포넌트. 오렌지 브랜드 컬러와 어두운 배경으로 네트워크/보안 제품의 전문성 표현.',
    prompt: `다음 Cloudflare UI 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: Cloudflare 오렌지(#f6821f) 주색, 다크 배경(#1d1d1d), 회색 패널(#404040)
- 타이포그래피: 현대적이고 기술적인 산세리프
- 스타일: 네트워크/보안 제품 대시보드, 기술적이고 전문적
- 특징: 트래픽 차트, 보안 이벤트, DNS 관리, 분석 대시보드`
  },
  {
    id: 'contentful-forma-36',
    name: 'Contentful Forma 36',
    company: 'Contentful',
    url: 'https://f36.contentful.com/',
    source: 'https://github.com/contentful/forma-36',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'product',
    vibes: ['cms', 'clean', 'professional', 'content-focused'],
    colors: ['#0eb87f', '#2e3d49', '#c3cfd5', '#ffffff'],
    font: 'Inter',
    description: '헤드리스 CMS Contentful의 디자인 시스템. 콘텐츠 관리에 최적화된 깔끔한 에디터 UI 컴포넌트.',
    prompt: `다음 Contentful Forma 36 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 에메랄드(#0eb87f) 주색, 다크 슬레이트(#2e3d49) 사이드바, 회색(#c3cfd5) 경계
- 타이포그래피: Inter, 에디터 친화적 가독성
- 스타일: CMS/콘텐츠 관리 UI, 깔끔한 에디터 환경
- 특징: 콘텐츠 타입 에디터, 미디어 라이브러리, 워크플로우 상태`
  },
  {
    id: 'decathlon-vitamin',
    name: 'Decathlon Vitamin',
    company: 'Decathlon',
    url: 'https://decathlon.design/',
    source: 'https://github.com/decathlon/vitamin-web',
    features: ['components', 'designers-kit', 'source'],
    category: 'retail',
    vibes: ['sports', 'energetic', 'bold', 'colorful'],
    colors: ['#007dbc', '#ff6900', '#ffffff', '#f5f5f5'],
    font: 'Roboto',
    description: '스포츠용품 Decathlon의 디자인 시스템. 스포츠의 활동성과 에너지를 담은 파랑과 오렌지 팔레트.',
    prompt: `다음 Decathlon Vitamin 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: Decathlon 블루(#007dbc) 주색, 에너지 오렌지(#ff6900) 포인트, 흰 배경
- 타이포그래피: Roboto, 스포티하고 활동적
- 스타일: 스포츠 리테일 UI, 활동적이고 에너지 넘치는 느낌
- 특징: 스포츠 카테고리, 장비 상품 카드, 사이즈 가이드, 스포츠별 추천`
  },
  {
    id: 'duolingo',
    name: 'Duolingo Design System',
    company: 'Duolingo',
    url: 'https://design.duolingo.com/',
    source: null,
    features: ['voice'],
    category: 'edtech',
    vibes: ['playful', 'gamified', 'friendly', 'colorful'],
    colors: ['#58cc02', '#1cb0f6', '#ff4b4b', '#ffd900'],
    font: 'Din Round',
    description: '언어 학습 앱 Duolingo의 디자인 언어. 밝은 초록 올빼미 캐릭터와 게임화된 학습 경험을 위한 친근하고 밝은 UI.',
    prompt: `다음 Duolingo 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 밝은 초록(#58cc02) 주색, 스카이 블루(#1cb0f6), 빨강(#ff4b4b) 틀림, 노랑(#ffd900) 포인트
- 타이포그래피: Din Round 스타일 둥글고 친근한 볼드 폰트
- 스타일: 게임화된 학습 앱, 매우 밝고 즐거운 UI, 어린이도 사용 가능
- 특징: 진행률 바, 하트/목숨 시스템, 연속 학습 스트릭, 배지, 리더보드`
  },
  {
    id: 'ebay-skin',
    name: 'eBay Skin',
    company: 'eBay',
    url: 'https://ebay.github.io/skin/',
    source: 'https://github.com/eBay/skin',
    features: ['components', 'source'],
    category: 'marketplace',
    vibes: ['marketplace', 'trustworthy', 'clean', 'ecommerce'],
    colors: ['#e53238', '#0064d2', '#f5af02', '#86b817'],
    font: 'Market Sans',
    description: 'eBay의 CSS 디자인 시스템. 온라인 마켓플레이스를 위한 신뢰감 있는 컴포넌트 라이브러리.',
    prompt: `다음 eBay Skin 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: eBay 레드(#e53238), 블루(#0064d2), 노랑(#f5af02), 초록(#86b817) - 멀티컬러 시스템
- 타이포그래피: Market Sans, 명확하고 읽기 좋은 마켓 폰트
- 스타일: 이커머스 마켓플레이스, 신뢰감 있는 쇼핑 UI
- 특징: 상품 리스팅, 입찰 UI, 판매자 프로필, 배송 추적`
  },
  {
    id: 'elastic-eui',
    name: 'Elastic UI Framework',
    company: 'Elastic',
    url: 'https://elastic.github.io/eui/',
    source: 'https://github.com/elastic/eui',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'enterprise',
    vibes: ['data-heavy', 'technical', 'search', 'analytics'],
    colors: ['#07c', '#0077b8', '#1ba9f5', '#343741'],
    font: 'Inter',
    description: 'Elasticsearch/Kibana를 위한 React UI 컴포넌트. 검색과 데이터 분석에 특화된 엔터프라이즈 UI.',
    prompt: `다음 Elastic EUI 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: Elastic 블루(#07c) 주색, 짙은 블루(#0077b8) 보조, 밝은 블루(#1ba9f5) 포인트, 다크(#343741) 텍스트
- 타이포그래피: Inter, 데이터 시각화에 최적화
- 스타일: 검색/분석 플랫폼 UI, 데이터 집약적, 기술적
- 특징: 검색 쿼리 빌더, 로그 뷰어, 대시보드 패널, 데이터 테이블`
  },
  {
    id: 'evergreen',
    name: 'Evergreen',
    company: 'Segment',
    url: 'https://evergreen.surge.sh',
    source: 'https://github.com/segmentio/evergreen',
    features: ['components', 'source'],
    category: 'product',
    vibes: ['enterprise', 'clean', 'professional', 'saas'],
    colors: ['#47b881', '#1070ca', '#ec4c47', '#f7f6f3'],
    font: 'SF UI Text / Inter',
    description: 'Segment의 React UI 툴킷. 다크/라이트 두 모드를 지원하는 SaaS B2B 제품을 위한 정제된 컴포넌트.',
    prompt: `다음 Evergreen 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 에메랄드(#47b881) 주색, 블루(#1070ca) 보조, 레드(#ec4c47) 위험, 크림(#f7f6f3) 배경
- 타이포그래피: 시스템 폰트 스택, 깔끔하고 읽기 편함
- 스타일: SaaS B2B 제품 UI, 전문적이고 신뢰감
- 특징: 권한 관리 테이블, 인앱 알림, 설정 패널, 사이드시트`
  },
  {
    id: 'firefox-photon',
    name: 'Firefox Photon',
    company: 'Mozilla',
    url: 'https://design.firefox.com/photon',
    source: 'https://github.com/FirefoxUX/photon',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'browser',
    vibes: ['open-source', 'trustworthy', 'minimal', 'accessible'],
    colors: ['#ff9400', '#ff6bff', '#0a84ff', '#ffffff'],
    font: 'Fira Sans',
    description: 'Mozilla Firefox 브라우저의 디자인 시스템. 오픈소스와 프라이버시 가치를 담은 친근하고 접근성 높은 UI.',
    prompt: `다음 Firefox Photon 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: Firefox 오렌지(#ff9400) 주색, 퍼플(#ff6bff) 보조, 블루(#0a84ff) 링크
- 타이포그래피: Fira Sans, 읽기 쉽고 접근성 높은 오픈소스 폰트
- 스타일: 브라우저/웹 앱 UI, 개방적이고 투명한 느낌, 접근성 중요시
- 특징: 브라우저 확장 UI, 개인정보 설정, 북마크 관리`
  },
  {
    id: 'fluent-ui',
    name: 'Microsoft Fluent UI',
    company: 'Microsoft',
    url: 'https://developer.microsoft.com/en-us/fluentui#/',
    source: 'https://github.com/microsoft/fluentui',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'enterprise',
    vibes: ['enterprise', 'microsoft', 'productivity', 'professional'],
    colors: ['#0078d4', '#605e5c', '#f3f2f1', '#323130'],
    font: 'Segoe UI',
    description: 'Microsoft의 크로스 플랫폼 디자인 시스템. Office 365, Teams 등 Microsoft 제품을 관통하는 통일된 UI 언어.',
    prompt: `다음 Microsoft Fluent UI 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: Microsoft 블루(#0078d4) 주색, 회갈색(#605e5c) 보조, 연회색(#f3f2f1) 배경, 짙은 회색(#323130) 텍스트
- 타이포그래피: Segoe UI, Microsoft 생태계 표준 폰트
- 스타일: Microsoft Office/Teams 스타일 생산성 앱 UI
- 특징: 리본 메뉴, 명령 바, 피벗 탭, Office 컴포넌트 패턴`
  },
  {
    id: 'foundation',
    name: 'Foundation',
    company: 'ZURB',
    url: 'https://get.foundation/',
    source: 'https://github.com/foundation/foundation-sites',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'open-source',
    vibes: ['flexible', 'responsive', 'classic', 'web'],
    colors: ['#1779ba', '#767676', '#white', '#e6e6e6'],
    font: 'Open Sans',
    description: 'ZURB의 프론트엔드 프레임워크. Bootstrap과 함께 가장 역사 깊은 CSS 프레임워크로 반응형 웹의 기반.',
    prompt: `다음 Foundation 프레임워크 스타일로 UI를 만들어줘:
- 색상: 클래식 블루(#1779ba) 주색, 회색 텍스트(#767676), 흰 배경
- 타이포그래피: Open Sans, 가독성 높은 웹 표준 폰트
- 스타일: 클래식하고 신뢰감 있는 웹 UI, 강력한 반응형 그리드
- 특징: 플렉스 그리드, 아코디언, 드롭다운, 오프캔버스 메뉴`
  },
  {
    id: 'french-gov',
    name: 'French Government Design System',
    company: 'République Française',
    url: 'https://www.systeme-de-design.gouv.fr/',
    source: 'https://github.com/GouvernementFR/dsfr',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'government',
    vibes: ['government', 'french', 'elegant', 'accessible'],
    colors: ['#003189', '#e1000f', '#ffffff', '#f5f5f5'],
    font: 'Marianne',
    description: '프랑스 정부의 공식 디자인 시스템. 프랑스 국가 브랜딩인 파랑/흰/빨강과 Marianne 폰트를 사용한 우아한 정부 UI.',
    prompt: `다음 프랑스 정부 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 프랑스 블루(#003189) 주색, 레드(#e1000f) 포인트, 흰 배경 (프랑스 삼색)
- 타이포그래피: Marianne 폰트 (프랑스 공화국 공식 폰트), 우아하고 권위 있음
- 스타일: 프랑스 정부 기관 UI, 우아하고 격식 있는 유럽 스타일
- 특징: 정부 서비스 내비게이션, 공문서 폼, 알림 배너`
  },
  {
    id: 'github-primer',
    name: 'GitHub Primer',
    company: 'GitHub',
    url: 'https://primer.style/',
    source: 'https://github.com/primer/',
    features: ['components', 'designers-kit', 'source'],
    category: 'developer',
    vibes: ['developer', 'minimal', 'clean', 'dark'],
    colors: ['#0969da', '#24292f', '#f6f8fa', '#d0d7de'],
    font: 'Mona Sans',
    description: 'GitHub의 오픈소스 디자인 시스템. 코드 협업 플랫폼을 위한 개발자 친화적 미니멀 UI.',
    prompt: `다음 GitHub Primer 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: GitHub 블루(#0969da) 링크/액션, 어두운 회색(#24292f) 텍스트, 연회색(#f6f8fa) 배경, 경계(#d0d7de)
- 타이포그래피: Mona Sans 또는 -apple-system 스택, 개발자 친화적
- 스타일: 코드 협업 플랫폼, 미니멀하고 클린한 개발자 도구
- 특징: 코드 블록, 이슈 트래커, PR 리뷰 UI, 사용자 아바타, 뱃지`
  },
  {
    id: 'gitlab-pajamas',
    name: 'GitLab Pajamas',
    company: 'GitLab',
    url: 'https://design.gitlab.com/',
    source: 'https://gitlab.com/gitlab-org/design.gitlab.com',
    features: ['components', 'voice', 'designers-kit'],
    category: 'developer',
    vibes: ['developer', 'open-source', 'clean', 'professional'],
    colors: ['#e24329', '#6b4fbb', '#fc6d26', '#fca326'],
    font: 'GitLab Sans',
    description: 'GitLab의 디자인 시스템. 오렌지 불꽃 로고를 반영한 따뜻한 색상으로 DevOps 전반을 커버하는 컴포넌트.',
    prompt: `다음 GitLab Pajamas 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: GitLab 오렌지-레드(#e24329) 주색, 퍼플(#6b4fbb) 보조, 오렌지(#fc6d26) 포인트
- 타이포그래피: GitLab Sans, 현대적이고 개발자 친화적
- 스타일: DevOps 플랫폼 UI, 파이프라인/배포 중심
- 특징: CI/CD 파이프라인, MR 리뷰, 이슈 보드, 컨테이너 레지스트리`
  },
  {
    id: 'google-material',
    name: 'Google Material Design',
    company: 'Google',
    url: 'https://material.io/guidelines/',
    source: 'https://github.com/material-components/material-components',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'platform',
    vibes: ['material', 'google', 'colorful', 'modern', 'accessible'],
    colors: ['#6200ea', '#03dac6', '#018786', '#cf6679'],
    font: 'Roboto',
    description: 'Google의 Material Design 시스템. 물리적 소재에서 영감받은 그림자, 계층, 움직임으로 직관적인 UI 원칙.',
    prompt: `다음 Google Material Design 시스템 스타일로 UI를 만들어줘:
- 색상: 딥 퍼플(#6200ea) 주색, 틸(#03dac6) 보조, 어두운 틸(#018786), 핑크(#cf6679) 에러
- 타이포그래피: Roboto, Material Design 표준 타이포 스케일
- 스타일: Material Design 3.0, 그림자/엘리베이션, 물결 효과(ripple)
- 특징: FAB 버튼, 바텀 내비게이션, 카드, 다이얼로그, 스낵바`
  },
  {
    id: 'govuk',
    name: 'GOV.UK Design System',
    company: 'UK Government',
    url: 'https://www.gov.uk/design-system',
    source: 'https://github.com/alphagov/govuk-design-system',
    features: ['components', 'source'],
    category: 'government',
    vibes: ['government', 'accessible', 'trustworthy', 'clear'],
    colors: ['#1d70b8', '#00703c', '#d4351c', '#0b0c0c'],
    font: 'GDS Transport',
    description: '영국 정부의 디자인 시스템. 세계에서 가장 영향력 있는 정부 디자인 시스템으로 명확성과 접근성의 기준.',
    prompt: `다음 GOV.UK 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 블루(#1d70b8) 링크, 녹색(#00703c) 행동 버튼, 레드(#d4351c) 에러, 검정(#0b0c0c) 텍스트
- 타이포그래피: GDS Transport (또는 Helvetica Neue), 매우 읽기 쉬움, 최대 접근성
- 스타일: 영국 정부 서비스, 극단적 명확성과 접근성, 장식 없는 기능적 UI
- 특징: 서비스 시작 페이지, 단계별 폼, 체크 앤서 페이지, 오류 메시지`
  },
  {
    id: 'hashicorp-helios',
    name: 'HashiCorp Helios',
    company: 'HashiCorp',
    url: 'https://helios.hashicorp.design',
    source: 'https://github.com/hashicorp/design-system',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'devops',
    vibes: ['devops', 'tech', 'minimal', 'professional'],
    colors: ['#000000', '#1563ff', '#14c6cb', '#f5f5f5'],
    font: 'Gilmer',
    description: 'HashiCorp (Terraform, Vault, Consul)의 디자인 시스템. 인프라 자동화 도구를 위한 세련되고 기술적인 UI.',
    prompt: `다음 HashiCorp Helios 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 블랙 브랜딩, 비비드 블루(#1563ff) 인터랙티브, 시안(#14c6cb) 포인트
- 타이포그래피: Gilmer 스타일 기하학적 산세리프
- 스타일: DevOps/인프라 플랫폼 UI, 세련되고 기술적
- 특징: 인프라 상태 대시보드, 코드 에디터, 배포 파이프라인, 리소스 트리`
  },
  {
    id: 'ibm-carbon',
    name: 'IBM Carbon',
    company: 'IBM',
    url: 'https://www.carbondesignsystem.com/',
    source: 'https://github.com/ibm/carbon-components',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'enterprise',
    vibes: ['enterprise', 'technical', 'minimal', 'professional', 'data-heavy'],
    colors: ['#0f62fe', '#161616', '#393939', '#f4f4f4'],
    font: 'IBM Plex Sans',
    description: 'IBM의 오픈소스 디자인 시스템. IBM Plex 폰트와 8px 그리드 기반의 AI/클라우드/엔터프라이즈 제품 표준.',
    prompt: `다음 IBM Carbon 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: IBM 블루(#0f62fe) 주색, 거의 검은 배경(#161616), 다크 회색(#393939) 패널, 연회색(#f4f4f4) 보조
- 타이포그래피: IBM Plex Sans, 기술적이고 정밀한 폰트 시스템
- 스타일: 엔터프라이즈 AI/클라우드 플랫폼, 다크/라이트 모드 지원, 8px 그리드
- 특징: 데이터 테이블, AI 알림, 코드 스니펫, 진행률 표시, 알림 센터`
  },
  {
    id: 'intuit-harmony',
    name: 'Intuit Harmony',
    company: 'Intuit (QuickBooks)',
    url: 'https://designsystem.quickbooks.com/',
    source: null,
    features: ['components', 'voice', 'designers-kit'],
    category: 'fintech',
    vibes: ['fintech', 'trustworthy', 'friendly', 'clean'],
    colors: ['#108F00', '#0077c5', '#393a3d', '#f8f8f8'],
    font: 'Avenir Next',
    description: 'Intuit QuickBooks/TurboTax의 디자인 시스템. 재정 서비스를 이해하기 쉽게 만드는 따뜻하고 친근한 UI.',
    prompt: `다음 Intuit Harmony 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: Intuit 초록(#108F00) 주색, 블루(#0077c5) 보조, 어두운 회색(#393a3d) 텍스트
- 타이포그래피: Avenir Next, 친근하고 읽기 좋음
- 스타일: 금융 소프트웨어 UI, 복잡한 재정 정보를 이해하기 쉽게
- 특징: 재정 요약 대시보드, 청구서 생성, 세금 계산, 차트/그래프`
  },
  {
    id: 'jetbrains-ring',
    name: 'JetBrains Ring UI',
    company: 'JetBrains',
    url: 'https://jetbrains.github.io/ring-ui',
    source: 'https://github.com/JetBrains/ring-ui',
    features: ['components', 'source'],
    category: 'developer',
    vibes: ['developer', 'IDE', 'dark', 'technical'],
    colors: ['#087cfa', '#1e1f26', '#2b2d30', '#dfe1e5'],
    font: 'JetBrains Sans',
    description: 'JetBrains IDE(IntelliJ, WebStorm 등)의 웹 컴포넌트 라이브러리. 개발자 도구와 Toolbox 앱을 위한 다크 테마 UI.',
    prompt: `다음 JetBrains Ring UI 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 비비드 블루(#087cfa) 주색, IDE 다크 배경(#1e1f26), 짙은 패널(#2b2d30), 연회색 텍스트(#dfe1e5)
- 타이포그래피: JetBrains Sans, 코드 에디터 최적화
- 스타일: IDE/개발자 도구 UI, 다크 테마 우선, 고밀도 정보
- 특징: 코드 에디터 패널, 디버거 UI, 플러그인 마켓, 빌드 로그`
  },
  {
    id: 'kiwi-orbit',
    name: 'Kiwi.com Orbit',
    company: 'Kiwi.com',
    url: 'https://orbit.kiwi/',
    source: 'https://github.com/kiwicom/orbit-components/',
    features: ['components', 'designers-kit', 'source'],
    category: 'travel',
    vibes: ['travel', 'modern', 'colorful', 'playful'],
    colors: ['#00a991', '#272e35', '#e8f4f1', '#46515e'],
    font: 'Circular',
    description: 'Kiwi.com 항공권 검색 서비스의 디자인 시스템. 여행의 밝고 신나는 느낌을 틸 색상으로 표현.',
    prompt: `다음 Kiwi.com Orbit 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 틸/민트(#00a991) 주색, 다크(#272e35) 텍스트, 연한 민트(#e8f4f1) 배경
- 타이포그래피: Circular 스타일 둥글고 현대적인 폰트
- 스타일: 항공권/여행 검색 앱, 밝고 현대적, 모바일 우선
- 특징: 항공편 검색, 날짜 선택, 좌석 선택, 여행 체크리스트`
  },
  {
    id: 'mantine',
    name: 'Mantine',
    company: 'Open Source',
    url: 'https://mantine.dev/',
    source: 'https://github.com/mantinedev/mantine',
    features: ['components', 'source'],
    category: 'open-source',
    vibes: ['modern', 'developer-friendly', 'flexible', 'comprehensive'],
    colors: ['#339af0', '#1c7ed6', '#228be6', '#f1f3f5'],
    font: 'Inter',
    description: '풀스택 React UI 컴포넌트 라이브러리. 100+개 컴포넌트와 훅을 제공하는 현대적이고 포괄적인 라이브러리.',
    prompt: `다음 Mantine 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 블루(#339af0) 주색, 짙은 블루(#1c7ed6) 호버, 중간 블루(#228be6), 연회색(#f1f3f5) 배경
- 타이포그래피: Inter, 현대적이고 깔끔함
- 스타일: 현대적 웹 앱 UI, 라이트/다크 모드, 개발자 친화적 컴포넌트
- 특징: 복잡한 폼, 의사결정 UI, 멀티셀렉트, 날짜 범위 선택기`
  },
  {
    id: 'material-minimal',
    name: 'Material Minimal',
    company: 'MDB',
    url: 'https://material-minimal.com/',
    source: 'https://github.com/mdbootstrap/mdb-ui-kit',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'open-source',
    vibes: ['material', 'minimal', 'modern', 'clean'],
    colors: ['#fbfbfb', '#3b71ca', '#e3041b', '#212529'],
    font: 'Roboto',
    description: 'Material Design의 미니멀 버전 구현. Bootstrap과 Material Design을 통합한 가볍고 현대적인 UI 키트.',
    prompt: `다음 Material Minimal 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 거의 흰 배경(#fbfbfb), 클래식 블루(#3b71ca), 레드(#e3041b) 에러
- 타이포그래피: Roboto, Material Design 표준
- 스타일: Material Design + 미니멀리즘, 깔끔하고 현대적
- 특징: 플로팅 레이블 인풋, 물결 버튼, 하단 탭 내비, 카드 엘리베이션`
  },
  {
    id: 'mongodb-design',
    name: 'MongoDB Design System',
    company: 'MongoDB',
    url: 'http://mongodb.design',
    source: 'https://github.com/mongodb/design',
    features: ['components', 'designers-kit', 'source'],
    category: 'developer',
    vibes: ['developer', 'tech', 'modern', 'database'],
    colors: ['#00ed64', '#001e2b', '#023430', '#ffffff'],
    font: 'Euclid Circular A',
    description: 'MongoDB 데이터베이스 서비스의 디자인 시스템. 진한 그린과 다크 배경으로 데이터 개발자를 위한 현대적 UI.',
    prompt: `다음 MongoDB 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 네온 그린(#00ed64) 주색, 아주 어두운 배경(#001e2b), 짙은 그린(#023430) 패널
- 타이포그래피: Euclid Circular A 스타일 둥글고 현대적인 산세리프
- 스타일: 데이터베이스 개발자 도구, 다크 테마, 기술적이고 세련됨
- 특징: 쿼리 에디터, 컬렉션 브라우저, 성능 차트, 클러스터 관리`
  },
  {
    id: 'mozilla-protocol',
    name: 'Mozilla Protocol',
    company: 'Mozilla',
    url: 'https://protocol.mozilla.org/',
    source: 'https://github.com/mozilla/protocol',
    features: ['components', 'source'],
    category: 'nonprofit',
    vibes: ['open-source', 'trustworthy', 'accessible', 'web'],
    colors: ['#ff980e', '#000000', '#ff4f5e', '#ffffff'],
    font: 'Zilla Slab',
    description: 'Mozilla 재단의 마케팅 디자인 시스템. Zilla Slab 폰트와 화려한 오렌지/레드로 오픈 웹 운동의 가치 표현.',
    prompt: `다음 Mozilla Protocol 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 오렌지(#ff980e) 주색, 검정 배경, 핑크레드(#ff4f5e) 포인트, 흰 텍스트
- 타이포그래피: Zilla Slab (세리프) + Inter 조합, 인터넷 자유 브랜드 느낌
- 스타일: 오픈 웹/비영리 단체 마케팅 사이트, 대담하고 사명감 있는 UI
- 특징: 캠페인 랜딩, 기부 CTA, 블로그, 제품 쇼케이스`
  },
  {
    id: 'nasa-wds',
    name: 'NASA Web Design System',
    company: 'NASA',
    url: 'https://nasa.github.io/nasawds-site/',
    source: 'https://github.com/nasa/nasawds',
    features: ['components', 'source'],
    category: 'government',
    vibes: ['space', 'government', 'trustworthy', 'bold'],
    colors: ['#0b3d91', '#fc3d21', '#ffffff', '#e9f3fa'],
    font: 'Inter',
    description: '미국 항공우주국 NASA의 웹 디자인 시스템. NASA 우주 탐험의 권위와 혁신을 상징하는 블루와 레드.',
    prompt: `다음 NASA 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: NASA 블루(#0b3d91) 주색, NASA 레드(#fc3d21) 포인트, 흰 배경, 연한 파랑(#e9f3fa) 섹션
- 타이포그래피: 명확하고 권위 있는 산세리프
- 스타일: 우주 탐사 기관 웹사이트, 과학적 권위와 탐험 정신
- 특징: 미션 대시보드, 우주선 상태, 과학 데이터 시각화, 뉴스룸`
  },
  {
    id: 'nhs-service-manual',
    name: 'NHS.UK Service Manual',
    company: 'NHS',
    url: 'https://service-manual.nhs.uk/',
    source: null,
    features: ['components', 'voice'],
    category: 'healthcare',
    vibes: ['healthcare', 'accessible', 'trustworthy', 'government'],
    colors: ['#005eb8', '#003087', '#007f3b', '#ffffff'],
    font: 'Frutiger W01',
    description: '영국 국민보건서비스 NHS의 서비스 매뉴얼. 의료 서비스를 위한 최고 수준의 접근성과 명확성을 갖춘 UI.',
    prompt: `다음 NHS 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: NHS 블루(#005eb8) 주색, 짙은 블루(#003087) 배경/헤더, 초록(#007f3b) 성공/약국
- 타이포그래피: Frutiger 스타일 매우 읽기 쉬운 의료 폰트
- 스타일: 의료 서비스 UI, 극도의 명확성과 접근성, 복잡한 증상도 이해 가능하게
- 특징: 증상 검색, GP 예약, 처방전 요청, 건강 정보 페이지`
  },
  {
    id: 'okta-odyssey',
    name: 'Okta Odyssey',
    company: 'Okta',
    url: 'https://odyssey.okta.design',
    source: 'https://github.com/okta/odyssey',
    features: ['components', 'designers-kit', 'source'],
    category: 'security',
    vibes: ['security', 'enterprise', 'trustworthy', 'professional'],
    colors: ['#00297a', '#1662dd', '#ffffff', '#f5f5f5'],
    font: 'Aeonik',
    description: 'Okta 신원 관리 서비스의 디자인 시스템. 보안과 신뢰를 최우선으로 하는 아이덴티티 플랫폼 UI.',
    prompt: `다음 Okta Odyssey 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 짙은 네이비(#00297a) 주색, 밝은 블루(#1662dd) 액션, 흰 배경
- 타이포그래피: Aeonik 스타일 현대적이고 세련된 산세리프
- 스타일: 신원 관리/보안 플랫폼 UI, 신뢰감과 전문성 강조
- 특징: 로그인/MFA 플로우, 사용자 관리, 앱 통합 목록, 보안 정책`
  },
  {
    id: 'patternfly',
    name: 'PatternFly',
    company: 'Red Hat',
    url: 'https://www.patternfly.org/',
    source: 'https://github.com/patternfly',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'enterprise',
    vibes: ['enterprise', 'linux', 'technical', 'open-source'],
    colors: ['#ee0000', '#004368', '#f0f0f0', '#151515'],
    font: 'Red Hat Display',
    description: 'Red Hat의 오픈소스 디자인 시스템. OpenShift, Ansible 등 Red Hat 제품을 위한 Linux/쿠버네티스 관리 UI.',
    prompt: `다음 PatternFly 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: Red Hat 레드(#ee0000) 주색, 짙은 블루(#004368) 보조, 다크(#151515) 배경
- 타이포그래피: Red Hat Display 폰트
- 스타일: 엔터프라이즈 Linux/쿠버네티스 관리 UI, 기술적이고 전문적
- 특징: 클러스터 상태, 파드 관리, 리소스 사용량 차트, 이벤트 로그`
  },
  {
    id: 'pinterest-gestalt',
    name: 'Pinterest Gestalt',
    company: 'Pinterest',
    url: 'https://pinterest.github.io/gestalt/#/',
    source: 'https://github.com/pinterest/gestalt',
    features: ['components', 'source'],
    category: 'social',
    vibes: ['visual', 'creative', 'masonry', 'image-first'],
    colors: ['#e60023', '#111111', '#f5f5f5', '#767676'],
    font: 'Helvetica Neue',
    description: 'Pinterest의 React 컴포넌트 라이브러리. 이미지 핀보드 서비스를 위한 비주얼 중심 UI와 메이슨리 그리드.',
    prompt: `다음 Pinterest Gestalt 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: Pinterest 레드(#e60023) 주색, 어두운 회색(#111) 텍스트, 연회색(#f5f5f5) 배경
- 타이포그래피: Helvetica Neue, 깔끔하고 이미지를 방해하지 않는 폰트
- 스타일: 비주얼 핀보드/갤러리 UI, 이미지 우선, 메이슨리 그리드
- 특징: 핀 카드, 메이슨리 레이아웃, 저장 버튼, 보드 컬렉션`
  },
  {
    id: 'porsche-design',
    name: 'Porsche Design System',
    company: 'Porsche',
    url: 'https://designsystem.porsche.com',
    source: 'https://github.com/porsche-design-system/porsche-design-system',
    features: ['components', 'designers-kit', 'source'],
    category: 'automotive',
    vibes: ['luxury', 'premium', 'performance', 'sleek'],
    colors: ['#c9112a', '#0a0a0a', '#ffffff', '#626262'],
    font: 'Porsche Next',
    description: '포르쉐의 공식 디자인 시스템. 스포츠카 브랜드의 속도감과 프리미엄 럭셔리를 표현하는 고급스러운 UI.',
    prompt: `다음 Porsche 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 포르쉐 레드(#c9112a) 포인트, 거의 검은 배경(#0a0a0a), 흰 텍스트, 회색 보조(#626262)
- 타이포그래피: Porsche Next 스타일 고성능 자동차 느낌의 우아한 폰트
- 스타일: 프리미엄 스포츠카 브랜드 UI, 속도감, 럭셔리
- 특징: 차량 컨피규레이터, 모델 쇼케이스, 성능 스펙, 딜러 네트워크`
  },
  {
    id: 'radix-ui',
    name: 'Radix UI',
    company: 'Modulz / WorkOS',
    url: 'https://radix-ui.com/',
    source: 'https://github.com/radix-ui',
    features: ['components', 'source'],
    category: 'open-source',
    vibes: ['minimal', 'accessible', 'headless', 'developer'],
    colors: ['#6e56cf', '#1a1523', '#f9f8ff', '#c4b5fd'],
    font: 'Inter',
    description: '접근성 우선 헤드리스 React 컴포넌트. 스타일 없이 접근성과 기능을 제공해 원하는 디자인에 자유롭게 적용 가능.',
    prompt: `다음 Radix UI 스타일로 UI를 만들어줘:
- 색상: 퍼플(#6e56cf) 주색, 어두운 보라(#1a1523) 다크 배경, 연보라(#f9f8ff) 라이트 배경
- 타이포그래피: Inter, 중립적이고 깔끔함
- 스타일: 헤드리스 컴포넌트 기반, 미니멀하고 접근성 높은 UI
- 특징: 포커스 관리, 키보드 내비게이션, 접근성 다이얼로그, 팝오버`
  },
  {
    id: 'salesforce-lightning',
    name: 'Salesforce Lightning',
    company: 'Salesforce',
    url: 'https://www.lightningdesignsystem.com',
    source: 'https://github.com/salesforce-ux/design-system',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'enterprise',
    vibes: ['enterprise', 'crm', 'data-heavy', 'professional'],
    colors: ['#0176d3', '#14517a', '#1b96ff', '#f3f3f3'],
    font: 'Salesforce Sans',
    description: 'Salesforce CRM 플랫폼의 디자인 시스템. 세계 최대 CRM 플랫폼의 복잡한 업무 흐름을 위한 엔터프라이즈 UI.',
    prompt: `다음 Salesforce Lightning 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: Salesforce 블루(#0176d3) 주색, 짙은 블루(#14517a) 헤더, 밝은 블루(#1b96ff) 링크, 연회색(#f3f3f3) 배경
- 타이포그래피: Salesforce Sans, CRM 데이터 표시에 최적화
- 스타일: 엔터프라이즈 CRM UI, 복잡한 업무 흐름, 데이터 집약적
- 특징: 레코드 페이지, 활동 타임라인, 관련 목록, 보고서/대시보드`
  },
  {
    id: 'sap-fiori',
    name: 'SAP Fiori',
    company: 'SAP',
    url: 'https://experience.sap.com/fiori-design/',
    source: null,
    features: ['components'],
    category: 'enterprise',
    vibes: ['enterprise', 'erp', 'corporate', 'data-heavy'],
    colors: ['#0070f2', '#354a5e', '#586f7c', '#f0f0f0'],
    font: 'SAP 72',
    description: 'ERP 소프트웨어 SAP의 Fiori 디자인 언어. 기업 자원 관리 시스템의 복잡한 비즈니스 프로세스를 위한 UI.',
    prompt: `다음 SAP Fiori 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: SAP 블루(#0070f2) 주색, 슬레이트(#354a5e) 사이드바, 회색 배경(#f0f0f0)
- 타이포그래피: SAP 72 폰트, ERP 데이터 표시에 최적화
- 스타일: 엔터프라이즈 ERP UI, 매우 데이터 집약적, 복잡한 폼과 테이블
- 특징: 구매/주문 관리, 재고 현황, 분석 보고서, 워크플로우`
  },
  {
    id: 'shadcn-ui',
    name: 'Shadcn/UI',
    company: 'Open Source (shadcn)',
    url: 'https://ui.shadcn.com/',
    source: 'https://github.com/shadcn-ui',
    features: ['components', 'source'],
    category: 'open-source',
    vibes: ['minimal', 'modern', 'developer', 'copy-paste'],
    colors: ['#09090b', '#18181b', '#f4f4f5', '#71717a'],
    font: 'Geist',
    description: '복사-붙여넣기 방식의 React 컴포넌트. Radix UI + Tailwind 기반으로 코드를 소유하는 새로운 컴포넌트 배포 방식.',
    prompt: `다음 Shadcn/UI 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 거의 검은 배경(#09090b), 짙은 회색(#18181b) 카드, 연회색(#f4f4f5) 보조, 중간 회색(#71717a) 서브텍스트
- 타이포그래피: Geist 폰트, 기술적이고 현대적인 모노스페이스 혼용
- 스타일: 얼티밋 미니멀리즘, 흑백 기반, 개발자 도구 느낌, 다크 모드 우선
- 특징: 데이터 테이블, 명령 팔레트(cmd+k), 폼 유효성 검사, 사이드바`
  },
  {
    id: 'shopify-polaris',
    name: 'Shopify Polaris',
    company: 'Shopify',
    url: 'https://polaris.shopify.com',
    source: 'https://github.com/Shopify/polaris',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'ecommerce',
    vibes: ['ecommerce', 'merchant', 'clean', 'professional'],
    colors: ['#008060', '#1a1a1a', '#f1f1f1', '#5c5f62'],
    font: 'Inter',
    description: 'Shopify 플랫폼의 디자인 시스템. 전세계 100만+ 상인이 사용하는 이커머스 관리 도구의 디자인 표준.',
    prompt: `다음 Shopify Polaris 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: Shopify 그린(#008060) 주색, 거의 검은 텍스트(#1a1a1a), 연회색 배경(#f1f1f1), 중간 회색(#5c5f62) 보조
- 타이포그래피: Inter, 이커머스 관리에 최적화된 가독성
- 스타일: 상점 관리 대시보드, 이커머스 백오피스, 판매자 도구
- 특징: 주문 관리, 상품 목록, 고객 정보, 분석 리포트, 네비게이션 프레임`
  },
  {
    id: 'shoelace',
    name: 'Shoelace',
    company: 'Open Source',
    url: 'https://shoelace.style',
    source: 'https://github.com/shoelace-style/shoelace',
    features: ['components', 'voice', 'source'],
    category: 'open-source',
    vibes: ['web-components', 'flexible', 'modern', 'framework-agnostic'],
    colors: ['#0ea5e9', '#f0f9ff', '#0c4a6e', '#e0f2fe'],
    font: 'Inter',
    description: '프레임워크 무관 웹 컴포넌트 라이브러리. React, Vue, Angular 어디서든 쓸 수 있는 표준 웹 컴포넌트.',
    prompt: `다음 Shoelace 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 스카이 블루(#0ea5e9) 주색, 연한 스카이(#f0f9ff) 배경, 짙은 블루(#0c4a6e) 다크 버전
- 타이포그래피: Inter, 현대적이고 깔끔함
- 스타일: 현대적 웹 앱, 프레임워크 무관, 깔끔하고 접근성 높음
- 특징: 드롭다운, 다이얼로그, 탭, 트리 컴포넌트, 색상 선택기`
  },
  {
    id: 'siemens-ix',
    name: 'Siemens iX',
    company: 'Siemens',
    url: 'https://ix.siemens.io/',
    source: 'https://github.com/siemens/ix',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'industrial',
    vibes: ['industrial', 'enterprise', 'tech', 'german'],
    colors: ['#005f87', '#000028', '#1491eb', '#f3f3f0'],
    font: 'Siemens Sans',
    description: '지멘스 산업 자동화/디지털 서비스의 디자인 시스템. 독일 엔지니어링 정신을 담은 산업 IoT/MES UI.',
    prompt: `다음 Siemens iX 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: Siemens 블루(#005f87) 주색, 짙은 네이비(#000028) 배경, 밝은 블루(#1491eb) 인터랙티브
- 타이포그래피: Siemens Sans, 독일 엔지니어링 정밀함
- 스타일: 산업 IoT/자동화 시스템 UI, 다크 테마, 엔지니어링 대시보드
- 특징: 기계 상태 모니터, 알람 관리, 생산 라인 시각화, KPI 대시보드`
  },
  {
    id: 'singapore-gov',
    name: 'Singapore Government Design System',
    company: 'GovTech Singapore',
    url: 'https://www.designsystem.tech.gov.sg/',
    source: 'https://github.com/govtechsg/sgds',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'government',
    vibes: ['government', 'modern', 'accessible', 'asia'],
    colors: ['#cf2030', '#384cd1', '#ffffff', '#f8f8f8'],
    font: 'Source Sans Pro',
    description: '싱가포르 정부의 스마트 국가 디자인 시스템. 아시아에서 가장 선진적인 스마트 정부 서비스 UI 표준.',
    prompt: `다음 싱가포르 정부 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 싱가포르 레드(#cf2030) 주색, 블루(#384cd1) 보조, 흰 배경 (싱가포르 국기 색상)
- 타이포그래피: Source Sans Pro, 다국어 지원 (영어/중국어/말레이어/타밀어)
- 스타일: 스마트 국가 디지털 서비스, 현대적이고 접근성 높은 정부 UI
- 특징: 디지털 신원 인증, 부처 서비스 포털, 다국어 UI, 공지 배너`
  },
  {
    id: 'stacks-overflow',
    name: 'Stacks (Stack Overflow)',
    company: 'Stack Overflow',
    url: 'https://stackoverflow.design/',
    source: 'https://github.com/StackExchange/Stacks',
    features: ['components', 'voice', 'source'],
    category: 'developer',
    vibes: ['developer', 'community', 'clean', 'orange'],
    colors: ['#f88524', '#f2720c', '#1f2128', '#f8f9f9'],
    font: 'Arial',
    description: '개발자 커뮤니티 Stack Overflow의 디자인 시스템. 오렌지 브랜드와 개발자 Q&A 특화 UI 컴포넌트.',
    prompt: `다음 Stack Overflow Stacks 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: Stack Overflow 오렌지(#f88524) 주색, 진한 오렌지(#f2720c) 포인트, 다크(#1f2128) 배경, 연회색(#f8f9f9) 배경
- 타이포그래피: Arial/Helvetica, 가독성 우선 웹 폰트
- 스타일: 개발자 Q&A 커뮤니티 UI, 질문/답변 특화
- 특징: 질문 카드, 코드 블록, 투표 UI, 태그 배지, 명성 점수`
  },
  {
    id: 'twilio-paste',
    name: 'Twilio Paste',
    company: 'Twilio',
    url: 'https://paste.twilio.design/',
    source: 'https://github.com/twilio-labs/paste',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'developer',
    vibes: ['api', 'developer', 'accessible', 'trustworthy'],
    colors: ['#f22f46', '#121c2d', '#e1e3ea', '#ffffff'],
    font: 'Inter',
    description: 'Twilio 통신 API 플랫폼의 디자인 시스템. 접근성 100% 준수를 목표로 한 개발자 친화적인 UI.',
    prompt: `다음 Twilio Paste 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: Twilio 레드(#f22f46) 주색, 어두운 네이비(#121c2d) 배경, 연회색(#e1e3ea) 보조
- 타이포그래피: Inter, 접근성 높은 명확한 타이포그래피
- 스타일: API 개발자 플랫폼 UI, 접근성 우선, 통신 서비스 대시보드
- 특징: SMS/음성 로그, API 사용량 차트, 번호 관리, 워크플로우 빌더`
  },
  {
    id: 'uber-base',
    name: 'Uber Base Web',
    company: 'Uber',
    url: 'https://baseweb.design/',
    source: 'https://github.com/uber-web/baseui',
    features: ['components', 'source'],
    category: 'product',
    vibes: ['minimal', 'dark', 'modern', 'tech'],
    colors: ['#276EF1', '#1F1F1F', '#F6F6F6', '#AAAAAA'],
    font: 'Uber Move',
    description: 'Uber의 React 컴포넌트 라이브러리. 운송 서비스와 내부 도구를 위한 미니멀하고 세련된 다크 테마 UI.',
    prompt: `다음 Uber Base Web 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: Uber 블루(#276EF1) 주색, 거의 검은 배경(#1F1F1F), 연회색(#F6F6F6), 중간 회색(#AAAAAA)
- 타이포그래피: Uber Move 스타일 깔끔하고 현대적인 폰트
- 스타일: 이동 수단/모빌리티 앱 UI, 미니멀한 다크 테마, 지도 중심
- 특징: 지도 인터페이스, 운행 정보 카드, 요금 계산, 드라이버 상태`
  },
  {
    id: 'us-web-design',
    name: 'U.S. Web Design System',
    company: 'US Government (USWDS)',
    url: 'https://designsystem.digital.gov/',
    source: 'https://github.com/uswds/uswds',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'government',
    vibes: ['government', 'american', 'accessible', 'trustworthy'],
    colors: ['#005ea2', '#1a4480', '#d83933', '#f0f0f0'],
    font: 'Source Sans Pro',
    description: '미국 연방정부의 공식 웹 디자인 시스템. 수백 개의 미국 정부 기관 웹사이트의 표준 디자인 기반.',
    prompt: `다음 미국 정부(USWDS) 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: USWDS 블루(#005ea2) 주색, 짙은 블루(#1a4480), 레드(#d83933) 긴급/에러, 연회색(#f0f0f0) 배경
- 타이포그래피: Source Sans Pro, 매우 읽기 쉽고 접근성 높음
- 스타일: 미국 연방정부 서비스 UI, 신뢰감, 미국 플래그 색상 기반
- 특징: 서비스 시작 페이지, 폼 유효성 검사, 경고 배너, 브레드크럼`
  },
  {
    id: 'vibe-monday',
    name: 'Vibe (monday.com)',
    company: 'monday.com',
    url: 'https://style.monday.com/',
    source: 'https://github.com/mondaycom/vibe',
    features: ['components', 'designers-kit', 'source'],
    category: 'product',
    vibes: ['productivity', 'colorful', 'work-os', 'vibrant'],
    colors: ['#ff3750', '#f84f87', '#a25ddc', '#007aba'],
    font: 'Poppins',
    description: 'monday.com 워크 OS 플랫폼의 디자인 시스템. 생산성 도구를 위한 활기찬 멀티 컬러 팔레트.',
    prompt: `다음 monday.com Vibe 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 레드(#ff3750), 핑크(#f84f87), 퍼플(#a25ddc), 블루(#007aba) - 화려한 멀티 팔레트
- 타이포그래피: Poppins, 친근하고 에너지 넘치는 폰트
- 스타일: 워크 OS 플랫폼, 팀 협업 도구, 밝고 활기찬 UI
- 특징: 작업 보드, 타임라인, 자동화 레시피, 대시보드 위젯`
  },
  {
    id: 'vercel-geist',
    name: 'Vercel Geist',
    company: 'Vercel',
    url: 'https://vercel.com/geist',
    source: null,
    features: ['components'],
    category: 'developer',
    vibes: ['minimal', 'dark', 'developer', 'modern', 'sleek'],
    colors: ['#000000', '#111111', '#ffffff', '#888888'],
    font: 'Geist',
    description: 'Vercel의 디자인 시스템과 폰트. 배포 플랫폼의 극도의 미니멀리즘과 다크 테마로 개발자 미학의 정수.',
    prompt: `다음 Vercel Geist 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 순수 검정(#000) 배경, 약간 밝은 검정(#111) 카드, 흰 텍스트, 회색(#888) 서브텍스트
- 타이포그래피: Geist 폰트 (Vercel 공식), 코드는 Geist Mono
- 스타일: 극도의 미니멀 다크 테마, 개발자 플랫폼의 슬릭한 UI, 흑백 세계
- 특징: 배포 로그, git 연동 UI, 도메인 설정, 분석 대시보드, 엣지 함수`
  },
  {
    id: 'vmware-clarity',
    name: 'VMware Clarity',
    company: 'VMware',
    url: 'https://clarity.design/',
    source: 'https://github.com/vmware/clarity',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'enterprise',
    vibes: ['enterprise', 'virtualization', 'dark', 'technical'],
    colors: ['#0065ab', '#17242d', '#313131', '#a6d4f0'],
    font: 'Metropolis',
    description: 'VMware의 오픈소스 디자인 시스템. 가상화/클라우드 인프라 관리를 위한 엔터프라이즈 다크 테마 UI.',
    prompt: `다음 VMware Clarity 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: VMware 블루(#0065ab) 주색, 다크 배경(#17242d), 어두운 패널(#313131), 연한 파랑(#a6d4f0) 포인트
- 타이포그래피: Metropolis 폰트, 기술적이고 전문적
- 스타일: 클라우드 인프라/가상화 관리 UI, 다크 테마, 엔터프라이즈
- 특징: VM 상태 모니터, 클러스터 관리, 저장소 브라우저, 네트워크 토폴로지`
  },
  {
    id: 'workday-canvas',
    name: 'Workday Canvas',
    company: 'Workday',
    url: 'https://design.workday.com/',
    source: 'https://github.com/Workday/canvas-kit',
    features: ['components', 'voice', 'source'],
    category: 'enterprise',
    vibes: ['hr', 'enterprise', 'professional', 'trustworthy'],
    colors: ['#0875e1', '#0057ab', '#ffffff', '#f8f8f8'],
    font: 'Roboto',
    description: 'Workday HR/재무 시스템의 디자인 시스템. 인사관리와 재무 업무 프로세스를 위한 엔터프라이즈 UI.',
    prompt: `다음 Workday Canvas 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: Workday 블루(#0875e1) 주색, 짙은 블루(#0057ab) 보조, 흰 배경
- 타이포그래피: Roboto, HR 시스템 데이터 표시에 최적화
- 스타일: HR/인사관리 SaaS 플랫폼 UI, 데이터 집약적, 신뢰감
- 특징: 직원 프로필, 급여 명세, 연차 관리, 조직도, 채용 파이프라인`
  },
  {
    id: 'zendesk-garden',
    name: 'Zendesk Garden',
    company: 'Zendesk',
    url: 'https://garden.zendesk.com/',
    source: 'https://github.com/zendeskgarden',
    features: ['components', 'source'],
    category: 'product',
    vibes: ['support', 'friendly', 'green', 'customer-service'],
    colors: ['#228f67', '#2f3941', '#c2e0c6', '#ffffff'],
    font: 'Inter',
    description: 'Zendesk 고객 지원 플랫폼의 디자인 시스템. 고객 서비스 웜 가든 테마로 지원 도구를 더 기분 좋게.',
    prompt: `다음 Zendesk Garden 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 정원 초록(#228f67) 주색, 짙은 회색(#2f3941) 텍스트, 연한 초록(#c2e0c6) 배경 포인트
- 타이포그래피: Inter, 친근하고 읽기 좋음
- 스타일: 고객 지원 도구 UI, 친근하고 따뜻한 서비스 느낌
- 특징: 지원 티켓 목록, 채팅 인터페이스, 고객 정보 패널, SLA 상태`
  },
  {
    id: 'seeds-sprout',
    name: 'Seeds (Sprout Social)',
    company: 'Sprout Social',
    url: 'https://sproutsocial.com/seeds',
    source: null,
    features: ['components', 'voice', 'designers-kit'],
    category: 'product',
    vibes: ['social-media', 'green', 'friendly', 'professional'],
    colors: ['#59cb59', '#46b146', '#ffffff', '#f2f9f2'],
    font: 'Inter',
    description: '소셜 미디어 관리 플랫폼 Sprout Social의 디자인 시스템. 성장의 초록색으로 소셜 미디어 팀을 위한 협업 도구',
    prompt: `다음 Sprout Social Seeds 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 성장 초록(#59cb59) 주색, 짙은 초록(#46b146) 호버, 연한 초록(#f2f9f2) 배경
- 타이포그래피: Inter, 친근하고 전문적
- 스타일: 소셜 미디어 관리 도구 UI, 팀 협업, 청정한 그린 테마
- 특징: 게시물 캘린더, 소셜 분석, 받은 메시지 함, 팀 과제 배정`
  },
  {
    id: 'semi-design',
    name: 'Semi Design',
    company: 'ByteDance (TikTok)',
    url: 'https://semi.design/en-US',
    source: 'https://github.com/DouyinFE/semi-design',
    features: ['components', 'designers-kit', 'source'],
    category: 'enterprise',
    vibes: ['modern', 'dark', 'enterprise', 'chinese-tech'],
    colors: ['#6a2bff', '#1a1a1a', '#00b96b', '#ff7028'],
    font: 'Inter',
    description: 'ByteDance/TikTok의 React 디자인 시스템. D2C UI와 데이터 시각화를 위한 현대적이고 세련된 컴포넌트.',
    prompt: `다음 ByteDance Semi Design 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: 퍼플(#6a2bff) 주색, 어두운 배경(#1a1a1a), 민트(#00b96b) 성공, 오렌지(#ff7028) 경고
- 타이포그래피: Inter, 현대적이고 국제적
- 스타일: 현대적 중국 테크 스타트업 UI, 다크 테마, 데이터 집약적
- 특징: 데이터 테이블, 비즈니스 차트, 폼 빌더, 알림 센터`
  },
  {
    id: 'elastic-eui-alt',
    name: 'Uiverse',
    company: 'Uiverse (Community)',
    url: 'https://uiverse.io',
    source: 'https://github.com/uiverse-io/galaxy',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'open-source',
    vibes: ['creative', 'community', 'modern', 'glassmorphism'],
    colors: ['#6c63ff', '#ff6584', '#43bbff', '#12151e'],
    font: 'Poppins',
    description: '오픈소스 UI 컴포넌트 커뮤니티. 독특하고 창의적인 CSS 컴포넌트를 공유하는 커뮤니티 UI 모음.',
    prompt: `다음 Uiverse 커뮤니티 스타일로 UI를 만들어줘:
- 색상: 퍼플(#6c63ff), 핑크(#ff6584), 파랑(#43bbff) 멀티 그라디언트 팔레트, 다크 배경(#12151e)
- 타이포그래피: Poppins, 창의적이고 현대적
- 스타일: 크리에이티브 글래스모피즘 UI, 네온 효과, 애니메이션 풍부, 독창적
- 특징: 네온 버튼, 글래스 카드, 애니메이션 입력창, 창의적 체크박스`
  },
  {
    id: 'ubuntu-vanilla',
    name: 'Ubuntu Vanilla Framework',
    company: 'Canonical',
    url: 'https://vanillaframework.io/',
    source: 'https://github.com/canonical-web-and-design/vanilla-framework',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'open-source',
    vibes: ['linux', 'open-source', 'orange', 'clean'],
    colors: ['#e95420', '#772953', '#77216f', '#f7f7f7'],
    font: 'Ubuntu',
    description: 'Canonical Ubuntu의 CSS 프레임워크. 리눅스 생태계를 위한 Ubuntu 폰트와 오렌지 브랜드 컬러의 깔끔한 UI.',
    prompt: `다음 Ubuntu Vanilla 디자인 시스템 스타일로 UI를 만들어줘:
- 색상: Ubuntu 오렌지(#e95420) 주색, 자주(#772953) 보조, 연회색 배경
- 타이포그래피: Ubuntu 폰트, 오픈소스 생태계의 따뜻하고 친근한 폰트
- 스타일: 리눅스/오픈소스 소프트웨어 UI, 깔끔하고 접근성 높음
- 특징: 소프트웨어 패키지 목록, 문서 레이아웃, 다운로드 CTA, 커뮤니티 섹션`
  },
  {
    id: 'skyscanner-backpack',
    name: 'Skyscanner Backpack',
    company: 'Skyscanner',
    url: 'https://skyscanner.design/',
    source: 'https://github.com/skyscanner/backpack',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'travel',
    vibes: ['travel', 'friendly', 'modern'],
    colors: ['#00b9f1', '#05203c', '#ffb01f'],
    font: 'Skyscanner Relative',
    description: '글로벌 항공권 비교 검색 Skyscanner의 디자인 시스템. 여행 설렘을 표현하는 시안 컬러 팔레트.',
    prompt: `Skyscanner Backpack 스타일: 시안(#00b9f1) 주색, 짙은 네이비(#05203c), 노랑(#ffb01f) 포인트. 항공편 검색, 가격 비교, 목적지 카드가 포함된 여행 서비스 UI.`
  },
  {
    id: 'atlassian-2',
    name: 'Atlassian Forge',
    company: 'Atlassian',
    url: 'https://atlassian.design',
    source: null,
    features: ['components', 'voice', 'designers-kit'],
    category: 'enterprise',
    vibes: ['enterprise', 'developer'],
    colors: ['#0052cc', '#172b4d', '#f4f5f7'],
    font: 'Charlie Display',
    description: 'Atlassian 앱 생태계를 위한 확장 UI 가이드라인.',
    prompt: `Atlassian 스타일: 블루(#0052cc) 주색, 네이비(#172b4d) 텍스트, 연회색(#f4f5f7) 배경. 생산성 협업 도구 UI.`
  },
  {
    id: 'morningstar',
    name: 'Morningstar Design System',
    company: 'Morningstar',
    url: 'http://designsystem.morningstar.com/',
    source: null,
    features: ['components', 'voice', 'designers-kit'],
    category: 'fintech',
    vibes: ['fintech', 'professional', 'data-heavy'],
    colors: ['#e40000', '#1e1e1e', '#f0f0f0', '#4d4d4d'],
    font: 'Helvetica Neue',
    description: '투자 분석 서비스 Morningstar의 디자인 시스템. 금융 데이터와 펀드 분석에 특화된 전문 UI.',
    prompt: `Morningstar 스타일: 레드(#e40000) 주색, 검은 배경, 연회색 보조. 금융 데이터, 펀드 등급, 차트가 포함된 투자 분석 UI.`
  },
  {
    id: 'priceline',
    name: 'Priceline Design System',
    company: 'Priceline',
    url: 'https://priceline.github.io/design-system/',
    source: 'https://github.com/priceline/design-system',
    features: ['components', 'voice', 'source'],
    category: 'travel',
    vibes: ['travel', 'deals', 'friendly', 'ecommerce'],
    colors: ['#0068ef', '#1a3452', '#ff9900', '#ffffff'],
    font: 'Montserrat',
    description: '여행 가격 비교 서비스 Priceline의 디자인 시스템. 최저가 여행을 위한 쇼핑 특화 UI.',
    prompt: `Priceline 스타일: 블루(#0068ef) 주색, 네이비(#1a3452) 헤더, 오렌지(#ff9900) 할인 포인트. 호텔/항공권 가격 비교, 예약 흐름 UI.`
  },
  {
    id: 'kaizen-cultureamp',
    name: 'Kaizen (Culture Amp)',
    company: 'Culture Amp',
    url: 'https://cultureamp.design/',
    source: 'https://github.com/cultureamp/kaizen-design-system',
    features: ['components', 'voice', 'source'],
    category: 'product',
    vibes: ['hr-tech', 'calm', 'professional', 'people-first'],
    colors: ['#03827f', '#4c4c4c', '#f9f9f9', '#f79726'],
    font: 'Ideal Sans',
    description: '직원 경험 플랫폼 Culture Amp의 디자인 시스템. 사람 중심의 HR 테크를 위한 차분하고 신뢰감 있는 UI.',
    prompt: `Culture Amp Kaizen 스타일: 틸(#03827f) 주색, 회색 텍스트(#4c4c4c), 연회색 배경, 오렌지(#f79726) 포인트. 직원 설문, 성과 리뷰, 팀 인사이트 UI.`
  },
  {
    id: 'pluralsight',
    name: 'Pluralsight Design System',
    company: 'Pluralsight',
    url: 'https://design-system.pluralsight.com/',
    source: 'https://github.com/pluralsight/design-system',
    features: ['components', 'source'],
    category: 'edtech',
    vibes: ['edtech', 'techlearning', 'dark', 'professional'],
    colors: ['#f96816', '#2d2d2d', '#ffffff', '#5bc4bf'],
    font: 'PS Commons',
    description: '기술 교육 플랫폼 Pluralsight의 디자인 시스템. 개발자/IT 전문가 교육을 위한 오렌지와 다크 테마.',
    prompt: `Pluralsight 스타일: 오렌지(#f96816) 주색, 다크 배경(#2d2d2d), 틸(#5bc4bf) 보조. 기술 교육 플랫폼, 코스 카드, 기술 경로 UI.`
  },
  {
    id: 'gympass-yoga',
    name: 'Gympass Yoga',
    company: 'Gympass',
    url: 'https://gympass.github.io/yoga/',
    source: 'https://github.com/gympass/yoga',
    features: ['components', 'voice', 'source'],
    category: 'health',
    vibes: ['wellness', 'health', 'energetic', 'vibrant'],
    colors: ['#6d28d9', '#fbbf24', '#10b981', '#1f2937'],
    font: 'Avenir Next',
    description: '웰니스 플랫폼 Gympass의 디자인 시스템. 건강과 운동을 위한 활기차고 에너지 넘치는 퍼플 기반 UI.',
    prompt: `Gympass Yoga 스타일: 퍼플(#6d28d9) 주색, 노랑(#fbbf24) 포인트, 에메랄드(#10b981) 성공. 헬스/피트니스 앱 UI, 운동 세션, 체육관 예약.`
  },
  {
    id: 'ibm-design-language',
    name: 'IBM Design Language',
    company: 'IBM',
    url: 'https://www.ibm.com/design/language/',
    source: null,
    features: ['components', 'voice'],
    category: 'enterprise',
    vibes: ['enterprise', 'AI', 'philosophical'],
    colors: ['#0062ff', '#161616', '#6929c4', '#009d9a'],
    font: 'IBM Plex',
    description: 'IBM의 디자인 철학과 언어. "Good Design is Good Business"를 토대로 한 AI 시대의 엔터프라이즈 디자인 비전.',
    prompt: `IBM Design Language 스타일: 블루(#0062ff) 주색, 검은 배경(#161616), 퍼플(#6929c4), 틸(#009d9a). AI 엔터프라이즈 제품, 사고의 깊이를 담은 UI.`
  },
  {
    id: 'grommet',
    name: 'Hewlett Packard Grommet',
    company: 'HP',
    url: 'https://grommet.github.io',
    source: 'https://github.com/grommet/grommet',
    features: ['components', 'source'],
    category: 'enterprise',
    vibes: ['enterprise', 'accessible', 'mobile-first'],
    colors: ['#01a982', '#425563', '#ffffff', '#f5f5f5'],
    font: 'Metric',
    description: 'Hewlett Packard의 React UI 프레임워크. 접근성과 모바일 퍼스트를 강조한 반응형 컴포넌트.',
    prompt: `HP Grommet 스타일: 틸그린(#01a982) 주색, 슬레이트(#425563) 보조, 흰 배경. 엔터프라이즈 관리 UI, 반응형 레이아웃.`
  },
  {
    id: 'hubspot-canvas',
    name: 'HubSpot Canvas',
    company: 'HubSpot',
    url: 'https://canvas.hubspot.com/',
    source: 'https://github.com/HubSpot/canvas',
    features: ['components', 'voice', 'source'],
    category: 'product',
    vibes: ['marketing', 'inbound', 'orange', 'friendly'],
    colors: ['#ff7a59', '#ff5c35', '#f8f8f8', '#33475b'],
    font: 'Lexend Deca',
    description: 'HubSpot CRM/마케팅 플랫폼의 디자인 시스템. 인바운드 마케팅의 따뜻한 오렌지와 친근한 UI.',
    prompt: `HubSpot Canvas 스타일: 오렌지(#ff7a59) 주색, 진한 오렌지(#ff5c35) 호버, 네이비(#33475b) 텍스트. CRM 대시보드, 마케팅 분석, 리드 관리 UI.`
  },
  {
    id: 'mailchimp-patterns',
    name: 'Mailchimp Patterns',
    company: 'Mailchimp',
    url: 'https://mailchimp.com/brand/',
    source: null,
    features: ['components'],
    category: 'product',
    vibes: ['email', 'friendly', 'quirky', 'playful'],
    colors: ['#ffe01b', '#241c15', '#007c89', '#ffffff'],
    font: 'Graphik',
    description: '이메일 마케팅 플랫폼 Mailchimp의 UI 패턴 라이브러리. 치루(Freddie) 마스코트처럼 독특하고 유쾌한 디자인.',
    prompt: `Mailchimp 스타일: 노랑(#ffe01b) 주색, 거의 검은 배경(#241c15), 틸(#007c89) 보조. 이메일 캠페인 설정, 구독자 목록, 분석 대시보드 UI.`
  },
  {
    id: 'twilio-paste-2',
    name: 'Shopify Polaris (Dark)',
    company: 'Shopify',
    url: 'https://polaris.shopify.com',
    source: 'https://github.com/Shopify/polaris',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'ecommerce',
    vibes: ['dark', 'ecommerce', 'modern'],
    colors: ['#8ecddd', '#1a1a1a', '#141718', '#00b49e'],
    font: 'Inter',
    description: 'Shopify Polaris 다크 모드 변형. 이커머스 관리 도구의 야간 모드에 최적화된 UI.',
    prompt: `Shopify Polaris 다크 모드 스타일: 민트(#8ecddd) 포인트, 검은 배경(#141718), 틸(#00b49e) 주색. 다크 이커머스 관리 UI.`
  },
  {
    id: 'nordic-design',
    name: 'Nordhealth',
    company: 'Nordhealth',
    url: 'https://nordhealth.design/',
    source: null,
    features: ['components', 'designers-kit'],
    category: 'healthcare',
    vibes: ['healthcare', 'nordic', 'minimal', 'clean'],
    colors: ['#0856b6', '#07329c', '#f7f8fc', '#e6ecf8'],
    font: 'Nord',
    description: '북유럽 헬스케어 플랫폼의 디자인 시스템. 스칸디나비안 미니멀리즘과 의료 서비스의 신뢰성을 결합.',
    prompt: `Nordhealth 스타일: 블루(#0856b6) 주색, 짙은 블루(#07329c), 연한 파랑(#f7f8fc) 배경. 의료 예약, 환자 기록, 처방전 관리 UI.`
  },
  {
    id: 'reach-ui',
    name: 'Reach UI',
    company: 'React Training',
    url: 'https://reach.tech/',
    source: 'https://github.com/reach/reach-ui',
    features: ['components', 'designers-kit', 'source'],
    category: 'open-source',
    vibes: ['accessible', 'headless', 'react', 'minimal'],
    colors: ['#6b7280', '#1f2937', '#f9fafb', '#3b82f6'],
    font: 'Inter',
    description: 'React Training의 접근성 중심 헤드리스 컴포넌트. W3C 사양을 완벽히 따르는 접근 가능한 컴포넌트 모음.',
    prompt: `Reach UI 스타일: 블루(#3b82f6) 주색, 다크 텍스트(#1f2937), 밝은 배경. 접근성 우선 UI, 키보드 내비게이션, 스크린리더 친화적.`
  },
  {
    id: 'cedar-2',
    name: 'Bento DS',
    company: 'Buildo',
    url: 'https://bento-ds.com',
    source: 'https://github.com/buildo/bento-design-system',
    features: ['components', 'designers-kit', 'source'],
    category: 'open-source',
    vibes: ['modern', 'clean', 'accessible'],
    colors: ['#4f46e5', '#1e1b4b', '#eef2ff', '#c7d2fe'],
    font: 'Inter',
    description: '이탈리아 Buildo의 디자인 시스템. 인디고 팔레트와 현대적 컴포넌트로 제품 개발을 가속화.',
    prompt: `Bento DS 스타일: 인디고(#4f46e5) 주색, 짙은 인디고(#1e1b4b) 다크, 연한 라벤더(#eef2ff) 배경. 현대적 SaaS UI.`
  },
  {
    id: 'semrush',
    name: 'Semrush Intergalactic',
    company: 'Semrush',
    url: 'https://i.semrush.com/',
    source: 'https://github.com/semrush/intergalactic',
    features: ['components', 'designers-kit', 'source'],
    category: 'martech',
    vibes: ['seo', 'marketing', 'data', 'professional'],
    colors: ['#ff6340', '#007cf0', '#1f1f21', '#f6f8fa'],
    font: 'Inter',
    description: 'SEO/마케팅 분석 플랫폼 Semrush의 디자인 시스템. 데이터 기반 마케팅 도구를 위한 인터갤럭틱 UI.',
    prompt: `Semrush Intergalactic 스타일: 오렌지레드(#ff6340) 주색, 블루(#007cf0), 다크(#1f1f21). SEO 분석, 키워드 리서치, 경쟁사 분석 대시보드 UI.`
  },
  {
    id: 'latitude',
    name: 'Latitude (Flexport)',
    company: 'Flexport',
    url: 'https://design.flexport.com/',
    source: 'https://github.com/flexport/latitude/',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'logistics',
    vibes: ['logistics', 'professional', 'clean', 'shipping'],
    colors: ['#3548c0', '#1a237e', '#ffffff', '#e8eaf6'],
    font: 'Source Sans Pro',
    description: '물류/화물 플랫폼 Flexport의 디자인 시스템. 글로벌 화물 추적과 공급망 관리를 위한 전문적 UI.',
    prompt: `Flexport Latitude 스타일: 인디고(#3548c0) 주색, 짙은 인디고(#1a237e), 연한 인디고(#e8eaf6) 배경. 화물 추적, 선적 관리, 공급망 대시보드 UI.`
  },
  {
    id: 'thumbprint',
    name: 'Thumbprint',
    company: 'Thumbtack',
    url: 'https://thumbprint.design/',
    source: 'https://github.com/thumbtack/thumbprint',
    features: ['components', 'source'],
    category: 'marketplace',
    vibes: ['service-marketplace', 'clean', 'friendly'],
    colors: ['#009fd9', '#2d333a', '#ffffff', '#f5f5f5'],
    font: 'Mark',
    description: '지역 서비스 마켓플레이스 Thumbtack의 디자인 시스템. 서비스 프로와 고객을 연결하는 마켓플레이스 UI.',
    prompt: `Thumbtack 스타일: 파랑(#009fd9) 주색, 다크 회색(#2d333a), 흰 배경. 서비스 프로 목록, 견적 요청, 후기 시스템 UI.`
  },
  {
    id: 'mendix',
    name: 'Mendix Atlas UI',
    company: 'Mendix/SAP',
    url: 'https://docs.mendix.com/refguide/atlas-ui/',
    source: null,
    features: ['components', 'designers-kit'],
    category: 'enterprise',
    vibes: ['lowcode', 'enterprise', 'clean'],
    colors: ['#264ae5', '#0a1325', '#f7f8fc'],
    font: 'Open Sans',
    description: '로우코드 플랫폼 Mendix의 UI 프레임워크. 비즈니스 앱을 빠르게 개발하기 위한 엔터프라이즈 컴포넌트.',
    prompt: `Mendix Atlas UI 스타일: 블루(#264ae5) 주색, 짙은 배경(#0a1325). 로우코드 비즈니스 앱 UI, 데이터 그리드, 폼.`
  },
  {
    id: 'flowbite',
    name: 'Flowbite Design System',
    company: 'Themesberg',
    url: 'https://www.figma.com/community/file/1179442320711977498',
    source: 'https://github.com/themesberg/flowbite',
    features: ['components', 'designers-kit', 'source'],
    category: 'open-source',
    vibes: ['tailwind', 'modern', 'clean', 'developer'],
    colors: ['#1d4ed8', '#1e3a8a', '#eff6ff', '#93c5fd'],
    font: 'Inter',
    description: 'Tailwind CSS 기반의 오픈소스 Figma UI 키트. 600개 이상의 컴포넌트로 빠른 디자인 시스템 구축.',
    prompt: `Flowbite 스타일: 블루(#1d4ed8) 주색, 짙은 블루(#1e3a8a), 연한 파랑(#eff6ff) 배경. Tailwind CSS 기반 현대적 웹 앱 UI.`
  },
  {
    id: 'pivot-ui',
    name: 'Pivotal UI',
    company: 'Pivotal (VMware)',
    url: 'https://github.com/pivotal-cf/pivotal-ui',
    source: 'https://github.com/pivotal-cf/pivotal-ui',
    features: ['components', 'source'],
    category: 'enterprise',
    vibes: ['enterprise', 'paas', 'cloud-foundry'],
    colors: ['#009cde', '#00a859', '#1d2e39', '#f5f5f5'],
    font: 'Source Sans Pro',
    description: 'Pivotal의 React/CSS UI 컴포넌트. Cloud Foundry 기반 PaaS 플랫폼 개발을 위한 UI 라이브러리.',
    prompt: `Pivotal UI 스타일: 시안(#009cde) 주색, 초록(#00a859) 성공, 다크(#1d2e39). 클라우드 PaaS 플랫폼 UI.`
  },
  {
    id: 'cloudscape',
    name: 'AWS Cloudscape (Advanced)',
    company: 'Amazon',
    url: 'https://cloudscape.design/',
    source: 'https://github.com/cloudscape-design/components',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'enterprise',
    vibes: ['cloud', 'data-heavy', 'dark', 'technical'],
    colors: ['#ec7211', '#dd6b10', '#0073bb', '#16191f'],
    font: 'Amazon Ember',
    description: 'AWS 클라우드 콘솔의 고급 컴포넌트 세트. 복잡한 클라우드 인프라 관리를 위한 다크 테마 UI.',
    prompt: `AWS Cloudscape 다크 모드: 오렌지(#ec7211) 주색, 아주 어두운 배경(#16191f), 파랑(#0073bb) 링크. 클라우드 서비스 관리 UI.`
  },
  {
    id: 'helpscout',
    name: 'Help Scout',
    company: 'Help Scout',
    url: 'https://style.helpscout.com/',
    source: 'https://github.com/helpscout/seed-framework',
    features: ['components', 'voice', 'source'],
    category: 'product',
    vibes: ['support', 'friendly', 'blue', 'helpful'],
    colors: ['#3197d6', '#034b76', '#f5fafd', '#d2e8f6'],
    font: 'Sailec',
    description: '고객 서비스 소프트웨어 Help Scout의 스타일 가이드. 고객 지원팀을 위한 친근하고 효율적인 UI.',
    prompt: `Help Scout 스타일: 블루(#3197d6) 주색, 짙은 블루(#034b76), 연한 파랑(#f5fafd) 배경. 고객 지원 대화함, 문서함, 팀 인박스 UI.`
  },
  {
    id: 'patternfly-2',
    name: 'Oracle Alta UI',
    company: 'Oracle',
    url: 'https://redwood.oracle.com/',
    source: null,
    features: ['components'],
    category: 'enterprise',
    vibes: ['enterprise', 'erp', 'corporate', 'legacy'],
    colors: ['#c74634', '#00688b', '#f9f9f9', '#4a4a4a'],
    font: 'Oracle Sans',
    description: 'Oracle ERP/미들웨어 제품의 Alta UI 디자인 언어. Oracle 엔터프라이즈 소프트웨어 표준 UI.',
    prompt: `Oracle Alta UI 스타일: Oracle 레드(#c74634) 주색, 블루(#00688b) 보조, 연회색 배경. ERP 데이터 관리, 비즈니스 인텔리전스 UI.`
  },
  {
    id: 'phosphor',
    name: 'Pharos (JSTOR)',
    company: 'ITHAKA/JSTOR',
    url: 'https://pharos.jstor.org',
    source: 'https://github.com/ithaka/pharos',
    features: ['components', 'voice', 'source'],
    category: 'education',
    vibes: ['academic', 'library', 'trustworthy', 'scholarly'],
    colors: ['#8b4091', '#303030', '#d6e8f0', '#ffffff'],
    font: 'Whitney',
    description: '학술 도서관 JSTOR의 디자인 시스템. 학술 연구와 디지털 도서관을 위한 신뢰감 있는 퍼플 기반 UI.',
    prompt: `JSTOR Pharos 스타일: 퍼플(#8b4091) 주색, 짙은 회색 텍스트(#303030), 연한 파랑(#d6e8f0) 배경. 학술 문헌 검색, 저널 브라우저, 연구 결과 UI.`
  },
  {
    id: 'sendgrid',
    name: 'Twilio SendGrid',
    company: 'Twilio SendGrid',
    url: 'https://paste.twilio.design/',
    source: null,
    features: ['components', 'voice', 'designers-kit'],
    category: 'developer',
    vibes: ['email-api', 'developer', 'blue', 'professional'],
    colors: ['#1a82e2', '#1c3858', '#ebf3fb', '#ffffff'],
    font: 'Colfax',
    description: '이메일 API 서비스 SendGrid의 UI. 이메일 전송 플랫폼과 마케팅 캠페인 관리를 위한 청색 UI.',
    prompt: `SendGrid 스타일: 블루(#1a82e2) 주색, 짙은 네이비(#1c3858), 연한 파랑(#ebf3fb) 배경. 이메일 API 대시보드, 캠페인 통계, 템플릿 에디터 UI.`
  },
  {
    id: 'wise',
    name: 'Untitled UI',
    company: 'UntitledUI',
    url: 'https://www.untitledui.com/react/',
    source: 'https://github.com/untitleduico/react/',
    features: ['components', 'designers-kit', 'source'],
    category: 'open-source',
    vibes: ['modern', 'startup', 'clean', 'saas'],
    colors: ['#7c3aed', '#6d28d9', '#f5f3ff', '#ede9fe'],
    font: 'Inter',
    description: '스타트업과 SaaS 제품을 위한 현대적 UI 키트. Figma와 React 모두 지원하는 포괄적인 디자인 시스템.',
    prompt: `Untitled UI 스타일: 퍼플(#7c3aed) 주색, 짙은 퍼플(#6d28d9), 연한 라벤더(#f5f3ff) 배경. 현대적 SaaS 제품 UI, 스타트업 대시보드.`
  },
  {
    id: 'welcome-ui',
    name: 'Welcome UI',
    company: 'Welcome to the Jungle',
    url: 'http://www.welcome-ui.com/',
    source: 'https://github.com/WTTJ/welcome-ui',
    features: ['components', 'source'],
    category: 'product',
    vibes: ['hr-tech', 'quirky', 'colorful', 'french'],
    colors: ['#ff5a5f', '#484f68', '#fff9f5', '#ffd33b'],
    font: 'Welcome Font',
    description: '프랑스 HR 플랫폼 Welcome to the Jungle의 디자인 시스템. 취업 시장을 즐겁게 만드는 컬러풀한 UI.',
    prompt: `Welcome to the Jungle UI 스타일: 코랄(#ff5a5f) 주색, 퍼플(#484f68), 크림(#fff9f5) 배경, 노랑(#ffd33b) 포인트. 채용/커리어 플랫폼 UI.`
  },
  {
    id: 'vtex-styleguide',
    name: 'VTEX Styleguide',
    company: 'VTEX',
    url: 'https://styleguide.vtex.com/',
    source: 'https://github.com/vtex/styleguide',
    features: ['components', 'designers-kit', 'source'],
    category: 'ecommerce',
    vibes: ['ecommerce', 'platform', 'pink', 'modern'],
    colors: ['#f71963', '#142032', '#e5f0f7', '#f4f7f9'],
    font: 'Fabriga',
    description: '브라질 커머스 플랫폼 VTEX의 스타일 가이드. 이커머스 솔루션을 위한 핑크와 다크 네이비의 현대적 UI.',
    prompt: `VTEX Styleguide 스타일: 핑크(#f71963) 주색, 짙은 네이비(#142032), 연한 파랑(#e5f0f7) 배경. 이커머스 플랫폼 관리 UI.`
  },
  {
    id: 'kontur',
    name: 'Kontur',
    company: 'SKB Kontur',
    url: 'https://guides.kontur.ru/',
    source: 'https://github.com/skbkontur/retail-ui/',
    features: ['components', 'designers-kit', 'source'],
    category: 'enterprise',
    vibes: ['russian-tech', 'enterprise', 'pink', 'clean'],
    colors: ['#e74c6d', '#1867c5', '#f5f5f5', '#333333'],
    font: 'Lab Grotesque',
    description: '러시아 B2B 소프트웨어 Kontur의 디자인 가이드. 비즈니스 서비스를 위한 핑크레드 포인트의 깔끔한 UI.',
    prompt: `Kontur 스타일: 핑크레드(#e74c6d) 주색, 블루(#1867c5) 보조, 연회색 배경. B2B 비즈니스 소프트웨어 UI.`
  },
  {
    id: 'strapi-design',
    name: 'Strapi Design System',
    company: 'Strapi',
    url: 'https://design-system.strapi.io/',
    source: 'https://github.com/strapi/design-system',
    features: ['components', 'source'],
    category: 'developer',
    vibes: ['cms', 'headless', 'purple', 'modern'],
    colors: ['#4945ff', '#271fe0', '#f6ecfc', '#d9d8ff'],
    font: 'Inter',
    description: '헤드리스 CMS Strapi의 디자인 시스템. 콘텐츠 관리 플랫폼을 위한 퍼플 기반 개발자 친화적 UI.',
    prompt: `Strapi 디자인 시스템 스타일: 바이올렛(#4945ff) 주색, 짙은 퍼플(#271fe0), 연한 라벤더(#f6ecfc) 배경. 헤드리스 CMS 관리 UI, 콘텐츠 타입 관리.`
  },
  {
    id: 'bolt-ds',
    name: 'Bolt Design System',
    company: 'Pega',
    url: 'https://boltdesignsystem.com/',
    source: 'https://github.com/boltdesignsystem/bolt',
    features: ['components', 'source'],
    category: 'enterprise',
    vibes: ['enterprise', 'web-components', 'clean'],
    colors: ['#009edd', '#00558c', '#f5f5f5', '#333333'],
    font: 'Source Sans Pro',
    description: 'Pega의 Bolt 디자인 시스템. Twig/웹 컴포넌트 기반 엔터프라이즈 UI 라이브러리.',
    prompt: `Bolt Design System 스타일: 블루(#009edd) 주색, 짙은 블루(#00558c), 연회색 배경. 엔터프라이즈 BPM/CRM 플랫폼 UI.`
  },
  {
    id: 'vue-design-system',
    name: 'Vue Design System',
    company: 'Open Source',
    url: 'https://vueds.com/',
    source: 'https://github.com/viljamis/vue-design-system',
    features: ['components', 'source'],
    category: 'open-source',
    vibes: ['vue', 'green', 'modern', 'developer'],
    colors: ['#41b883', '#35495e', '#f8f8f8', '#ffffff'],
    font: 'Fira Sans',
    description: 'Vue.js 기반 디자인 시스템 시작점. Vue 생태계를 위한 오픈소스 디자인 시스템 보일러플레이트.',
    prompt: `Vue Design System 스타일: Vue 그린(#41b883) 주색, 짙은 회청(#35495e). Vue 기반 웹 앱 UI.`
  },
  {
    id: 'tesla',
    name: 'Apex Charts / Reshaped',
    company: 'Reshaped',
    url: 'https://reshaped.so',
    source: null,
    features: ['components', 'designers-kit'],
    category: 'open-source',
    vibes: ['minimal', 'dark', 'premium', 'saas'],
    colors: ['#2563eb', '#0f0f0f', '#1a1a1a', '#e2e8f0'],
    font: 'Inter',
    description: 'Figma + React 기반의 프리미엄 UI 킷. 다크 테마와 정밀한 컴포넌트로 SaaS 제품 구축 가속화.',
    prompt: `Reshaped Design System 스타일: 블루(#2563eb) 주색, 다크 배경(#0f0f0f), 어두운 패널(#1a1a1a). 프리미엄 SaaS 다크 테마 UI.`
  },
  {
    id: 'basis-ds',
    name: 'Basis Design System',
    company: 'Basis',
    url: 'https://basis.now.sh',
    source: 'https://github.com/moroshko/basis',
    features: ['components', 'source'],
    category: 'open-source',
    vibes: ['fintech', 'clean', 'trustworthy', 'blue'],
    colors: ['#1f7ae0', '#0d3d7a', '#e8f0fb', '#ffffff'],
    font: 'Roboto',
    description: '핀테크 제품을 위한 오픈소스 React 컴포넌트. 금융 서비스 UI를 위한 신뢰감 있는 블루 팔레트.',
    prompt: `Basis Design System 스타일: 블루(#1f7ae0) 주색, 짙은 블루(#0d3d7a), 연한 파랑(#e8f0fb) 배경. 핀테크 금융 서비스 UI.`
  },
  {
    id: 'audi-2',
    name: 'Tailwind UI (Headwind)',
    company: 'Tailwind Labs',
    url: 'https://tailwindui.com/',
    source: null,
    features: ['components'],
    category: 'open-source',
    vibes: ['utility', 'modern', 'flexible', 'developer'],
    colors: ['#06b6d4', '#0891b2', '#164e63', '#f0f9ff'],
    font: 'Inter',
    description: 'Tailwind CSS 기반의 고품질 UI 컴포넌트. 최신 웹 디자인 패턴을 반영한 즉시 사용 가능한 컴포넌트.',
    prompt: `Tailwind UI 스타일: 시안(#06b6d4) 주색, 짙은 시안(#0891b2), 연한 시안(#f0f9ff) 배경. Tailwind CSS 기반 현대적 웹 앱 UI.`
  },
  {
    id: 'oracle-redwood',
    name: 'Oracle Redwood',
    company: 'Oracle',
    url: 'https://redwood.oracle.com',
    source: null,
    features: ['components', 'designers-kit'],
    category: 'enterprise',
    vibes: ['enterprise', 'oracle', 'modern', 'erp'],
    colors: ['#c74634', '#00b0e6', '#312d2a', '#ffffff'],
    font: 'Oracle Sans',
    description: 'Oracle의 차세대 Redwood 디자인 시스템. 레드 브랜드컬러에서 새로운 Oracle 클라우드 앱의 미래지향적 UI.',
    prompt: `Oracle Redwood 스타일: Oracle 레드(#c74634) 주색, 시안(#00b0e6) 보조, 짙은 배경(#312d2a). Oracle 클라우드 앱 현대적 UI.`
  },
  {
    id: 'apple-dev',
    name: 'Apple HIG',
    company: 'Apple',
    url: 'https://developer.apple.com/design/',
    source: null,
    features: ['designers-kit'],
    category: 'platform',
    vibes: ['apple', 'premium', 'minimal', 'ios'],
    colors: ['#007aff', '#34c759', '#ff9500', '#ff3b30'],
    font: 'SF Pro',
    description: 'Apple의 Human Interface Guidelines. iOS, macOS, watchOS를 위한 최고의 UI/UX 가이드라인.',
    prompt: `Apple HIG 스타일: iOS 블루(#007aff) 주색, 그린(#34c759) 성공, 오렌지(#ff9500), 레드(#ff3b30) 에러. iOS/macOS 앱 UI, SF 심볼, 자연스러운 제스처.`
  },
  {
    id: 'estonia-design',
    name: 'Estonia Country Design Guidelines',
    company: 'Republic of Estonia',
    url: 'https://brand.estonia.ee',
    source: null,
    features: ['components', 'voice', 'designers-kit'],
    category: 'government',
    vibes: ['e-government', 'nordic', 'digital', 'innovative'],
    colors: ['#0072ce', '#1d1d1b', '#f0f8ff', '#ef4444'],
    font: 'Aino',
    description: '세계 최초 디지털 정부 에스토니아의 국가 브랜드 시스템. e-Estonia의 디지털 혁신을 담은 모던 정부 UI.',
    prompt: `에스토니아 국가 디자인 스타일: 파랑(#0072ce) 주색, 검은 텍스트(#1d1d1b). 디지털 정부 서비스, e-ID, 온라인 투표, 디지털 서명 UI.`
  },
  {
    id: 'siemens-2',
    name: 'Scania Digital Design System',
    company: 'Scania',
    url: 'https://tegel.scania.com/',
    source: 'https://github.com/scania-digital-design-system/sdds',
    features: ['components', 'designers-kit', 'source'],
    category: 'automotive',
    vibes: ['industrial', 'truck', 'swedish', 'professional'],
    colors: ['#0d0f10', '#1a73e8', '#f5a623', '#ffffff'],
    font: 'Scania Sans',
    description: '스웨덴 트럭/버스 제조업체 Scania의 디지털 디자인 시스템. 산업 차량 텔레매틱스와 플리트 관리 UI.',
    prompt: `Scania 디지털 디자인 스타일: 거의 검은 배경(#0d0f10), 블루(#1a73e8) 포인트, 오렌지(#f5a623) 경고. 트럭 플리트 관리, 텔레매틱스 대시보드 UI.`
  },
  {
    id: 'figma-ui-comp',
    name: 'Figma UI Components',
    company: 'Figma / LessMess',
    url: 'https://github.com/lessmess/figma-ui',
    source: 'https://github.com/lessmess-dev/figma-ui-components',
    features: ['components', 'source'],
    category: 'design-tool',
    vibes: ['design-tool', 'purple', 'modern', 'creative'],
    colors: ['#f24e1e', '#a259ff', '#1abcfe', '#0acf83'],
    font: 'Inter',
    description: 'Figma 디자인 툴의 UI 컴포넌트 재현. Figma의 시그니처 멀티컬러 팔레트로 디자인 툴 UI 패턴 구현.',
    prompt: `Figma UI 스타일: Figma 오렌지(#f24e1e), 퍼플(#a259ff), 파랑(#1abcfe), 그린(#0acf83) 멀티 팔레트. 디자인 툴 UI, 레이어 패널, 컴포넌트 라이브러리 UI.`
  },
  {
    id: 'financial-times',
    name: 'Financial Times Origami',
    company: 'Financial Times',
    url: 'https://origami.ft.com/',
    source: 'https://github.com/Financial-Times/origami',
    features: ['components', 'source'],
    category: 'media',
    vibes: ['news', 'premium', 'editorial', 'financial'],
    colors: ['#fff1e5', '#990f3d', '#f2dfce', '#593380'],
    font: 'Financier Display',
    description: '파이낸셜 타임스의 프론트엔드 컴포넌트 시스템. FT 특유의 크림색 배경과 와인레드로 프리미엄 금융 저널리즘 표현.',
    prompt: `Financial Times Origami 스타일: 크림 배경(#fff1e5), 와인 레드(#990f3d) 주색, 연한 크림(#f2dfce) 보조. 금융 뉴스 저널리즘 UI, 기사 레이아웃, 데이터 저널리즘.`
  },
  {
    id: 'goodbarber',
    name: 'GoodBarber Design System',
    company: 'GoodBarber',
    url: 'https://www.goodbarber.com/uxdesign/',
    source: null,
    features: ['components'],
    category: 'nocode',
    vibes: ['app-builder', 'colorful', 'modern'],
    colors: ['#ed41d5', '#5e49e1', '#1ce8b5', '#ffffff'],
    font: 'Poppins',
    description: '노코드 앱 빌더 GoodBarber의 UX 디자인 시스템. 앱 빌딩 플랫폼을 위한 화려한 그라디언트와 네온 컬러.',
    prompt: `GoodBarber 스타일: 핑크(#ed41d5), 퍼플(#5e49e1), 민트(#1ce8b5) 네온 팔레트. 노코드 앱 빌더 UI, 드래그앤드롭, 앱 프리뷰.`
  },
  {
    id: 'wix-style',
    name: 'Wix Style React',
    company: 'Wix',
    url: 'https://www.wix-style-react.com/storybook/',
    source: null,
    features: ['components'],
    category: 'no-code',
    vibes: ['website-builder', 'colorful', 'user-friendly'],
    colors: ['#116dff', '#0b1f42', '#f0f4ff', '#00b5da'],
    font: 'Madefor Display',
    description: 'Wix 웹사이트 빌더의 React 컴포넌트 라이브러리. 누구나 쉽게 웹사이트를 만들 수 있는 친근한 UI.',
    prompt: `Wix Style 스타일: 비비드 블루(#116dff) 주색, 짙은 네이비(#0b1f42), 연한 파랑(#f0f4ff) 배경. 웹사이트 빌더 UI, 드래그앤드롭 에디터, 템플릿 갤러리.`
  },
  {
    id: 'spectrum-2',
    name: 'Pulse Design System',
    company: 'Heartbeat.ua',
    url: 'https://pulse.heartbeat.ua/',
    source: 'https://github.com/heartbeatua/Pulse-Boilerplate',
    features: ['components', 'voice', 'designers-kit', 'source'],
    category: 'open-source',
    vibes: ['red', 'vibrant', 'modern', 'startup'],
    colors: ['#ff2966', '#1a1a2e', '#16213e', '#0f3460'],
    font: 'Inter',
    description: '우크라이나 디자인 에이전시의 오픈소스 디자인 시스템 부트스트랩. 밝은 핑크레드와 네이비의 스타트업 UI.',
    prompt: `Pulse Design System 스타일: 핑크레드(#ff2966) 주색, 짙은 네이비(#1a1a2e) 배경, 어두운 패널(#16213e). 스타트업 다크 테마 UI.`
  }
];

// Vibe categories for filtering
const VIBE_CATEGORIES = [
  { id: 'enterprise', label: '🏢 엔터프라이즈', color: '#0052cc' },
  { id: 'minimal', label: '⬜ 미니멀', color: '#6b7280' },
  { id: 'dark', label: '🌑 다크 테마', color: '#1f2937' },
  { id: 'playful', label: '🎉 플레이풀', color: '#f59e0b' },
  { id: 'government', label: '🏛️ 정부기관', color: '#1d70b8' },
  { id: 'material', label: '📱 Material', color: '#6200ea' },
  { id: 'travel', label: '✈️ 여행', color: '#00a4e4' },
  { id: 'healthcare', label: '🏥 헬스케어', color: '#00703c' },
  { id: 'fintech', label: '💰 핀테크', color: '#108f00' },
  { id: 'creative', label: '🎨 크리에이티브', color: '#1473e6' },
  { id: 'developer', label: '👨‍💻 개발자', color: '#0969da' },
  { id: 'ecommerce', label: '🛍️ 이커머스', color: '#008060' },
  { id: 'data-heavy', label: '📊 데이터집약', color: '#215db0' },
  { id: 'open-source', label: '🌐 오픈소스', color: '#319795' },
  { id: 'accessible', label: '♿ 접근성', color: '#00703c' },
  { id: 'luxury', label: '💎 럭셔리', color: '#c9112a' },
  { id: 'space', label: '🚀 우주/항공', color: '#4dacff' },
  { id: 'media', label: '📺 미디어', color: '#b80000' },
  { id: 'automotive', label: '🚗 자동차', color: '#bb0a14' },
  { id: 'social', label: '📱 소셜', color: '#e60023' },
];

const FEATURE_LABELS = {
  'components': { label: '컴포넌트', icon: '🧩' },
  'voice': { label: 'Voice & Tone', icon: '💬' },
  'designers-kit': { label: '디자이너 킷', icon: '🎨' },
  'source': { label: '소스 공개', icon: '📂' }
};
