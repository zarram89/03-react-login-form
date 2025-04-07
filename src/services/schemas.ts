import { z } from 'zod';

const nameSchema = z.string()
	.min(2, "Name must contain at least 2 characters")
	.max(50, "Name is too long")
	.regex(/^[a-zA-Zа-яА-Я\s]+$/, "Only letters and spaces allowed");

const emailSchema = z.string().email("Please enter a valid email");

const passwordSchema = z.string()
	.min(8, "Password must be at least 8 characters")
	.max(32, "Password must be less than 32 characters")
	.regex(/[A-Z]/, "Must contain at least one uppercase letter")
	.regex(/[0-9]/, "Must contain at least one number");

export { nameSchema, emailSchema, passwordSchema }
