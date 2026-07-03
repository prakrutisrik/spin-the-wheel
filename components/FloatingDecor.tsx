export default function FloatingDecor() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-10 left-10 text-pink-300 opacity-20 animate-pulse">
        ✦
      </div>
      <div className="absolute top-1/3 right-20 text-purple-300 opacity-20 animate-pulse">
        ✧
      </div>
      <div className="absolute bottom-20 left-1/3 text-blue-300 opacity-20 animate-pulse">
        ✦
      </div>
      <div className="absolute bottom-32 right-1/4 text-yellow-300 opacity-20 animate-pulse">
        ✧
      </div>
    </div>
  );
}