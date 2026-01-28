import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, useGLTF, useAnimations, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

// --- User Provided GLTF Model ---
const HelicopterModel = () => {
    const group = useRef();
    const { scene, animations } = useGLTF('/radio_helicopter.glb');
    const { actions } = useAnimations(animations, group);

    // Play 'FLY' animation to assemble/animate the model
    useEffect(() => {
        if (actions) {
            // Try to find 'FLY' or fallback to the first one
            const actionName = Object.keys(actions).find(name => name.toUpperCase() === 'FLY') || Object.keys(actions)[0];

            // Log if specific animation found vs fallback
            // console.log("Playing animation:", actionName);

            const action = actions[actionName];

            if (action) {
                action.reset().fadeIn(0.5).play();
            }
        }
        return () => {
            // Cleanup
        };
    }, [actions]);

    // Use scene directly (no clone needed for singleton) to ensure animations bind correctly
    // const clonedScene = React.useMemo(() => scene.clone(), [scene]);

    return (
        <group ref={group} dispose={null}>
            <primitive object={scene} />
        </group>
    );
};

// --- Scene Container with Logic ---
const SceneContent = ({ activeSection, isMobile, isLaptop }) => {
    const heliRef = useRef();

    useFrame((state) => {
        if (!heliRef.current) return;

        // Define target positions based on section
        let targetPos = { x: 0, y: 0, z: 0 };
        let targetRot = { x: 0, y: -0.5, z: 0 }; // Default rotation
        let targetScale = 0.5; // Base scale

        if (isMobile) {
            // Mobile Logic: Only visible on Home
            if (activeSection === 'home' || activeSection === '') {
                targetPos = { x: 0, y: 0.8, z: 0 }; // Top center
                targetScale = 1.2; // Increased for mobile visibility
            } else {
                targetPos = { x: 0, y: 10, z: -5 }; // Fly away up
                targetScale = 0; // Shrink/Hide
            }
        } else if (isLaptop) {
            // Laptop / Small Desktop Logic (13-inch screens)
            switch (activeSection) {
                case 'about':
                    targetPos = { x: 5.5, y: 0.7, z: 0 }; // Right side, closer
                    targetRot = { x: 0.1, y: -0.8, z: 0.1 };
                    targetScale = 1.0;
                    break;
                case 'experience':
                    targetPos = { x: -5.5, y: 0.7, z: 0 }; // Top Left, closer
                    targetRot = { x: 0, y: 0.8, z: -0.1 };
                    targetScale = 1.1;
                    break;
                case 'work':
                    // Prevent going off screen bottom-right
                    targetPos = { x: 5.8, y: 1.5, z: 1 };
                    targetRot = { x: 0.1, y: -0.9, z: 0.1 };
                    targetScale = 0.8;
                    break;
                case 'contact':
                    targetPos = { x: 0, y: 0.5, z: 3 };
                    targetRot = { x: 0.1, y: 0, z: 0 };
                    targetScale = 0.9;
                    break;
                case 'home':
                default:
                    targetPos = { x: 0, y: 0.7, z: 0 };
                    targetRot = { x: 0.2, y: -0.3, z: 0 };
                    targetScale = 1.2;
            }
        } else {
            // Desktop Logic (>1400px)
            switch (activeSection) {
                case 'about':
                    targetPos = { x: 5.5, y: 0.8, z: 0 };
                    targetRot = { x: 0.1, y: -0., z: 0.1 };
                    targetScale = 1.2;
                    break;
                case 'experience':
                    targetPos = { x: -6, y: 0.2, z: 0 };
                    targetRot = { x: 0, y: 0.8, z: -0.1 };
                    targetScale = 1.5;
                    break;
                case 'work':
                    targetPos = { x: 6.5, y: 1.5, z: 1 };
                    targetRot = { x: 0.1, y: -0.9, z: 0.1 };
                    targetScale = 1;
                    break;
                case 'contact':
                    targetPos = { x: 0, y: 0.5, z: 3 };
                    targetRot = { x: 0.1, y: 0, z: 0 };
                    targetScale = 1.0;
                    break;
                case 'home':
                default:
                    targetPos = { x: 0, y: 0.7, z: 0 };
                    targetRot = { x: 0.2, y: -0.3, z: 0 };
                    targetScale = 1.5;
            }
        }

        // --- Mouse Interaction (Parallax/Tilt) ---
        // Modify targets based on mouse position to give "drag-like" feel
        if (!isMobile) {
            const mouseX = state.mouse.x; // -1 to 1
            const mouseY = state.mouse.y; // -1 to 1

            // Look towards mouse
            targetRot.y += mouseX * 0.5;
            targetRot.x -= mouseY * 0.3;
            targetRot.z -= mouseX * 0.2; // Bank turn

            // Move slightly towards mouse
            targetPos.x += mouseX * (isLaptop ? 1.0 : 1.5); // Less movement on small screens
            targetPos.y += mouseY * (isLaptop ? 1.0 : 1.5);
        }

        // Smoothly interpolate current position to target
        heliRef.current.position.x = THREE.MathUtils.lerp(heliRef.current.position.x, targetPos.x, 0.04);
        heliRef.current.position.y = THREE.MathUtils.lerp(heliRef.current.position.y, targetPos.y, 0.04);
        heliRef.current.position.z = THREE.MathUtils.lerp(heliRef.current.position.z, targetPos.z, 0.04);

        heliRef.current.rotation.x = THREE.MathUtils.lerp(heliRef.current.rotation.x, targetRot.x, 0.05);
        heliRef.current.rotation.y = THREE.MathUtils.lerp(heliRef.current.rotation.y, targetRot.y, 0.05);
        heliRef.current.rotation.z = THREE.MathUtils.lerp(heliRef.current.rotation.z, targetRot.z, 0.05);

        const currentScale = heliRef.current.scale.x;
        const newScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.04);
        heliRef.current.scale.setScalar(newScale);
    });

    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <group ref={heliRef}>
                <PresentationControls
                    global={false} // Only spin when hovering this mesh
                    cursor={true}
                    snap={true} // Snap back to original orientation
                    speed={2}
                    zoom={1}
                    rotation={[0, 0, 0]}
                    polar={[-Math.PI / 2, Math.PI / 2]} // Vertical limits
                    azimuth={[-Infinity, Infinity]} // Horizontal limits
                >
                    <HelicopterModel />
                </PresentationControls>
            </group>
        </Float>
    );
};

