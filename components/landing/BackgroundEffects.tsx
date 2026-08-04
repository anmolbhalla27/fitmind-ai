export default function BackgroundEffects() {
  return (
    <>
      {/* Main Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-[-200px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[160px]" />

        <div className="absolute right-0 top-1/3 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[120px]" />

      </div>

      {/* Grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#ffffff 1px,transparent 1px),
            linear-gradient(to bottom,#ffffff 1px,transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />
    </>
  );
}