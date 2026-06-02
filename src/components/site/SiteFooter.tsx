import { Link } from "@tanstack/react-router";
import { Stethoscope, Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground"><Stethoscope className="h-5 w-5" /></div>
            <div className="font-display text-lg font-bold">XYZ Hospital</div>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A 850-bed multi-specialty quaternary care hospital delivering compassionate, evidence-based medicine since 1984.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <p className="flex items-start gap-2 text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> 1200 Wellness Avenue, Riverside District, City 56001</p>
            <p className="flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4 text-primary" /> +1 (555) 010-2200</p>
            <p className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4 text-primary" /> care@xyzhospital.health</p>
          </div>
        </div>
        <FooterCol title="Care" links={[
          { to: "/departments", label: "Departments" },
          { to: "/doctors", label: "Find a doctor" },
          { to: "/services", label: "Services" },
          { to: "/appointment", label: "Book appointment" },
        ]} />
        <FooterCol title="Hospital" links={[
          { to: "/about", label: "About us" },
          { to: "/about", label: "Leadership" },
          { to: "/about", label: "Accreditations" },
          { to: "/contact", label: "Contact" },
        ]} />
        <FooterCol title="Portals" links={[
          { to: "/patient", label: "Patient portal" },
          { to: "/doctor", label: "Doctor portal" },
          { to: "/admin", label: "Admin dashboard" },
        ]} />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-5 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} XYZ Hospital. All rights reserved. NABH · JCI · ISO 9001 accredited.</p>
          <div className="flex items-center gap-3 text-muted-foreground">
            <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l, i) => (
          <li key={i}>
            <Link to={l.to} className="text-muted-foreground hover:text-primary">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
