import { Link } from "react-router-dom";
import logoSvg from "/assets/logo.svg";

const Logo = () => {
  return (
    <Link
      to="/"
      className="absolute top-[1.5rem] left-[1.5rem] [text-decoration:none] text-lg text-orange flex items-center"
    >
      <img className="" src={logoSvg} alt="Crypto" />
      <span>Crypto PixelHub</span>
    </Link>
  );
};

export default Logo;
