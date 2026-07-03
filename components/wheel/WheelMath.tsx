export function polarToCartesian(
  cx: number,
  cy: number,
  r: number,
  angle: number
) {
  const rad = (angle - 90) * Math.PI / 180;

  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

export function describeSlice(
  cx: number,
  cy: number,
  r: number,
  start: number,
  end: number
) {
  const startPoint = polarToCartesian(cx, cy, r, end);
  const endPoint = polarToCartesian(cx, cy, r, start);

  const largeArc = end - start <= 180 ? 0 : 1;

  return `
    M ${cx} ${cy}
    L ${startPoint.x} ${startPoint.y}
    A ${r} ${r} 0 ${largeArc} 0 ${endPoint.x} ${endPoint.y}
    Z
  `;
}