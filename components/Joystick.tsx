export default function Joystick() {
  return (
    <div className="relative h-28 w-28">
      <div
        className="
        absolute
        bottom-0
        left-1/2
        h-12
        w-12
        -translate-x-1/2
        rounded-full
        border-4
        border-[var(--border)]
        bg-[var(--panel)]
        "
      />

      <div
        className="
        absolute
        left-1/2
        top-6
        h-14
        w-3
        -translate-x-1/2
        rounded-full
        bg-[var(--border)]
        "
      />

      <div
        className="
        absolute
        left-1/2
        top-0
        h-10
        w-10
        -translate-x-1/2
        rounded-full
        border-4
        border-[var(--border)]
        bg-[var(--pink)]
        "
      />
    </div>
  );
}