'use client';

import Image from 'next/image';
import { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1512207736139-0ac3de41adf1?w=800&h=600&fit=crop',
    alt: 'Living Room',
    title: 'Spacious Living Room',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
    alt: 'Master Bedroom',
    title: 'Master Bedroom',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1546321318-6b8da08a0c1b?w=800&h=600&fit=crop',
    alt: 'Kitchen',
    title: 'Modern Kitchen',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop',
    alt: 'Pool Area',
    title: 'Pool Area',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    alt: 'Terrace',
    title: 'Dining Terrace',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    alt: 'Bathroom',
    title: 'Luxury Bathroom',
  },
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedImage = selectedId ? galleryImages.find(img => img.id === selectedId) : null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold mb-12">Gallery</h2>
        
        {/* Featured Image */}
        {selectedImage && (
          <div className="mb-12 rounded-2xl overflow-hidden">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={600}
              className="w-full h-96 object-cover"
            />
            <div className="bg-gray-50 p-4 text-center">
              <p className="text-lg font-semibold text-gray-900">{selectedImage.title}</p>
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`relative h-64 cursor-pointer overflow-hidden rounded-xl group transition-all duration-300 ${
                selectedId === image.id ? 'ring-2 ring-blue-600' : ''
              }`}
              onClick={() => setSelectedId(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-lg font-semibold text-center px-4">{image.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}