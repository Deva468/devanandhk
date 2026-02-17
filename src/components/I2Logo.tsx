const I2Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-sm font-['Space_Grotesk']">i2</span>
      </div>
      <div className="leading-none">
        <p className="text-[10px] font-bold tracking-wider text-foreground">TECH</p>
        <p className="text-[7px] font-medium tracking-wider text-muted-foreground">SOLUTIONS PVT LTD</p>
      </div>
    </div>
  );
};

export default I2Logo;
