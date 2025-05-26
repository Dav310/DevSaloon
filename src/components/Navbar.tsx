"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/booking", label: "Book Appointment" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          Dav Barber
        </Link>
        
        <div className="navbar-links">
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="navbar-link"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <button 
          className="mobile-menu-btn" 
          aria-label="Menu" 
          onClick={() => setOpen(!open)}
        >
          <Menu size={28} />
        </button>
      </div>
      
      {open && (
        <div className="mobile-menu">
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="mobile-menu-link" 
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}