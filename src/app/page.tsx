/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import profile from '../../public/profile.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad Huzaifa | UI/UX Designer & Developer</title>
        <meta name="description" content="Portfolio of Muhammad Huzaifa, UI/UX Designer & Developer" />
        <link rel="icon" href="/favicon.ico" />
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

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Hi, I'm Muhammad Huzaifa</h1>
              <h2 className="hero-subtitle" style={{ color: 'var(--accent-color)' }}>Creative UI/UX Designer & Developer</h2>
              <Link href="/contact" className="btn cta-button">Get in Touch</Link>
            </div>
            <div className="profile-pic">
              <Image 
                src={profile}
                alt="Profile picture of Muhammad Huzaifa"
                width={250}
                height={250}
                className="profile-image"
              />
            </div>
          </div>
        </section>

        <section className="skills">
          <div className="container">
            <h2>My Skills</h2>
            <ul>
              <li>UI/UX Design</li>
              <li>Tailwind CSS</li>
              <li>Next.js</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Shad CN</li>
            </ul>
          </div>
        </section>
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