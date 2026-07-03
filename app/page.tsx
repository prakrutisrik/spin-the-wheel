"use client";

import { useState } from "react";
import Wheel from "@/components/wheel/Wheel";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Background from "@/components/Background";
import ConfettiEffect from "@/components/Confetti";
import FloatingDecor from "@/components/FloatingDecor";

export default function Home() {
  const [options, setOptions] = useState([
    "sew",
    "room decor",
    "draw",
    "family time",
    "music",
    "read",
  ]);

  const [winner, setWinner] = useState("");
  const [celebrate, setCelebrate] = useState(false);

  return (
    <>
      <FloatingDecor />
      <ConfettiEffect active={celebrate} />
      <Background />
      <Header />

      <main className="min-h-screen bg-[#2b174d] text-white flex items-center justify-center px-10">
        <div className="flex gap-20 items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold mb-10 retro text-center">
              {winner
                ? `congratulations, you got ${winner}!`
                : "spin the wheel!"}
            </h1>

            <Wheel
  options={options}
  onFinish={(item) => {
    setWinner(item);   // ✅ single source of truth
    setCelebrate(true);

    setTimeout(() => setCelebrate(false), 3500);
  }}
/>
          </div>

          <Sidebar 
          options={options}
          setOptions={setOptions}
          />
        </div>
      </main>
    </>
  );
}