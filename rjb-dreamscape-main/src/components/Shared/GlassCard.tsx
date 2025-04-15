export default function GlassCard({ children }) {
  return (
    <div className="glass-card p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
      {children}
    </div>
  );
}
