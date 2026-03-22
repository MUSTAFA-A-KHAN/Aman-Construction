import { Settings, PenTool, LayoutTemplate, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Plastering and Painting',
      icon: <PenTool className="h-10 w-10 text-yellow-500 mb-4" />,
      items: [
        'Internal plastering with 2 coat in cement sand mortar (1:4 ratio)',
        'External plastering with Dr. Fixit Waterproofing chemical',
        'Putty (2 coats) - JSW Putty',
        'Interior & Exterior Primer (1 coat) - JSW Primer',
        'Interior & Exterior Painting (2 coat) - JSW Paints',
      ]
    },
    {
      title: 'Core Materials',
      icon: <Settings className="h-10 w-10 text-yellow-500 mb-4" />,
      items: [
        'Aggregate: 12mm, 20mm Fine',
        'Aggregate: Narmada River Sand',
        'Celling height: 10.5 ft (Floor to Slab top)',
        'Plinth height: 1.5 feet height from the Road Level',
        'Window grills - JSW Paints'
      ]
    },
    {
      title: 'Flooring and Wall Tiling',
      icon: <LayoutTemplate className="h-10 w-10 text-yellow-500 mb-4" />,
      items: [
        'Vitrified Tiles for Living, Dining, Kitchen, Balcony & Bedroom',
        'Heavy Duty Tiles for Parking',
        'Granite Staircase',
        'AGL, Kajaria or Somany or equivalent brands used',
        'Kitchen Counter Granite with Kota Stone'
      ]
    },
    {
      title: 'Additional Services',
      icon: <Briefcase className="h-10 w-10 text-yellow-500 mb-4" />,
      items: [
        'Safe and secure digital payments',
        'Payments based on milestones',
        '300+ Quality Checks',
        'Regular updates on progress',
        'Soil investigation for structural design'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Our Services</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive construction services across all our packages to ensure your project is completed with excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-md border-t-4 border-yellow-500 hover:shadow-xl transition-shadow">
              {service.icon}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start">
                    <span className="text-yellow-500 mr-2 mt-1">•</span>
                    <span className="text-gray-600 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Exclusions Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Exclusions</h2>
            <p className="mt-2 text-gray-600">Please note what is NOT covered in our standard packages.</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Special Elevation Features',
                'Setback development area',
                'Isolated Foundation above 6\' depth',
                'Circular/Helical staircase & Lift',
                'False Ceiling, Interior Designs',
                'Rain water harvesting',
                'Water Pump, RO, Water softner',
                'Glass bath-Shower partition, Bath Tub',
                'Home Automation',
                'Solar System (Electric & Water)',
                'Geyser & Invertor'
              ].map((exclusion, i) => (
                <div key={i} className="flex items-center text-gray-700 bg-red-50 p-3 rounded border-l-4 border-red-500">
                  <span className="text-red-500 mr-2">✗</span>
                  {exclusion}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
