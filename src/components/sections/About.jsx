import { RevealOnScroll } from "../scroll/RevealOnScroll";
import { techIcons } from "./techIcons";

export const About = () => {

    const frontendSkills = ["React", "React-Native", "Vite", "Next", "Typescript", "Javascript", "TailwindCSS", "Bootstrap", "HTML5", "CSS3", "PHP"];
    const backendSkills = ["Node", "Express", "Python", "Nest", "Go", "Mysql", "VPS"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>

                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Sobre mi</h2>

                    <div className="glass rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Soy un desarrollador Web FullStack apasionado por el aprendizaje continuo y la programación. Me enfoco en mejorar constantemente mis habilidades, fortalecer lo que ya conozco y aplicar ese conocimiento de forma eficiente en cada proyecto. Aprovecho mis experiencias previas para aportar valor real, manteniéndome siempre en búsqueda de nuevos retos que me permitan crecer y evolucionar como profesional.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">{frontendSkills.map((skill, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {techIcons[skill] || null}{skill}
                                    </span>
                                ))}</div>
                            </div>
                            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">{backendSkills.map((skill, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {techIcons[skill] || null}{skill}
                                    </span>
                                ))}</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">👨‍🎓Educacion</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>Analisis y Desarrollo en Sistemas de Informacion</strong> - Servicio Publico de Aprendizaje [2019-2021]
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🖥️Experiencia</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4><strong>Testers de Software</strong> - [2021-2022]</h4>
                                    <p>
                                        Mi labor principal ha consistido en realizar pruebas
                                        exhaustivas para identificar errores, fallos y anomalías, y en
                                        proporcionar reportes detallados a los equipos de desarrollo.
                                    </p>
                                </div>

                                <div>
                                    <h4><strong>Desarrollador Full-Stack</strong> - [2022-2025]</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>Creación, actualización y mantenimiento de
                                            funcionalidades para aplicaciones y páginas web.
                                        </li>
                                        <li>Diseño de interfaces centradas en la experiencia
                                            de usuario (UX) y una apariencia atractiva (UI).
                                        </li>
                                        <li>Aplicación de buenas prácticas en el
                                            mantenimiento de plataformas digitales.
                                        </li>
                                        <li>Desarrollo y personalización de sitios web
                                            utilizando CMS como WordPress y Webflow,
                                            adaptando las funcionalidades a las necesidades
                                            del proyecto.
                                        </li>
                                        <li>Configuración de servidores VPS, incluyendo:
                                            - Uso de la línea de comandos.
                                            - Instalación y configuración de plataformas
                                            - webs en servidores VPS.
                                            - Instalación de certificados SSL.
                                        </li>
                                        <li>Implementación de procesos de Integración
                                            Continua (CI) y Despliegue Continuo (CD) en
                                            producción mediante GitHub Actions.
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>

        </section>
    )
}

