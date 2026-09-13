export const initialFlightsData = [
  {
    id: "FL-202",
    airline: "SkyHigh Airlines",
    code: "SH-202",
    logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=120&q=80",
    from: "Paris",
    to: "Tokyo",
    departureTime: "08:30 AM",
    arrivalTime: "11:45 PM",
    duration: "15h 15m",
    stops: "Non-stop",
    price: 850,
    seatsAvailable: 12,
    terminalDep: "Terminal 2E (CDG)",
    terminalArr: "Terminal 3 (NRT)",
    baggage: { cabin: "7 Kgs", checkIn: "25 Kgs" },
    cancellation: "Refundable (Cancellation fee applies up to 24 hrs before departure)",
    rating: 4.8
  },
  {
    id: "FL-305",
    airline: "Air Express",
    code: "AX-305",
    logo: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=120&q=80",
    from: "New York",
    to: "London",
    departureTime: "06:15 PM",
    arrivalTime: "06:30 AM",
    duration: "7h 15m",
    stops: "Non-stop",
    price: 620,
    seatsAvailable: 8,
    terminalDep: "Terminal 4 (JFK)",
    terminalArr: "Terminal 5 (LHR)",
    baggage: { cabin: "7 Kgs", checkIn: "23 Kgs" },
    cancellation: "Flexible Cancellation - Free modification within 48h",
    rating: 4.6
  },
  {
    id: "FL-412",
    airline: "Oceanic Air",
    code: "OA-412",
    logo: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=120&q=80",
    from: "Paris",
    to: "Bali, Indonesia",
    departureTime: "10:00 AM",
    arrivalTime: "07:20 AM",
    duration: "16h 20m",
    stops: "1 Stop (Doha)",
    price: 740,
    seatsAvailable: 5,
    terminalDep: "Terminal 1 (CDG)",
    terminalArr: "Terminal Int (DPS)",
    baggage: { cabin: "8 Kgs", checkIn: "30 Kgs" },
    cancellation: "Non-refundable promo fare",
    rating: 4.7
  },
  {
    id: "FL-508",
    airline: "Tokyo Wings",
    code: "TW-508",
    logo: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=120&q=80",
    from: "Tokyo",
    to: "London",
    departureTime: "11:50 PM",
    arrivalTime: "05:40 AM",
    duration: "12h 50m",
    stops: "Non-stop",
    price: 990,
    seatsAvailable: 15,
    terminalDep: "Terminal 1 (HND)",
    terminalArr: "Terminal 2 (LHR)",
    baggage: { cabin: "10 Kgs", checkIn: "35 Kgs" },
    cancellation: "Full Refund up to 48 hours prior to flight departure",
    rating: 4.9
  },
  {
    id: "FL-119",
    airline: "Global Jet",
    code: "GJ-119",
    logo: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=120&q=80",
    from: "Paris",
    to: "New York",
    departureTime: "01:20 PM",
    arrivalTime: "03:45 PM",
    duration: "8h 25m",
    stops: "Non-stop",
    price: 580,
    seatsAvailable: 20,
    terminalDep: "Terminal 2A (CDG)",
    terminalArr: "Terminal 7 (JFK)",
    baggage: { cabin: "7 Kgs", checkIn: "23 Kgs" },
    cancellation: "Refundable with fee",
    rating: 4.5
  }
];

export const bestOffersData = [
  {
    id: 1,
    category: "Domestic Flights",
    title: "Fly High with Flat 20% Off",
    subtitle: "Applicable on top domestic routes & airlines",
    code: "MMTCURE",
    discount: "20% OFF",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    category: "International Hotels",
    title: "Luxury Stays in Paris & Tokyo",
    subtitle: "Save up to $150 on premium resort stays",
    code: "SPECIALUPI",
    discount: "$150 OFF",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    category: "Holiday Packages",
    title: "Bali Tropical Escapes",
    subtitle: "Includes Flights + 5 Star Stay + Airport Transfers",
    code: "HOLIDAYFUN",
    discount: "FLAT $200 OFF",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
  }
];

