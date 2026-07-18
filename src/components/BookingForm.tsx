'use client';

import { useState } from 'react';
import BookingCalendar from './BookingCalendar';
import { Users, Home } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('✅ Booking successful! Check your email for confirmation.');
        setFormData({ name: '', email: '', checkIn: '', checkOut: '', guests: '2' });
      } else {
        setMessage('❌ Booking failed. Please try again.');
      }
    } catch (error) {
      setMessage('❌ Error submitting booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold mb-8">Secure Your Booking</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-900 font-semibold mb-4">Select Your Dates</label>
        <BookingCalendar
          onDatesSelected={(checkIn, checkOut) => {
            setFormData((prev) => ({ ...prev, checkIn, checkOut }));
          }}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="guests" className="block text-gray-900 font-semibold mb-2">
          <Users className="inline mr-2 w-4 h-4" />Number of Guests
        </label>
        <select
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? 'Guest' : 'Guests'}
            </option>
          ))}
        </select>
      </div>

      {formData.checkIn && formData.checkOut && (
        <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
          <div className="flex items-start gap-3">
            <Home className="w-5 h-5 text-blue-600 mt-1" />
            <div>
              <p className="text-blue-900 font-semibold">Your Booking Details</p>
              <p className="text-blue-800 text-sm mt-1">Check-in: <strong>{formData.checkIn}</strong></p>
              <p className="text-blue-800 text-sm">Check-out: <strong>{formData.checkOut}</strong></p>
              <p className="text-blue-800 text-sm">Guests: <strong>{formData.guests}</strong></p>
            </div>
          </div>
        </div>
      )}

      {message && (
        <div
          className={`mb-6 p-4 rounded-xl ${
            message.includes('✅')
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition duration-300 disabled:bg-gray-400 text-lg"
      >
        {loading ? '⏳ Processing...' : '✓ Complete Booking'}
      </button>

      <p className="text-center text-gray-600 text-sm mt-4">
        💳 Secure payment • 🔒 Your data is safe • ✉️ Instant confirmation
      </p>
    </form>
  );
}