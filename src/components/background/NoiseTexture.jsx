export default function NoiseTexture() {
  return (
    <div
      className="
        fixed
        inset-0
        pointer-events-none
        opacity-[0.02]
        mix-blend-soft-light
      "
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,.04) 4px)",
      }}
    />
  );
}