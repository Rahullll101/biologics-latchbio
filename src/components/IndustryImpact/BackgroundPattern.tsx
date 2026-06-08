export default function BackgroundPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#ffffff]">
      {/* Very subtle radial burst pattern (opacity under 10%) */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(15, 38, 154, 0.05) 0%, rgba(255, 255, 255, 0) 75%)',
        }}
      />
    </div>
  );
}
