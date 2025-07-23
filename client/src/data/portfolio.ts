export const portfolioData = {
  name: "윤기산",
  role: "사업자 & 투자자",
  intro:
    "저는 분석하고 실행하는 걸 좋아하는 사업자예요. 쇼핑몰, 부동산, 가상자산 등 여러 분야에서 사업과 투자를 실험하고 있어요. 복잡한 문제를 차분하게 풀고, 기회를 빠르게 실행으로 옮기는 걸 즐겨요.",
  tagline: "작은 아이디어에서 출발해, 현실을 바꾸는 일에 도전하고 있어요.",
  philosophy:
    '"실험적인 시도와 진짜 가능성을 찾는 게 제 방식이에요. 작은 것부터 차근차근 실행하며 배우고 성장하는 과정을 소중히 여겨요."',
  profileImage: "/profile.jpg",

  about: {
    title: "전략적 사고로 미래를 그려가는",
    subtitle: "사업자",
    image:
      "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    paragraphs: [
      "안녕하세요, 저는 윤기산이에요. 스타트업 전략기획팀과 금융공기업에서 경험을 쌓은 후, 지금은 Witter, Orpu, Haute 세 개의 온라인 쇼핑몰을 운영하고 있어요. 기업에서 배운 전략적 사고를 개인 사업에 적용하면서 조금씩 성장시켜 나가고 있어요.",
      "부동산 매매랑 임대업을 하면서 주거용·상업용 부동산 거래에 관심이 많아요. IT 스타트업에서 STO랑 DeFi 업무를 했던 경험으로 Web/app 개발 · 배포 · 출시 업무를 진행하고, 결제회사에서 근무했던 경력을 바탕으로 가상자산에도 투자하고 있어요. 여러 분야를 경험해보면서 새로운 걸 배우는 재미를 느끼고 있어요.",
    ],
    achievements: [
      "온라인 쇼핑몰 3개 운영",
      "부동산 투자 및 관리 경험(6년 경력)",
      "Web/app 개발·배포·출시",
      "스타트업 STO/DeFi 사업 전략 기획",
    ],
  },

  skills: {
    development: [
      { name: "비즈니스 전략", level: 95 },
      { name: "신사업 기획", level: 90 },
      { name: "온라인 마케팅", level: 85 },
      { name: "전략적 분석", level: 88 },
    ],
    design: [
      { name: "부동산 투자", level: 85 },
      { name: "STO/DeFi 분석", level: 88 },
      { name: "포트폴리오 관리", level: 90 },
      { name: "재무 계획", level: 85 },
    ],
    stats: [
      { value: "6+", label: "비즈니스 경력" },
      { value: "3+", label: "운영 중인 사업" },
      { value: "5+", label: "부동산 거래" },
      { value: "3+", label: "자격증 보유" },
    ],
  },

  projects: [
    {
      title: 'GPT 기반 심리 분석 앱 "왜저랩(Why tho?)"',
      description:
        "사용자 맞춤형 심리 분석 질문을 만들어서 결과 리포트를 제공해요. GPT API, Stripe 결제, 캐릭터 성장 시스템, Notion 로그 연동을 구현했어요. Replit + Capacitor로 Android 앱을 만들어서 Google Play Console에 AAB를 등록하고 비공개 테스트를 진행하고 있어요.",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: [
        "GPT API",
        "Stripe 결제",
        "Android 앱",
        "Capacitor",
        "심리 분석",
      ],
      url: "#",
      highlight: true,
    },
    {
      title: "Witter",
      description:
        "패션이랑 라이프스타일 제품을 파는 프리미엄 온라인 쇼핑몰이에요. 독특한 고객 경험과 좋은 품질의 제품으로 차별화하고 있어요.",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["이커머스", "디지털 마케팅", "고객 관리"],
      url: "#",
    },
    {
      title: "Orpu",
      description:
        "생활용품, 사무용품, 잡화 등을 판매하는 실용적인 온라인 스토어. 가성비 높은 제품 구성과 빠른 업데이트로 사용자 만족도를 높이고 있습니다.",
      image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["제품 기획", "공급망 관리", "운영 지원"],
      url: "#",
    },
    {
      title: "Haute",
      description:
        "홈 인테리어랑 생활용품을 파는 프리미엄 온라인 스토어예요. 공간별 맞춤형 제품 큐레이션과 홈스타일링 서비스로 특별한 쇼핑 경험을 제공해요.",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["인테리어 솔루션", "홈스타일링", "맞춤형 서비스"],
      url: "#",
    },
    {
      title: "상업용 부동산 포트폴리오",
      description:
        "전략적 위치에 있는 상업용 부동산에 투자하고 관리해요. 장기적인 가치 상승과 안정적인 임대 수익을 목표로 하고 있어요.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["부동산 투자", "자산 관리", "임대 사업"],
      url: "#",
    },
    {
      title: "가상자산 투자 전략",
      description:
        "현물이랑 선물 시장에서 체계적인 가상자산 투자 전략을 세우고 실행해요. 리스크 관리와 장기적 수익을 추구하고 있어요.",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["가상자산 분석", "포트폴리오 구성", "리스크 관리"],
      url: "#",
    },
  ],

  contact: {
    email: "yunkisan94@naver.com",
    phone: "+82 0507-1371-7445",
    location: "서울특별시 마포구 서강로",
  },

  socialMedia: [
    { platform: "facebook", url: "https://facebook.com" },
    { platform: "twitter", url: "https://twitter.com" },
    { platform: "linkedin", url: "https://linkedin.com" },
    { platform: "instagram", url: "https://instagram.com" },
    { platform: "github", url: "https://github.com" },
  ],

  clients: [
    {
      name: "디지털 마케팅 에이전시",
      logo: "https://images.unsplash.com/photo-1557837981-97333d50518a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=60&w=120&crop=edges",
    },
    {
      name: "제품 공급업체",
      logo: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=60&w=120&crop=edges",
    },
    {
      name: "물류 서비스",
      logo: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=60&w=120&crop=edges",
    },
    {
      name: "웹 개발 스튜디오",
      logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=60&w=120&crop=edges",
    },
  ],
};
