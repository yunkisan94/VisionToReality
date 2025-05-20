import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);

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
    camera.position.z = 15; // 카메라 위치를 더 멀리해서 큰 객체들이 잘 보이게

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true // 배경을 투명하게 설정
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 조명 설정 - 더 밝게
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // 3D 오브젝트 생성
    const objects: THREE.Mesh[] = [];
    
    // 다양한 geometry 타입 배열 - 훨씬 더 큰 크기로
    const geometries = [
      new THREE.IcosahedronGeometry(4.0, 0),
      new THREE.TorusGeometry(3.5, 0.8, 16, 100),
      new THREE.OctahedronGeometry(4.5, 0),
      new THREE.TetrahedronGeometry(5.5, 0), // 정사면체 크기 대폭 증가
      new THREE.BoxGeometry(5.0, 5.0, 5.0)  // 정육면체 크기 대폭 증가
    ];
    
    // 파스텔 블루 톤 색상 사용
    const color = 0x80b0ff; // 파스텔 블루

    // 5개의 다양한 3D 객체 생성 - 더 넓게 분포하고 화면 중앙에 가깝게
    const positions = [
      { x: -20, y: 5, z: -20 },
      { x: 20, y: -8, z: -15 },
      { x: 8, y: 15, z: -25 },
      { x: -12, y: -15, z: -18 },
      { x: 15, y: -5, z: -30 }
    ];
    
    for (let i = 0; i < 5; i++) {
      const geometry = geometries[i % geometries.length];
      const material = new THREE.MeshPhongMaterial({
        color: color,
        wireframe: true,
        transparent: true,
        opacity: 0.7
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = positions[i].x;
      mesh.position.y = positions[i].y;
      mesh.position.z = positions[i].z;
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.scale.setScalar(Math.random() * 1.2 + 1.0); // 균형 잡힌 크기
      
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
        
        // 객체 위치 이동 (userData에 저장된 방향과 속도 사용)
        obj.position.x += obj.userData.moveX;
        obj.position.y += obj.userData.moveY;
        obj.position.z += obj.userData.moveZ;
        
        // 화면 경계에 닿으면 방향 바꾸기
        if (Math.abs(obj.position.x) > 18) {
          obj.userData.moveX *= -1;
        }
        if (Math.abs(obj.position.y) > 15) {
          obj.userData.moveY *= -1;
        }
        if (Math.abs(obj.position.z) > 18) {
          obj.userData.moveZ *= -1;
        }
      });

      // 카메라 이동 애니메이션 - 더 부드럽게
      camera.position.x = Math.sin(Date.now() * 0.0002) * 3;
      camera.position.y = Math.cos(Date.now() * 0.00015) * 2;
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
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
}