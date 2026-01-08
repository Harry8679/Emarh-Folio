import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { Project } from '@/types';

type FilterType = 'all' | 'web' | 'mobile' | 'fullstack';

const PortfolioPage = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'Tous' },
    { value: 'web', label: 'Web' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'fullstack', label: 'Full Stack' },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Mon Portfolio
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Découvrez mes projets récents et mes réalisations en développement web et mobile
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtres */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterItem) => (
            <button
              key={filterItem.value}
              onClick={() => setFilter(filterItem.value)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                filter === filterItem.value
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filterItem.label}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Aucun projet trouvé pour ce filtre</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Carte de projet
interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card group hover:scale-[1.02] transition-transform duration-300"
    >
      {/* Image/Placeholder */}
      <div className="h-48 bg-gradient-to-br from-primary-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
        <Code className="w-16 h-16 text-white/80" />
        {project.featured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
            ⭐ En vedette
          </div>
        )}
      </div>

      {/* Contenu */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech.name}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: `${tech.color}20`,
                color: tech.color,
              }}
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* Liens */}
        <div className="flex items-center space-x-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Voir le site</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 font-medium"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;