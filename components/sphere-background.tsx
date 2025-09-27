import { Canvas } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei"
import { Suspense } from "react"

function FloatingSpheres() {
  return (
    <>
      {Array.from({ length: 12 }).map((_, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.3} floatIntensity={0.5}>
          <Sphere
            args={[0.05 + Math.random() * 0.15, 32, 32]}
            position={[(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4]}
          >
            <MeshDistortMaterial
              color={["#3b82f6", "#10b981", "#f59e0b"][i % 3]}
              transparent
              opacity={0.5 + Math.random() * 0.3}
              distort={0.2}
              speed={2 + Math.random() * 1}
            />
          </Sphere>
        </Float>
      ))}
    </>
  )
}

export default function SphereBackground() {
  return (
    <Canvas
      className="absolute inset-0 -z-10"
      camera={{ position: [0, 0, 8], fov: 45 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <FloatingSpheres />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Suspense>
    </Canvas>
  )
}