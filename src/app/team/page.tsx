import TeamCard from "@/components/TeamCard";

const teamMembers = [
  { name: "David", role: "Master Barber", img: "/cool-.png" },
  { name: "Alex", role: "Stylist", img: "/dizzy.png" },
  { name: "Maria", role: "Color Specialist", img: "/hi.png" },
];

export default function Team() {
  return (
    <section className="page-container fade-in">
      <div className="team-section">
        <h2 className="team-title text-red-gradient">Meet Our Expert Team</h2>
        
        <p className="max-w-2xl mx-auto mb-12 about-text">
          Our skilled professionals are passionate about their craft and dedicated to making you look and feel your best.
        </p>
        
        <div className="grid grid-cols-1 gap-8 mb-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, idx) => (
            <TeamCard key={idx} name={member.name} role={member.role} img={member.img} />

          ))}
        </div>
        
        <div className="max-w-2xl mx-auto content-card slide-up">
          <h3 className="mb-4 text-xl font-semibold text-red-gradient">
            Why Our Team Stands Out
          </h3>
          <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold text-gray-800">Experience</h4>
              <p className="text-sm text-gray-600">
                Each team member brings years of professional experience and ongoing education in the latest techniques.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-800">Passion</h4>
              <p className="text-sm text-gray-600">
                We love what we do and it shows in every cut, style, and interaction with our valued clients.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-800">Precision</h4>
              <p className="text-sm text-gray-600">
                Attention to detail is our specialty - from classic cuts to modern styles, we deliver perfection.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-800">Personalized Service</h4>
              <p className="text-sm text-gray-600">
                We listen to your needs and work with you to achieve the perfect look that suits your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}