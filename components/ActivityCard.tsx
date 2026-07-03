const colors = [
  "bg-[var(--pink)]",
  "bg-[var(--purple)]",
  "bg-[var(--blue)]",
  "bg-[var(--green)]",
  "bg-[var(--yellow)]",
];

type Props = {
  activity: string;
  index: number;
  onDelete: () => void;
};

const icons = ["🧵", "🏠", "🎨", "💛", "🎵", "📖"];

export default function ActivityCard({
  activity,
  index,
  onDelete,
}: Props) {
  return (
    <div
      className={`
      ${colors[index % colors.length]}
      border-4
      border-[var(--border)]
      rounded-xl
      px-4
      py-3
      flex
      justify-between
      items-center
      transition
      hover:-translate-y-1
      `}
    >
      <span className="flex gap-3 text-xs">
        <span>{icons[index % icons.length]}</span>

        {activity}
      </span>

      <button
        onClick={onDelete}
        className="text-sm hover:scale-110 transition"
      >
        ✕
      </button>
    </div>
  );
}