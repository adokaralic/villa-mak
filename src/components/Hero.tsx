'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, MapPinIcon } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden rounded-3xl mx-4 md:mx-8 mt-4">
        <Image
          src="https://images.unsplash.com/photo-1512207736139-0ac3de41adf1?w=1600&h=900&fit=crop"
          alt="Villa Mak"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">4.95 • 127 reviews</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-3">Villa Mak</h1>
            <div className="flex items-center gap-2 text-lg">
              <MapPin className="w-5 h-5" />
              <span>Sarajevo, Bosnia and Herzegovina</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-wrap gap-8 md:gap-12 border-b border-gray-200 pb-8">
          <div>
            <div className="text-2xl font-bold">3</div>
            <div className="text-gray-600">Bedrooms</div>
          </div>
          <div>
            <div className="text-2xl font-bold">2</div>
            <div className="text-gray-600">Bathrooms</div>
          </div>
          <div>
            <div className="text-2xl font-bold">150m²</div>
            <div className="text-gray-600">Living Space</div>
          </div>
          <div>
            <div className="text-2xl font-bold">5</div>
            <div className="text-gray-600">Guests</div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Villa Mak</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Nestled in the heart of Sarajevo, Villa Mak offers a perfect blend of luxury and comfort. Our stunning property features modern amenities combined with elegant design, providing an unforgettable experience for discerning travelers.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Located near the beautiful Vrelo Bosne spring, our villa provides easy access to Sarajevo's cultural attractions, local restaurants, and natural wonders.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=400&fit=crop"
              alt="Bedroom"
              width={400}
              height={400}
              className="rounded-2xl object-cover h-64 w-full"
            />
            <Image
              src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=400&fit=crop"
              alt="Pool"
              width={400}
              height={400}
              className="rounded-2xl object-cover h-64 w-full"
            />
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-12">Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🛏️', title: 'Comfortable Bedrooms', desc: '3 spacious bedrooms with premium bedding' },
              { icon: '🚿', title: 'Modern Bathrooms', desc: '2 fully equipped bathrooms with luxury fixtures' },
              { icon: '🏊', title: 'Private Terrace', desc: 'Spacious terrace perfect for dining and relaxation' },
              { icon: '🅿️', title: 'Free Parking', desc: 'Private parking space for your convenience' },
              { icon: '🌳', title: 'Garden', desc: 'Beautiful garden with scenic views' },
              { icon: '📍', title: 'Prime Location', desc: 'Near Vrelo Bosne and city attractions' },
            ].map((amenity, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl">
                <div className="text-4xl mb-3">{amenity.icon}</div>
                <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience Luxury?</h2>
          <p className="text-xl mb-8 opacity-90">Book your unforgettable stay at Villa Mak today</p>
          <Link
            href="/booking"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 text-lg font-bold py-4 px-12 rounded-xl transition duration-300"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}