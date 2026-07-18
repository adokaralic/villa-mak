'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <Image
        src="https://images.unsplash.com/photo-1512207736139-0ac3de41adf1?w=1600&h=900&fit=crop"
        alt="Villa Mak"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Villa Mak</h1>
        <p className="text-2xl mb-8">Luxury Accommodation in Sarajevo</p>
        <Link
          href="/booking"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}