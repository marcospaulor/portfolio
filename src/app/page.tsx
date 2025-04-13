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
        title: 'Marcos Paulo R.',
        subtitle:
          'Engenheiro de Software | Transformando ideias em sistemas robustos',
        button: 'Vamos Criar Algo Incrível',
      },
      about: {
        title: 'Sobre Mim',
        paragraphs: [
          'Cresci em Morrinhos, GO, fascinado por tecnologia. Do Nokia "tijolão" ao PS1 na lan house do meu tio, cada botão apertado era uma descoberta. Aos 12 anos, meu primeiro PC acendeu uma chama que me levou ao Técnico em Informática no IF Goiano e, hoje, ao mestrado em Ciência da Computação na UFSCar.',
          'Minha paixão por criar software nasceu no Técnico, mas foi na graduação em Ciência da Computação na UFCAT que ela ganhou forma. Desenvolver o <span className="text-blue-400">UFCAT Serviços</span>, tema do meu TCC, foi transformador. Sem API oficial, usei Python para web scraping, coletando notícias e cardápios apesar de equipamentos limitados e prazos apertados. Ver estudantes usando o app foi a prova de que tecnologia pode mudar vidas.',
          'Na Fábrica de Software da UFCAT, aprendi o poder das metodologias ágeis, colaborando em projetos como o <span className="text-blue-400">Gerenciamento do Cardápio</span>. Com Next.js e Firebase, integrei uma solução web ao app em tempo recorde, superando a escassez de tempo. No <span className="text-blue-400">Branding Book da Essence</span>, trabalhei com um time de quatro, aplicando Kanban para criar um produto visual único, mesmo com o projeto pausado por falta de recursos da empresa.',
          'Agora, estou expandindo meu arsenal com Java para construir APIs robustas no back-end e aprimorando meu SQL com MySQL e PostgreSQL para gerenciar dados com eficiência. Minha família, que me incentivou a estudar desde cedo, é meu maior combustível, junto com o sonho de criar soluções que impactem a sociedade. Valorizo integridade, acessibilidade e colaboração — para mim, um time unido é sinônimo de eficiência.',
          'Olhando para o futuro, quero ser Tech Lead ou CTO, liderando projetos inovadores que avancem o mundo, talvez com AI, que me fascina por seu potencial. Fora do código, musculação, games no PC e desafios técnicos me mantêm equilibrado. Se você busca alguém focado, criativo e apaixonado por transformar ideias em realidade, estou pronto para construir o futuro ao seu lado.',
        ],
      },
      projects: {
        title: 'Projetos',
        items: [
          {
            title: 'UFCAT Serviços',
            description:
              'Um app mobile que conecta a comunidade acadêmica, trazendo notícias, eventos e cardápios em um só lugar. Desenvolvido com Flutter e Firebase, foi meu primeiro mergulho na engenharia de software, superando a falta de APIs com web scraping criativo.',
            linkText: 'Ver no GitHub',
            link: 'https://github.com/marcospaulor/ufcat-app',
          },
          {
            title: 'Gerenciamento do Cardápio',
            description:
              'Uma aplicação web que permite à nutricionista do RU atualizar o cardápio do UFCAT Serviços em tempo real. Feita com Next.js e Firebase, foi um desafio de integração e prazos curtos, mas entreguei uma solução prática e intuitiva.',
            linkText: 'Ver no GitHub',
            link: 'https://github.com/marcospaulor/ru-ufcat-menu',
          },
          {
            title: 'Branding Book Digital (Essence)',
            description:
              'Um branding book interativo para a Essence, unindo código e design com um time ágil. Desenvolvido com métodos Kanban, foi uma lição de colaboração, mesmo sem continuidade por limitações da empresa.',
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
          { id: 'ai', name: 'AI' },
          { id: 'agile', name: 'Agile' },
        ],
      },
      contact: {
        title: 'Contato',
        text: 'Apaixonado por tecnologia com propósito? Vamos conversar e construir algo que mude o jogo!',
        email: 'dev.silva.marcos@gmail.com',
      },
      footer: {
        text: '© 2025 Marcos Paulo Rodrigues. Feito com Next.js e TailwindCSS.',
      },
    },
    en: {
      hero: {
        title: 'Marcos Paulo R.',
        subtitle: 'Software Engineer | Turning ideas into robust systems',
        button: 'Let’s Build Something Amazing',
      },
      about: {
        title: 'About Me',
        paragraphs: [
          'I grew up in Morrinhos, GO, captivated by technology. From the Nokia "brick" to the PS1 at my uncle’s lan house, every button I pressed was a discovery. At 12, my first PC sparked a journey that took me from a Technical Degree in IT at IF Goiano to pursuing a Master’s in Computer Science at UFSCar.',
          'My passion for building software took root during my Technical Degree, but it truly shaped during my Bachelor’s in Computer Science at UFCAT. Developing <span className="text-blue-400">UFCAT Services</span>, my undergraduate thesis, was a game-changer. With no official API, I used Python for web scraping to gather news and menus, overcoming limited equipment and tight deadlines. Seeing students use the app was proof that technology can change lives.',
          'At UFCAT’s Software Factory, I learned the power of agile methodologies, collaborating on projects like <span className="text-blue-400">Menu Management</span>. Using Next.js and Firebase, I integrated a web solution with the app in record time, despite time constraints. On <span className="text-blue-400">Essence’s Branding Book</span>, I worked with a team of four, applying Kanban to create a visually unique product, even though it was paused due to the company’s resource limitations.',
          'Now, I’m expanding my skillset with Java to build robust back-end APIs and sharpening my SQL skills with MySQL and PostgreSQL for efficient data management. My family, who encouraged me to study from a young age, is my greatest drive, alongside my dream of creating solutions that impact society. I value integrity, accessibility, and collaboration — to me, a united team means efficiency.',
          'Looking ahead, I aim to become a Tech Lead or CTO, leading innovative projects that advance the world, perhaps with AI, which fascinates me for its potential. Outside of coding, weightlifting, PC gaming, and technical challenges keep me balanced. If you’re looking for someone focused, creative, and passionate about turning ideas into reality, I’m ready to build the future with you.',
        ],
      },
      projects: {
        title: 'Projects',
        items: [
          {
            title: 'UFCAT Services',
            description:
              'A mobile app that connects the academic community, bringing news, events, and menus together. Built with Flutter and Firebase, it was my first dive into software engineering, overcoming the lack of APIs with creative web scraping.',
            linkText: 'View on GitHub',
            link: 'https://github.com/marcospaulor/ufcat-app',
          },
          {
            title: 'Menu Management',
            description:
              'A web app that lets the RU nutritionist update UFCAT Services’ menu in real-time. Made with Next.js and Firebase, it was a challenge of integration and tight deadlines, but I delivered a practical and intuitive solution.',
            linkText: 'View on GitHub',
            link: 'https://github.com/marcospaulor/ru-ufcat-menu',
          },
          {
            title: 'Digital Branding Book (Essence)',
            description:
              'An interactive branding book for Essence, blending code and design with an agile team. Developed using Kanban, it was a lesson in collaboration, despite being paused due to company limitations.',
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
          { id: 'ai', name: 'AI' },
          { id: 'agile', name: 'Agile' },
        ],
      },
      contact: {
        title: 'Contact',
        text: 'Passionate about purposeful technology? Let’s talk and build something game-changing!',
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
