export interface Booking {
  id: string;
  villa_id: string;
  guest_name: string;
  guest_email: string;
  guest_phone: string;
  check_in: string;
  check_out: string;
  total_guests: number;
  total_price: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  special_requests?: string;
  created_at: string;
  updated_at: string;
  source: 'direct' | 'airbnb';
  airbnb_booking_id?: string;
}

export interface VillaInfo {
  id: string;
  name: string;
  description: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  max_guests: number;
  price_per_night: number;
  amenities: string[];
  images: string[];
  rules?: string;
}

export interface PricingRule {
  id: string;
  villa_id: string;
  date_from: string;
  date_to: string;
  price_per_night: number;
  min_nights?: number;
  type: 'peak' | 'low' | 'base';
}

export interface UnavailableDate {
  id: string;
  villa_id: string;
  date: string;
  reason: string;
}

export interface AirbnbSyncLog {
  id: string;
  villa_id: string;
  synced_at: string;
  status: 'success' | 'failed';
  message: string;
}
