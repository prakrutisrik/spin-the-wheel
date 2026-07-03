import { describeSlice } from "./WheelMath";
import { wheelColors } from "./WheelColors";
import { wheelIcons } from "./WheelIcons";
import WheelCenter from "./WheelCenter";

type Props = {
  options: string[];
};

export default function SvgWheel({
  options,
}: Props) {
  const radius = 220;
  const cx = 250;
  const cy = 250;

const slice = 360 / options.length;
const startOffset = -90; // aligns wheel so first slice starts at top
  return (
    <svg
      viewBox="0 0 500 500"
      className="w-full h-full"
    >
      {options.map((option, i) => {
      const start = startOffset + i * slice;
      const end = startOffset + (i + 1) * slice;

        const middle = start + slice / 2;

        const textRadius = 145;

        const x =
          cx +
          textRadius *
            Math.cos((middle - 90) * Math.PI / 180);

        const y =
          cy +
          textRadius *
            Math.sin((middle - 90) * Math.PI / 180);

        return (
          <g key={option}>
            <path
              d={describeSlice(
                cx,
                cy,
                radius,
                start,
                end
              )}
              fill={
                wheelColors[
                  i % wheelColors.length
                ]
              }
              stroke="#5e468d"
              strokeWidth={6}
            />

<g transform={`rotate(${middle} ${x} ${y})`}>
  <text
    x={x}
    y={y - 6}
    textAnchor="middle"
    fontSize="22"
  >
    {wheelIcons[option] ?? "⭐"}
  </text>

  <text
    x={x}
    y={y + 18}
    textAnchor="middle"
    fontSize="12"
    fill="#f6ecd8"
  >
    {option}
  </text>
</g>
          </g>
        );
      })}

      <WheelCenter />
    </svg>
  );
}