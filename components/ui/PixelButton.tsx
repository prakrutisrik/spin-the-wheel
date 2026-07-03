type PixelButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  color?: "pink" | "purple" | "blue" | "green" | "yellow";
  className?: string;
};

const colors = {
  pink: "bg-[var(--pink)]",
  purple: "bg-[var(--purple)]",
  blue: "bg-[var(--blue)]",
  green: "bg-[var(--green)]",
  yellow: "bg-[var(--yellow)]",
};

export default function PixelButton({
  children,
  onClick,
  disabled,
  color = "pink",
  className = "",
}: PixelButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
      ${colors[color]}
      border-4 border-[var(--border)]
      rounded-xl
      px-5
      py-3
      text-[var(--text)]
      text-xs
      tracking-wide
      transition
      duration-100
      active:translate-y-1
      active:scale-95
      hover:-translate-y-[2px]
      disabled:opacity-40
      ${className}
      `}
    >
      {children}
    </button>
  );
}