import { motion } from "framer-motion";
import { 
  Trophy, 
  GraduationCap, 
  Briefcase, 
  Award, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { about } = portfolioData;
  
  const achievements = [
    { icon: <Trophy className="h-5 w-5 text-primary" />, text: about.achievements[0] },
    { icon: <GraduationCap className="h-5 w-5 text-primary" />, text: about.achievements[1] },
    { icon: <Briefcase className="h-5 w-5 text-primary" />, text: about.achievements[2] },
    { icon: <Award className="h-5 w-5 text-primary" />, text: about.achievements[3] }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900">
            <span className="inline-block pb-2 border-b-4 border-primary">나에 대해서</span>
          </h2>
          <p className="mt-4 text-lg text-dark-700 max-w-3xl mx-auto">
            저를 더 잘 알 수 있도록 제 이야기를 소개합니다.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={about.image} 
              alt="작업 중인 모습" 
              className="w-full h-auto rounded-xl shadow-lg object-cover" 
            />
          </motion.div>
          
          <motion.div 
            className="w-full md:w-3/5 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-dark-900">
              {about.title} <span className="text-primary">{about.subtitle}</span>
            </h3>
            
            <p className="text-dark-700">
              {about.paragraphs[0]}
            </p>
            
            <p className="text-dark-700">
              {about.paragraphs[1]}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-dark-700">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <Button 
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  연락하기
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
