import mongoose from 'mongoose';
import Flight from './models/Flight.js';
import Hotel from './models/Hotel.js';
import User from './models/User.js';
import Review from './models/Review.js';
import Blog from './models/Blog.js';

const initialFlights = [
  {
    flightName: "IndiGo 6E-204",
    airline: "IndiGo",
    flightNumber: "6E-204",
    from: "Delhi",
    to: "Mumbai",
    departureTime: "06:30 AM",
    arrivalTime: "08:45 AM",
    price: 5500,
    availableSeats: 45,
    duration: "2h 15m",
    stops: "Non-stop",
    logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=120&q=80",
    rating: 4.8,
    classType: "Economy"
  },
  {
    flightName: "Air India AI-502",
    airline: "Air India",
    flightNumber: "AI-502",
    from: "Mumbai",
    to: "Bengaluru",
    departureTime: "11:15 AM",
    arrivalTime: "01:00 PM",
    price: 4800,
    availableSeats: 22,
    duration: "1h 45m",
    stops: "Non-stop",
    logo: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=120&q=80",
    rating: 4.6,
    classType: "Economy"
  },
  {
    flightName: "Vistara UK-811",
    airline: "Vistara",
    flightNumber: "UK-811",
    from: "Bengaluru",
    to: "Delhi",
    departureTime: "02:30 PM",
    arrivalTime: "05:15 PM",
    price: 6200,
    availableSeats: 38,
    duration: "2h 45m",
    stops: "Non-stop",
    logo: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=120&q=80",
    rating: 4.9,
    classType: "Premium Economy"
  },
  {
    flightName: "SpiceJet SG-993",
    airline: "SpiceJet",
    flightNumber: "SG-993",
    from: "Delhi",
    to: "Kolkata",
    departureTime: "08:10 PM",
    arrivalTime: "10:30 PM",
    price: 4200,
    availableSeats: 15,
    duration: "2h 20m",
    stops: "Non-stop",
    logo: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=120&q=80",
    rating: 4.4,
    classType: "Economy"
  },
  {
    flightName: "Emirates EK-501",
    airline: "Emirates",
    flightNumber: "EK-501",
    from: "Mumbai",
    to: "Dubai",
    departureTime: "04:00 PM",
    arrivalTime: "06:15 PM",
    price: 18500,
    availableSeats: 12,
    duration: "3h 45m",
    stops: "Non-stop",
    logo: "https://images.unsplash.com/photo-1519074069444-1ba4fff16be3?auto=format&fit=crop&w=120&q=80",
    rating: 4.9,
    classType: "Business"
  }
];

