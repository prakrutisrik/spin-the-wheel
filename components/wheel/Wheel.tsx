"use client";

import { useState } from "react";
import SvgWheel from "./SvgWheel";
import WheelPointer from "./WheelPointer";

type Props = {
  options: string[];
  onFinish: (winner: string) => void;
};

export default function Wheel({ options, onFinish }: Props) {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);

function spinWheel() {
  if (spinning || options.length === 0) return;

  setSpinning(true);

  const spins = 5 + Math.floor(Math.random() * 3);
  const randomExtra = Math.random() * 360;

  const newRotation = rotation + spins * 360 + randomExtra;

  setRotation(newRotation);

  setTimeout(() => {
    setSpinning(false);

    // tiny bounce
    setRotation((prev) => prev + 6);

    setTimeout(() => {
      setRotation((prev) => prev - 6);

      const winner = getWinnerFromRotation(newRotation, options);

      onFinish(winner);
    }, 120);
  }, 5000);
}

  return (
  <div className="flex flex-col items-center gap-6">
    
    {/* WHEEL (ONLY THIS ROTATES VISUALLY) */}
    <div className="relative w-[520px] h-[520px]">
      <WheelPointer />

      <div
        className="
          rounded-full
          border-8
          border-[var(--border)]
          bg-[var(--panel)]
          p-3
          overflow-hidden
        "
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: spinning
            ? "transform 5s cubic-bezier(.12,.82,.2,1)"
            : "none",
        }}
      >
        <SvgWheel options={options} />
      </div>
    </div>

    {/* BUTTON (COMPLETELY STATIC) */}
    <button
      disabled={spinning}
      onClick={spinWheel}
      className="
        px-10
        py-4
        rounded-xl
        border-4
        border-[var(--border)]
        bg-[#f3e7d3]
        text-[#24163b]
        text-xs
        tracking-wide
        active:translate-y-1
        transition
        shadow-sm
        disabled:opacity-40
      "
    >
      {spinning ? "spinning..." : "spin"}
    </button>

  </div>
);
function getWinnerFromRotation(rotation: number, options: string[]) {
  const sliceSize = 360 / options.length;

  // normalize rotation
  const normalized = ((rotation % 360) + 360) % 360;

  // pointer is at top → 0deg reference is -90 in SVG
  const pointerAngle = (360 - normalized + 90) % 360;

  const index = Math.floor(pointerAngle / sliceSize);

  return options[index];
}
}