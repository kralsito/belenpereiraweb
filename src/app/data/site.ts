import type { SiteConfig } from "../types";

export const siteConfig: SiteConfig = {
  // Set to false to take the site out of maintenance and show the full homepage.
  maintenanceMode: true,
  therapistName: 'María Belen Pereira',
  heroTagline: 'Space to heal, grow, and feel like yourself again.',
  email: 'hello@belenpereira.com',
  phone: '(202) 555-0148',
  address: '1200 Connecticut Ave NW · Washington, DC',
  hours: 'Mon–Thu · 9am–6pm',
  credentials: [
    { title: 'Licensed Professional Counselor', sub: 'Virginia & Washington, DC' },
    { title: '15+ years in private practice', sub: 'Individual & couples therapy' },
    { title: 'M.A.-equivalent in Clinical Psychology', sub: 'Trained in Argentina' },
    { title: 'Washington School of Psychiatry', sub: 'Two-year postgraduate program' },
  ],
  services: [
    { title: 'Depression & Anxiety', desc: 'Finding steadier ground when everything feels heavy or uncertain.' },
    { title: 'Parenting Support', desc: 'Navigating the everyday questions and challenges of raising children.' },
    { title: 'Grief & Unresolved Loss', desc: 'Making space for loss that still asks to be felt and understood.' },
    { title: 'Childhood Trauma', desc: 'Gently working through early experiences that still shape today.' },
    { title: 'Self-Esteem', desc: 'Rebuilding a kinder, steadier relationship with yourself.' },
    { title: 'Stress Management', desc: 'Practical tools and perspective for a life that asks a lot of you.' },
    { title: 'Relationships & Family Conflict', desc: 'Repairing connection and communication with the people who matter.' },
  ],
};