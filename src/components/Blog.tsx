import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Esenciales para tu Solicitud",
    description: "Prepara estos documentos clave para evitar retrasos y mejorar tus posibilidades de aprobación.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80",
    href: "#",
  },
  {
    title: "Guía de Visado de Estudiante",
    description: "Conoce los pasos clave y documentos esenciales para un visado de estudiante exitoso.",
    image: "https://images.unsplash.com/photo-1523050853063-bd8012fec20f?w=800&q=80",
    href: "#",
  },
  {
    title: "Evita el Rechazo de tu Visado",
    description: "Aprende qué causa los rechazos y cómo evitar los errores más frecuentes en tu solicitud.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
    href: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-bg-secondary text-brand-text/60 text-sm font-medium mb-4 uppercase tracking-wider">
              Recursos e Información
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-text">
              Mantente al día con las últimas novedades en extranjería
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {posts.map((post, index) => (
            <motion.a
              key={post.title}
              href={post.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-brand-bg-secondary rounded-3xl overflow-hidden border border-transparent hover:border-brand-border transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-brand-text mb-4 group-hover:text-brand-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-brand-text/70 mb-8 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center gap-2 font-semibold text-brand-text">
                  Leer más
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#blog"
            className="inline-flex items-center gap-2 bg-brand-muted text-brand-text px-8 py-4 rounded-xl font-semibold hover:bg-brand-border transition-colors"
          >
            Ver todas las publicaciones
          </a>
        </div>
      </div>
    </section>
  );
}
