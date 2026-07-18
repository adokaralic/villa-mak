'use client';

import Gallery from '@/components/Gallery';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">Gallery</h1>
        <p className="text-gray-600 text-center mb-12">
          Explore the beauty of Villa Mak
        </p>
        <Gallery />
      </div>
    </div>
  );
}
