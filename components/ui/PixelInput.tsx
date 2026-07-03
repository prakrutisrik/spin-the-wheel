type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
};

export default function PixelInput({
  value,
  onChange,
  placeholder,
}: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="
      w-full
      rounded-xl
      border-4
      border-[var(--border)]
      bg-[var(--panel)]
      px-4
      py-3
      text-xs
      outline-none
      text-[var(--text)]
      placeholder:text-[var(--blue)]
      "
    />
  );
}