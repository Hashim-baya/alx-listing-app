// constants/index.ts

// --- API Endpoints ---
// It's common to define base URLs for APIs here.
// For production, you might load these from environment variables.
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api/v1';

export const PROPERTY_LISTINGS_ENDPOINT = `${API_BASE_URL}/listings`;
export const USER_AUTH_ENDPOINT = `${API_BASE_URL}/auth`;

// --- UI Text/Messages ---
export const APP_NAME = "ALX Listing App";
export const HERO_HEADLINE = "Discover Your Next Perfect Stay.";
export const FEATURE_HIGHLIGHT_1 = "Instant Booking Confirmation";
export const FEATURE_HIGHLIGHT_2 = "Verified Property Listings";
export const CALL_TO_ACTION_TEXT = "Explore Listings";

// --- Configuration Settings ---
export const ITEMS_PER_PAGE = 10;
export const DEFAULT_CURRENCY = "USD";
export const CONTACT_EMAIL = "support@alxlistingapp.com";

// --- Image Placeholders / Fallbacks ---
export const DEFAULT_PROPERTY_IMAGE = "/assets/placeholder-property.jpg"; // Assuming you have this in public/assets

// You can add more constants here as your application grows,
// for example, error messages, form field labels, specific IDs, etc.