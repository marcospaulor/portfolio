'use client'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'

export default function Home() {
  // Language state
  const [language, setLanguage] = useState<'pt' | 'en'>('pt')

  // Translations object
  const translations = {
    pt: {
      hero: {
        title: 'Marcos Paulo R.',
        subtitle:
          'Engenheiro de Software | Transformando ideias em soluções inovadoras',
        button: 'Construir uma Solução',
      },
      about: {
        title: 'Sobre Mim',
        paragraphs: [
          'Sou um engenheiro de software apaixonado por tecnologia, natural de Morrinhos, GO. Minha jornada começou com um fascínio por dispositivos como o Nokia "tijolão" e o PlayStation 1, evoluindo para um Técnico em Informática pelo IF Goiano e, atualmente, um mestrado em Ciência da Computação na UFSCar.',
          'Minha paixão por desenvolver software foi consolidada durante a graduação em Ciência da Computação na UFCAT, onde desenvolvi o <span className="text-blue-400">UFCAT Serviços</span>, meu projeto de TCC. Sem APIs oficiais disponíveis, utilizei Python para web scraping, superando limitações de recursos e prazos para entregar um aplicativo que impactou a comunidade acadêmica.',
          'Na Fábrica de Software da UFCAT, aprofundei meu conhecimento em metodologias ágeis, contribuindo para projetos como o <span className="text-blue-400">Gerenciamento do Cardápio</span>. Utilizando Next.js e Firebase, implementei uma solução web integrada ao aplicativo em tempo recorde. No projeto <span className="text-blue-400">Branding Book da Essence</span>, colaborei com uma equipe ágil, aplicando Kanban para criar um produto visualmente impactante, apesar de sua interrupção por restrições orçamentárias.',
          'Recentemente, liderei o desenvolvimento de uma <span className="text-blue-400">Plataforma de Gestão de Eventos</span> utilizando Nest.js e MongoDB. Este projeto envolveu a criação de APIs escaláveis para gerenciar eventos acadêmicos, com foco em desempenho e integração com front-ends modernos, demonstrando minha capacidade de entregar soluções robustas em ambientes dinâmicos.',
          'Atualmente, estou expandindo meu conhecimento em Java para APIs back-end e aprimorando minhas habilidades em SQL e NoSQL com MySQL, PostgreSQL e MongoDB. Meus valores fundamentais incluem integridade, acessibilidade e colaboração, acreditando que equipes unidas geram resultados excepcionais. Meu objetivo é me tornar um Tech Lead ou CTO, liderando projetos inovadores, possivelmente com inteligência artificial, área que me fascina. Fora do código, musculação, jogos eletrônicos e desafios técnicos me mantêm equilibrado.',
        ],
      },
      projects: {
        title: 'Projetos',
        items: [
          {
            title: 'UFCAT Serviços',
            description:
              'Aplicativo móvel que conecta a comunidade acadêmica com notícias, eventos e cardápios. Desenvolvido com Flutter e Firebase, utilizei web scraping em Python para superar a ausência de APIs oficiais, entregando uma solução funcional e impactante.',
            linkText: 'Ver no GitHub',
            link: 'https://github.com/marcospaulor/ufcat-app',
          },
          {
            title: 'Gerenciamento do Cardápio',
            description:
              'Aplicação web para atualização em tempo real do cardápio do UFCAT Serviços, permitindo gestão eficiente pela equipe de nutrição. Desenvolvida com Next.js e Firebase, foi uma solução prática entregue sob prazos desafiadores.',
            linkText: 'Ver no GitHub',
            link: 'https://github.com/marcospaulor/ru-ufcat-menu',
          },
          {
            title: 'Branding Book Digital (Essence)',
            description:
              'Um branding book interativo para a Essence, combinando design e tecnologia. Desenvolvido com metodologias ágeis e Kanban, foi um projeto colaborativo que destacou minha capacidade de adaptação, apesar de pausado por limitações externas.',
            linkText: 'Ver o Site',
            link: 'https://essence-henna.vercel.app/',
            external: true,
          },
          {
            title: 'Plataforma de Gestão de Eventos',
            description:
              'Uma plataforma robusta para gerenciar eventos acadêmicos, com APIs escaláveis construídas em Nest.js e banco de dados MongoDB. O projeto focou em desempenho e integração, atendendo às necessidades de usuários em tempo real.',
            linkText: 'Ver no GitHub',
            link: 'https://github.com/marcospaulor/event-management-platform',
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
          { id: 'mongodb', name: 'MongoDB' },
          { id: 'nestjs', name: 'Nest.js' },
          { id: 'ai', name: 'Inteligência Artificial' },
          { id: 'agile', name: 'Metodologias Ágeis' },
        ],
      },
      contact: {
        title: 'Contato',
        text: 'Interessado em desenvolver soluções tecnológicas inovadoras? Entre em contato para criarmos algo transformador juntos.',
        email: 'dev.silva.marcos@gmail.com',
      },
      footer: {
        text: '© 2025 Marcos Paulo Rodrigues. Desenvolvido com Next.js e TailwindCSS.',
      },
    },
    en: {
      hero: {
        title: 'Marcos Paulo R.',
        subtitle:
          'Software Engineer | Transforming ideas into innovative solutions',
        button: 'Build a Solution',
      },
      about: {
        title: 'About Me',
        paragraphs: [
          'I am a software engineer passionate about technology, hailing from Morrinhos, GO. My journey began with a fascination for devices like the Nokia "brick" and PlayStation 1, leading to a Technical Degree in IT from IF Goiano and currently pursuing a Master’s in Computer Science at UFSCar.',
          'My passion for software development was solidified during my Bachelor’s in Computer Science at UFCAT, where I developed <span className="text-blue-400">UFCAT Services</span>, my thesis project. With no official APIs available, I utilized Python for web scraping, overcoming resource and time constraints to deliver an impactful application for the academic community.',
          'At UFCAT’s Software Factory, I honed my skills in agile methodologies, contributing to projects like <span className="text-blue-400">Menu Management</span>. Using Next.js and Firebase, I implemented a web solution integrated with the app in record time. On the <span className="text-blue-400">Essence Branding Book</span>, I collaborated with an agile team using Kanban to create a visually striking product, despite its pause due to budget constraints.',
          'Recently, I led the development of an <span className="text-blue-400">Event Management Platform</span> using Nest.js and MongoDB. This project involved building scalable APIs for managing academic events, focusing on performance and seamless integration with modern front-ends, showcasing my ability to deliver robust solutions in dynamic environments.',
          'Currently, I am expanding my expertise in Java for back-end APIs and enhancing my SQL and NoSQL skills with MySQL, PostgreSQL, and MongoDB. My core values include integrity, accessibility, and collaboration, believing that united teams drive exceptional results. My goal is to become a Tech Lead or CTO, leading innovative projects, possibly in artificial intelligence, an area that captivates me. Outside of coding, weightlifting, gaming, and technical challenges keep me balanced.',
        ],
      },
      projects: {
        title: 'Projects',
        items: [
          {
            title: 'UFCAT Services',
            description:
              'A mobile app connecting the academic community with news, events, and menus. Built with Flutter and Firebase, I used Python web scraping to overcome the lack of official APIs, delivering a functional and impactful solution.',
            linkText: 'View on GitHub',
            link: 'https://github.com/marcospaulor/ufcat-app',
          },
          {
            title: 'Menu Management',
            description:
              'A web application for real-time menu updates for UFCAT Services, enabling efficient management by the nutrition team. Developed with Next.js and Firebase, it was a practical solution delivered under tight deadlines.',
            linkText: 'View on GitHub',
            link: 'https://github.com/marcospaulor/ru-ufcat-menu',
          },
          {
            title: 'Digital Branding Book (Essence)',
            description:
              'An interactive branding book for Essence, blending design and technology. Built with agile methodologies and Kanban, it was a collaborative project that highlighted my adaptability, despite being paused due to external limitations.',
            linkText: 'View the Site',
            link: 'https://essence-henna.vercel.app/',
            external: true,
          },
          {
            title: 'Event Management Platform',
            description:
              'A robust platform for managing academic events, with scalable APIs built in Nest.js and MongoDB. The project focused on performance and integration, meeting real-time user needs effectively.',
            linkText: 'View on GitHub',
            link: 'https://github.com/marcospaulor/event-management-platform',
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
          { id: 'mongodb', name: 'MongoDB' },
          { id: 'nestjs', name: 'Nest.js' },
          { id: 'ai', name: 'Artificial Intelligence' },
          { id: 'agile', name: 'Agile Methodologies' },
        ],
      },
      contact: {
        title: 'Contact',
        text: 'Interested in developing innovative technological solutions? Reach out to create something transformative together.',
        email: 'dev.silva.marcos@gmail.com',
      },
      footer: {
        text: '© 2025 Marcos Paulo Rodrigues. Built with Next.js and TailwindCSS.',
      },
    },
  }

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const projectHover: Variants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.03, y: -5, transition: { duration: 0.3 } },
  }

  const cursorAnimation: Variants = {
    blink: {
      opacity: [1, 0, 1],
      transition: { duration: 0.5, repeat: Infinity, ease: 'easeInOut' },
    },
  }

  return (
    <div className="w-full bg-gray-900 text-white font-sans">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setLanguage('pt')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            language === 'pt' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          PT-BR
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            language === 'en' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          EN
        </button>
      </div>

      {/* Hero Section */}
      <motion.section
        className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-blue-900 to-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15),_transparent_70%)] animate-pulse" />
        <div className="flex items-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          >
            {translations[language].hero.title}
          </motion.h1>
          <motion.span
            className="inline-block w-2 h-8 md:w-4 md:h-12 bg-blue-400 ml-2"
            variants={cursorAnimation}
            animate="blink"
          />
        </div>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-200 text-center max-w-2xl"
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
          <Link href="#contact">
            <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-base font-medium transition-all duration-300">
              {translations[language].hero.button}
            </button>
          </Link>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-16 px-4 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          variants={fadeInUp}
        >
          {translations[language].about.title}
        </motion.h2>
        {translations[language].about.paragraphs.map((paragraph, index) => (
          <motion.p
            key={`about-paragraph-${index}`}
            className="text-base md:text-lg text-gray-300 leading-relaxed mt-4"
            variants={fadeInUp}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-16 px-4 bg-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          variants={fadeInUp}
        >
          {translations[language].projects.title}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
        >
          {translations[language].projects.items.map((project, index) => (
            <motion.div
              key={`project-${index}`}
              className="p-6 bg-gray-700 rounded-lg shadow-md"
              variants={projectHover}
              initial="rest"
              whileHover="hover"
            >
              <h3 className="text-xl font-semibold text-blue-400">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-300 text-sm">
                {project.description}
              </p>
              {project.external ? (
                <a
                  href={project.link}
                  className="mt-4 inline-block text-blue-400 hover:underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.linkText}
                </a>
              ) : (
                <Link
                  href={project.link}
                  className="mt-4 inline-block text-blue-400 hover:underline text-sm"
                >
                  {project.linkText}
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-16 px-4 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        key={`skills-${language}`}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          variants={fadeInUp}
        >
          {translations[language].skills.title}
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          variants={staggerContainer}
        >
          {translations[language].skills.items.map((skill) => (
            <motion.div
              key={skill.id}
              className="p-3 bg-gray-800 rounded-lg text-center text-sm font-medium hover:bg-blue-900 transition-colors"
              variants={fadeInUp}
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-16 px-4 bg-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          variants={fadeInUp}
        >
          {translations[language].contact.title}
        </motion.h2>
        <motion.div
          className="max-w-2xl mx-auto text-center"
          variants={staggerContainer}
        >
          <motion.p
            className="text-base md:text-lg text-gray-300 mb-6"
            variants={fadeInUp}
          >
            {translations[language].contact.text}
          </motion.p>
          <motion.div className="flex justify-center gap-6" variants={fadeInUp}>
            <Link
              href="https://linkedin.com/in/marcospaulor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={28}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              />
            </Link>
            <Link
              href="https://github.com/marcospaulor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={28}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              />
            </Link>
            <Link
              href={`mailto:${translations[language].contact.email}`}
              className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
            >
              {translations[language].contact.email}
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900">
        <p className="text-gray-400 text-sm">
          {translations[language].footer.text}
        </p>
      </footer>
    </div>
  )
}
