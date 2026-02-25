'use client';

import {
  Navbar as FlowbiteNavbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button
} from 'flowbite-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Plans', href: '#plans' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  return (
    <FlowbiteNavbar
      fluid
      rounded={false}
      className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur"
    >
      <NavbarBrand href="#hero">
        <span className="self-center whitespace-nowrap text-xl font-semibold tracking-tight text-white">
          VFitness
        </span>
      </NavbarBrand>
      <div className="flex items-center gap-3 md:order-2">
        <Button
          href="#join"
          className="btn-primary hidden sm:inline-flex"
        >
          Join Now
        </Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {navItems.map(item => (
          <NavbarLink
            key={item.href}
            href={item.href}
            className="nav-link"
          >
            {item.label}
          </NavbarLink>
        ))}
        <Button
          href="#join"
          className="btn-primary mt-3 w-full sm:hidden"
        >
          Join Now
        </Button>
      </NavbarCollapse>
    </FlowbiteNavbar>
  );
}
