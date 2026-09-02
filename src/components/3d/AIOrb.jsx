import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function NeuralNetwork() {
  const group = useRef();

  const nodes = useMemo(() => {
    const points = [];

    for (let i = 0; i < 42; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / 42);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const radius = 2.25;

      points.push([
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi),
      ]);
    }

    return points;
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
  });

  return (
    <group ref={group}>
      {/* Neural nodes */}
      {nodes.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.055, 12, 12]} />
          <meshStandardMaterial
            emissive="#8b5cf6"
            emissiveIntensity={4}
            color="#c4b5fd"
          />
        </mesh>
      ))}

      {/* Neural connections */}
      {nodes.map((start, i) =>
        nodes.slice(i + 1).map((end, j) => {
          const distance = new THREE.Vector3(...start).distanceTo(
            new THREE.Vector3(...end)
          );

          if (distance > 1.25) return null;

          const midpoint = new THREE.Vector3(...start)
            .add(new THREE.Vector3(...end))
            .multiplyScalar(0.5);

          const direction = new THREE.Vector3(...end).sub(
            new THREE.Vector3(...start)
          );

          const length = direction.length();

          const quaternion = new THREE.Quaternion();

          quaternion.setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            direction.normalize()
          );

          return (
            <mesh
              key={`${i}-${j}`}
              position={midpoint}
              quaternion={quaternion}
            >
              <cylinderGeometry args={[0.006, 0.006, length, 6]} />
              <meshBasicMaterial
                color="#8b5cf6"
                transparent
                opacity={0.25}
              />
            </mesh>
          );
        })
      )}

      {/* Core */}
      <mesh>
        <sphereGeometry args={[1.05, 32, 32]} />

        <meshStandardMaterial
          color="#12091f"
          emissive="#6d28d9"
          emissiveIntensity={1.8}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[0.65, 32, 32]} />

        <meshBasicMaterial
          color="#a855f7"
          transparent
          opacity={0.18}
        />
      </mesh>
    </group>
  );
}

function AIOrb() {
  return (
    <div className="h-[500px] w-full">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 6]}
          fov={45}
        />

        <ambientLight intensity={0.5} />

        <pointLight
          position={[3, 3, 4]}
          intensity={25}
          color="#8b5cf6"
        />

        <pointLight
          position={[-3, -2, 2]}
          intensity={12}
          color="#4f46e5"
        />

        <Float
          speed={1.2}
          rotationIntensity={0.15}
          floatIntensity={0.3}
        >
          <NeuralNetwork />
        </Float>
      </Canvas>
    </div>
  );
}

export default AIOrb;