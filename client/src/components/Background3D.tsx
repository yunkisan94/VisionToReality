import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 씬, 카메라, 렌더러 설정
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true // 배경을 투명하게 설정
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 조명 설정
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // 3D 오브젝트 생성
    const objects: THREE.Mesh[] = [];
    
    // 다양한 geometry 타입 배열
    const geometries = [
      new THREE.IcosahedronGeometry(1.3, 0),
      new THREE.TorusGeometry(0.9, 0.3, 16, 100),
      new THREE.OctahedronGeometry(1.2, 0),
      new THREE.TetrahedronGeometry(2, 0), // 정사면체 크기 더 증가
      new THREE.BoxGeometry(2, 2, 2)  // 정육면체 크기 더 증가
    ];
    
    // 파스텔 톤 색상 사용
    const color = 0xffa0c0; // 파스텔 핑크

    // 5개의 다양한 3D 객체 생성
    for (let i = 0; i < 5; i++) {
      const geometry = geometries[i % geometries.length];
      const material = new THREE.MeshPhongMaterial({
        color: color,
        wireframe: true,
        transparent: true,
        opacity: 0.8
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = (Math.random() - 0.5) * 15;
      mesh.position.y = (Math.random() - 0.5) * 15;
      mesh.position.z = (Math.random() - 0.5) * 15;
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.scale.setScalar(Math.random() * 1.5 + 1.0); // 더 큰 크기로 조정
      scene.add(mesh);
      objects.push(mesh);
    }

    // 애니메이션 설정
    const animate = () => {
      requestAnimationFrame(animate);

      objects.forEach((obj) => {
        obj.rotation.x += 0.005;
        obj.rotation.y += 0.01;
      });

      // 카메라 이동 애니메이션
      camera.position.x = Math.sin(Date.now() * 0.0003) * 2;
      camera.position.y = Math.cos(Date.now() * 0.0002) * 2;
      camera.lookAt(scene.position);

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
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
}