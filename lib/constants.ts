export const BRAND_NAME = "HouseIL"; // The brand name for the application

export const COLORS = {
  primary: "#FF0094", // Pink color in HEX for the brand's primary elements'
  background: "#000000", // Black color for the background to create a dark theme
  accent: "#FF0094", // Pink used as an accent color for highlights
}
/
 * HouseIL Configuration
 * This configuration holds important settings and constants 
 * specific to the HouseIL application.
 */
export const CONFIG = {
  /
   * Indicates the technology focus of the business.
   */
  industry: "Technology",

  /
   * Allows additional customization for the dark theme settings used throughout the website.
   */
  theme: {
    mode: "dark",
    contrast: 1.2, // Contrast ratio for text readability
  },

  /
   * Brand information settings
   */
  brandInfo: {
    slogan: "Experience Luxury Living with Technology",
    description: "HouseIL provides luxurious accommodation with a tech-savvy twist, merging elegance and comfort for the discerning traveler.",
    contactEmail: "info@houseil.com", // Contact email for inquiries
  },
}
/
 * Interface for property details in listings
 */
export interface Property {
  id: string; // Unique identifier for the property
  name: string; // Name of the property
  pricePerNight: number; // Price to rent the property per night
  location: string; // Location of the property
  description: string; // Brief description of the property
  amenities: string[]; // List of amenities available in the property
  rating: number; // Average rating of the property
}

/
 * Interface for bookings made through HouseIL platform
 */
export interface Booking {
  propertyId: string; // ID of the property being booked
  userId: string; // ID of the user booking
  checkInDate: Date; // Check-in date for the booking
  checkOutDate: Date; // Check-out date for the booking
  totalAmount: number; // Total amount to be paid for the booking
}

/
 * Function to format the currency for display
 * @param amount - Amount to format as currency
 * @returns formatted currency string
 */
export const formatCurrency = (amount: number): string => {
  return $${amount.toFixed(2)}; // Format as USD currency
};