import { CheckCircle } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: 'Premium',
      price: '₹1550',
      description: 'Standard high-quality build.',
      features: [
        'Vitrified Tiles (₹40/sqft)',
        'Staircase Granite (Up to ₹90/sqft)',
        'Stainless Steel Sink (Up to ₹3000)',
        'Flush door with Mica (₹15000)',
        '3 Track Aluminum Windows (₹300/Sqft)',
        'Jaquar Essco / Parryware Fittings',
        'Anchor / Havells / Western Switches'
      ],
      color: 'bg-gray-100',
      textColor: 'text-gray-900',
      borderColor: 'border-gray-300'
    },
    {
      name: 'Style',
      price: '₹1750',
      description: 'Upgraded aesthetics and materials.',
      features: [
        'Vitrified Tiles (₹60/sqft)',
        'Staircase Granite (Up to ₹135/sqft)',
        'Stainless Steel Sink (Up to ₹5000)',
        'Flush door with Veneer (₹25000)',
        'Toughened glass with SS Top Rail',
        'Jaquar or equivalent Fittings (Wall mounted)',
        'Anchor / Havells / GM Switches'
      ],
      color: 'bg-yellow-50',
      textColor: 'text-gray-900',
      borderColor: 'border-yellow-500',
      popular: true
    },
    {
      name: 'Luxury',
      price: '₹1950',
      description: 'Top-tier luxury finishings.',
      features: [
        'Vitrified Tiles (₹80/sqft)',
        'Staircase Granite (Up to ₹200/sqft)',
        'Stainless Steel Sink (Up to ₹8000)',
        'Flush door with Veneer/Teakwood (₹40000)',
        'Toughened glass with Wooden Finish Top Rail',
        'Jaquar, TOTO or equivalent Fittings',
        'Goldmedal / Havells / GM Switches'
      ],
      color: 'bg-gray-900',
      textColor: 'text-white',
      borderColor: 'border-gray-900'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Construction Packages</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            ALL PACKAGES USE THE SAME CORE CONSTRUCTION MATERIAL AND MAINTAIN SAME STRUCTURAL QUALITY. Prices are per sqft including GST.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div key={idx} className={`rounded-xl shadow-xl overflow-hidden border-2 relative ${pkg.borderColor} ${pkg.color}`}>
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-yellow-500 text-gray-900 px-4 py-1 text-xs font-bold rounded-bl-lg uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className={`text-2xl font-bold ${pkg.textColor} mb-2`}>{pkg.name}</h3>
                <p className={`text-sm ${pkg.textColor === 'text-white' ? 'text-gray-400' : 'text-gray-600'} mb-6`}>{pkg.description}</p>
                <div className={`text-5xl font-extrabold ${pkg.textColor} mb-2`}>{pkg.price}</div>
                <div className={`text-sm ${pkg.textColor === 'text-white' ? 'text-gray-400' : 'text-gray-600'} mb-8`}>per sqft</div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start">
                      <CheckCircle className={`h-6 w-6 mr-3 flex-shrink-0 ${pkg.textColor === 'text-white' ? 'text-yellow-500' : 'text-yellow-600'}`} />
                      <span className={`${pkg.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-md font-bold text-lg transition ${
                  pkg.textColor === 'text-white'
                    ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Select Package
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-gray-600">
          <p>Note: Rates are based on basic quantity consideration and may change as per fluctuation of actual quantity. Material Price Including GST.</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
