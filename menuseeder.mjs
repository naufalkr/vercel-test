import { drizzle } from "drizzle-orm/node-postgres";
import { MenuItemsTable } from './drizzle/schema.js';
import pkg from 'pg';
const { Pool } = pkg;

// Definisikan path gambar sebagai string
const Americano1 = './images/Americano/1.jpeg';
const Americano2 = './images/Americano/2.jpg';
const Americano3 = './images/Americano/3.jpg';
const Americano4 = './images/Americano/4.jpg';
const Americano5 = './images/Americano/5.jpg';

const ColdBrew1 = './images/ColdBrew/1.jpeg';
const ColdBrew2 = './images/ColdBrew/2.jpeg';
const ColdBrew3 = './images/ColdBrew/3.jpg';
const ColdBrew4 = './images/ColdBrew/4.png';
const ColdBrew5 = './images/ColdBrew/5.jpg';


// import { Pool } from 'pg';

// // Initialize your PostgreSQL client
// const client = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });
// const db = drizzle(client);

// Buat koneksi database
const client = new Pool({
  user: 'neondb_owner',
  host: 'ep-noisy-lab-a19xjt2s-pooler.ap-southeast-1.aws.neon.tech',
  database: 'neondb',
  password: 'zLn3FcqP9KDT',
  port: 5432,
  ssl: { rejectUnauthorized: false },  // for SSL connection
});

const db = drizzle(client);

// Define the menu items you want to insert
const menuItems = [
  { 
    name: 'Americano Light Roast', 
    description: 'Classic Americano made with espresso and hot water', 
    price: 3500.00,  // Consistent decimal price format
    image_url: Americano1,
  },
  { 
    name: 'Americano Medium Roast', 
    description: 'Americano with a rich, bold flavor', 
    price: 3700.00,  // Consistent decimal price format
    image_url: Americano2,
  },
  { 
    name: 'Americano Dark Roast', 
    description: 'Americano with a hint of sweetness', 
    price: 3800.00,  // Consistent decimal price format
    image_url: Americano3,
  },
  { 
    name: 'Americano Signature', 
    description: 'A strong and smooth Americano', 
    price: 4000.00,  // Consistent decimal price format
    image_url: Americano4,
  },
  { 
    name: 'Americano Espresso Blend', 
    description: 'A refreshing twist on a classic Americano', 
    price: 4200.00,  // Consistent decimal price format
    image_url: Americano5,
  },
  { 
    name: 'Cold Brew Original', 
    description: 'Smooth, cold-brewed coffee served over ice', 
    price: 4500.00,  // Consistent decimal price format
    image_url: ColdBrew1,
  },
  { 
    name: 'Cold Brew Strong', 
    description: 'Cold brew with a robust flavor', 
    price: 4700.00,  // Consistent decimal price format
    image_url: ColdBrew2,
  },
  { 
    name: 'Cold Brew Smooth', 
    description: 'A smooth and refreshing cold brew', 
    price: 4800.00,  // Consistent decimal price format
    image_url: ColdBrew3,
  },
  { 
    name: 'Cold Brew Classic', 
    description: 'Cold brew with a rich flavor and smooth texture', 
    price: 5000.00,  // Consistent decimal price format
    image_url: ColdBrew4,
  },
  { 
    name: 'Cold Brew Creamy', 
    description: 'Bold cold brew with a creamy finish', 
    price: 5200.00,  // Consistent decimal price format
    image_url: ColdBrew5,
  }
];

// Insert menu items into the database
async function seedMenu() {
  for (const item of menuItems) {
    await db.insert(MenuItemsTable).values(item);
  }
  console.log('Menu items seeded successfully!');
}

// Run the seeder
seedMenu().catch((error) => console.error('Error seeding menu:', error));
