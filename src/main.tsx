import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Compass,
  Layers3,
  Mail,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';
import './styles.css';

const services = [
  {
    icon: Layers3,
    title: 'Nettsider',
    text: 'Raske, responsive sider bygget for tydelig merkevare, høy konvertering og enkel videreutvikling.',
  },
  {
    icon: BarChart3,
    title: 'Strategi',
    text: 'Vi spisser budskap, innholdsstruktur og brukerreise før designet får lov til å skinne.',
  },
  {
    icon: Zap,
    title: 'Lansering',
    text: 'Teknisk oppsett, ytelse, SEO-grunnmur og Vercel-deploy uten tung drift eller CMS-avhengighet.',
  },
];

const cases = [
  ['SaaS', 'Ny landingsside ga klarere posisjonering og 34% flere demoforespørsler.'],
  ['Konsulent', 'Strammere tjenestesider gjorde det enklere å selge premium rådgivning.'],
  ['E-handel', 'Forenklet kampanjeside med raskere lastetid og bedre mobilflyt.'],
];

const pricing = [
  ['Start', 'Fra 25 000 kr', 'For små bedrifter som trenger en profesjonell lansering raskt.'],
  ['Vekst', 'Fra 55 000 kr', 'For selskaper som trenger strategi, design, innhold og flere sider.'],
  ['Partner', 'Fast månedlig', 'For team som vil ha løpende forbedring, analyse og nye kampanjer.'],
];

const faqs = [
  ['Kan siden lastes opp direkte til Vercel?', 'Ja. Prosjektet er satt opp med Vite, React og statiske assets.'],
  ['Trenger jeg CMS?', 'Nei. Innholdet ligger i koden, som gjør løsningen enkel, rask og rimelig å drifte.'],
  ['Kan designet tilpasses min merkevare?', 'Ja. Farger, tekst, bilder og seksjoner kan byttes uten å endre arkitekturen.'],
];

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Fjord Digital hjem">
          <span className="brand-mark">F</span>
          <span>Fjord Digital</span>
        </a>
        <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Hovedmeny">
          <a href="#tjenester" onClick={() => setOpen(false)}>
            Tjenester
          </a>
          <a href="#arbeid" onClick={() => setOpen(false)}>
            Arbeid
          </a>
          <a href="#priser" onClick={() => setOpen(false)}>
            Priser
          </a>
          <a href="#kontakt" onClick={() => setOpen(false)}>
            Kontakt
          </a>
        </nav>
        <button
          className="icon-button"
          type="button"
          aria-label={open ? 'Lukk meny' : 'Åpne meny'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Webdesign, strategi og lansering</p>
            <h1>Moderne nettsider for bedrifter som vil fremstå skarpere.</h1>
            <p className="lead">
              Fjord Digital designer og bygger raske, vakre og konverterende
              nettsider uten CMS-tyngde. Perfekt for Vercel, enkel å eie, enkel
              å videreutvikle.
            </p>
            <div className="actions">
              <a className="button primary" href="#kontakt">
                Start prosjekt <ArrowRight size={18} />
              </a>
              <a className="button secondary" href="#arbeid">
                Se eksempler <ChevronRight size={18} />
              </a>
            </div>
          </div>
          <div className="hero-media" aria-label="Moderne digitalt arbeidsmiljø">
            <img src="/hero-studio.png" alt="" />
            <div className="metric">
              <strong>98</strong>
              <span>Ytelsesscore</span>
            </div>
          </div>
        </section>

        <section className="trust-band" aria-label="Nøkkeltall">
          <span>Vercel-klar</span>
          <span>Responsivt design</span>
          <span>SEO-grunnmur</span>
          <span>Ingen CMS-lisens</span>
        </section>

        <section id="tjenester" className="section">
          <div className="section-heading">
            <p className="eyebrow">Hva du får</p>
            <h2>Alt du trenger for en solid digital førsteflate.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <service.icon size={28} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-section">
          <div>
            <p className="eyebrow">Prosess</p>
            <h2>Ryddig fra første samtale til produksjon.</h2>
          </div>
          <div className="timeline">
            {['Avklaring', 'Designretning', 'Utvikling', 'Lansering'].map((item, index) => (
              <div className="timeline-item" key={item}>
                <span>{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="arbeid" className="section muted">
          <div className="section-heading">
            <p className="eyebrow">Resultater</p>
            <h2>Bygget for tydelighet, tillit og handling.</h2>
          </div>
          <div className="case-list">
            {cases.map(([label, text]) => (
              <article className="case-row" key={label}>
                <span>{label}</span>
                <p>{text}</p>
                <Compass size={22} />
              </article>
            ))}
          </div>
        </section>

        <section id="priser" className="section">
          <div className="section-heading">
            <p className="eyebrow">Pakker</p>
            <h2>Velg nivået som passer ambisjonen.</h2>
          </div>
          <div className="pricing-grid">
            {pricing.map(([name, price, text]) => (
              <article className="price-card" key={name}>
                <h3>{name}</h3>
                <strong>{price}</strong>
                <p>{text}</p>
                <ul>
                  <li>
                    <Check size={18} /> Strategisk sidekart
                  </li>
                  <li>
                    <Check size={18} /> Moderne React-kode
                  </li>
                  <li>
                    <Check size={18} /> Klar for Vercel
                  </li>
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="faq-section">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2>Vanlige spørsmål før lansering.</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="kontakt" className="cta-section">
          <div>
            <Sparkles size={28} />
            <h2>Klar for en nettside som føles mer profesjonell?</h2>
            <p>
              Send en kort beskjed, så kan vi skissere en enkel plan for innhold,
              design og lansering.
            </p>
          </div>
          <a className="button primary light" href="mailto:hei@fjorddigital.no">
            <Mail size={18} /> hei@fjorddigital.no
          </a>
        </section>
      </main>

      <footer>
        <span>Fjord Digital</span>
        <span>Bygget med React, TypeScript og Vite.</span>
        <span>
          <ShieldCheck size={16} /> Vercel-klar
        </span>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
