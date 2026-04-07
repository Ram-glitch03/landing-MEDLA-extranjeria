import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const cities = ["MADRID", "BARCELONA", "VALENCIA", "SEVILLA"];

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D City Prism Animation - Recreating the HTML Stacking Effect */}
          <div className="relative h-[450px] bg-brand-bg-secondary rounded-[2.5rem] flex items-center justify-center overflow-hidden group">
            <div className="relative w-72 h-20" style={{ perspective: "1200px" }}>
              {[...Array(3)].map((_, layerIndex) => (
                <motion.div
                  key={layerIndex}
                  className="absolute inset-0"
                  style={{ 
                    transformStyle: "preserve-3d",
                    zIndex: 10 - layerIndex,
                    opacity: 1 - (layerIndex * 0.3)
                  }}
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: layerIndex * 0.1
                  }}
                >
                  {/* Front Face */}
                  <div 
                    className="absolute inset-0 bg-brand-bg border border-brand-border flex items-center justify-center rounded-xl shadow-sm"
                    style={{ transform: "translateZ(140px)", backfaceVisibility: "hidden" }}
                  >
                    <span className="text-xl font-display font-extrabold text-brand-text tracking-[0.2em]">MADRID</span>
                  </div>
                  
                  {/* Back Face */}
                  <div 
                    className="absolute inset-0 bg-brand-bg border border-brand-border flex items-center justify-center rounded-xl shadow-sm"
                    style={{ transform: "rotateY(180deg) translateZ(140px)", backfaceVisibility: "hidden" }}
                  >
                    <span className="text-xl font-display font-extrabold text-brand-text tracking-[0.2em]">BARCELONA</span>
                  </div>
                  
                  {/* Right Face */}
                  <div 
                    className="absolute inset-0 bg-brand-bg border border-brand-border flex items-center justify-center rounded-xl shadow-sm"
                    style={{ transform: "rotateY(90deg) translateZ(140px)", backfaceVisibility: "hidden" }}
                  >
                    <span className="text-xl font-display font-extrabold text-brand-text tracking-[0.2em]">VALENCIA</span>
                  </div>
                  
                  {/* Left Face */}
                  <div 
                    className="absolute inset-0 bg-brand-bg border border-brand-border flex items-center justify-center rounded-xl shadow-sm"
                    style={{ transform: "rotateY(-90deg) translateZ(140px)", backfaceVisibility: "hidden" }}
                  >
                    <span className="text-xl font-display font-extrabold text-brand-text tracking-[0.2em]">SEVILLA</span>
                  </div>
                </motion.div>
              ))}

              {/* Subtle shadow below the prism */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-48 h-4 bg-brand-text/5 blur-xl rounded-full" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-text mb-6 leading-tight">
              {"Dedicados. Cercanos. Expertos.".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.1,
                      ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg text-brand-text/80 mb-8 leading-relaxed"
              >
                En MEDLA ofrecemos soluciones integrales en asesoría legal y fiscal adaptadas a tus necesidades. Visados, permisos de residencia, regularización migratoria y nacionalidad con acompañamiento personalizado.
              </motion.p>
            </div>

            <div className="space-y-4">
              {[
                "Soluciones a medida ajustadas a tus necesidades específicas.",
                "Información exacta, rápida y detallada durante todo el proceso.",
                "Equipo versátil y experimentado en múltiples ramas del derecho.",
                "Confidencialidad y ética profesional garantizadas.",
                "Presencia internacional: Madrid, España y Ciudad Satélite, México.",
                "Más de 200 casos gestionados con satisfacción de nuestros clientes."
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 bg-brand-bg-secondary p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                  </div>
                  <p className="text-brand-text/90 font-medium">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <a
                href="https://medla-asesores.com/agenda-tu-cita/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-muted text-brand-text px-6 py-3 rounded-xl font-semibold hover:bg-brand-border transition-colors"
              >
                Conoce más sobre MEDLA
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
