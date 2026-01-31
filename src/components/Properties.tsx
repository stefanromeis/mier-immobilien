const properties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    title: 'Moderne Villa am See',
    location: 'München, Bayern',
    price: '€ 1.250.000',
    beds: 5,
    baths: 4,
    area: '350 m²',
    type: 'Verkauf',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1453&q=80',
    title: 'Penthouse mit Dachterrasse',
    location: 'Berlin, Mitte',
    price: '€ 950.000',
    beds: 3,
    baths: 2,
    area: '180 m²',
    type: 'Verkauf',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    title: 'Charmantes Stadthaus',
    location: 'Hamburg, Altona',
    price: '€ 2.500/Monat',
    beds: 4,
    baths: 3,
    area: '220 m²',
    type: 'Miete',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    title: 'Luxus-Apartment',
    location: 'Frankfurt, Westend',
    price: '€ 680.000',
    beds: 2,
    baths: 2,
    area: '120 m²',
    type: 'Verkauf',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    title: 'Familienhaus mit Garten',
    location: 'Köln, Lindenthal',
    price: '€ 850.000',
    beds: 6,
    baths: 3,
    area: '280 m²',
    type: 'Verkauf',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    title: 'Moderne Eigentumswohnung',
    location: 'Stuttgart, Mitte',
    price: '€ 1.800/Monat',
    beds: 3,
    baths: 2,
    area: '95 m²',
    type: 'Miete',
  },
];

export default function Properties() {
  return (
    <section id="immobilien" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
            Unsere Immobilien
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Aktuelle Angebote
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Entdecken Sie unsere handverlesenen Immobilienangebote - 
            von modernen Apartments bis zu luxuriösen Villen
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                    {property.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {property.title}
                    </h3>
                    <p className="text-gray-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {property.location}
                    </p>
                  </div>
                </div>

                <div className="text-2xl font-bold text-primary-600 mb-4">
                  {property.price}
                </div>

                {/* Features */}
                <div className="flex items-center justify-between text-gray-600 text-sm border-t border-gray-100 pt-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>{property.beds} Zimmer</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{property.baths} Bäder</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span>{property.area}</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="mt-6 w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-primary-600 transition-colors font-semibold">
                  Details ansehen
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="#kontakt"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary-600 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
          >
            Alle Immobilien ansehen
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
