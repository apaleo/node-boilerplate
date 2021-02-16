import * as dotenv from 'dotenv';
dotenv.config();

export const {
    APALEO_CLIENT_ID,
    APALEO_CLIENT_SECRET,
    APALEO_IDENTITY_URL,
    APALEO_BASE_URL
} = process.env;
