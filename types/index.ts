import { User } from './user'; // Importing User type from user module
import { Property } from './property'; // Importing Property type from property module

/
 * Represents a reservation made by a user for a property in HouseIL.
 * @interface Reservation
 * @property {string} id - Unique identifier for the reservation.
 * @property {User} user - User who made the reservation.
 * @property {Property} property - Property that has been reserved.
 * @property {Date} checkIn - Check-in date for the reservation.
 * @property {Date} checkOut - Check-out date for the reservation.
 * @property {number} totalAmount - Total amount to be paid for the reservation.
 * @property {string} status - Current status of the reservation (e.g., confirmed, canceled).
 * @memberof HouseIL
 */
export interface Reservation {
    id: string
    user: User
    property: Property
    checkIn: Date
    checkOut: Date
    totalAmount: number
    status: 'confirmed' | 'canceled' | 'pending'
}

/
 * Represents a review for a property made by a user in HouseIL.
 * @interface Review
 * @property {string} id - Unique identifier for the review.
 * @property {User} user - User who made the review.
 * @property {Property} property - Property that is being reviewed.
 * @property {number} rating - Rating given to the property (1 to 5).
 * @property {string} comment - Optional comment provided by the user.
 * @memberof HouseIL
 */
export interface Review {
    id: string
    user: User
    property: Property
    rating: number
    comment?: string
}

/
 * Represents a user of the HouseIL application.
 * @interface UserProfile
 * @property {string} id - Unique identifier for the user.
 * @property {string} name - Full name of the user.
 * @property {string} email - Email address of the user.
 * @property {string} password - Hashed password for user authentication.
 * @property {string} role - User role within the application (e.g., guest, host).
 * @memberof HouseIL
 */
export interface UserProfile {
    id: string
    name: string
    email: string
    password: string
    role: 'guest' | 'host'
}

/
 * Represents a property listed on the HouseIL platform.
 * @interface Property
 * @property {string} id - Unique identifier for the property.
 * @property {UserProfile} host - User profile of the host for the property.
 * @property {string} title - Title of the property listing.
 * @property {string} description - Detailed description of the property.
 * @property {string} location - Location of the property.
 * @property {number} pricePerNight - Nightly rate for renting the property.
 * @property {string[]} amenities - List of amenities available at the property.
 * @memberof HouseIL
 */
export interface Property {
    id: string
    host: UserProfile
    title: string
    description: string
    location: string
    pricePerNight: number
    amenities: string[]
}

/
 * Represents the application state for the HouseIL technology platform.
 * @interface HouseILState
 * @property {UserProfile} currentUser - Currently authenticated user.
 * @property {Property[]} properties - List of available properties in the HouseIL system.
 * @property {Reservation[]} reservations - List of reservations made by users.
 * @property {Review[]} reviews - List of reviews made by users.
 * @memberof HouseIL
 */
export interface HouseILState {
    currentUser: UserProfile | null
    properties: Property[]
    reservations: Reservation[]
    reviews: Review[]
}