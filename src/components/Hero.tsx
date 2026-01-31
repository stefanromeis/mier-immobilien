export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full">
                  🏠 Ihr Immobilienexperte
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Ihr Traumhaus
                <span className="block text-primary-600">wartet auf Sie</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Entdecken Sie exklusive Immobilien mit Mier Immobilien. 
                Wir bieten professionelle Beratung und erstklassigen Service für Ihren perfekten Immobilienkauf oder -verkauf.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#immobilien"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Immobilien ansehen
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white rounded-xl hover:bg-gray-50 transition-all border-2 border-gray-200 hover:border-primary-300"
              >
                Kostenlose Beratung
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Immobilien</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Zufriedene Kunden</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Jahre Erfahrung</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
                alt="Modernes Haus"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">Aktuelle Angebote</div>
                  <div className="text-2xl font-bold text-gray-900">120+ Objekte</div>
                </div>
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold">
                  Neu
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}
