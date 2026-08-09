import AuroraLayer from "./AuroraLayer";
import FloatingGrid from "./FloatingGrid";
import MouseSpotlight from "./MouseSpotlight";
import NoiseTexture from "./NoiseTexture";

export default function AnimatedBackground() {
  return (
    <div
      className="
        fixed
        inset-0
        overflow-hidden
        pointer-events-none
      "
      style={{
        zIndex: 0,
        background:
          "linear-gradient(to bottom, #FBF8F3 0%, #F8F4EC 45%, #F2E9DD 100%)",
      }}
    >

      {/* Aurora */}
      <div className="absolute inset-0 opacity-40 sm:opacity-50 lg:opacity-70">
        <AuroraLayer />
      </div>

      {/* Floating Grid */}
      <div className="absolute inset-0 opacity-30 sm:opacity-40 lg:opacity-60">
        <FloatingGrid />
      </div>

      {/* Mouse Spotlight
          Keep it hidden on mobile because there is
          no mouse interaction on touch devices.
      */}
      <div className="hidden md:block">
        <MouseSpotlight />
      </div>

      {/* Noise */}
      <div className="absolute inset-0 opacity-40 sm:opacity-50">
        <NoiseTexture />
      </div>

      {/* Center Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          rounded-full

          w-[350px]
          h-[350px]

          sm:w-[500px]
          sm:h-[500px]

          md:w-[650px]
          md:h-[650px]

          lg:w-[800px]
          lg:h-[800px]

          xl:w-[900px]
          xl:h-[900px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,.30), transparent 70%)",

          filter: "blur(80px)",
        }}
      />

      {/* Mobile soft glow */}
      <div
        className="
          absolute
          -top-20
          -right-20
          w-[280px]
          h-[280px]
          sm:w-[400px]
          sm:h-[400px]
          rounded-full
        "
        style={{
          background:
            "radial-gradient(circle, rgba(200,159,119,.15), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Bottom Glow */}
      <div
        className="
          absolute
          -bottom-32
          -left-20
          w-[350px]
          h-[350px]
          sm:w-[500px]
          sm:h-[500px]
          lg:w-[700px]
          lg:h-[700px]
          rounded-full
        "
        style={{
          background:
            "radial-gradient(circle, rgba(176,137,104,.12), transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Edge Fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 50%, rgba(248,244,236,.65) 100%)",
        }}
      />

    </div>
  );
}