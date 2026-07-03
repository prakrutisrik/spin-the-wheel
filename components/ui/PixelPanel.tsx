type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function PixelPanel({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
      rounded-3xl
      border-4
      border-[var(--border)]
      bg-[var(--panel)]
      p-5
      shadow-lg
      ${className}
      `}
    >
      {children}
    </div>
  );
}