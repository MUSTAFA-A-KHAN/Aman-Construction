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

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">About Us</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Aman Construction is dedicated to providing structural excellence and transparent business practices for all our clients.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp}>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
              alt="Construction site"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div variants={staggerContainer}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 mb-4 text-lg">
              At Aman Construction, we believe that <strong>"ALL PACKAGES USE THE SAME CORE CONSTRUCTION MATERIAL AND MAINTAIN SAME STRUCTURAL QUALITY"</strong>.
              Our goal is to deliver top-tier construction projects to you without compromising on the foundation.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-600 text-lg mb-8">
              We employ strict timelines, rigorous quality checks, and top branded materials to ensure the longevity and safety of your structure.
            </motion.p>

            <motion.h3 variants={fadeUp} className="text-2xl font-bold text-gray-900 mb-4">Our Projects</motion.h3>
            <motion.ul variants={staggerContainer} className="space-y-4">
               <motion.li variants={fadeUp} className="flex items-start">
                 <span className="h-6 w-6 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold mr-3 mt-1">1</span>
                 <div>
                   <h4 className="font-bold text-gray-900 text-lg">Location: Anandvilla Dewas</h4>
                   <p className="text-gray-600">Client — Rajat Agrawal</p>
                 </div>
               </motion.li>
               <motion.li variants={fadeUp} className="flex items-start">
                 <span className="h-6 w-6 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold mr-3 mt-1">2</span>
                 <div>
                   <h4 className="font-bold text-gray-900 text-lg">Location: Anandvilla Dewas</h4>
                   <p className="text-gray-600">Client — Neeraj Vhayvergy</p>
                 </div>
               </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
