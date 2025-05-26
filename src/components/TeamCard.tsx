import Image from 'next/image';

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
      <Image
        src={img}
        alt={`${name} avatar`}
        className="w-24 h-24 mx-auto mb-4 border-2 border-red-100 rounded-full"
        height={100}
        width={100}
      />
      <h3 className="team-name">{name}</h3>
      <p className="team-role">{role}</p>
    </div>
  );
}
