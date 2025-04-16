export default function HeroSection({ title }) {
  return (
    <div className="text-center py-12 bg-gradient-to-r from-purple-500 to-red-500 text-white">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-mokoto">
        {title}
      </h1>
      <p className="font-mokoto font-medium not-italic">
        Discover courses and learn from industry experts at RJB Academy.
      </p>
    </div>
  );
}
