/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Link from 'next/link'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Muhammad Huzaifa</title>
        <meta name="description" content="Get in touch with Muhammad Huzaifa, UI/UX Designer & Developer" />
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

      <main className="contact" style={{ background: 'linear-gradient(120deg, var(--primary-color), var(--secondary-color))', color: '#fff' }}>
        <div className="container">
          <h1>Get in Touch</h1>
          <p>I'd love to hear from you! Feel free to reach out using any of the methods below.</p>

          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope style={{ color: 'var(--accent-color)' }} />
              <p>Email: <a href="muhammadhuzaifa200t@gmail.com">muhammadhuzaifa@gamail.com</a></p>
            </div>
            <div className="contact-item">
              <FaPhone style={{ color: 'var(--accent-color)' }} />
              <p>Phone: +1 (123) 456-7890</p>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt style={{ color: 'var(--accent-color)' }} />
              <p>Location: Karachi, Pakistan</p>
            </div>
          </div>

          <form className="contact-form" style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '20px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder='your name' required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder='123@gmail.com' required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder='Hi...' required></textarea>
            </div>
            <button type="submit" className="btn" style={{ backgroundColor: 'var(--accent-color)', color: '#fff' }}>Send Message</button>
          </form>
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