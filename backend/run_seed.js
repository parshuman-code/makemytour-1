import mongoose from 'mongoose';
import { seedDatabase } from './seed.js';

mongoose.connect('mongodb://127.0.0.1:27017/makemytrip').then(async () => {
  try {
    await mongoose.connection.collection('hotels').drop();
  } catch (e) {
    console.log("Hotels collection probably didn't exist.", e.message);
  }
  await seedDatabase();
  console.log('Seeded!');
  process.exit(0);
}).catch(console.error);
