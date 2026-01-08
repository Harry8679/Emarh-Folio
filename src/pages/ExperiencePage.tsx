import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Html } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, Calendar } from 'lucide-react';
import * as THREE from 'three';
import { experiences } from '@/data/portfolio';
import type { Experience as ExperienceType } from '@/types';

// Composant pour une planète d'expérience en 3D
interface PlanetProps {
  position: [number, number, number];
  color: string;
  experience: ExperienceType;
  onClick: () => void;
}

const ExperiencePlanet = ({ position, color, experience, onClick }: PlanetProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <group position={position}>
      <Sphere
        ref={meshRef}
        args={[1, 32, 32]}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.5}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </Sphere>
      
      {/* Label au-dessus de la planète */}
      <Html position={[0, 1.8, 0]} center>
        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg pointer-events-none whitespace-nowrap">
          <div className="text-sm font-bold text-gray-900">{experience.company}</div>
          <div className="text-xs text-gray-600">{experience.period}</div>
        </div>
      </Html>

      {/* Anneau autour de la planète */}
      {hovered && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.05, 16, 100]} />
          <meshBasicMaterial color={color} transparent opacity={0.5} />
        </mesh>
      )}
    </group>
  );
};

// Scène 3D principale
interface Scene3DProps {
  onExperienceClick: (experience: ExperienceType) => void;
}

const Experience3DScene = ({ onExperienceClick }: Scene3DProps) => {
  const positions: [number, number, number][] = [
    [-4, 0, 0],
    [0, 2, -2],
    [4, -1, 0],
  ];

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
      
      {experiences.map((exp, index) => (
        <ExperiencePlanet
          key={exp.id}
          position={positions[index] || [0, 0, 0]}
          color={exp.color}
          experience={exp}
          onClick={() => onExperienceClick(exp)}
        />
      ))}

      {/* Étoiles en arrière-plan */}
      <Stars />
      
      <OrbitControls
        enableZoom={true}
        minDistance={5}
        maxDistance={15}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

// Composant pour les étoiles
const Stars = () => {
  const count = 1000;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    // eslint-disable-next-line react-hooks/purity
    positions[i * 3] = (Math.random() - 0.5) * 50;
    // eslint-disable-next-line react-hooks/purity
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
    // eslint-disable-next-line react-hooks/purity
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]}/>
      </bufferGeometry>
      <pointsMaterial size={0.05} color="white" />
    </points>
  );
};

// Modal de détails d'expérience
interface ModalProps {
  experience: ExperienceType | null;
  onClose: () => void;
}

const ExperienceModal = ({ experience, onClose }: ModalProps) => {
  if (!experience) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header avec couleur de l'expérience */}
        <div
          className="p-8 text-white relative"
          style={{
            background: `linear-gradient(135deg, ${experience.color} 0%, ${experience.color}dd 100%)`,
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-3 mb-2">
            <Briefcase className="w-8 h-8" />
            <h2 className="text-3xl font-bold">{experience.company}</h2>
          </div>
          
          <p className="text-xl mb-2">{experience.position}</p>
          
          <div className="flex items-center space-x-2 text-white/90">
            <Calendar className="w-4 h-4" />
            <span>{experience.period}</span>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-8">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Description</h3>
            <p className="text-gray-600 leading-relaxed">{experience.description}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Missions principales</h3>
            <ul className="space-y-3">
              {experience.missions.map((mission, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: experience.color }}
                  />
                  <span className="text-gray-600">{mission}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies utilisées</h3>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="px-4 py-2 rounded-lg font-medium text-sm"
                  style={{
                    backgroundColor: `${tech.color}20`,
                    color: tech.color,
                    border: `2px solid ${tech.color}40`,
                  }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Page principale
const ExperiencePage = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceType | null>(null);

  return (
    <div className="min-h-screen pt-20 bg-linear-to-b from-gray-900 to-black">
      {/* Header */}
      <div className="relative z-10 text-center py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Mon Parcours
            <span className="text-primary-500"> en 3D</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Naviguez dans l'espace pour découvrir mes expériences professionnelles.
            Cliquez sur une planète pour explorer les détails.
          </p>
          <div className="flex items-center justify-center space-x-6 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
              <span>Cliquez pour détails</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
              <span>Rotation automatique</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Canvas 3D */}
      <div className="h-150 w-full">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <Experience3DScene onExperienceClick={setSelectedExperience} />
        </Canvas>
      </div>

      {/* Timeline alternative pour mobile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:hidden">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Vue chronologique
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-colors"
              onClick={() => setSelectedExperience(exp)}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: exp.color }}
                >
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  <p className="text-gray-300">{exp.position}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <ExperienceModal
            experience={selectedExperience}
            onClose={() => setSelectedExperience(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExperiencePage;