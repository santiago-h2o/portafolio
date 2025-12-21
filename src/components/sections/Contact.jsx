import { useState } from "react";
import { RevealOnScroll } from "../scroll/RevealOnScroll"
import emailjs from 'emailjs-com';
import { set } from "zod";

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((res) => {
            alert("Mensaje enviado correctamente!")
            setFormData({
                name: "",
                email: "",
                message: ""
            })
            // e.target.reset()
        }).catch((err) => alert("Error al enviar el mensaje, intentalo nuevamente."))
    
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Ponte en contacto</h2>
                    <form action="" className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={(e => setFormData({ ...formData, name: e.target.value }))}
                                placeholder="Nombre..."
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={(e => setFormData({ ...formData, email: e.target.value }))}
                                placeholder="example@gmail.com"
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                        </div>

                        <div className="relative">
                            <textarea
                                type="message"
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                onChange={(e => setFormData({ ...formData, message: e.target.value }))}
                                rows={5}
                                placeholder="Tu mensaje..."
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                        </div>

                        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Enviar
                        </button>

                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}

