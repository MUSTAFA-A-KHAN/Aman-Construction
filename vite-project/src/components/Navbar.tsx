import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, Hammer, Phone, Menu, X, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'About', path: '/about', icon: <Info size={18} /> },
    { name: 'Services', path: '/services', icon: <Hammer size={18} /> },
    { name: 'Pricing', path: '/pricing', icon: <DollarSign size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Phone size={18} /> },
  ];

  return (
    <nav className="bg-[#1b1c4b] text-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Aman Construction Logo" className="h-12 w-auto object-contain rounded-sm" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="text-yellow-500 hover:text-yellow-400 transition flex items-center gap-1">
                {link.icon} {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden text-yellow-500 hover:text-yellow-400 focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#161740] rounded-b-lg"
          >
            <ul className="flex flex-col p-4 space-y-4 font-semibold">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-yellow-500 hover:text-yellow-400 transition flex items-center gap-3 p-2 rounded-md hover:bg-[#1b1c4b]"
                  >
                    {link.icon} {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
