import { motion } from 'framer-motion';
import { User, Code2, GraduationCap, Heart, Rocket, Target } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const AboutPage = () => {
  const values = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Excellence Technique',
      description: 'Code propre, maintenable et performant avec les meilleures pratiques',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion',
      description: 'Passionné par le développement et le partage de connaissances',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Toujours à la recherche de nouvelles technologies et solutions',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Orienté Résultats',
      description: 'Focus sur la valeur livrée et la satisfaction client',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="w-16 h-16 text-primary-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {personalInfo.name}
            </h1>
            <p className="text-2xl text-blue-100 mb-4">{personalInfo.title}</p>
            <p className="text-xl text-blue-100">{personalInfo.location}</p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Qui suis-je ?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed whitespace-pre-line">
              {personalInfo.bio}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident mon travail au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compétences Techniques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technologies et outils que je maîtrise
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {personalInfo.skills.map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-linear-to-r from-primary-50 to-purple-50 border-2 border-primary-200 text-primary-700 rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Double Casquette */}
      <section className="py-20 bg-linear-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Double Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Développeur et formateur : deux passions complémentaires
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white mb-4">
                <Code2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Développeur Full Stack
              </h3>
              <p className="text-gray-600 mb-4">
                8 ans d'expérience dans le développement d'applications web et mobiles.
                Spécialisé dans l'écosystème JavaScript (React, Node.js, TypeScript) et
                Symfony pour le backend.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Applications web performantes et responsive
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Applications mobiles React Native
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Architecture et conception de solutions
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center text-white mb-4">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Formateur Passionné
              </h3>
              <p className="text-gray-600 mb-4">
                Partage de connaissances en mathématiques et informatique via YouTube,
                TikTok, Instagram et cours particuliers. J'aime rendre les concepts
                complexes accessibles à tous.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Cours de mathématiques (collège à supérieur)
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Tutoriels de programmation sur YouTube
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  Mentorat de développeurs juniors
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;