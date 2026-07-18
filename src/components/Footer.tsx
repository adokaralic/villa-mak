'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Villa Mak</h3>
            <p className="text-gray-400">Luxury accommodation in the heart of Sarajevo</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">Email: info@villamak.com</p>
            <p className="text-gray-400 mb-2">Phone: +387 1 234 5678</p>
            <p className="text-gray-400">Address: Sarajevo, Bosnia and Herzegovina</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/gallery" className="hover:text-white transition">Gallery</a></li>
              <li><a href="/booking" className="hover:text-white transition">Booking</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-center">
            &copy; {currentYear} Villa Mak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}