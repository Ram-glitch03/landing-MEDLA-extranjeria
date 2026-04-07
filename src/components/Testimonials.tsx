import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sandra Arellano",
    role: "Cliente de Extranjería",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content: "Los mejores abogados en temas de extranjería. Fueron muy profesionales, honestos y realistas respecto a mi trámite, y aún con lo complejo que era mi caso, su estrategia hizo que el día de hoy mi permiso fuera aprobado.",
  },
  {
    name: "Rodrigo González",
    role: "Cliente Laboral y Migratorio",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    content: "La asesoría que recibí fue excelente. Es un experto que tiene el conocimiento necesario para brindarte la orientación que requieres. Me ayudó con asuntos laborales y migratorios.",
  },
  {
    name: "Nydia Rodríguez",
    role: "Cliente de Residencia",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    content: "Nos ayudaron con todo el proceso de estancia desde el principio al final. Un equipo comprometido que te acompaña en cada paso del camino.",
  },
  {
    name: "Marianne Castellanos",
    role: "Cliente de Extranjería",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    content: "Bastante amables y muy eficaces en su respuesta y atención. Recomiendo ampliamente a MEDLA para cualquier trámite de extranjería.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-bg-secondary text-brand-text/60 text-sm font-medium mb-4 uppercase tracking-wider">
              Testimonios
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-text">
              La confianza de nuestros clientes es nuestro mayor logro
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-bg-secondary p-8 rounded-3xl border border-transparent hover:border-brand-border transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <p className="text-xl text-brand-text/80 mb-8 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-bg"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-brand-text">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-brand-text/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
