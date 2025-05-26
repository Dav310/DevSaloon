export default function TeamCard({
  name,
  role,
  img,
}: {
  name: string;
  role: string;
  img: string;
}) {
  return (
    <div className="text-center team-card fade-in">
      <img
        src={img}
        alt={`${name} avatar`}
        className="w-24 h-24 mx-auto mb-4 border-2 border-red-100 rounded-full"
      />
      <h3 className="team-name">{name}</h3>
      <p className="team-role">{role}</p>
    </div>
  );
}
