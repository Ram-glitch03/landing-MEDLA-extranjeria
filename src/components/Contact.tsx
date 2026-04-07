import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display text-gray-900">Evaluación Legal Gratuita</h2>
          <p className="text-xl text-gray-600 font-sans">Déjanos tus datos y un abogado experto en extranjería se pondrá en contacto contigo para analizar tu caso sin compromiso.</p>
        </motion.div>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-6"
          onSubmit={(e) => { e.preventDefault(); alert("Formulario enviado exitosamente."); }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 font-sans">Nombre Completo</label>
              <input type="text" required className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white" placeholder="Ej. Juan Pérez" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 font-sans">Correo Electrónico</label>
              <input type="email" required className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white" placeholder="juan@ejemplo.com" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 font-sans">Teléfono</label>
              <input type="tel" required className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white" placeholder="+34 600 000 000" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 font-sans">Tipo de visado o trámite</label>
              <input type="text" required className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white" placeholder="Proporciona detalles..." />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 font-sans">Nacionalidad</label>
            <textarea rows={4} required className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white" placeholder="Información adicional..."></textarea>
          </div>
          
          <button type="submit" className="w-full bg-gray-900 text-white font-bold text-lg py-4 rounded-xl hover:bg-yellow-500 hover:text-gray-900 transition-colors shadow-md mt-4">
            Enviar Solicitud
          </button>
        </motion.form>
      </div>
    </section>
  );
}
