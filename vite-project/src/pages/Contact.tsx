import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with Aman Construction today to discuss your project needs and get a detailed quote based on our packages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
            {status === 'success' ? (
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-green-700">
                      Thank you for your message. We'll get back to you soon!
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm font-medium text-green-700 hover:text-green-600"
                >
                  Send another message
                </button>
              </div>
            ) : (
            <form action="https://formspree.io/f/xovazlrl" method="POST" onSubmit={handleSubmit} className="space-y-6">
              {status === 'error' && (
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                  <p className="text-sm text-red-700">Oops! There was a problem submitting your form. Please try again.</p>
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm p-3 border" placeholder="John Doe" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm p-3 border" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm p-3 border" placeholder="+91 12345 67890" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Requirements</label>
                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm p-3 border" placeholder="Please describe your project (e.g. Premium Package, Anandvilla location)"></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
            )}
          </div>

          <div className="flex flex-col justify-center space-y-12 bg-gray-900 text-white p-12 rounded-lg shadow-xl relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>

             <div className="relative z-10">
               <h3 className="text-2xl font-bold mb-8 text-yellow-500">Contact Information</h3>

               <div className="flex items-start mb-8">
                 <div className="flex-shrink-0">
                   <Phone className="h-8 w-8 text-yellow-500" />
                 </div>
                 <div className="ml-4">
                   <h4 className="text-lg font-bold">Call Us</h4>
                   <p className="text-gray-300">+91 (Contact Number Placeholder)</p>
                 </div>
               </div>

               <div className="flex items-start mb-8">
                 <div className="flex-shrink-0">
                   <Mail className="h-8 w-8 text-yellow-500" />
                 </div>
                 <div className="ml-4">
                   <h4 className="text-lg font-bold">Email Us</h4>
                   <p className="text-gray-300">info@amanconstruction.com</p>
                 </div>
               </div>

               <div className="flex items-start">
                 <div className="flex-shrink-0">
                   <MapPin className="h-8 w-8 text-yellow-500" />
                 </div>
                 <div className="ml-4">
                   <h4 className="text-lg font-bold">Our Location</h4>
                   <p className="text-gray-300">Anandvilla, Dewas<br />Madhya Pradesh, India</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
