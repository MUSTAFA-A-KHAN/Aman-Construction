import { Link } from 'react-router-dom';
import { Home, Info, Hammer, Phone, HardHat } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-yellow-500 text-gray-900 shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <HardHat size={32} />
          Aman Construction
        </Link>
        <ul className="flex space-x-6 font-semibold">
          <li>
            <Link to="/" className="hover:text-white transition flex items-center gap-1">
              <Home size={18} /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-white transition flex items-center gap-1">
              <Info size={18} /> About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-white transition flex items-center gap-1">
              <Hammer size={18} /> Services
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="hover:text-white transition flex items-center gap-1">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white transition flex items-center gap-1">
              <Phone size={18} /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
