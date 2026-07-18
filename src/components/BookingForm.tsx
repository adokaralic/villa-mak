'use client';

import { useState } from 'react';
import BookingCalendar from './BookingCalendar';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        setMessage('Booking successful! Check your email for confirmation.');
        setFormData({ name: '', email: '', checkIn: '', checkOut: '' });
      } else {
        setMessage('Booking failed. Please try again.');
      }
    } catch (error) {
      setMessage('Error submitting booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2">Select Dates</label>
        <BookingCalendar
          onDatesSelected={(checkIn, checkOut) => {
            setFormData((prev) => ({ ...prev, checkIn, checkOut }));
          }}
        />
      </div>

      {formData.checkIn && formData.checkOut && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-gray-700">
            <strong>Check-in:</strong> {formData.checkIn}
          </p>
          <p className="text-gray-700">
            <strong>Check-out:</strong> {formData.checkOut}
          </p>
        </div>
      )}

      {message && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            message.includes('successful')
              ? 'bg-green-50 text-green-700'
              : 'bg-red-50 text-red-700'
          }`}
        >
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition disabled:bg-gray-400"
      >
        {loading ? 'Processing...' : 'Complete Booking'}
      </button>
    </form>
  );
}