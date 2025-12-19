
import { useState } from "react";
import { RevealOnScroll } from "../scroll/RevealOnScroll";
import { techIcons } from "./techIcons";

const projects = [
  {
    title: "Proyecto 1",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "Breve descripción del proyecto 1.",
    longDescription: "Descripción más amplia del proyecto 1. Aquí puedes detallar funcionalidades, tecnologías usadas, retos, aprendizajes, etc.",
    tech: ["React", "Node", "AWS", "Docker"],
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    title: "Proyecto 2",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
    description: "Breve descripción del proyecto 2.",
    longDescription: "Descripción más amplia del proyecto 2. Aquí puedes detallar funcionalidades, tecnologías usadas, retos, aprendizajes, etc.",
    tech: ["Vue", "Firebase", "Tailwind"],
    images: [
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
    ]
  }
];

function ProjectModal({ project, onClose, currentImg, setCurrentImg }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-lg w-full relative shadow-lg">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-blue-500 text-2xl">&times;</button>
        <h3 className="text-2xl font-bold mb-2 text-center">{project.title}</h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300 text-center">{project.longDescription}</p>
        <div className="flex flex-col items-center">
          <div className="relative w-full flex items-center justify-center mb-2">
            <button onClick={() => setCurrentImg((currentImg - 1 + project.images.length) % project.images.length)} className="absolute left-0 px-2 py-1 text-2xl">&#8592;</button>
            <img src={project.images[currentImg]} alt="Proyecto" className="rounded-lg max-h-56 object-contain mx-auto" />
            <button onClick={() => setCurrentImg((currentImg + 1) % project.images.length)} className="absolute right-0 px-2 py-1 text-2xl">&#8594;</button>
          </div>
          <div className="flex gap-2 justify-center mb-2">
            {project.images.map((img, idx) => (
              <button key={idx} onClick={() => setCurrentImg(idx)} className={`w-3 h-3 rounded-full ${currentImg === idx ? 'bg-blue-500' : 'bg-gray-300'}`}></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const Projects = () => {
  const [modalProject, setModalProject] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  const openModal = (project) => {
    setModalProject(project);
    setCurrentImg(0);
  };
  const closeModal = () => setModalProject(null);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer bg-white/5 dark:bg-gray-800"
                onClick={() => openModal(project)}
              >
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                      {techIcons[tech] || null}{tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-400 hover:text-blue-300 transition-colors my-4">Ver Proyecto ➜</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ProjectModal
          project={modalProject}
          onClose={closeModal}
          currentImg={currentImg}
          setCurrentImg={setCurrentImg}
        />
      </RevealOnScroll>
    </section>
  );
}

