'use client';

import BookingForm from '@/components/BookingForm';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Book Your Stay</h1>
          <p className="text-gray-600 mb-8">
            Select your dates and complete your booking at Villa Mak
          </p>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}