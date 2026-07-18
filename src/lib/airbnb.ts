/**
 * Airbnb API Integration
 * Syncs bookings and availability from Airbnb
 */

import axios from 'axios';

const AIRBNB_API_URL = 'https://api.airbnb.com/v2';
const apiKey = process.env.NEXT_PUBLIC_AIRBNB_API_KEY;
const apiSecret = process.env.AIRBNB_API_SECRET;
const listingId = process.env.NEXT_PUBLIC_AIRBNB_LISTING_ID;

interface AirbnbBooking {
  id: string;
  listing_id: string;
  guest_name: string;
  guest_email: string;
  start_date: string;
  end_date: string;
  status: string;
  total_price: number;
  number_of_guests: number;
}

/**
 * Fetch Airbnb bookings
 */
export async function fetchAirbnbBookings(): Promise<AirbnbBooking[]> {
  if (!apiKey || !listingId) {
    console.warn('Airbnb API credentials not configured');
    return [];
  }

  try {
    const response = await axios.get(
      `${AIRBNB_API_URL}/listings/${listingId}/reservations`,
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.reservations || [];
  } catch (error) {
    console.error('Error fetching Airbnb bookings:', error);
    return [];
  }
}

/**
 * Get listing details from Airbnb
 */
export async function getAirbnbListingDetails() {
  if (!apiKey || !listingId) {
    console.warn('Airbnb API credentials not configured');
    return null;
  }

  try {
    const response = await axios.get(
      `${AIRBNB_API_URL}/listings/${listingId}`,
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching Airbnb listing details:', error);
    return null;
  }
}

/**
 * Sync Airbnb availability to our database
 */
export async function syncAirbnbAvailability() {
  try {
    const bookings = await fetchAirbnbBookings();
    // Logic to sync bookings to Supabase will be implemented
    return { success: true, bookingsCount: bookings.length };
  } catch (error) {
    console.error('Error syncing Airbnb availability:', error);
    return { success: false, error };
  }
}
