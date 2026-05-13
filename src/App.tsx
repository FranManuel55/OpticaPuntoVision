import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageCircle,
  MapPin,
  Mail,
  Star,
  Menu,
  X,
  Clock,
  Sparkles,
  Shield,
  ChevronDown,
  Instagram,
  Heart
} from 'lucide-react'

const InstagramIcon = Instagram

const WA_NUMBER = '2615353715'
const WA_PHONE = WA_NUMBER.replace(/\D/g, '')
const EMAIL = 'opticapuntovisionmza@gmail.com'
const INSTAGRAM_URL = 'https://www.instagram.com/opticapuntovisionmza/'

const waLink = (message: string) =>
  `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`

const WA_MESSAGES = {
  floating: '¡Hola! Estoy navegando en su sitio web y quería hacer una consulta.',
  heroCTA: '¡Hola! Vi su sitio web y me gustaría consultar sobre los servicios y productos de Óptica Punto Vision.',
  contact: '¡Hola! Quería más información sobre Óptica Punto Vision.',
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(id)
      if (!element) return
      const headerOffset = 80
      const top = element.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top, behavior: 'smooth' })
    }, 150)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, phone, message } = formData
    const text =
      `¡Hola! Quería solicitar un turno en Óptica Punto Vision.\n` +
      `Mi nombre es: ${name}\n` +
      `Mi teléfono es: ${phone}\n` +
      `Y queria consultar sobre: ${message}`
    window.open(waLink(text), '_blank')
  }

  return (
    <div className="min-h-screen bg-primary">
      {/* Floating WhatsApp CTA */}
      <motion.a
        href={waLink(WA_MESSAGES.floating)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Punto Vision" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-accent">Punto Vision</h1>
              <p className="text-xs text-gray-500">Óptica Profesional</p>
            </div>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-secondary transition-colors">Inicio</button>
            <button onClick={() => scrollToSection('servicios')} className="text-sm font-medium hover:text-secondary transition-colors">Servicios</button>
            <button onClick={() => scrollToSection('testimonios')} className="text-sm font-medium hover:text-secondary transition-colors">Reseñas</button>
            <button onClick={() => scrollToSection('redes')} className="text-sm font-medium hover:text-secondary transition-colors">Redes</button>
            <button onClick={() => scrollToSection('contacto')} className="text-sm font-medium hover:text-secondary transition-colors">Contacto</button>
          </div>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col p-4 gap-4">
                <button onClick={() => scrollToSection('home')} className="text-left font-medium py-2">Inicio</button>
                <button onClick={() => scrollToSection('servicios')} className="text-left font-medium py-2">Servicios</button>
                <button onClick={() => scrollToSection('testimonios')} className="text-left font-medium py-2">Reseñas</button>
                <button onClick={() => scrollToSection('redes')} className="text-left font-medium py-2">Redes</button>
                <button onClick={() => scrollToSection('contacto')} className="text-left font-medium py-2">Contacto</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-100 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 py-32 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.p
              variants={fadeInUp}
              className="text-secondary font-medium mb-4 flex items-center gap-2"
            >
              <Sparkles size={16} /> Óptica Profesional en Mendoza
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-gray-500 text-sm md:text-base mb-3 flex items-center gap-2"
            >
              <MapPin size={16} className="text-secondary" /> Calle L.N.Alem 184, Ciudad, Mendoza
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent leading-tight mb-6"
            >
              Tu Visión,<br />
              <span className="text-secondary">Nuestra Prioridad</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-lg mb-8 max-w-md"
            >
              Cuidamos tu salud visual con tecnología de vanguardia y un equipo de especialistas comprometidos con tu bienestar.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <motion.a
                href={waLink(WA_MESSAGES.heroCTA)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={20} />
                Consultar Ahora
              </motion.a>
              <motion.button
                onClick={() => scrollToSection('servicios')}
                className="border-2 border-accent px-8 py-4 rounded-full font-medium hover:bg-accent hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Servicios
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto rounded-3xl relative overflow-hidden shadow-2xl group">
              <img
                src="/frente.jpeg"
                alt="Óptica Punto Vision"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                      <Star className="text-white fill-white" size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">15+ Años</p>
                      <p className="text-white/80">de experiencia</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <p className="text-xl font-bold text-secondary">5000+</p>
                      <p className="text-sm text-white/80">Clientes</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-secondary">98%</p>
                      <p className="text-sm text-white/80">Satisfacción</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-gray-400" size={32} />
        </motion.div>
      </section>

      {/* Tipos de Cristales - Carrusel */}
      <section className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <motion.div
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ x: { repeat: Infinity, ease: 'linear', duration: 80 } }}
        >
          {[...carouselImages, ...carouselImages, ...carouselImages, ...carouselImages, ...carouselImages, ...carouselImages].map((imgSrc, i) => (
            <div key={i} className="flex items-center gap-16 md:gap-24 flex-shrink-0">
              <img src={imgSrc} alt="Cristal" className="h-48 md:h-72 object-contain rounded-2xl shadow-md" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-secondary font-medium mb-2">Nuestros Servicios</p>
            <h3 className="text-3xl md:text-4xl font-bold text-accent">Soluciones Visuales Completas</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-52 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${service.image.startsWith('/') ? 'object-contain' : 'object-cover'
                      }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 text-white shadow-lg">
                    <service.icon size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-accent mb-3 group-hover:text-secondary transition-colors">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios / Social Proof */}
      <section id="testimonios" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-secondary font-medium mb-2">Reseñas Verified</p>
            <h3 className="text-3xl md:text-4xl font-bold text-accent">Lo Que Dicen Nuestros Clientes</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-secondary fill-secondary" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center border-2 border-secondary/20">
                    <span className="text-secondary font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-accent">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-sm">Calificación promedio en Google: <span className="font-bold text-secondary text-lg">4.9/5</span></p>
          </motion.div>
        </div>
      </section>

      {/* Redes Sociales - Instagram */}
      <section id="redes" className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-100 mb-12 flex flex-col md:flex-row items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-1 flex-shrink-0">
              <div className="w-full h-full bg-white rounded-full p-1">
                <img src="https://images.unsplash.com/photo-1542432389-a40026383873?auto=format&fit=crop&q=80&w=200" alt="Profile" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 justify-center md:justify-start">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-accent hover:text-secondary transition-colors"
                >
                  @opticapuntovisionmza
                </a>
                <motion.a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0095f6] text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <InstagramIcon size={18} />
                  Seguir
                </motion.a>
              </div>
              <div className="flex justify-center md:justify-start gap-6 mb-4 text-sm md:text-base">
                <p><span className="font-bold text-accent">87</span> <span className="text-gray-600">publicaciones</span></p>
                <p><span className="font-bold text-accent">17k</span> <span className="text-gray-600">seguidores</span></p>
                <p><span className="font-bold text-accent">2</span> <span className="text-gray-600">seguidos</span></p>
              </div>
              <p className="font-medium text-accent">venta lentes recetados , todos tipos de cristal , lentes sol .</p>
              <p className="text-gray-600">Tu visión, nuestra prioridad ✨<br />📍 Mendoza, Argentina<br />👓 Especialistas en salud visual</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {instagramPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-gray-200 overflow-hidden relative group rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={post.image}
                  alt={post.placeholder}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex gap-4 text-white font-medium">
                    <span className="flex items-center gap-1"><Heart size={20} className="fill-white" /> 124</span>
                    <span className="flex items-center gap-1"><MessageCircle size={20} className="fill-white" /> 12</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <InstagramIcon size={20} />
              Ver todas las publicaciones en Instagram
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 bg-accent text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-secondary font-medium mb-2">Contacto</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Visítanos o Escríbenos</h3>
              <p className="text-gray-400 mb-8">
                Estamos aquí para cuidarte. Contáctanos por cualquier consulta sobre nuestros servicios o agenda tu turno.
              </p>

              <div className="space-y-6">
                <motion.a
                  href={waLink(WA_MESSAGES.contact)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <MessageCircle className="text-secondary" size={24} />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-gray-400">+54 261 535 3715</p>
                  </div>
                </motion.a>

                <motion.a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="text-secondary" size={24} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-400">{EMAIL}</p>
                  </div>
                </motion.a>

                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                  <MapPin className="text-secondary" size={24} />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-gray-400">Calle L.N.Alem 184, Ciudad, Mendoza, Argentina</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                  <Clock className="text-secondary" size={24} />
                  <div>
                    <p className="font-medium">Horarios</p>
                    <p className="text-gray-400">Lun a Vie: 9hs - 19hs | Sáb: 9hs - 13hs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-accent">
              <h4 className="text-xl font-bold mb-6">Solicita tu Turno</h4>
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-secondary"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Teléfono</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-secondary"
                    placeholder="Tu teléfono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensaje</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-secondary resize-none"
                    rows={4}
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-secondary text-white py-4 rounded-xl font-medium hover:bg-opacity-90 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar por WhatsApp
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Mapa */}
          <motion.div
            className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-accent p-4 rounded-xl shadow-lg z-10">
              <h4 className="font-bold flex items-center gap-2"><MapPin size={18} className="text-secondary" /> Óptica Punto Vision</h4>
              <p className="text-sm text-gray-600">Calle L.N.Alem 184, Ciudad, Mendoza, Argentina</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.123!2d-68.83748!3d-32.892824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09170b9dcadb%3A0x41247132b731a735!2sPunto%20Vision!5e0!3m2!1ses-419!2sar!4v1714000000000!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-white py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Punto Vision" className="w-10 h-10 object-contain" />
              <div>
                <p className="font-bold">Punto Vision</p>
                <p className="text-xs text-gray-400">Tu visión, nuestra prioridad</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">© 2024 Óptica Punto Vision. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const carouselImages = ['/monofocal.jpeg', '/bifocal.jpeg', '/ocupacional.jpeg', '/multifocal.jpeg']

const services = [
  {
    icon: Shield,
    title: 'Armazones',
    description: 'Selección exclusiva de marcas líderes en anteojos oftálmicos y solares con garantía authentic.',
    image: '/gallery.jpeg'
  },
  {
    icon: Star,
    title: 'Tratamientos Especiales',
    description: 'Antireflejo, filtro contra luz azul nociva, tintado y más tratamientos para tus lentes con los mejores materiales.',
    image: '/tratamiento.jpeg'
  },
  {
    icon: MessageCircle,
    title: 'Asesoría Personalizada',
    description: 'Te esperamos con tu receta médica para asesorarte en armazones y cristales que se adaptan a tu graduación.',
    image: '/receta.jpeg'
  },
  {
    icon: Clock,
    title: 'Entrega Rápida',
    description: 'Tiempo de entrega optimizado sin comprometer la calidad de nuestros productos y servicios.',
    image: '/entrega.jpeg'
  }
]

const testimonials = [
  {
    name: 'María González',
    text: 'Excelente atención. Me explicaron todo detalladamente y mis nuevos lentes de contacto son perfectos. Totalmente recomendada.',
    date: 'Hace 2 semanas'
  },
  {
    name: 'Carlos Mendoza',
    text: 'El mejor servicio que he recibido en una óptica. Profesionales, atentos y con precios justos. Volveré sin dudas.',
    date: 'Hace 1 mes'
  },
  {
    name: 'Ana Ruiz',
    text: 'Mi hija necesitaba lentes por primera vez y el trato fue increíble. Muy recomendados para toda la familia.',
    date: 'Hace 1 mes'
  },
  {
    name: 'Javier Silva',
    text: 'Me atendieron súper rápido. Llevé la receta y en 24 horas tenía mis lentes listos. Excelente calidad de los cristales.',
    date: 'Hace 2 meses'
  },
  {
    name: 'Laura Gómez',
    text: 'Fui a hacerme unos lentes de sol graduados y la variedad de marcos es increíble. Muy buena atención de las chicas.',
    date: 'Hace 3 meses'
  },
  {
    name: 'Diego Herrera',
    text: 'Hace años que somos clientes con toda mi familia. Siempre nos asesoran de 10 y tienen los mejores precios de Mendoza.',
    date: 'Hace 5 meses'
  }
]

const instagramPosts = [
  { id: 1, placeholder: 'Promo Lentes', link: INSTAGRAM_URL, image: 'https://images.unsplash.com/photo-1612226192636-cafce2d8a728?w=400&h=400&fit=crop' },
  { id: 2, placeholder: 'Nueva Colección', link: INSTAGRAM_URL, image: 'https://images.unsplash.com/photo-1517948430535-1e2469d314fe?w=400&h=400&fit=crop' },
  { id: 3, placeholder: 'Tips Visuales', link: INSTAGRAM_URL, image: 'https://images.unsplash.com/photo-1632054224477-c9cb3aae1b7e?w=400&h=400&fit=crop' },
  { id: 4, placeholder: 'Opiniones', link: INSTAGRAM_URL, image: 'https://images.unsplash.com/photo-1539036776273-021ec1d78bec?w=400&h=400&fit=crop' },
  { id: 5, placeholder: 'Descuentos', link: INSTAGRAM_URL, image: 'https://images.unsplash.com/photo-1632054226038-ed6997bfce1f?w=400&h=400&fit=crop' },
  { id: 6, placeholder: 'Galería', link: INSTAGRAM_URL, image: 'https://plus.unsplash.com/premium_photo-1663048816150-1638f707cea2?w=400&h=400&fit=crop' },
  { id: 7, placeholder: 'Productos', link: INSTAGRAM_URL, image: 'https://images.unsplash.com/photo-1616163477138-508df4131a38?w=400&h=400&fit=crop' },
  { id: 8, placeholder: 'Clientes', link: INSTAGRAM_URL, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop' }
]

export default App