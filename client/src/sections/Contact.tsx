import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RectangleEllipsis, Phone, MapPin, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { apiRequest } from "@/lib/queryClient";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, { message: "이름은 2글자 이상이어야 합니다." }),
  email: z.string().email({ message: "올바른 이메일 형식이 아닙니다." }),
  subject: z.string().min(2, { message: "제목은 2글자 이상이어야 합니다." }),
  message: z.string().min(10, { message: "메시지는 10글자 이상이어야 합니다." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { contact, socialMedia } = portfolioData;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "메시지가 전송되었습니다!",
        description: "빠른 시일 내에 답변 드리겠습니다.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "메시지 전송 실패",
        description: "잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  
  const contactInfo = [
    { 
      icon: <RectangleEllipsis className="text-primary h-6 w-6" />, 
      title: "이메일", 
      value: contact.email,
      link: `mailto:${contact.email}`
    },
    { 
      icon: <Phone className="text-primary h-6 w-6" />, 
      title: "전화번호", 
      value: contact.phone,
      link: `tel:${contact.phone.replace(/[\s-]/g, "")}`
    },
    { 
      icon: <MessageSquare className="text-primary h-6 w-6" />, 
      title: "카카오톡", 
      value: "ID: yunkisan94",
      link: "https://open.kakao.com/o/yunkisan94"
    },
    { 
      icon: <MapPin className="text-primary h-6 w-6" />, 
      title: "위치", 
      value: contact.location,
      link: ""
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900">
            <span className="inline-block pb-2 border-b-4 border-primary">연락하기</span>
          </h2>
          <p className="mt-4 text-lg text-dark-700 max-w-3xl mx-auto">
            프로젝트 문의나 질문이 있으시면 연락 주세요.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-dark-800 mb-6">메시지 보내기</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-dark-700 font-medium">이름</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="홍길동" 
                              {...field} 
                              className="focus-visible:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-dark-700 font-medium">이메일</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your@email.com" 
                              type="email" 
                              {...field} 
                              className="focus-visible:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-dark-700 font-medium">제목</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="문의 제목" 
                              {...field} 
                              className="focus-visible:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-dark-700 font-medium">메시지</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="메시지를 입력하세요..." 
                              rows={5} 
                              {...field} 
                              className="resize-none focus-visible:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "전송 중..." : "메시지 보내기"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-dark-800 mb-6">연락처 정보</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-dark-800">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-dark-700">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-dark-800 mb-6">소셜 미디어</h3>
                
                <div className="flex flex-wrap gap-4">
                  {socialMedia.map((social, index) => {
                    const colors: Record<string, string> = {
                      facebook: "bg-[#1877F2]",
                      twitter: "bg-[#1DA1F2]",
                      linkedin: "bg-[#0A66C2]",
                      instagram: "bg-[#E4405F]",
                      github: "bg-[#333333]"
                    };
                    
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "w-12 h-12 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-colors",
                          colors[social.platform]
                        )}
                        aria-label={social.platform}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className={`fab fa-${social.platform} text-xl`}></i>
                      </motion.a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
