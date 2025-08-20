import { clsx } from 'clsx'
/
 * Utility functions for the HouseIL application
 * 
 * HouseIL is a luxury dark-themed AirBNB website designed for high-end technology travelers. 
 * This module includes functions for conditional class names and formatters, 
 * focusing on providing a seamless user experience in the luxury accommodation market.
 */

/
 * A utility function to conditionally join class names together.
 * @param args - class names or conditions to join.
 * @returns string - a string of concatenated class names.
 */
export function cn(...args: (string | boolean)[]): string {
  return clsx(args)
}

/
 * Formatter utility functions specific to HouseIL.
 */
export namespace formatters {
  /
   * Formats a price string to include the correct currency symbol.
   * @param price - The price number to format.
   * @returns string - The formatted price string with currency.
   */
  export function formatPrice(price: number): string {
    return $${price.toFixed(2)}; // Format as USD
  }

  /
   * Formats a date to a more user-friendly string.
   * @param date - The date to format.
   * @returns string - Formatted date string.
   */
  export function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
}

/
 * HouseIL specific types and interfaces.
 */

/
 * Interface representing a listing in HouseIL.
 */
export interface Listing {
  id: string
  title: string
  description: string
  price: number
  location: string
  availableDates: Date[]
}

/
 * Interface representing the user booking.
 */
export interface Booking {
  userId: string
  listingId: string
  startDate: Date
  endDate: Date
}

/
 * Function to fetch listings for HouseIL with the desired high-end amenities and locations.
 * @returns Promise<Listing[]> - A promise that resolves to an array of listings.
 */
export async function fetchListings(): Promise<Listing[]> {
  // Simulated fetch function. Implement actual API logic in production.
  return Promise.resolve([
    {
      id: '1',
      title: 'Luxury Penthouse Suite',
      description: 'Experience the luxury of our penthouse with stunning city views.',
      price: 300.00,
      location: 'Downtown Tech District',
      availableDates: [new Date('2023-11-01'), new Date('2023-11-10')],
    },
    // Additional listings can be added here.
  ])
}