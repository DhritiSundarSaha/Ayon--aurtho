import { useState } from 'react'
import { ArrowUpRight, ChevronRight, MapPin, Menu, Phone, X } from 'lucide-react'
import doctorImage from '../profile.jpeg'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const chambers = [
    { name: 'Unihealth - Multi-speciality Polyclinic', location: 'Santoshpur', phone: '8910767623', map: 'https://www.google.com/search?client=ms-android-oneplus-terr1-rso2&hs=fvAB&sca_esv=a34fc7514aa53498&hl=en-GB&cs=0&sxsrf=APpeQnswSYEUS6-GqH0xDmFhoAs1b6Lm4Q%3A1787635837221&kgmid=%2Fg%2F11v41gs8q1&q=UNIHEALTH-MULTISPECIALITY%20POLYCLINIC%20AND%20DIAGNOSTIC%20CENTRE&shem=epsd1%2Cltae%2Crimspwouoe&shndl=30&source=sh%2Fx%2Floc%2Fact%2Fm1%2F4&kgs=f1130e855b678d79' },
    { name: 'Libberton Orthopaedics Centre', location: 'Kalikapur', phone: '8420012671', map: 'https://share.google/Nd0Iw6rGqv87rz5Ce' },
    { name: 'Longlife Speciality Clinic', location: 'Mukundapur', phone: '9874807480', map: 'https://share.google/MZxtWIZemsk8qQmRc' },
    { name: 'Healthora Polyclinic', location: 'Rathtala, Kasba', phone: '9147172333', map: 'https://share.google/addRHjZ01jxkFCMDb' },
  ]

  return (
    <main>
      <header className="site-header"><a className="brand" href="#top" onClick={closeMenu}><span>AS</span> Orthopaedics</a><button className="menu-toggle" type="button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button><nav className={menuOpen ? 'nav-links open' : 'nav-links'}><a href="#about" onClick={closeMenu}>About</a><a href="#expertise" onClick={closeMenu}>Expertise</a><a href="#chambers" onClick={closeMenu}>Chambers</a><a className="nav-cta" href="#booking" onClick={closeMenu}>Book a visit <ArrowUpRight size={16} /></a></nav></header>
      <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">অস্থি রোগ বিশেষজ্ঞ · Kolkata</p><h1>Movement is<br /><em>medicine.</em></h1><p className="hero-lede">Thoughtful, precise orthopaedic care for a life in motion.</p><a className="primary-button" href="#booking">Schedule a consultation <ArrowUpRight size={17} /></a><div className="hero-note"><span className="status-dot" /> Accepting new patients <span className="note-rule" /> <span>English · বাংলা · हिंदी</span></div></div><div className="hero-portrait"><div className="portrait-frame"><img src={doctorImage} alt="Dr. Ayan Sarkar" /></div><div className="portrait-caption"><span>01</span><span>Care rooted in clarity</span></div><div className="seal">CARE<br /><span>with</span><br />INTENT</div></div></section>
      <section className="intro section-wrap" id="about"><div className="section-kicker"><span>01</span> The practice</div><div className="intro-content"><h2>A considered approach<br />to <em>better movement.</em></h2><div><p>Dr. AYAN SARKAR brings a calm, evidence-led approach to orthopaedic care. From a first assessment to recovery, every recommendation is made with your everyday life in mind.</p><a className="text-link" href="#expertise">Explore areas of expertise <ChevronRight size={16} /></a></div></div></section>
      <section className="expertise section-wrap" id="expertise"><div className="section-kicker"><span>02</span> Areas of expertise</div><div className="expertise-grid"><div className="expertise-image"><img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=85" alt="Orthopaedic consultation" /><span className="image-label">Precision in practice</span></div><div className="expertise-list"><p className="section-intro">Specialist guidance for the moments that ask more of your body.</p>{['Joint pain & arthritis', 'Sports & activity injuries', 'Fracture care', 'Rheumatology & inflammatory conditions'].map((item, index) => <div className="expertise-item" key={item}><span>0{index + 1}</span><h3>{item}</h3><ArrowUpRight size={18} /></div>)}</div></div></section>
      <section className="credentials section-wrap"><div className="section-kicker"><span>03</span> Credentials</div><div className="credentials-grid"><div><p className="big-number">15<span>+</span></p><p>years of clinical experience</p></div><div className="credential-block"><h3>Education</h3><p>MBBS<br />DNB Orthopaedics<br />Fellowship in Rheumatology, Pune</p></div><div className="credential-block"><h3>Experience</h3><p>Special Medical Officer, Orthopaedics<br />ESI Gourhati<br /><br />Registrar<br />Manipal Hospital Saltlake · Fortis Hospital Anandapur</p></div></div></section>
      <section className="booking section-wrap" id="booking"><div className="booking-copy"><div className="section-kicker"><span>05</span> Appointments</div><h2>Book by<br /><em>calling us.</em></h2><p>Choose a chamber below to call directly or open its location in Google Maps.</p></div><div className="booking-contacts">{chambers.map((chamber) => <article className="contact-card" key={chamber.phone}><div className="contact-card-heading"><Phone size={18} /><div><h3>{chamber.name}</h3><p>{chamber.location}, Kolkata</p></div></div><div className="contact-actions"><a className="primary-button" href={`tel:+91${chamber.phone}`}><Phone size={16} /> {chamber.phone}</a><a className="map-button" href={chamber.map} target="_blank" rel="noreferrer"><MapPin size={16} /> Find location</a></div></article>)}</div></section>
      <footer><a className="brand" href="#top"><span>AS</span> Orthopaedics</a><p>Specialist care for better movement.</p><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}

export default App
