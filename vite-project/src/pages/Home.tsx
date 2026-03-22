import { Link } from 'react-router-dom';
import { ShieldCheck, HardHat, PenTool, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-full h-full object-cover opacity-40"
            src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
            alt="Construction background"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Building Excellence <br/>
            <span className="text-yellow-500">With Trust & Transparency</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto mb-10">
            Aman Construction provides comprehensive construction solutions with top-tier packages, strict timelines, and guaranteed quality.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/pricing" className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-md font-bold text-lg hover:bg-yellow-400 transition">
              View Packages
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-gray-900 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Aman Construction
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We deliver quality structural projects tailored to your needs. All packages use the same core construction material and maintain same structural quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-gray-900 mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">300+ Quality Checks</h3>
              <p className="text-gray-600">High quality materials are used after testing to ensure structural integrity.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-gray-900 mb-4">
                <HardHat size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Supervision</h3>
              <p className="text-gray-600">Regular visits by Civil Engineers and supervision at every milestone.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-gray-900 mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Strict Timelines</h3>
              <p className="text-gray-600">Penalty rolled out for delay. We stick to our schedules strictly.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-gray-900 mb-4">
                <PenTool size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Branded Materials</h3>
              <p className="text-gray-600">We use top brands like JSW Paints, Supreme, Jaquar, and Polycab.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Featured Projects</h2>
              <p className="mt-4 text-lg text-gray-600">Take a look at some of our recent construction sites.</p>
            </div>
            <Link to="/about" className="text-yellow-600 font-semibold hover:text-yellow-700">View All Projects &rarr;</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
                alt="Anandvilla Dewas Project"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">Location: Anandvilla Dewas</h3>
                <p className="text-gray-600">Client: Rajat Agrawal</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                alt="Anandvilla Dewas Project 2"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">Location: Anandvilla Dewas</h3>
                <p className="text-gray-600">Client: Neeraj Vhayvergy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
