import { Link } from "wouter";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { name, tagline, socialMedia } = portfolioData;
  const year = new Date().getFullYear();
  
  const socialIcons = {
    facebook: <Facebook className="h-5 w-5" />,
    twitter: <Twitter className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
    instagram: <Instagram className="h-5 w-5" />,
    github: <Github className="h-5 w-5" />
  };

  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home">
              <a className="text-2xl font-bold text-white flex items-center gap-2 cursor-pointer">
                포트폴리오
              </a>
            </Link>
            <p className="mt-2 text-light-300 max-w-md">
              {tagline}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              {socialMedia.map((item) => (
                <Button 
                  key={item.platform}
                  variant="ghost" 
                  size="icon"
                  asChild
                >
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={item.platform}
                    className="text-light-300 hover:text-white transition-colors"
                  >
                    {socialIcons[item.platform as keyof typeof socialIcons]}
                  </a>
                </Button>
              ))}
            </div>
            
            <p className="text-light-300 text-sm">
              &copy; {year} {name}. 모든 권리 보유.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
