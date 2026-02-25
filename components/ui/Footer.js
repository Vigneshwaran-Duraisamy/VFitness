import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background/95">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-10 text-sm text-muted md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">
            VFitness
          </h3>
          <p className="max-w-sm text-xs md:text-sm">
            A modern, high-intensity training space built for people who want real results,
            not excuses. Stronger body, sharper mind, elevated lifestyle.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-2 text-xs md:text-sm">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#plans" className="nav-link">
              Membership Plans
            </a>
            <a href="#trainers" className="nav-link">
              Trainers
            </a>
            <a href="#gallery" className="nav-link">
              Transformations
            </a>
            <a href="#location" className="nav-link">
              Location
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white">
            Connect
          </h4>
          <p className="text-xs md:text-sm">
            Follow us for training tips, transformations, and daily motivation.
          </p>
          <div className="mt-2 flex items-center gap-3">
            <a
              href="#"
              aria-label="VFitness Instagram"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-muted transition-colors duration-200 hover:bg-primary hover:text-white"
            >
              <FaInstagram className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              aria-label="VFitness Facebook"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-muted transition-colors duration-200 hover:bg-primary hover:text-white"
            >
              <FaFacebookF className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              aria-label="VFitness LinkedIn"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-muted transition-colors duration-200 hover:bg-primary hover:text-white"
            >
              <FaLinkedinIn className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-4 text-[11px] text-muted md:flex-row md:text-xs">
          <span>© {new Date().getFullYear()} VFitness. All rights reserved.</span>
          <span>Crafted for high-performance, high-conversion fitness experiences.</span>
        </div>
      </div>
    </footer>
  );
}

