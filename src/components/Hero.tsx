import { motion } from "motion/react";

const flags = [
  { url: "https://framerusercontent.com/images/ry9wBxhUsYkhVNA9nf1Yg7yyssY.svg", name: "USA" },
  { url: "https://framerusercontent.com/images/txH8f1IswnlOqAUqNkySYMZd0.svg", name: "Germany" },
  { url: "https://framerusercontent.com/images/xGzHXvZRmfIKcSYk2jnYekKJqLc.svg", name: "France" },
  { url: "https://framerusercontent.com/images/hSkqRkcuBzBsXhgLp023HugpCM.svg", name: "Japan" },
  { url: "https://framerusercontent.com/images/v2Nl6v7lHeM1sP05LpTuLsExD0.svg", name: "Spain" },
  { url: "https://framerusercontent.com/images/whyY9lpCLjSGjDVljeskfCI.svg", name: "Russia" },
  { url: "https://framerusercontent.com/images/r2r3h0DUcaVHWIfLXiriSTM2cY.png", name: "South Korea" },
  { url: "https://framerusercontent.com/images/W70ujq9VOmNrmG8LJYpJjPT2zOw.svg", name: "India" },
  { url: "https://framerusercontent.com/images/B9MBNIKwx49MAZiUFhhMtznUbTk.svg", name: "Portugal" },
  { url: "https://flagcdn.com/mx.svg", name: "Mexico" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-text leading-[1.1] mb-6">
              {"Trámites de extranjería en España, sin complicaciones ni demoras".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
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
            </h1>
            <p className="text-xl text-brand-text/80 mb-10 leading-relaxed">
              {"Expertos en visados, nacionalidad y permisos de residencia. Gestionamos tu caso con el máximo rigor legal para que obtengas una resolución favorable.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + i * 0.05,
                    ease: [0.2, 0.65, 0.3, 0.9],
                  }}
                  className="inline-block mr-[0.2em]"
                >
                  {word}
                </motion.span>
              ))}
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-block bg-brand-accent text-brand-dark px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-500 hover:shadow-lg transition-all duration-300"
              >
                Evaluación inicial gratuita
              </a>
              <a
                href="#services"
                className="inline-block bg-transparent text-brand-text border border-brand-text/20 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-brand-text/5 transition-all duration-300"
              >
                Nuestros servicios
              </a>
            </motion.div>
          </div>

          <div className="relative h-[600px] hidden lg:flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {flags.map((flag, index) => {
                const angle = (index * 360) / flags.length;
                return (
                  <motion.div
                    key={index}
                    className="absolute origin-bottom"
                    initial={{ height: 0, opacity: 0, rotate: angle, scale: 0 }}
                    animate={{ 
                      height: "240px",
                      opacity: 1, 
                      scale: 1,
                      rotate: [angle, angle + 360] 
                    }}
                    transition={{
                      height: { duration: 1.2, delay: index * 0.05, ease: [0.34, 1.56, 0.64, 1] },
                      scale: { duration: 1.2, delay: index * 0.05, ease: [0.34, 1.56, 0.64, 1] },
                      opacity: { duration: 0.5, delay: index * 0.05 },
                      rotate: {
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1.5
                      }
                    }}
                    style={{
                      bottom: "50%",
                    }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white"
                      animate={{
                        rotate: [-(angle), -(angle + 360)]
                      }}
                      transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1.5
                      }}
                    >
                      <img
                        src={flag.url}
                        alt={flag.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  </motion.div>
                );
              })}

              <div className="z-10 w-32 h-32 bg-brand-bg rounded-full flex items-center justify-center shadow-2xl border border-brand-border">
                <div className="w-20 h-20 bg-brand-text rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 32 32" className="w-14 h-14 fill-brand-bg">
                    <path d="M 8 32 L 0 32 L 0 24 L 8 24 Z M 20 32 L 12 32 L 12 20 L 0 20 L 0 12 L 20 12 Z M 32 32 L 24 32 L 24 8 L 0 8 L 0 0 L 32 0 Z" />
                  </svg>
                </div>
              </div>

              <div className="absolute w-[480px] h-[480px] border border-brand-border/20 rounded-full" />
              <div className="absolute w-[280px] h-[280px] border border-brand-border/40 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] rounded-full bg-brand-bg-secondary/50 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-brand-muted/30 blur-3xl -z-10" />
    </section>
  );
}
