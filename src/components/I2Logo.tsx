import i2LogoImg from "@/assets/i2-logo.png";

const I2Logo = ({ className = "" }: { className?: string }) => {
  return (
    <img src={i2LogoImg} alt="i2 Tech Solutions" className={`h-8 w-auto ${className}`} />
  );
};

export default I2Logo;
