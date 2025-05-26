'use client';

import { Scissors } from "lucide-react";

import Link from "next/link";
import Team from "./team/page";
import Pricing from "./pricing/page";
import About from "./about/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <section className="hero-section fade-in">
      {/* Icon with subtle background */}
      <div className="icon-container hover-lift">
        <Scissors 
          size={60} 
          className="icon-scissors"
        />
      </div>
      
      {/* Main heading with gradient effect */}
      <h1 className="main-heading slide-up">
        Welcome to Dav Barber
      </h1>
      
      {/* Subtitle */}
      <p className="subtitle slide-up">
        Your style, Our passion. Get a fresh look with the best barbers in town!
      </p>
      
      {/* CTA Button with enhanced styling */}
      <Link 
        href="/booking" 
        className="cta-button slide-up"
      >
        Book Appointment
      </Link>
      
      {/* Decorative elements */}
      <div className="decorative-dots fade-in">
        <div className="dot dot-red"></div>
        <div className="dot dot-dark-red"></div>
        <div className="dot dot-red"></div>
      </div>
      <Team/>
      <Pricing/>
      {/* <Booking/> */}
      <About/>
      <Contact/>
    </section>
  );
}