export const userProfileData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 019-2834",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  membership: "MakeMyTour Preferred Gold",
  bookings: [
    {
      bookingId: "MMT-889342",
      flightCode: "SH-202",
      airline: "SkyHigh Airlines",
      route: "Paris (CDG) → Tokyo (NRT)",
      date: "2026-09-15",
      passengers: 2,
      totalAmount: "$1,700",
      status: "Paid",
      paymentMethod: "Credit Card ending 4242"
    },
    {
      bookingId: "MMT-772109",
      flightCode: "AX-305",
      airline: "Air Express",
      route: "New York (JFK) → London (LHR)",
      date: "2026-08-10",
      passengers: 1,
      totalAmount: "$620",
      status: "Paid",
      paymentMethod: "UPI / Net Banking"
    }
  ]
};

export const initialHotelsData = [
  {
    _id: '1',
    hotelName: 'The Leela Palace Delhi',
    location: 'Delhi',
    pricePerNight: 22000,
    availableRooms: 15,
    amenities: ["Free WiFi","Swimming Pool","Spa & Wellness","Restaurant","Gym"],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: '2',
    hotelName: 'Taj Mahal Hotel',
    location: 'Delhi',
    pricePerNight: 25000,
    availableRooms: 10,
    amenities: ["Free WiFi","Swimming Pool","Luxury Lounge","Bar"],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: '3',
    hotelName: 'The Taj Mahal Palace',
    location: 'Mumbai',
    pricePerNight: 35000,
    availableRooms: 20,
    amenities: ["Free WiFi","Swimming Pool","Spa & Wellness","Sea View"],
    rating: 4.9,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Taj_Mahal_Palace_Hotel_photo.jpg/960px-Taj_Mahal_Palace_Hotel_photo.jpg'
  },
  {
    _id: '4',
    hotelName: 'Trident Nariman Point',
    location: 'Mumbai',
    pricePerNight: 16000,
    availableRooms: 25,
    amenities: ["Free WiFi","Gym","Restaurant","Business Center"],
    rating: 4.6,
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Oberoi-Hotel.jpg'
  },
  {
    _id: '5',
    hotelName: 'ITC Gardenia',
    location: 'Bengaluru',
    pricePerNight: 18000,
    availableRooms: 12,
    amenities: ["Free WiFi","Swimming Pool","Spa & Wellness","Restaurant"],
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: '6',
    hotelName: 'The Oberoi Bengaluru',
    location: 'Bengaluru',
    pricePerNight: 21000,
    availableRooms: 8,
    amenities: ["Free WiFi","Garden","Bar","Gym"],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: '7',
    hotelName: 'ITC Sonar',
    location: 'Kolkata',
    pricePerNight: 12000,
    availableRooms: 30,
    amenities: ["Free WiFi","Swimming Pool","Restaurant","Bar"],
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: '8',
    hotelName: 'The Oberoi Grand',
    location: 'Kolkata',
    pricePerNight: 14000,
    availableRooms: 18,
    amenities: ["Free WiFi","Swimming Pool","Spa & Wellness","Gym"],
    rating: 4.7,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/OberoiGrandHotelKolkata_gobeirne.jpg/960px-OberoiGrandHotelKolkata_gobeirne.jpg'
  },
  {
    _id: '9',
    hotelName: 'Burj Al Arab',
    location: 'Dubai',
    pricePerNight: 175000,
    availableRooms: 5,
    amenities: ["Free WiFi","Private Beach","Spa & Wellness","Butler Service"],
    rating: 5,
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec2007.jpg/960px-Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec2007.jpg'
  },
  {
    _id: '10',
    hotelName: 'Atlantis The Palm',
    location: 'Dubai',
    pricePerNight: 65000,
    availableRooms: 40,
    amenities: ["Free WiFi","Water Park","Aquarium","Multiple Restaurants"],
    rating: 4.8,
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Hotel_Atlantis_at_Sunset%2C_The_Palm_-_Dubai_%2849510861268%29.jpg/960px-Hotel_Atlantis_at_Sunset%2C_The_Palm_-_Dubai_%2849510861268%29.jpg'
  },
  {
    _id: '11',
    hotelName: 'The Ritz Paris',
    location: 'Paris',
    pricePerNight: 180000,
    availableRooms: 7,
    amenities: ["Free WiFi","Swimming Pool","Spa & Wellness","Fine Dining"],
    rating: 4.9,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/H%C3%B4tel_Ritz.jpg/960px-H%C3%B4tel_Ritz.jpg'
  },
  {
    _id: '12',
    hotelName: 'Four Seasons Hotel George V',
    location: 'Paris',
    pricePerNight: 210000,
    availableRooms: 6,
    amenities: ["Free WiFi","Spa & Wellness","Michelin Star Restaurants"],
    rating: 4.9,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/H%C3%B4tel_George-V%2C_31_avenue_George-V%2C_Paris_8e_1.jpg/960px-H%C3%B4tel_George-V%2C_31_avenue_George-V%2C_Paris_8e_1.jpg'
  },
  {
    _id: '13',
    hotelName: 'Aman Tokyo',
    location: 'Tokyo',
    pricePerNight: 140000,
    availableRooms: 10,
    amenities: ["Free WiFi","Swimming Pool","City View","Spa & Wellness"],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: '14',
    hotelName: 'Park Hyatt Tokyo',
    location: 'Tokyo',
    pricePerNight: 95000,
    availableRooms: 14,
    amenities: ["Free WiFi","Gym","Bar","Indoor Pool"],
    rating: 4.7,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Shinjuku_Park_Tower_2018_from_MetGovBld.jpg/960px-Shinjuku_Park_Tower_2018_from_MetGovBld.jpg'
  },
  {
    _id: '15',
    hotelName: 'The Plaza Hotel',
    location: 'New York',
    pricePerNight: 90000,
    availableRooms: 12,
    amenities: ["Free WiFi","Spa & Wellness","Fitness Center","Restaurant"],
    rating: 4.6,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/New_York_-_Manhattan_-_Plaza_Hotel.jpg/960px-New_York_-_Manhattan_-_Plaza_Hotel.jpg'
  },
  {
    _id: '16',
    hotelName: 'The St. Regis New York',
    location: 'New York',
    pricePerNight: 110000,
    availableRooms: 9,
    amenities: ["Free WiFi","Butler Service","Fine Dining","Gym"],
    rating: 4.8,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/5_Av_Mar_2021_43.jpg/960px-5_Av_Mar_2021_43.jpg'
  },
  {
    _id: '17',
    hotelName: 'The Savoy',
    location: 'London',
    pricePerNight: 85000,
    availableRooms: 15,
    amenities: ["Free WiFi","River View","Spa & Wellness","Bar"],
    rating: 4.7,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg/960px-H%C3%B4tel_Savoy_The_Strand_Londres_-_edited.jpg'
  },
  {
    _id: '18',
    hotelName: 'The Ritz London',
    location: 'London',
    pricePerNight: 95000,
    availableRooms: 11,
    amenities: ["Free WiFi","Afternoon Tea","Casino","Restaurant"],
    rating: 4.8,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Ritz_%286902790412%29.jpg/960px-The_Ritz_%286902790412%29.jpg'
  },
  {
    _id: '19',
    hotelName: 'Seaside Resort',
    location: 'Bali, Indonesia',
    pricePerNight: 8500,
    availableRooms: 17,
    amenities: ["Beach Access","Wi-Fi","Restaurant","Water Sports","Swimming Pool","Bar","Power Backup"],
    rating: 3.8,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Jimbaran200507-1.jpg/960px-Jimbaran200507-1.jpg'
  },
  {
    _id: '20',
    hotelName: 'Ayana Resort and Spa',
    location: 'Bali, Indonesia',
    pricePerNight: 32000,
    availableRooms: 20,
    amenities: ["Free WiFi","Ocean View","Spa & Wellness","Multiple Pools"],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: '21',
    hotelName: 'Seaside Resort Goa',
    location: 'Goa',
    pricePerNight: 15000,
    availableRooms: 12,
    amenities: ["Beach Access","Swimming Pool","Seafood Restaurant"],
    rating: 4.8,
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Taj_Fort_Aguada_Beach_Resort_Hotel_Goa_3.JPG'
  },
  {
    _id: '22',
    hotelName: 'Taj Exotica Resort & Spa',
    location: 'Goa',
    pricePerNight: 28000,
    availableRooms: 14,
    amenities: ["Free WiFi","Beachfront","Spa & Wellness","Golf Course"],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
  }
];
