const testimonials = [
  {
    name: 'Anna Schmidt',
    role: 'Hausbesitzerin',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    text: 'Mier Immobilien hat uns geholfen, unser Traumhaus zu finden. Die Beratung war erstklassig und sehr persönlich. Wir würden jederzeit wieder mit ihnen arbeiten!',
    rating: 5,
  },
  {
    name: 'Michael Weber',
    role: 'Investor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    text: 'Professionell, zuverlässig und kompetent. Das Team von Mier Immobilien hat meine Erwartungen übertroffen. Die Vermarktung meiner Immobilie war ein voller Erfolg.',
    rating: 5,
  },
  {
    name: 'Sarah Müller',
    role: 'Erste Käuferin',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    text: 'Als Erstkäuferin war ich nervös, aber das Team hat mich durch den gesamten Prozess begleitet. Ich fühlte mich sehr gut aufgehoben und bestens beraten.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
            Testimonials
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Was unsere Kunden sagen
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Vertrauen Sie auf die Erfahrungen zufriedener Kunden
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600">Kundenzufriedenheit</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
            <div className="text-gray-600">Erfolgreiche Verkäufe</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">25+</div>
            <div className="text-gray-600">Jahre Erfahrung</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Durchschnittliche Bewertung</div>
          </div>
        </div>
      </div>
    </section>
  );
}
