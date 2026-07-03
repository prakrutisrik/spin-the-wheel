import PixelPanel from "./ui/PixelPanel";
import Joystick from "./Joystick";
import ArcadeButtons from "./ArcadeButtons";

export default function ControlDeck() {
  return (
    <PixelPanel
      className="
      mt-10
      flex
      items-center
      justify-around
      py-8
      "
    >
      <Joystick />

      <ArcadeButtons />
    </PixelPanel>
  );
}