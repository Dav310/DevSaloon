const prices = [
  { service: "Men's Haircut", price: "$25" },
  { service: "Beard Trim", price: "$15" },
  { service: "Kids' Haircut", price: "$18" },
  { service: "Shave", price: "$20" },
  { service: "Hair Color", price: "$40" },
];

export default function Pricing() {
  return (
    <section className="page-container fade-in">
      <h2 className="page-title">Our Pricing</h2>
      
      <div className="pricing-card slide-up">
        <h3 className="mb-6 text-xl font-semibold text-center text-red-gradient">
          Professional Services
        </h3>
        
        <ul className="pricing-list">
          {prices.map((item, idx) => (
            <li key={idx} className="pricing-item">
              <span className="pricing-service">{item.service}</span>
              <span className="pricing-cost">{item.price}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 highlight-box">
          <p className="mb-2 text-sm text-center text-gray-600">
            <strong className="text-red-gradient">Special Offer:</strong>
          </p>
          <p className="text-sm text-center text-gray-600">
            Book a haircut + beard trim combo and save $5!
          </p>
        </div>
      </div>
      
      <div className="mt-8 text-center content-card slide-up">
        <h3 className="mb-3 text-xl font-semibold text-red-gradient">
          Ready to Book?
        </h3>
        <p className="mb-4 text-gray-600">
          All services include consultation and styling. Walk-ins welcome!
        </p>
        <a 
          href="/booking" 
          className="cta-button"
        >
          Schedule Appointment
        </a>
      </div>
    </section>
  );
}