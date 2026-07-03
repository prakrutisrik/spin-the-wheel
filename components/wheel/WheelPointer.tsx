export default function WheelPointer() {
  return (
    <div
      className="
      absolute
      left-1/2
      -translate-x-1/2
      -top-3
      z-50
      "
    >
      <div
        className="
        w-0
        h-0
        border-l-[18px]
        border-r-[18px]
        border-t-[30px]
        border-l-transparent
        border-r-transparent
        border-t-[var(--pink)]
        "
      />
    </div>
  );
}