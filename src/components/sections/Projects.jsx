
import { useState } from "react";
import { RevealOnScroll } from "../scroll/RevealOnScroll";
import { techIcons } from "./techIcons";
import monarca1 from "../../assets/monarca/Data_security_01.jpg";
import appcotiza1 from "../../assets/appcotiza/appcotiza_1.png";
import appcotiza2 from "../../assets/appcotiza/appcotiza_2.jpeg";
import appcotiza3 from "../../assets/appcotiza/appcotiza_3.jpeg";
import vendedorpaisa1 from "../../assets/vendedorpaisa/vendedorpaisa_1.png";
import vendedorpaisa2 from "../../assets/vendedorpaisa/vendedorpaisa_2.png";
import vendedorpaisa3 from "../../assets/vendedorpaisa/vendedorpaisa_3.jpeg";
import fitneed1 from "../../assets/fitneed/fitneed_1.jpg";
import sdd1 from "../../assets/servidor_de_datos/sdd_1.jpg";
import wordpress1 from "../../assets/wordpress/wordpress_1.PNG";
import wordpress2 from "../../assets/wordpress/wordpress_2.PNG";
import wordpress3 from "../../assets/wordpress/wordpress_3.PNG";
import wordpress4 from "../../assets/wordpress/wordpress_4.PNG";
import wordpress5 from "../../assets/wordpress/wordpress_5.PNG";
import byhotels1 from "../../assets/byhotels/byhotels_1.PNG"
import byhotels2 from "../../assets/byhotels/byhotels_2.PNG"
import byhotels3 from "../../assets/byhotels/byhotels_3.PNG"
import byhotels4 from "../../assets/byhotels/byhotels_4.PNG"
import byhotels5 from "../../assets/byhotels/byhotels_5.PNG"
import mypencil1 from "../../assets/mypencil/mypencil_1.PNG"
import mypencil2 from "../../assets/mypencil/mypencil_2.PNG"
import mypencil3 from "../../assets/mypencil/mypencil_3.PNG"
import correo1 from "../../assets/envio_correos/correo.jpg"




const projects = [
  {
    title: "Monarca",
    image: monarca1,
    description: "App y plataforma web para vigilancia mediante rondas NFC.",
    longDescription: "Es una aplicación que permite a los guardas de seguridad realizar el seguimiento de sus rondas mediante tecnología NFC desde el teléfono móvil. De forma paralela, cuenta con una plataforma web administrativa donde el administrador puede supervisar todas las actividades, acceder a estadísticas en formato PDF y gestionar el envío de correos directamente desde la plataforma.",
    tech: ["React", "React-Native", "Javascript", "Node", "Express", "Mysql", "VPS", "HTML5", "CSS3"],
    images: [
      monarca1,
    ]
  },
  {
    title: "Appcotiza",
    image: appcotiza1,
    description: "Web para cotizaciones personalizables con visualización y edición de modelos 3D y generación automática de planos 2D.",
    longDescription: "Página web que permite realizar cotizaciones de una forma facil y rapida una interfaz 100% personalizable, ademas cuenta con la opción de visualizar, editar y eliminar modelos 3d con sus respectivas texturas y poder visualizarlo en un plano 2D que se genera de forma automática.",
    tech: ["React", "Node", "Javascript","Express", "Mysql", "VPS", "HTML5", "CSS3", "Threejs"],
    images: [
      appcotiza1,
      appcotiza2,
      appcotiza3
    ]
  },
  {
    title: "VendedorPaisa",
    image: vendedorpaisa1,
    description: "Aplicación web donde se pueden alojar una tienda virtual y mostrar productos.",
    longDescription: "Aplicación web orientada a la gestión de negocios, que permite a los comerciantes publicar su catálogo de productos y a los clientes realizar pedidos de forma digital. La plataforma centraliza la administración de pedidos mediante un panel intuitivo y personalizable, facilitando la organización y el control del negocio.",
    tech: ["Next", "Mysql", "Typescript","VPS", "HTML5", "CSS3"],
    images: [
      vendedorpaisa1,
      vendedorpaisa2,
      vendedorpaisa3
    ]
  },
  {
    title: "Fitneed",
    image: fitneed1,
    description: "Landing page para un gimnasio.",
    longDescription: "Aplicación web orientada a la gestión de negocios, que permite a los comerciantes publicar su catálogo de productos y a los clientes realizar pedidos de forma digital. La plataforma centraliza la administración de pedidos mediante un panel intuitivo y personalizable, facilitando la organización y el control del negocio.",
    tech: ["Vite", "VPS", "HTML5", "CSS3"],
    images: [
      fitneed1
    ]
  },
  {
    title: "Servidor de procesamiento",
    image: sdd1,
    description: "Servidor de procesamiento de datos.",
    longDescription: "Participé en la actualización y modernización de un servidor de datos mono radar, migrando su arquitectura a Python y Go. Además, se desarrolló un visualizador web en React para la representación y análisis de los datos de forma clara e interactiva.",
    tech: ["Python", "Go", "Node", "Express", "React"],
    images: [
      sdd1
    ]
  },
  {
    title: "Wordpress y Webflow",
    image: wordpress2,
    description: "Lading page informativas.",
    longDescription: "Participé en la creación y desarrollo de landing pages utilizando herramientas como WordPress y Webflow, enfocadas en ofrecer una experiencia visual atractiva y funcional.",
    tech: ["WordPress", "Webflow", "Elementor"],
    images: [
      wordpress2,
      wordpress1,
      wordpress3,
      wordpress4,
      wordpress5
    ]
  },
  {
    title: "ByHotels",
    image: byhotels1,
    author: "me",
    description: "Lading page sobre hoteles.",
    longDescription: "Landing page diseñada para una cadena de hoteles, con el objetivo de promocionar la marca y sus principales servicios mediante una interfaz visualmente atractiva y fácil de navegar.",
    tech: ["Next", "TailwindCSS", "Clerk", "Typescript"],
    images: [
      byhotels1,
      byhotels2,
      byhotels3,
      byhotels4,
      byhotels5
    ]
  },
  {
    title: "Mypencil",
    image: mypencil1,
    author: "me",
    description: "Blog.",
    longDescription: "Pagina web donde se pueden crear y publicar blogs.",
    tech: ["Next", "TailwindCSS", "Clerk"],
    images: [
      mypencil1,
      mypencil2,
      mypencil3
    ]
  },
    {
    title: "Servidor de envio de correos",
    image: correo1,
    author: "me",
    description: "Servidor de envio de correos.",
    longDescription: "Servidor para enviar correos adaptable para cualquier aplicacion.",
    tech: ["Nest", "TailwindCSS", "Typescript"],
    images: [
correo1
    ]
  }
];

function ProjectModal({ project, onClose, currentImg, setCurrentImg }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-lg w-full relative shadow-lg">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-blue-500 text-2xl">&times;</button>
        <h3 className="text-2xl font-bold mb-2 text-center text-gray-800 dark:text-gray-200">{project.title}</h3>
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
        <div className="max-w-8xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Mi Participacion En Proyectos y Proyectos Propios</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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

