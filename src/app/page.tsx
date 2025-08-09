'use client'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'

export default function Home() {
  // Estado para controlar o idioma
  const [language, setLanguage] = useState<'pt' | 'en'>('pt')

  // Objeto com traduções
  const translations = {
    pt: {
      hero: {
        title: 'Marcos Paulo Rodrigues',
        subtitle:
          'Engenheiro de Software | Transformando ideias em soluções robustas',
        button: 'Inicie um Projeto Conosco',
      },
      about: {
        title: 'Sobre Mim',
        paragraphs: [
          'Sou engenheiro de software com formação em Ciência da Computação pela UFCAT e mestrando em Ciência da Computação na UFSCar. Minha trajetória profissional combina sólida base acadêmica e experiência prática no desenvolvimento de aplicações web e mobile.',
          'No projeto <span className="text-blue-400">UFCAT Serviços</span>, tema do meu TCC, desenvolvi um aplicativo mobile para integração de notícias, eventos e cardápios, utilizando Flutter e Firebase. A ausência de API oficial foi superada com técnicas de web scraping em Python, demonstrando resiliência e capacidade de inovação sob prazos curtos.',
          'Na Fábrica de Software da UFCAT, participei do <span className="text-blue-400">Gerenciamento do Cardápio</span>, integrando uma aplicação web em Next.js e Firebase ao UFCAT Serviços. Além disso, atuei no <span className="text-blue-400">Branding Book Digital da Essence</span>, aplicando metodologias ágeis (Kanban) em equipe multidisciplinar.',
          'Atualmente, aprofundo conhecimentos em desenvolvimento de APIs robustas com Java e em bancos de dados relacionais (MySQL e PostgreSQL), visando alta performance e segurança no tratamento de dados. Meus valores profissionais incluem integridade, acessibilidade e colaboração.',
          'Meu objetivo é atuar como Tech Lead ou CTO, liderando projetos de alto impacto e inovação, com especial interesse em Inteligência Artificial. Fora do ambiente profissional, pratico musculação, aprecio jogos no PC e desafios técnicos que estimulam a criatividade.',
        ],
      },
      projects: {
        title: 'Projetos',
        items: [
          {
            title: 'UFCAT Serviços',
            description:
              'Aplicativo mobile para a comunidade acadêmica, reunindo notícias, eventos e cardápios. Desenvolvido com Flutter e Firebase, utilizando web scraping para contornar a ausência de API oficial.',
            linkText: 'Ver no GitHub',
            link: 'https://github.com/marcospaulor/ufcat-app',
          },
          {
            title: 'Gerenciamento do Cardápio',
            description:
              'Aplicação web para atualização em tempo real do cardápio do UFCAT Serviços, voltada à equipe de nutrição do Restaurante Universitário. Desenvolvida com Next.js e Firebase.',
            linkText: 'Ver no GitHub',
            link: 'https://github.com/marcospaulor/ru-ufcat-menu',
          },
          {
            title: 'Branding Book Digital (Essence)',
            description:
              'Guia interativo de identidade visual, criado em equipe ágil e desenvolvido com Kanban. Projeto pausado por questões orçamentárias da empresa.',
            linkText: 'Ver o Site',
            link: 'https://essence-henna.vercel.app/',
            external: true,
          },
        ],
      },
      skills: {
        title: 'Habilidades',
        items: [
          { id: 'flutter', name: 'Flutter' },
          { id: 'nextjs', name: 'Next.js' },
          { id: 'firebase', name: 'Firebase' },
          { id: 'java-backend', name: 'Java (Back-end)' },
          { id: 'typescript', name: 'TypeScript' },
          { id: 'tailwindcss', name: 'TailwindCSS' },
          { id: 'sql', name: 'SQL' },
          { id: 'mysql', name: 'MySQL' },
          { id: 'postgresql', name: 'PostgreSQL' },
          { id: 'ai', name: 'Inteligência Artificial' },
          { id: 'agile', name: 'Metodologias Ágeis' },
        ],
      },
      contact: {
        title: 'Contato',
        text: 'Interessado em soluções tecnológicas estratégicas e de alto impacto? Entre em contato para discutirmos oportunidades.',
        email: 'dev.silva.marcos@gmail.com',
      },
      footer: {
        text: '© 2025 Marcos Paulo Rodrigues. Desenvolvido com Next.js e TailwindCSS.',
      },
    },

    en: {
      hero: {
        title: 'Marcos Paulo Rodrigues',
        subtitle: 'Software Engineer | Turning ideas into robust solutions',
        button: 'Start a Project Together',
      },
      about: {
        title: 'About Me',
        paragraphs: [
          'I am a Software Engineer with a Bachelor’s in Computer Science from UFCAT and a Master’s in progress at UFSCar. My career combines strong academic background and hands-on experience in developing web and mobile applications.',
          'In my undergraduate thesis project, <span className="text-blue-400">UFCAT Services</span>, I developed a mobile application integrating news, events, and menus for the academic community. Without an official API, I implemented Python-based web scraping, overcoming technical and time constraints.',
          'At UFCAT’s Software Factory, I worked on <span className="text-blue-400">Menu Management</span>, integrating a Next.js and Firebase web solution into UFCAT Services. I also contributed to <span className="text-blue-400">Essence’s Digital Branding Book</span>, applying agile methodologies (Kanban) in a multidisciplinary team.',
          'Currently, I am expanding my expertise in developing robust back-end APIs with Java and enhancing my database management skills in MySQL and PostgreSQL. My professional values include integrity, accessibility, and collaboration.',
          'My career goal is to serve as a Tech Lead or CTO, leading high-impact, innovative projects, with a particular interest in Artificial Intelligence. Outside of work, I enjoy weight training, PC gaming, and technical challenges that foster creativity.',
        ],
      },
      projects: {
        title: 'Projects',
        items: [
          {
            title: 'UFCAT Services',
            description:
              'Mobile application for the academic community, gathering news, events, and menus. Developed with Flutter and Firebase, leveraging web scraping to overcome the lack of an official API.',
            linkText: 'View on GitHub',
            link: 'https://github.com/marcospaulor/ufcat-app',
          },
          {
            title: 'Menu Management',
            description:
              'Web application for real-time menu updates for UFCAT Services, designed for the University Restaurant nutrition team. Built with Next.js and Firebase.',
            linkText: 'View on GitHub',
            link: 'https://github.com/marcospaulor/ru-ufcat-menu',
          },
          {
            title: 'Digital Branding Book (Essence)',
            description:
              'Interactive brand identity guide, developed in an agile environment using Kanban. The project was paused due to budget limitations.',
            linkText: 'View the Site',
            link: 'https://essence-henna.vercel.app/',
            external: true,
          },
        ],
      },
      skills: {
        title: 'Skills',
        items: [
          { id: 'flutter', name: 'Flutter' },
          { id: 'nextjs', name: 'Next.js' },
          { id: 'firebase', name: 'Firebase' },
          { id: 'java-backend', name: 'Java (Back-end)' },
          { id: 'typescript', name: 'TypeScript' },
          { id: 'tailwindcss', name: 'TailwindCSS' },
          { id: 'sql', name: 'SQL' },
          { id: 'mysql', name: 'MySQL' },
          { id: 'postgresql', name: 'PostgreSQL' },
          { id: 'ai', name: 'Artificial Intelligence' },
          { id: 'agile', name: 'Agile Methodologies' },
        ],
      },
      contact: {
        title: 'Contact',
        text: 'Interested in strategic, high-impact technology solutions? Get in touch to discuss potential collaborations.',
        email: 'dev.silva.marcos@gmail.com',
      },
      footer: {
        text: '© 2025 Marcos Paulo Rodrigues. Built with Next.js and TailwindCSS.',
      },
    },
  }

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
    <div className="w-full bg-gray-900 text-white">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setLanguage('pt')}
          className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
            language === 'pt' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          PT-BR
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
            language === 'en' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          EN
        </button>
      </div>

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
            className="text-4xl md:text-7xl font-bold tracking-tight overflow-hidden whitespace-nowrap"
            initial={{ width: 0 }}
            animate={{ width: ['0%', '100%', '100%', '0%'] }}
            transition={{
              duration: 12,
              times: [0, 0.33, 0.83, 1],
              repeat: Infinity,
              ease: ['linear', 'linear', 'linear'],
            }}
          >
            {translations[language].hero.title}
          </motion.h1>
          <motion.span
            className="inline-block w-3 h-8 md:w-6 md:h-16 bg-blue-400 ml-2"
            variants={cursorAnimation}
            animate="blink"
          />
        </div>
        <motion.p
          className="mt-4 text-xl md:text-2xl text-gray-300 whitespace-break-spaces text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          {translations[language].hero.subtitle}
        </motion.p>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <Link href="#contato">
            <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all duration-300">
              {translations[language].hero.button}
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
          {translations[language].about.title}
        </motion.h2>
        {translations[language].about.paragraphs.map((paragraph, index) => (
          <motion.p
            key={`about-paragraph-${index}`}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mt-4"
            variants={fadeInUp}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
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
          {translations[language].projects.title}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
        >
          {translations[language].projects.items.map((project, index) => (
            <motion.div
              key={`project-${index}`}
              className="p-6 bg-gray-700 rounded-xl shadow-lg"
              variants={projectHover}
              initial="rest"
              whileHover="hover"
            >
              <h3 className="text-2xl font-semibold text-blue-400">
                {project.title}
              </h3>
              <p className="mt-3 text-gray-300">{project.description}</p>
              {project.external ? (
                <a
                  href={project.link}
                  className="mt-4 inline-block text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.linkText}
                </a>
              ) : (
                <Link
                  href={project.link}
                  className="mt-4 inline-block text-blue-400 hover:underline"
                >
                  {project.linkText}
                </Link>
              )}
            </motion.div>
          ))}
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
        key={`skills-${language}`}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          variants={fadeInUp}
        >
          {translations[language].skills.title}
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={staggerContainer}
        >
          {translations[language].skills.items.map((skill) => (
            <motion.div
              key={skill.id}
              className="p-4 bg-gray-800 rounded-lg text-center text-lg font-medium hover:bg-blue-900 transition-colors"
              variants={fadeInUp}
            >
              {skill.name}
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
          {translations[language].contact.title}
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={staggerContainer}
        >
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-6"
            variants={fadeInUp}
          >
            {translations[language].contact.text}
          </motion.p>
          <motion.div
            className="grid grid-cols-2 md:flex justify-center gap-6"
            variants={fadeInUp}
          >
            <Link
              href="https://linkedin.com/in/marcospaulor"
              className="flex justify-end items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={32}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              />
            </Link>
            <Link
              href="https://github.com/marcospaulor"
              className="flex justify-start items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={32}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              />
            </Link>
            <Link
              href={`mailto:${translations[language].contact.email}`}
              className="col-span-2 text-blue-400 hover:text-blue-300 flex items-center justify-center transition-colors"
            >
              {translations[language].contact.email}
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900">
        <p className="text-gray-400">{translations[language].footer.text}</p>
      </footer>
    </div>
  )
}