// Preload the model
useGLTF.preload('/radio_helicopter.glb');

const HelicopterScene = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobile, setIsMobile] = useState(false);
    const [isLaptop, setIsLaptop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setIsMobile(width < 768);
            // Consider "Laptop" as either medium width OR short height (common in small laptops)
            // But exclude mobile
            setIsLaptop(width >= 768 && (width < 1440 || height < 800));
        };
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            setActiveSection(hash || 'home');
        };

        handleResize(); // Initial check
        handleHashChange(); // Initial check

        window.addEventListener('resize', handleResize);
        window.addEventListener('hashchange', handleHashChange);
        window.addEventListener('popstate', handleHashChange); // Handle back button

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('hashchange', handleHashChange);
            window.removeEventListener('popstate', handleHashChange);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            {/* Z-50 to be on top, but pointer-events-none to click through */}
            <Canvas
                camera={{ position: [0, 0, 10], fov: 45 }}
                style={{ pointerEvents: 'none' }}
            >
                <ambientLight intensity={1.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} castShadow />
                <pointLight position={[-10, -10, -5]} intensity={1} color="#FFD700" />

                <SceneContent activeSection={activeSection} isMobile={isMobile} isLaptop={isLaptop} />

                {/* Environment for realistic reflections if the model supports it */}
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default HelicopterScene;
