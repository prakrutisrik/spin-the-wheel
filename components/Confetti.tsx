"use client";

import Confetti from "react-confetti";
import { useEffect, useState } from "react";

const COLORS = [
  "#d68aac",
  "#8767c7",
  "#7f9fca",
  "#91b88d",
  "#d6b96b",
];

export default function ConfettiEffect({
  active,
}: {
  active: boolean;
}) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  if (!active) return null;

  return (
    <Confetti
      width={size.width}
      height={size.height}
      colors={COLORS}
      numberOfPieces={180}
      recycle={false}
      gravity={0.15}
    />
  );
}