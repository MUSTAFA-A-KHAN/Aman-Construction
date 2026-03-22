const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-yellow-500 mb-4 flex items-center gap-2">
            Aman Construction
          </h2>
          <p className="text-sm">
            Building excellence with trust and transparency. We deliver quality structural projects tailored to your needs.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#/" className="hover:text-yellow-500 transition">Home</a></li>
            <li><a href="#/services" className="hover:text-yellow-500 transition">Services</a></li>
            <li><a href="#/pricing" className="hover:text-yellow-500 transition">Pricing Packages</a></li>
            <li><a href="#/contact" className="hover:text-yellow-500 transition">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
          <p className="text-sm mb-2"><strong>Location:</strong> Anandvilla Dewas</p>
          <p className="text-sm mb-2"><strong>Clients:</strong> Rajat Agrawal, Neeraj Vhayvergy</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Aman Construction. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
