import { motion } from "framer-motion";
import { Code, PaintbrushVertical } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Skills() {
  const { skills } = portfolioData;
  const containerRef = useRef<HTMLDivElement>(null);

  const animateProgress = {
    hidden: { width: 0 },
    visible: (percent: number) => ({
      width: `${percent}%`,
      transition: { duration: 1, ease: "easeOut" }
    })
  };
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // 씬, 카메라, 렌더러 설정
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 20;
    
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    
    // 조명 설정
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // 3D 오브젝트 생성
    const objects: THREE.Mesh[] = [];
    
    // 파스텔 블루 톤 색상
    const color = 0x80b0ff;
    
    // 오브젝트 위치 - 사이드 영역에만 배치하여 텍스트와 겹치지 않게
    const positions = [
      { x: -25, y: 20, z: -20 },  // 왼쪽 상단
      { x: 25, y: 20, z: -15 },   // 오른쪽 상단
      { x: -25, y: -20, z: -18 }, // 왼쪽 하단
      { x: 25, y: -20, z: -20 },  // 오른쪽 하단
    ];
    
    // 다양한 geometry 타입
    const geometries = [
      new THREE.TetrahedronGeometry(3.0, 0),
      new THREE.OctahedronGeometry(2.5, 0),
      new THREE.IcosahedronGeometry(2.5, 0),
      new THREE.TorusGeometry(2.5, 0.5, 16, 50)
    ];
    
    for (let i = 0; i < 4; i++) {
      const geometry = geometries[i % geometries.length];
      const material = new THREE.MeshPhongMaterial({
        color: color,
        wireframe: true,
        transparent: true,
        opacity: 0.5
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = positions[i].x;
      mesh.position.y = positions[i].y;
      mesh.position.z = positions[i].z;
      
      // 각 객체에 초기 이동 방향과 속도 속성 추가
      mesh.userData = { 
        moveX: (Math.random() - 0.5) * 0.01,
        moveY: (Math.random() - 0.5) * 0.01,
        moveZ: (Math.random() - 0.5) * 0.005
      };
      
      scene.add(mesh);
      objects.push(mesh);
    }
    
    // 애니메이션 설정
    const animate = () => {
      requestAnimationFrame(animate);
      
      objects.forEach((obj) => {
        // 회전 움직임
        obj.rotation.x += 0.003;
        obj.rotation.y += 0.005;
        
        // 객체 위치 이동
        obj.position.x += obj.userData.moveX;
        obj.position.y += obj.userData.moveY;
        obj.position.z += obj.userData.moveZ;
        
        // 화면 경계에 닿으면 방향 바꾸기
        if (Math.abs(obj.position.x) > 25) {
          obj.userData.moveX *= -1;
        }
        if (Math.abs(obj.position.y) > 25) {
          obj.userData.moveY *= -1;
        }
        if (Math.abs(obj.position.z) > 25) {
          obj.userData.moveZ *= -1;
        }
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // 화면 크기 변경 시 대응
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // 컴포넌트 언마운트 시 정리
    return () => {
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50/70 to-white/70 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%232563eb%27%20fill-opacity%3D%270.05%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] relative">
      <div 
        ref={containerRef} 
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{ pointerEvents: 'none' }}
      />
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="inline-block pb-2 border-b-4 border-primary">기술 & 전문성</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            다양한 프로젝트에서 쌓은 제 전문 기술입니다.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 border-primary/20 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Code className="h-5 w-5 text-primary mr-3" />
                사업 스킬
              </h3>
              
              {skills.development.map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      custom={skill.level}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={animateProgress}
                    />
                  </div>
                </div>
              ))}
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8 border-accent/20 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <PaintbrushVertical className="h-5 w-5 text-accent mr-3" />
                운영 & 세부 스킬
              </h3>
              
              {skills.design.map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-accent">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent rounded-full"
                      custom={skill.level}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={animateProgress}
                    />
                  </div>
                </div>
              ))}
            </Card>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {skills.stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 bg-card rounded-xl shadow-md border border-primary/10 transition-transform hover:scale-105"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
