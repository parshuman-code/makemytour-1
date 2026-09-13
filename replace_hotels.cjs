const fs = require('fs');

const hotels = [
  {
    hotelName: 'The Leela Palace Delhi',
    location: 'Delhi',
    pricePerNight: 12000,
    availableRooms: 15,
    amenities: ['Free WiFi', 'Swimming Pool', 'Spa & Wellness', 'Restaurant', 'Gym'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'Taj Mahal Hotel',
    location: 'Delhi',
    pricePerNight: 15000,
    availableRooms: 10,
    amenities: ['Free WiFi', 'Swimming Pool', 'Luxury Lounge', 'Bar'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'The Taj Mahal Palace',
    location: 'Mumbai',
    pricePerNight: 18000,
    availableRooms: 20,
    amenities: ['Free WiFi', 'Swimming Pool', 'Spa & Wellness', 'Sea View'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'Trident Nariman Point',
    location: 'Mumbai',
    pricePerNight: 11000,
    availableRooms: 25,
    amenities: ['Free WiFi', 'Gym', 'Restaurant', 'Business Center'],
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1520454974749-611b7248ffdb?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'ITC Gardenia',
    location: 'Bengaluru',
    pricePerNight: 13000,
    availableRooms: 12,
    amenities: ['Free WiFi', 'Swimming Pool', 'Spa & Wellness', 'Restaurant'],
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'The Oberoi Bengaluru',
    location: 'Bengaluru',
    pricePerNight: 14000,
    availableRooms: 8,
    amenities: ['Free WiFi', 'Garden', 'Bar', 'Gym'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'ITC Sonar',
    location: 'Kolkata',
    pricePerNight: 9500,
    availableRooms: 30,
    amenities: ['Free WiFi', 'Swimming Pool', 'Restaurant', 'Bar'],
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'The Oberoi Grand',
    location: 'Kolkata',
    pricePerNight: 12500,
    availableRooms: 18,
    amenities: ['Free WiFi', 'Swimming Pool', 'Spa & Wellness', 'Gym'],
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1520454974749-611b7248ffdb?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'Burj Al Arab',
    location: 'Dubai',
    pricePerNight: 150000,
    availableRooms: 5,
    amenities: ['Free WiFi', 'Private Beach', 'Spa & Wellness', 'Butler Service'],
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'Atlantis The Palm',
    location: 'Dubai',
    pricePerNight: 45000,
    availableRooms: 40,
    amenities: ['Free WiFi', 'Water Park', 'Aquarium', 'Multiple Restaurants'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'The Ritz Paris',
    location: 'Paris',
    pricePerNight: 85000,
    availableRooms: 7,
    amenities: ['Free WiFi', 'Swimming Pool', 'Spa & Wellness', 'Fine Dining'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'Four Seasons Hotel George V',
    location: 'Paris',
    pricePerNight: 90000,
    availableRooms: 6,
    amenities: ['Free WiFi', 'Spa & Wellness', 'Michelin Star Restaurants'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1520454974749-611b7248ffdb?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'Aman Tokyo',
    location: 'Tokyo',
    pricePerNight: 75000,
    availableRooms: 10,
    amenities: ['Free WiFi', 'Swimming Pool', 'City View', 'Spa & Wellness'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'Park Hyatt Tokyo',
    location: 'Tokyo',
    pricePerNight: 65000,
    availableRooms: 14,
    amenities: ['Free WiFi', 'Gym', 'Bar', 'Indoor Pool'],
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'The Plaza Hotel',
    location: 'New York',
    pricePerNight: 60000,
    availableRooms: 12,
    amenities: ['Free WiFi', 'Spa & Wellness', 'Fitness Center', 'Restaurant'],
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'The St. Regis New York',
    location: 'New York',
    pricePerNight: 68000,
    availableRooms: 9,
    amenities: ['Free WiFi', 'Butler Service', 'Fine Dining', 'Gym'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1520454974749-611b7248ffdb?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'The Savoy',
    location: 'London',
    pricePerNight: 55000,
    availableRooms: 15,
    amenities: ['Free WiFi', 'River View', 'Spa & Wellness', 'Bar'],
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'The Ritz London',
    location: 'London',
    pricePerNight: 62000,
    availableRooms: 11,
    amenities: ['Free WiFi', 'Afternoon Tea', 'Casino', 'Restaurant'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'Seaside Resort',
    location: 'Bali, Indonesia',
    pricePerNight: 6000,
    availableRooms: 17,
    amenities: ['Beach Access', 'Wi-Fi', 'Restaurant', 'Water Sports', 'Swimming Pool', 'Bar', 'Power Backup'],
    rating: 3.8,
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'Ayana Resort and Spa',
    location: 'Bali, Indonesia',
    pricePerNight: 22000,
    availableRooms: 20,
    amenities: ['Free WiFi', 'Ocean View', 'Spa & Wellness', 'Multiple Pools'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1520454974749-611b7248ffdb?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'Seaside Resort Goa',
    location: 'Goa',
    pricePerNight: 12000,
    availableRooms: 12,
    amenities: ['Beach Access', 'Swimming Pool', 'Seafood Restaurant'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  {
    hotelName: 'Taj Exotica Resort & Spa',
    location: 'Goa',
    pricePerNight: 16000,
    availableRooms: 14,
    amenities: ['Free WiFi', 'Beachfront', 'Spa & Wellness', 'Golf Course'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
  }
];

// Read mockData.js
let mockData = fs.readFileSync('src/mockData.js', 'utf8');

// Replace initialHotelsData
const newInitialHotelsData = "export const initialHotelsData = [\n" + hotels.map((h, i) => {
  return `  {
    _id: '${i + 1}',
    hotelName: '${h.hotelName}',
    location: '${h.location}',
    pricePerNight: ${h.pricePerNight},
    availableRooms: ${h.availableRooms},
    amenities: ${JSON.stringify(h.amenities)},
    rating: ${h.rating},
    image: '${h.image}'
  }`;
}).join(",\n") + "\n];";

mockData = mockData.replace(/export const initialHotelsData = \[[\s\S]*?\];/, newInitialHotelsData);
fs.writeFileSync('src/mockData.js', mockData);

// Read seed.js
let seedData = fs.readFileSync('backend/seed.js', 'utf8');
const newInitialHotels = "const initialHotels = [\n" + hotels.map((h) => {
  return `  {
    hotelName: '${h.hotelName}',
    location: '${h.location}',
    availableRooms: ${h.availableRooms},
    pricePerNight: ${h.pricePerNight},
    amenities: ${JSON.stringify(h.amenities)},
    rating: ${h.rating},
    image: '${h.image}'
  }`;
}).join(",\n") + "\n];";

seedData = seedData.replace(/const initialHotels = \[[\s\S]*?\];/, newInitialHotels);
fs.writeFileSync('backend/seed.js', seedData);

console.log("Done updating hotels.");
