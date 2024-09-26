require('dotenv').config();

export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
export const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;

export const SCOPE_CALENDAR = process.env.SCOPE_CALENDAR;
export const SCOPE_EMAIL = process.env.SCOPE_EMAIL;
export const SCOPE_PROFILE = process.env.SCOPE_PROFILE;
export const SCOPE_CONTACTS = process.env.SCOPE_CONTACTS;

export const ACCESS_TYPE = 'offline';