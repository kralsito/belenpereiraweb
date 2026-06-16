import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';
import { siteConfig } from './data/site';

export default function Home() {
  const { therapistName, heroTagline, email, phone, address, hours, credentials, services } = siteConfig;

  return (
    <div
      style={{
        fontFamily: "var(--font-hanken), system-ui, sans-serif",
        color: '#213029',
        background: '#f3f7f1',
        overflowX: 'hidden',
      }}
    >
      <div id="top" />
      <Navbar name={therapistName} />
      <Hero tagline={heroTagline} />
      <About name={therapistName} credentials={credentials} />
      <Services services={services} />
      <Contact email={email} phone={phone} address={address} hours={hours} />
      <Footer name={therapistName} />
    </div>
  );
}