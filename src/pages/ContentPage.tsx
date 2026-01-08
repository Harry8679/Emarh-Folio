import { motion } from 'framer-motion';
import { Youtube, Music2, Instagram, ExternalLink, Play, Users, BookOpen } from 'lucide-react';
import { socialLinks } from '@/data/portfolio';

const ContentPage = () => {
  const platforms = [
    {
      name: 'YouTube',
      icon: <Youtube className="w-12 h-12" />,
      color: 'from-red-500 to-red-600',
      description: 'Cours de mathématiques et tutoriels de programmation',
      stats: '5K+ abonnés',
      url: socialLinks.find((s) => s.platform === 'youtube')?.url || '#',
      topics: ['Mathématiques', 'Algorithmique', 'Développement Web', 'React.js'],
    },
    {
      name: 'TikTok',
      icon: <Music2 className="w-12 h-12" />,
      color: 'from-gray-800 to-gray-900',
      description: 'Tips de programmation et astuces mathématiques en format court',
      stats: '2K+ abonnés',
      url: socialLinks.find((s) => s.platform === 'tiktok')?.url || '#',
      topics: ['Tips Coding', 'Astuces Maths', 'DevTips', 'Quick Tutorials'],
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-12 h-12" />,
      color: 'from-purple-500 via-pink-500 to-orange-500',
      description: 'Contenu visuel sur le développement et l\'éducation',
      stats: '1.5K+ abonnés',
      url: socialLinks.find((s) => s.platform === 'instagram')?.url || '#',
      topics: ['Code Snippets', 'Tech News', 'Learning Journey', 'Behind the Scenes'],
    },
  ];

  const subjects = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Mathématiques',
      level: 'Collège à Supérieur',
      topics: ['Algèbre', 'Géométrie', 'Analyse', 'Probabilités', 'Statistiques'],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Programmation',
      level: 'Débutant à Avancé',
      topics: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Algorithmes'],
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: 'Développement Web',
      level: 'Tous niveaux',
      topics: ['HTML/CSS', 'Frontend', 'Backend', 'Bases de données', 'APIs'],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Formations & Contenus
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Apprenez les mathématiques et la programmation à travers mes cours et tutoriels
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plateformes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mes Plateformes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Retrouvez-moi sur différentes plateformes pour apprendre à votre rythme
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div
                  className={`w-20 h-20 bg-linear-to-r ${platform.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform`}
                >
                  {platform.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  {platform.name}
                </h3>

                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                    {platform.stats}
                  </span>
                </div>

                <p className="text-gray-600 text-center mb-6">{platform.description}</p>

                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {platform.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  <span>Voir la chaîne</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Matières enseignées */}
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
              Matières Enseignées
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des cours structurés pour progresser à votre rythme
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  {subject.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{subject.title}</h3>
                <p className="text-primary-600 font-semibold mb-4">{subject.level}</p>
                <ul className="space-y-2">
                  {subject.topics.map((topic) => (
                    <li key={topic} className="flex items-center space-x-2 text-gray-600">
                      <div className="w-2 h-2 bg-primary-500 rounded-full" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approche pédagogique */}
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
              Mon Approche Pédagogique
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthode éprouvée pour rendre les concepts complexes accessibles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Apprentissage par la pratique',
                description:
                  'Des exercices concrets et des projets réels pour ancrer les connaissances',
              },
              {
                title: 'Explications claires',
                description:
                  'Concepts expliqués simplement avec des exemples du quotidien',
              },
              {
                title: 'Progression structurée',
                description:
                  'Un parcours d\'apprentissage logique du niveau débutant à avancé',
              },
              {
                title: 'Support continu',
                description:
                  'Réponses aux questions et accompagnement dans votre progression',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-r from-primary-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Commencez à apprendre aujourd'hui
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Rejoignez des milliers d'étudiants qui progressent en mathématiques et en programmation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={socialLinks.find((s) => s.platform === 'youtube')?.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                <Youtube className="w-6 h-6 mr-2" />
                Voir la chaîne YouTube
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContentPage;