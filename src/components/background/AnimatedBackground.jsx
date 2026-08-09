import AuroraLayer from "./AuroraLayer";
import FloatingGrid from "./FloatingGrid";
import MouseSpotlight from "./MouseSpotlight";
import NoiseTexture from "./NoiseTexture";

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{
        zIndex: 0,
        background:
          "linear-gradient(to bottom, #FBF8F3 0%, #F8F4EC 45%, #F2E9DD 100%)",
      }}
    >
      <AuroraLayer />

      <FloatingGrid />

      <MouseSpotlight />

      <NoiseTexture />

      {/* Center Glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,.25), transparent 70%)",
          filter: "blur(140px)",
        }}
      />

      {/* Edge Fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 55%, rgba(248,244,236,.65) 100%)",
        }}
      />
    </div>
  );
}