export default function HeroSection({ title }) {
  return (
    <div className="text-center py-12 bg-gradient-to-r from-purple-500 to-red-500 text-white">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg mt-4">
        Discover courses and learn from industry experts at RJB Academy.
      </p>
    </div>
  );
}
