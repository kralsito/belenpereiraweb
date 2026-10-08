export interface Credential {
  title: string;
  sub: string;
}

export interface Service {
  title: string;
  desc: string;
}

export type HeroVariant = 1 | 2 | 3;

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
}

export interface FormErrors {
  name: boolean;
  email: boolean;
  message: boolean;
}

export interface SiteConfig {
  maintenanceMode: boolean;
  therapistName: string;
  heroTagline: string;
  email: string;
  phone: string;
  address: string;
  hours: string;
  credentials: Credential[];
  services: Service[];
}