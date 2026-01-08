import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, GraduationCap, Sparkles } from 'lucide-react';
import * as THREE from 'three';
import { personalInfo, projects } from '@/data/portfolio';

// Composant 3D animé
const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  );
};

const HomePage = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section with 3D */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-blue-50 via-white to-purple-50">
        {/* Canvas 3D en arrière-plan */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary-600" />
                <span className="text-primary-600 font-semibold">
                  {personalInfo.availability}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Créons ensemble
                <span className="text-primary-600"> votre projet digital</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                {personalInfo.tagline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
                  Démarrer un projet
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/portfolio" className="btn-secondary inline-flex items-center justify-center">
                  Voir mon portfolio
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary-600">8+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">{projects.length}+</div>
                  <div className="text-sm text-gray-600">Projets réalisés</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">100%</div>
                  <div className="text-sm text-gray-600">Clients satisfaits</div>
                </div>
              </div>
            </motion.div>

            {/* Espace pour la sphère 3D (visible uniquement sur desktop) */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Services rapides */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Mes Services</h2>
            <p className="section-subtitle">
              Des solutions complètes pour tous vos besoins digitaux
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: 'Développement Web',
                description: 'Sites web modernes et performants avec React, Next.js et Symfony',
                color: 'bg-blue-500',
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: 'Applications Mobile',
                description: 'Apps natives et cross-platform avec React Native',
                color: 'bg-purple-500',
              },
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: 'Formation',
                description: 'Cours de mathématiques et programmation sur YouTube',
                color: 'bg-green-500',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets en vedette */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Projets en Vedette</h2>
            <p className="section-subtitle">
              Découvrez quelques-uns de mes projets les plus récents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="h-48 bg-gradient-to-br from-primary-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <Code className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech.name}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-primary inline-flex items-center">
              Voir tous les projets
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à lancer votre projet ?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Discutons de votre projet et transformons vos idées en réalité
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Contactez-moi
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;