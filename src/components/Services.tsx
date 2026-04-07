import { motion } from "motion/react";
import { GraduationCap, MapPin, Briefcase, Users, Home, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Visado de Estudiante",
    description: "Para quienes planean estudiar en el extranjero, desde escuelas de idiomas hasta universidades.",
    icon: GraduationCap,
    href: "#",
  },
  {
    title: "Visado de Turista",
    description: "Ideal para visitas de corta duración, vacaciones o viajes familiares y escapadas.",
    icon: MapPin,
    href: "#",
  },
  {
    title: "Visado de Trabajo",
    description: "Para profesionales que buscan empleo u oportunidades laborales en el exterior.",
    icon: Briefcase,
    href: "#",
  },
  {
    title: "Reagrupación Familiar",
    description: "Para la reunificación de familias o acompañamiento de familiares en el extranjero.",
    icon: Users,
    href: "#",
  },
  {
    title: "Residencia y Arraigo",
    description: "Para estancias de larga duración, traslados o procesos de arraigo social y laboral.",
    icon: Home,
    href: "#",
  },
  {
    title: "Inversor / Golden Visa",
    description: "Para emprendedores e inversores que buscan iniciar o expandir su negocio.",
    icon: TrendingUp,
    href: "#",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-bg-secondary text-brand-text/60 text-sm font-medium mb-4 uppercase tracking-wider">
              Explora Nuestros Servicios
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-text">
              Encuentra la solución adecuada para tu situación
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-brand-bg-secondary p-8 rounded-[2rem] border border-transparent hover:border-brand-border transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-brand-dark rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-brand-bg" />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-text mb-4">
                {service.title}
              </h3>
              <p className="text-brand-text/70 mb-8 flex-grow">
                {service.description}
              </p>
              <div className="pt-6 border-t border-brand-border flex items-center justify-between">
                <span className="font-semibold text-brand-text">Saber más</span>
                <div className="w-10 h-10 rounded-full bg-brand-muted flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5 text-brand-text" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-brand-bg-secondary p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 max-w-3xl mx-auto"
        >
          <div className="text-center md:text-left">
            <h4 className="text-xl font-display font-bold text-brand-text mb-2">
              ¿No encuentras tu trámite?
            </h4>
            <p className="text-brand-text/70">
              Cada caso es único. En MEDLA diseñamos estrategias personalizadas para tu situación migratoria.
            </p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap bg-brand-accent text-brand-text px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Contáctanos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
