import { motion } from "motion/react";

const companies = [
  "https://framerusercontent.com/images/KzvFhIQPwLo13XTteNZNBCJZH0.svg",
  "https://framerusercontent.com/images/MiCS0fzzKFqFh7WMxuI4kkkgY.svg",
  "https://framerusercontent.com/images/iXA9wvVj5CMJxRGgPQ6xhdEsZQ.svg",
  "https://framerusercontent.com/images/TDfYFvkmpvRAtExsOHxT9f0RETk.svg",
  "https://framerusercontent.com/images/0naNY2aoZA9xz9zBc0bgKBw9UA.svg",
  "https://framerusercontent.com/images/46XO06TRPRkwfVPJ8Jm0qBxumas.svg",
];

export default function Companies() {
  return (
    <section className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-bg-secondary text-brand-text/60 text-sm font-medium mb-4 uppercase tracking-wider">
            Alianzas
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-text">
            Empresas que confían en MEDLA
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {companies.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-center"
            >
              <img
                src={logo}
                alt="Company Logo"
                className="h-8 md:h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
