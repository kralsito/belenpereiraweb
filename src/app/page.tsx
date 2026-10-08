import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';
import Maintenance from './components/maintenance';
import { siteConfig } from './data/site';
import type { Metadata } from 'next';

// Keep search engines from indexing the placeholder while in maintenance.
export const metadata: Metadata = siteConfig.maintenanceMode
  ? { robots: { index: false, follow: false } }
  : {};

export default function Home() {
  const { maintenanceMode, therapistName, heroTagline, email, phone, address, hours, credentials, services } = siteConfig;

  if (maintenanceMode) {
    return <Maintenance name={therapistName} email={email} />;
  }

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