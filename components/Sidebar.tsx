import { useState } from "react";

import PixelInput from "./ui/PixelInput";
import PixelButton from "./ui/PixelButton";
import PixelPanel from "./ui/PixelPanel";
import ActivityCard from "./ActivityCard";

type Props = {
  options: string[];
  setOptions: (a: string[]) => void;
};

export default function Sidebar({
  options,
  setOptions,
}: Props) {
  const [text, setText] = useState("");

  function addActivity() {
    if (!text.trim()) return;

    setOptions([...options, text]);

    setText("");
  }

  return (
    <PixelPanel className="w-72 space-y-4">
      <h2 className="text-xs tracking-widest">
        activity cartridges
      </h2>

      <div className="space-y-3">
        {options.map((option, i) => (
          <ActivityCard
            key={option}
            activity={option}
            index={i}
            onDelete={() =>
              setOptions(
                options.filter((_, j) => i !== j)
              )
            }
          />
        ))}
      </div>

      <PixelInput
        value={text}
        onChange={setText}
        placeholder="new activity..."
      />

      <PixelButton
        color="green"
        className="w-full"
        onClick={addActivity}
      >
        + add
      </PixelButton>
    </PixelPanel>
  );
}