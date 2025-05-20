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
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-light-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight"
              variants={item}
            >
              <span className="text-primary">비전을 현실로,</span> {name}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-dark-700 font-light"
              variants={item}
            >
              {role}
            </motion.p>
            
            <motion.p 
              className="text-lg text-dark-700 max-w-xl"
              variants={item}
            >
              {intro}
            </motion.p>
            
            <motion.blockquote 
              className="text-lg italic text-primary-700 max-w-xl border-l-4 border-primary pl-4 my-4"
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
            <h3 className="text-center font-semibold text-dark-800 mb-4">전문 분야</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                <span className="text-dark-700">온라인 쇼핑몰</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                <span className="text-dark-700">부동산 투자</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                <span className="text-dark-700">가상자산</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                <span className="text-dark-700">비즈니스 전략</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
