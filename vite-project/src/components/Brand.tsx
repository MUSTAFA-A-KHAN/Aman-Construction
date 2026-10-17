import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
export default function Brand() {
  return (
    <Link to="/" className="brand" aria-label="AMAN Construction home">
      <img src={logo} width="311" height="188" alt="" />
      <span className="brand-name">
        AMAN<span>CONSTRUCTION</span>
      </span>
    </Link>
  );
}