const initialHotels = [
  {
    hotelName: 'The Leela Palace Delhi',
    location: 'Delhi',
    availableRooms: 15,
    pricePerNight: 22000,
    amenities: ["Free WiFi","Swimming Pool","Spa & Wellness","Restaurant","Gym"],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'Taj Mahal Hotel',
    location: 'Delhi',
    availableRooms: 10,
    pricePerNight: 25000,
    amenities: ["Free WiFi","Swimming Pool","Luxury Lounge","Bar"],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'The Taj Mahal Palace',
    location: 'Mumbai',
    availableRooms: 20,
    pricePerNight: 35000,
    amenities: ["Free WiFi","Swimming Pool","Spa & Wellness","Sea View"],
    rating: 4.9,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Taj_Mahal_Palace_Hotel_photo.jpg/960px-Taj_Mahal_Palace_Hotel_photo.jpg'
  },
  {
    hotelName: 'Trident Nariman Point',
    location: 'Mumbai',
    availableRooms: 25,
    pricePerNight: 16000,
    amenities: ["Free WiFi","Gym","Restaurant","Business Center"],
    rating: 4.6,
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Oberoi-Hotel.jpg'
  },
  {
    hotelName: 'ITC Gardenia',
    location: 'Bengaluru',
    availableRooms: 12,
    pricePerNight: 18000,
    amenities: ["Free WiFi","Swimming Pool","Spa & Wellness","Restaurant"],
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'The Oberoi Bengaluru',
    location: 'Bengaluru',
    availableRooms: 8,
    pricePerNight: 21000,
    amenities: ["Free WiFi","Garden","Bar","Gym"],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'ITC Sonar',
    location: 'Kolkata',
    availableRooms: 30,
    pricePerNight: 12000,
    amenities: ["Free WiFi","Swimming Pool","Restaurant","Bar"],
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'The Oberoi Grand',
    location: 'Kolkata',
    availableRooms: 18,
    pricePerNight: 14000,
    amenities: ["Free WiFi","Swimming Pool","Spa & Wellness","Gym"],
    rating: 4.7,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/OberoiGrandHotelKolkata_gobeirne.jpg/960px-OberoiGrandHotelKolkata_gobeirne.jpg'
  },
  {
    hotelName: 'Burj Al Arab',
    location: 'Dubai',
    availableRooms: 5,
    pricePerNight: 175000,
    amenities: ["Free WiFi","Private Beach","Spa & Wellness","Butler Service"],
    rating: 5,
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec2007.jpg/960px-Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec2007.jpg'
  },
  {
    hotelName: 'Atlantis The Palm',
    location: 'Dubai',
    availableRooms: 40,
    pricePerNight: 65000,
    amenities: ["Free WiFi","Water Park","Aquarium","Multiple Restaurants"],
    rating: 4.8,
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Hotel_Atlantis_at_Sunset%2C_The_Palm_-_Dubai_%2849510861268%29.jpg/960px-Hotel_Atlantis_at_Sunset%2C_The_Palm_-_Dubai_%2849510861268%29.jpg'
  },
  {
    hotelName: 'The Ritz Paris',
    location: 'Paris',
    availableRooms: 7,
    pricePerNight: 180000,
    amenities: ["Free WiFi","Swimming Pool","Spa & Wellness","Fine Dining"],
    rating: 4.9,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/H%C3%B4tel_Ritz.jpg/960px-H%C3%B4tel_Ritz.jpg'
  },
  {
    hotelName: 'Four Seasons Hotel George V',
    location: 'Paris',
    availableRooms: 6,
    pricePerNight: 210000,
    amenities: ["Free WiFi","Spa & Wellness","Michelin Star Restaurants"],
    rating: 4.9,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/H%C3%B4tel_George-V%2C_31_avenue_George-V%2C_Paris_8e_1.jpg/960px-H%C3%B4tel_George-V%2C_31_avenue_George-V%2C_Paris_8e_1.jpg'
  },
  {
    hotelName: 'Aman Tokyo',
    location: 'Tokyo',
    availableRooms: 10,
    pricePerNight: 140000,
    amenities: ["Free WiFi","Swimming Pool","City View","Spa & Wellness"],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'Park Hyatt Tokyo',
    location: 'Tokyo',
    availableRooms: 14,
    pricePerNight: 95000,
    amenities: ["Free WiFi","Gym","Bar","Indoor Pool"],
    rating: 4.7,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Shinjuku_Park_Tower_2018_from_MetGovBld.jpg/960px-Shinjuku_Park_Tower_2018_from_MetGovBld.jpg'
  },
  {
    hotelName: 'The Plaza Hotel',
    location: 'New York',
    availableRooms: 12,
    pricePerNight: 90000,
    amenities: ["Free WiFi","Spa & Wellness","Fitness Center","Restaurant"],
    rating: 4.6,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/New_York_-_Manhattan_-_Plaza_Hotel.jpg/960px-New_York_-_Manhattan_-_Plaza_Hotel.jpg'
  },
  {
    hotelName: 'The St. Regis New York',
    location: 'New York',
    availableRooms: 9,
    pricePerNight: 110000,
    amenities: ["Free WiFi","Butler Service","Fine Dining","Gym"],
    rating: 4.8,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/5_Av_Mar_2021_43.jpg/960px-5_Av_Mar_2021_43.jpg'
  },
  {
    hotelName: 'The Savoy',
    location: 'London',
    availableRooms: 15,
    pricePerNight: 85000,
    amenities: ["Free WiFi","River View","Spa & Wellness","Bar"],
    rating: 4.7,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg'
  },
  {
    hotelName: 'The Ritz London',
    location: 'London',
    availableRooms: 11,
    pricePerNight: 95000,
    amenities: ["Free WiFi","Afternoon Tea","Casino","Restaurant"],
    rating: 4.8,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Ritz_%286902790412%29.jpg/960px-The_Ritz_%286902790412%29.jpg'
  },
  {
    hotelName: 'Seaside Resort',
    location: 'Bali, Indonesia',
    availableRooms: 17,
    pricePerNight: 8500,
    amenities: ["Beach Access","Wi-Fi","Restaurant","Water Sports","Swimming Pool","Bar","Power Backup"],
    rating: 3.8,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Jimbaran200507-1.jpg/960px-Jimbaran200507-1.jpg'
  },
  {
    hotelName: 'Ayana Resort and Spa',
    location: 'Bali, Indonesia',
    availableRooms: 20,
    pricePerNight: 32000,
    amenities: ["Free WiFi","Ocean View","Spa & Wellness","Multiple Pools"],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'Seaside Resort Goa',
    location: 'Goa',
    availableRooms: 12,
    pricePerNight: 15000,
    amenities: ["Beach Access","Swimming Pool","Seafood Restaurant"],
    rating: 4.8,
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Taj_Fort_Aguada_Beach_Resort_Hotel_Goa_3.JPG'
  },
  {
    hotelName: 'Taj Exotica Resort & Spa',
    location: 'Goa',
    availableRooms: 14,
    pricePerNight: 28000,
    amenities: ["Free WiFi","Beachfront","Spa & Wellness","Golf Course"],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
  }
];

const initialBlogs = [
  {
    title: "10 Hidden Gems in Himachal Pradesh to Visit This Summer",
    slug: "hidden-gems-himachal-pradesh",
    content: "Discover offbeat valleys, tranquil pine forests, and charming hill villages away from the crowded tourist trails.",
    author: "MakeMyTour Travel Team",
    category: "Travel Guide",
    coverImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    featured: true,
    publishedAt: "2026-08-20"
  },
  {
    title: "Top Luxury Beach Resorts in Goa for a Relaxing Getaway",
    slug: "luxury-beach-resorts-goa",
    content: "Explore 5-star beachfront properties with private cabanas, sunset lounges, and authentic Goan seafood dining.",
    author: "Ananya Roy",
    category: "Destination Tips",
    coverImage: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?auto=format&fit=crop&w=800&q=80",
    featured: false,
    publishedAt: "2026-08-22"
  }
];

export const seedDatabase = async () => {
  try {
    const flightCount = await Flight.countDocuments();
    if (flightCount === 0) await Flight.insertMany(initialFlights);

    // Upsert Seaside Resort in Bali, Indonesia if missing
    const seasideExists = await Hotel.findOne({ hotelName: "Seaside Resort" });
    if (!seasideExists) {
      await Hotel.create(initialHotels[0]);
    }

    const hotelCount = await Hotel.countDocuments();
    if (hotelCount === 0) await Hotel.insertMany(initialHotels);

    const blogCount = await Blog.countDocuments();
    if (blogCount === 0) await Blog.insertMany(initialBlogs);

    console.log('✅ Seeded initial database content');
  } catch (error) {
    console.error('Error seeding database:', error.message);
  }
};
