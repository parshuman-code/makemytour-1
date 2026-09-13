import User from '../models/User.js';

// Login User
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Support query params or body params as in original UserController
    const userEmail = email || req.query.email;
    const userPassword = password || req.query.password;

    const user = await User.findOne({ email: userEmail });
    if (!user || user.password !== userPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Signup User
export const signupUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role, phoneNumber } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      role: role || 'USER',
      phoneNumber: phoneNumber || '+1 (555) 234-5678',
      bookings: []
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get User by Email
export const getUserByEmail = async (req, res) => {
  try {
    const email = req.query.email || req.params.email;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Edit User Profile
export const editUserProfile = async (req, res) => {
  try {
    const id = req.query.id || req.params.id || req.body.id;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Save a Search to User's Recent Searches (max 10 kept)
export const saveSearch = async (req, res) => {
  try {
    const { userId, email, query, type, details } = req.body;
    let user = null;
    if (userId && userId !== 'demo-user') {
      user = await User.findById(userId);
    }
    if (!user && email) {
      user = await User.findOne({ email });
    }
    if (!user) return res.status(200).json({ message: 'No user to save search for' });

    const newSearch = { query, type, details, date: new Date() };
    user.recentSearches = [newSearch, ...(user.recentSearches || [])].slice(0, 10);
    await user.save();
    res.json({ message: 'Search saved', recentSearches: user.recentSearches });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Toggle Save/Unsave an Item (flight or hotel)
export const toggleSaveItem = async (req, res) => {
  try {
    const { userId, email, itemId, type, title, price, image } = req.body;
    let user = null;
    if (userId && userId !== 'demo-user') {
      user = await User.findById(userId);
    }
    if (!user && email) {
      user = await User.findOne({ email });
    }
    if (!user) return res.status(200).json({ message: 'No user to save item for' });

    const existingIndex = (user.savedItems || []).findIndex(
      s => s.itemId === itemId && s.type === type
    );

    let isSaved = false;
    if (existingIndex !== -1) {
      // Already saved — unsave it
      user.savedItems.splice(existingIndex, 1);
    } else {
      // Save it
      user.savedItems = [{ itemId, type, title, price, image, date: new Date() }, ...(user.savedItems || [])];
      isSaved = true;
    }

    await user.save();
    res.json({ message: isSaved ? 'Item saved' : 'Item removed', isSaved, savedItems: user.savedItems });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
