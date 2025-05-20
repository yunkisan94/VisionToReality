export const portfolioData = {
  name: "홍길동",
  role: "개발자 & 디자이너",
  intro: "저는 사용자 중심의 디자인과 깔끔한 코드를 통해 멋진 웹 경험을 만드는 것을 좋아합니다. 항상 새로운 기술을 배우고 도전하는 것을 즐깁니다.",
  tagline: "사용자 중심의 웹 경험을 창조하는 개발자이자 디자이너입니다.",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
  
  about: {
    title: "창의적인 솔루션을 만드는",
    subtitle: "개발자",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    paragraphs: [
      "안녕하세요, 저는 홍길동입니다. 3년 동안 웹 개발과 디자인 분야에서 다양한 프로젝트를 진행해왔습니다. 사용자 경험을 향상시키는 직관적인 인터페이스와 효율적인 코드 작성에 관심이 많습니다.",
      "프론트엔드 기술과 백엔드 시스템을 모두 다룰 수 있으며, 특히 사용자 중심 디자인과 접근성 향상에 집중하고 있습니다. 항상 새로운 기술을 배우고 적용하는 것을 좋아합니다."
    ],
    achievements: [
      "디자인 공모전 수상",
      "컴퓨터 공학 학사",
      "3년 업계 경력",
      "웹 개발 자격증"
    ]
  },
  
  skills: {
    development: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Node.js", level: 75 }
    ],
    design: [
      { name: "UI/UX 디자인", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Responsive Design", level: 95 },
      { name: "SEO 최적화", level: 70 }
    ],
    stats: [
      { value: "3+", label: "경력 연도" },
      { value: "25+", label: "완료 프로젝트" },
      { value: "15+", label: "클라이언트" },
      { value: "5+", label: "수료 인증" }
    ]
  },
  
  projects: [
    {
      title: "이커머스 웹사이트",
      description: "React와 Node.js를 활용한 완전한 이커머스 솔루션. 결제 시스템과 관리자 패널 포함.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "Node.js", "MongoDB"],
      url: "#"
    },
    {
      title: "크리에이티브 에이전시 웹사이트",
      description: "디자인 에이전시를 위한 반응형 웹사이트. 인터랙티브 애니메이션과 포트폴리오 갤러리 포함.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["HTML/CSS", "JavaScript", "GSAP"],
      url: "#"
    },
    {
      title: "데이터 분석 대시보드",
      description: "리액트 기반 데이터 시각화 대시보드. 실시간 데이터 업데이트와 인터랙티브 차트 제공.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "D3.js", "Firebase"],
      url: "#"
    }
  ],
  
  contact: {
    email: "contact@example.com",
    phone: "+82 10-1234-5678",
    location: "서울특별시 강남구"
  },
  
  socialMedia: [
    { platform: "facebook", url: "https://facebook.com" },
    { platform: "twitter", url: "https://twitter.com" },
    { platform: "linkedin", url: "https://linkedin.com" },
    { platform: "instagram", url: "https://instagram.com" },
    { platform: "github", url: "https://github.com" }
  ],
  
  clients: [
    { 
      name: "Client 1", 
      logo: "https://via.placeholder.com/120x60?text=Client+1" 
    },
    { 
      name: "Client 2", 
      logo: "https://via.placeholder.com/120x60?text=Client+2" 
    },
    { 
      name: "Client 3", 
      logo: "https://via.placeholder.com/120x60?text=Client+3" 
    },
    { 
      name: "Client 4", 
      logo: "https://via.placeholder.com/120x60?text=Client+4" 
    }
  ]
};
