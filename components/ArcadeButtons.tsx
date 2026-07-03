const colors = [
  "bg-[var(--pink)]",
  "bg-[var(--purple)]",
  "bg-[var(--blue)]",
  "bg-[var(--green)]",
];

export default function ArcadeButtons() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {colors.map((color) => (
        <button
          key={color}
          className={`
          ${color}
          h-16
          w-16
          rounded-full
          border-4
          border-[var(--border)]
          active:translate-y-1
          transition
          `}
        />
      ))}
    </div>
  );
}