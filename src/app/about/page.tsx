/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Link from 'next/link'
import { FaCode, FaPaintBrush, FaLightbulb, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Muhammad Huzaifa</title>
        <meta name="description" content="Learn more about Muhammad Huzaifa, UI/UX Designer & Developer" />
      </Head>

      <header className="header">
        <div className="container">
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="about" style={{ background: 'linear-gradient(120deg, var(--primary-color), var(--secondary-color))', color: '#fff' }}>
        <div className="container">
          <h1>About Me</h1>
          <p>I'm a passionate UI/UX designer and developer with a keen eye for detail and a love for creating beautiful, functional web experiences.</p>
          
          <section className="skills">
            <h2>What I Do</h2>
            <div className="skill-cards">
              <div className="skill-card" style={{ background: 'none', boxShadow: 'none' }}>
                <FaCode style={{ color: 'var(--accent-color)' }} />
                <h3>Web Development</h3>
                <p>Building responsive and performant web applications using modern technologies.</p>
              </div>
              <div className="skill-card" style={{ background: 'none', boxShadow: 'none' }}>
                <FaPaintBrush style={{ color: 'var(--accent-color)' }} />
                <h3>UI/UX Design</h3>
                <p>Creating intuitive and visually appealing user interfaces and experiences.</p>
              </div>
              <div className="skill-card" style={{ background: 'none', boxShadow: 'none' }}>
                <FaLightbulb style={{ color: 'var(--accent-color)' }} />
                <h3>Problem Solving</h3>
                <p>Finding creative solutions to complex design and development challenges.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Muhammad Huzaifa</p>
          <div className="social-links">
            <a className='social-link-icon' href="https://github.com/mk26408527" target="_blank" rel="noopener noreferrer"><FaGithub style={{ color: 'var(--accent-color)' }} /></a>
            <a className='social-link-icon' href="https://www.linkedin.com/in/muhammad-huzaifa-9102282b7/" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{ color: 'var(--accent-color)' }} /></a>
            <a className='social-link-icon' href="https://www.instagram.com/itx_hezzi/" target="_blank" rel="noopener noreferrer"><FaTwitter style={{ color: 'var(--accent-color)' }} /></a>
          </div>
        </div>
      </footer>
    </>
  )
}