'use client' // Necessário para componentes com interatividade no App Router
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa' // Ícones para Contato

export default function Home() {
  // Variantes de animação
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const projectHover: Variants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.02, y: -8, transition: { duration: 0.3 } },
  }

  const cursorAnimation: Variants = {
    blink: {
      opacity: [1, 0, 1],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <motion.section
        className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-800 via-blue-900 to-gray-900 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.2),_transparent_70%)] animate-pulse" />
        <div className="flex items-center">
          <motion.h1
            className="text-5xl md:text-7xl h-auto font-bold tracking-tight overflow-hidden whitespace-nowrap"
            initial={{ width: 0 }}
            animate={{ width: ['0%', '100%', '100%', '0%'] }} // Digita, pausa, reinicia
            transition={{
              duration: 12, // Ciclo total de 12 segundos
              times: [0, 0.33, 0.83, 1], // Digitação: 4s, Pausa: 6s, Reinício: 2s
              repeat: Infinity,
              ease: ['linear', 'linear', 'linear'],
            }}
          >
            Marcos Paulo Rodrigues
          </motion.h1>
          <motion.span
            className="inline-block w-4 h-12 md:w-6 md:h-16 bg-blue-400 ml-2"
            variants={cursorAnimation}
            animate="blink"
          />
        </div>
        <motion.p
          className="mt-4 text-xl md:text-2xl text-gray-300"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Engenheiro de Software | Especialista em Flutter, Next.js e Firebase
        </motion.p>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <Link href="#contato">
            <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all duration-300">
              Vamos Construir o Futuro
            </button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Sobre */}
      <motion.section
        id="sobre"
        className="py-20 px-6 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          variants={fadeInUp}
        >
          Sobre Mim
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
          variants={fadeInUp}
        >
          Sou mestrando em Ciência da Computação pela UFSCar e engenheiro de
          software apaixonado por criar soluções que transformam vidas. Com
          domínio em Flutter, Next.js e Firebase, desenvolvi projetos como o{' '}
          <span className="text-blue-400">UFCAT Serviços</span>, um aplicativo
          multiplataforma que centraliza informações para a comunidade
          acadêmica. Minha trajetória combina formação técnica sólida,
          experiência em metodologias ágeis e uma visão clara: tornar-me Tech
          Lead e liderar inovações de impacto.
        </motion.p>
      </motion.section>

      {/* Projetos */}
      <motion.section
        id="projetos"
        className="py-20 px-6 bg-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          variants={fadeInUp}
        >
          Projetos
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
        >
          <motion.div
            className="p-6 bg-gray-700 rounded-xl shadow-lg"
            variants={projectHover}
            initial="rest"
            whileHover="hover"
          >
            <h3 className="text-2xl font-semibold text-blue-400">
              UFCAT Serviços
            </h3>
            <p className="mt-3 text-gray-300">
              Um aplicativo mobile desenvolvido com Flutter e Firebase para a
              comunidade acadêmica. Centraliza notícias, eventos e cardápios,
              sendo adotado como solução oficial.
            </p>
            <Link
              href="https://github.com/marcospaulor/ufcat-app"
              className="mt-4 inline-block text-blue-400 hover:underline"
            >
              Ver no GitHub
            </Link>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-700 rounded-xl shadow-lg"
            variants={projectHover}
            initial="rest"
            whileHover="hover"
          >
            <h3 className="text-2xl font-semibold text-blue-400">
              Gerenciamento do Cardápio
            </h3>
            <p className="mt-3 text-gray-300">
              Aplicação web desenvolvida com Next.js e Firebase para a
              Nutricionista do RU atualizar o cardápio do aplicativo móvel UFCAT
              Serviços. Oferece uma interface intuitiva para gerenciar o menu
              diário.
            </p>
            <Link
              href="https://github.com/marcospaulor/ru-ufcat-menu"
              className="mt-4 inline-block text-blue-400 hover:underline"
            >
              Ver no GitHub
            </Link>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-700 rounded-xl shadow-lg"
            variants={projectHover} // Supondo que você use animações
            initial="rest"
            whileHover="hover"
          >
            <h3 className="text-2xl font-semibold text-blue-400">
              Branding Book Digital para a Essence Branding
            </h3>
            <p className="mt-3 text-gray-300">
              Um branding book digital interativo desenvolvido para a Essence,
              apresentando diretrizes de marca, identidade visual e elementos
              gráficos de forma moderna e acessível.
            </p>
            <a
              href="https://essence-henna.vercel.app/"
              className="mt-4 inline-block text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver o Site
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Habilidades */}
      <motion.section
        id="habilidades"
        className="py-20 px-6 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          variants={fadeInUp}
        >
          Habilidades
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={staggerContainer}
        >
          {[
            'Flutter',
            'Next.js',
            'Firebase',
            'Java',
            'TypeScript',
            'TailwindCSS',
            'IA',
            'Agile',
          ].map((skill) => (
            <motion.div
              key={skill}
              className="p-4 bg-gray-800 rounded-lg text-center text-lg font-medium hover:bg-blue-900 transition-colors"
              variants={fadeInUp}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Contato */}
      <motion.section
        id="contato"
        className="py-20 px-6 bg-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          variants={fadeInUp}
        >
          Contato
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={staggerContainer}
        >
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-6"
            variants={fadeInUp}
          >
            Estou pronto para agregar valor à sua equipe com soluções escaláveis
            e inovadoras. Vamos conversar?
          </motion.p>
          <motion.div className="flex justify-center gap-6" variants={fadeInUp}>
            <Link href="https://linkedin.com/in/marcospaulor">
              <FaLinkedin
                size={32}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              />
            </Link>
            <Link href="https://github.com/marcospaulor">
              <FaGithub
                size={32}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              />
            </Link>
            <a
              href="mailto:dev.silva.marcos@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              dev.silva.marcos@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900">
        <p className="text-gray-400">
          © 2025 Marcos Paulo Rodrigues. Feito com Next.js e TailwindCSS.
        </p>
      </footer>
    </div>
  )
}
