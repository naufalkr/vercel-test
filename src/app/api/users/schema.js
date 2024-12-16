import { pgTable, serial, varchar, text, decimal, timestamp, boolean, uniqueIndex } from 'drizzle-orm/pg-core';

// Define the Users table (already done previously)
export const UsersTable = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    password_hash: varchar('password_hash', { length: 255 }).notNull(),
    phone_number: varchar('phone_number', { length: 20 }),
    first_name: varchar('first_name', { length: 50 }),
    last_name: varchar('last_name', { length: 50 }),
    profile_picture: varchar('profile_picture', { length: 255 }),
    created_at: timestamp('created_at').defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueEmailIdx: uniqueIndex('unique_email_idx').on(users.email),
    };
  },
);

// Define the MenuItems table
export const MenuItemsTable = pgTable(
  'menu_items',
  {
    item_id: serial('item_id').primaryKey(),  // Primary key for the menu items
    name: varchar('name', { length: 255 }).notNull(),  // Name of the menu item
    description: text('description'),  // Description of the menu item (optional)
    price: decimal('price', { precision: 10, scale: 2 }).notNull(),  // Price of the item
    image_url: varchar('image_url', { length: 255 }),  // URL for the image
    is_available: boolean('is_available').default(true),  // Boolean to check availability
    created_at: timestamp('created_at').defaultNow().notNull(),  // Timestamp of when the menu item was created
  },
  (menuItems) => {
    return {
      uniqueNameIdx: uniqueIndex('unique_name_idx').on(menuItems.name),  // Ensuring unique names for items
    };
  },
);
