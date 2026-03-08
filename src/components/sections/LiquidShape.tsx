import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

export function LiquidShape() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <>
            {/* Studio lighting environment to reflect heavily off the glass */}
            <Environment preset="city" />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#ff0055" />
            <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#6b21a8" />

            <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
                <mesh ref={meshRef} scale={1.8}>
                    <icosahedronGeometry args={[1, 1]} />
                    {/* Extremely high-end glass/liquid refraction material */}
                    <MeshTransmissionMaterial
                        backside
                        samples={16}
                        thickness={2}
                        chromaticAberration={0.4}
                        anisotropy={0.3}
                        distortion={0.5}
                        distortionScale={0.5}
                        temporalDistortion={0.2}
                        color="#ffffff"
                        attenuationColor="#ffffff"
                        attenuationDistance={1}
                        transmission={1}
                        roughness={0.1}
                        ior={1.5}
                    />
                </mesh>
            </Float>
        </>
    );
}
