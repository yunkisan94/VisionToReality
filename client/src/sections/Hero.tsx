import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { name, role, intro, philosophy, profileImage, clients } = portfolioData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-100/70 to-indigo-50/70 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight whitespace-nowrap relative z-10"
              >
                <span className="text-primary">Your vision to Our reality</span>
              </h1>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mt-2 relative z-10"
              >
                {name}
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl text-foreground font-light relative z-10"
              variants={item}
            >
              {role}
            </motion.p>
            
            <motion.p 
              className="text-lg text-foreground max-w-xl relative z-10"
              variants={item}
            >
              {intro}
            </motion.p>
            
            <motion.blockquote 
              className="text-lg italic text-primary max-w-xl border-l-4 border-primary pl-4 my-4 relative z-10"
              variants={item}
            >
              {philosophy}
            </motion.blockquote>
            
            <motion.div 
              className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
              variants={item}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <a href="#contact">연락하기</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a href="#projects">사업 보기</a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src={profileImage} 
              alt="프로필 이미지" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-8 border-white shadow-xl" 
            />
          </motion.div>
        </div>
        
        <div className="mt-24">
          <motion.div
            className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-center font-semibold text-foreground mb-6 text-xl">전문 분야</h3>
            
            <div className="overflow-x-auto pb-4">
              <div className="flex space-x-4 min-w-max">
                {[
                  { 
                    title: "온라인 쇼핑몰", 
                    description: "Witter, Orpu, Haute 세 개의 쇼핑몰을 성공적으로 운영하며 디지털 마케팅, 고객 경험 최적화, 시장 트렌드 분석 등의 전문성을 보유하고 있습니다.",
                    color: "bg-primary/20",
                    iconColor: "bg-primary",
                    icon: "🛍️"
                  },
                  { 
                    title: "부동산 투자", 
                    description: "주거용 및 상업용 부동산 포트폴리오를 구축하고 관리하며, 투자자산운용사 자격증을 바탕으로 한 체계적인 자산 운용 전략을 수립합니다.",
                    color: "bg-secondary/30",
                    iconColor: "bg-secondary",
                    icon: "🏢"
                  },
                  { 
                    title: "가상자산", 
                    description: "크리에이티브힐에서의 STO 및 DeFi 사업 전략 수립 경험을 기반으로 가상자산 현물 및 선물 투자에 관한 전문적인 분석과 전략을 구사합니다.",
                    color: "bg-accent/30",
                    iconColor: "bg-accent",
                    icon: "💰"
                  },
                  { 
                    title: "비즈니스 전략", 
                    description: "트위니 전략기획팀 및 산업은행에서의 6년 경력을 통해 중장기 전략 수립, 신사업 발굴, 시장 분석 등 전략적 비즈니스 사고에 전문성을 갖추고 있습니다.",
                    color: "bg-primary/10",
                    iconColor: "bg-primary",
                    icon: "📊"
                  }
                ].map((field, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/90 rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md w-72 flex-shrink-0"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className={`flex items-center gap-2 ${field.color} px-5 py-3 font-medium text-foreground`}>
                      <span className="text-xl">{field.icon}</span>
                      <span>{field.title}</span>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-foreground">{field.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-4">
              <div className="flex space-x-2">
                {[0, 1, 2, 3].map((dot) => (
                  <span 
                    key={dot}
                    className="w-2 h-2 rounded-full bg-primary/50"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
