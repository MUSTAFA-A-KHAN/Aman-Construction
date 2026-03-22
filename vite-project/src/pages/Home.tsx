import { Link } from 'react-router-dom';
import { ShieldCheck, HardHat, PenTool, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp: any = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
            alt="Construction background"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Building Excellence <br/>
              <span className="text-yellow-500">With Trust & Transparency</span>
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto mb-10">
              Aman Construction provides comprehensive construction solutions with top-tier packages, strict timelines, and guaranteed quality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/pricing" className="bg-yellow-500 text-[#1b1c4b] px-8 py-3 rounded-md font-bold text-lg hover:bg-yellow-400 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                View Packages
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-[#1b1c4b] transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-extrabold text-[#1b1c4b] sm:text-4xl">
              Why Choose Aman Construction
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver quality structural projects tailored to your needs. All packages use the same core construction material and maintain the same structural quality.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: <ShieldCheck size={28} />, title: "300+ Quality Checks", desc: "High quality materials are used after testing to ensure structural integrity." },
              { icon: <HardHat size={28} />, title: "Expert Supervision", desc: "Regular visits by Civil Engineers and supervision at every milestone." },
              { icon: <CheckCircle size={28} />, title: "Strict Timelines", desc: "Penalty rolled out for delay. We stick to our schedules strictly." },
              { icon: <PenTool size={28} />, title: "Branded Materials", desc: "We use top brands like JSW Paints, Supreme, Jaquar, and Polycab." }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-[#1b1c4b] mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
          >
            <div>
              <h2 className="text-3xl font-extrabold text-[#1b1c4b] sm:text-4xl">Featured Projects</h2>
              <p className="mt-4 text-lg text-gray-600">Take a look at some of our recent construction sites.</p>
            </div>
            <Link to="/about" className="text-yellow-600 font-semibold text-lg hover:text-yellow-700 transition flex items-center gap-2">
              View All Projects &rarr;
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-lg group relative cursor-pointer">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10 duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
                alt="Anandvilla Dewas Project"
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20">
                <h3 className="text-2xl font-bold mb-2 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Anandvilla Dewas</h3>
                <p className="text-gray-300 font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">Client: Rajat Agrawal</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-lg group relative cursor-pointer">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10 duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                alt="Anandvilla Dewas Project 2"
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20">
                <h3 className="text-2xl font-bold mb-2 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Anandvilla Dewas</h3>
                <p className="text-gray-300 font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">Client: Neeraj Vhayvergy</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-[#1b1c4b] sm:text-4xl">
              Build Your Dream Home
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Watch how we turn visions into reality with exceptional craftsmanship.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="flex justify-center"
          >
            <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <video
                src="/promo-video.mp4"
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto aspect-video object-cover"
                poster="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;