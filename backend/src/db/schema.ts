import {
    pgTable,
    uuid,
    varchar,
    text,
    timestamp,
    boolean,
    integer
} from "drizzle-orm/pg-core";

import { relations } from "drizzle-orm";

export const users = pgTable('users', {
    uuid: uuid('id').primaryKey().defaultRandom(),
    email: varchar('email').notNull().unique(),
    password: varchar('password', {
        length: 255
    }).notNull(),

    first_name: varchar('first_name', { length: 50 }),
    last_name: varchar('last_name', { length: 50 }),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),

})
