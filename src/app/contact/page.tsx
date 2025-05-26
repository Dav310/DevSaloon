import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="page-container fade-in">
      <h2 className="page-title">Contact Us</h2>
      
      <div className="contact-card slide-up">
        <div className="contact-item">
          <Phone className="contact-icon" size={24} />
          <span className="contact-text">+1 234 567 890</span>
        </div>
        
        <div className="contact-item">
          <Mail className="contact-icon" size={24} />
          <span className="contact-text">info@davbarber.com</span>
        </div>
        
        <div className="contact-item">
          <MapPin className="contact-icon" size={24} />
          <span className="contact-text">123 Barber Street, City, Country</span>
        </div>
        
        <div className="contact-address">
          <h3 className="mb-2 text-lg font-semibold text-red-gradient">
            Visit Our Salon
          </h3>
          <p className="text-sm text-gray-600">
            Open Monday - Saturday: 9:00 AM - 7:00 PM<br />
            Sunday: 10:00 AM - 5:00 PM
          </p>
        </div>
      </div>
      
      <div className="mt-8 text-center content-card slide-up">
        <h3 className="mb-3 text-xl font-semibold text-red-gradient">
          Ready for a Fresh Look?
        </h3>
        <p className="mb-4 text-gray-600">
          Book your appointment today and experience the Dav Barber difference!
        </p>
        <a 
          href="/booking" 
          className="cta-button"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}