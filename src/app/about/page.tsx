export default function About() {
  return (
    <section className="page-container fade-in">
      <h2 className="page-title">About Dav Barber</h2>
      
      <div className="about-content">
        <p className="about-text">
          Dav Barber is a modern, stylish salon dedicated to providing the best grooming experience. Our skilled team combines classic techniques with up-to-date trends, ensuring every client leaves looking sharp and feeling confident.
        </p>
        
        <div className="about-highlight slide-up">
          <h3 className="mb-3 text-xl font-semibold text-red-gradient">
            Our Mission
          </h3>
          <p className="leading-relaxed text-gray-600">
            We believe that great style starts with great service. Every cut, trim, and style is crafted with precision and passion, making sure you not only look your best but feel your best too.
          </p>
        </div>
        
        <div className="content-card slide-up">
          <h3 className="mb-4 text-xl font-semibold text-red-gradient">
            Why Choose Dav Barber?
          </h3>
          <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-red-600 rounded-full"></div>
              <span className="text-gray-700">Expert barbers with years of experience</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-red-600 rounded-full"></div>
              <span className="text-gray-700">Modern techniques with classic style</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-red-600 rounded-full"></div>
              <span className="text-gray-700">Premium products and equipment</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-red-600 rounded-full"></div>
              <span className="text-gray-700">Relaxing and welcoming atmosphere</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}