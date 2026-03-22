const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">About Us</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Aman Construction is dedicated to providing structural excellence and transparent business practices for all our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
              alt="Construction site"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
            <p className="text-gray-600 mb-4 text-lg">
              At Aman Construction, we believe that <strong>"ALL PACKAGES USE THE SAME CORE CONSTRUCTION MATERIAL AND MAINTAIN SAME STRUCTURAL QUALITY"</strong>.
              Our goal is to deliver top-tier construction projects to you without compromising on the foundation.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              We employ strict timelines, rigorous quality checks, and top branded materials to ensure the longevity and safety of your structure.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Projects</h3>
            <ul className="space-y-4">
               <li className="flex items-start">
                 <span className="h-6 w-6 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold mr-3 mt-1">1</span>
                 <div>
                   <h4 className="font-bold text-gray-900 text-lg">Location: Anandvilla Dewas</h4>
                   <p className="text-gray-600">Client — Rajat Agrawal</p>
                 </div>
               </li>
               <li className="flex items-start">
                 <span className="h-6 w-6 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold mr-3 mt-1">2</span>
                 <div>
                   <h4 className="font-bold text-gray-900 text-lg">Location: Anandvilla Dewas</h4>
                   <p className="text-gray-600">Client — Neeraj Vhayvergy</p>
                 </div>
               </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
