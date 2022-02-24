import { config } from "dotenv";
config()

export const DB = process.env.APP_DB;
export const SECRECT = process.env.APP_SECRECT;
export const DOMAIN = process.env.APP_DOMIAN;
export const SENDGRID_API = process.env.SENDGRID_API_KEY;
export const HOST_EMAIL = process.env.APP_HOST_EMAIL;
export const PORT  = process.env.PORT || process.env.APP_PORT;


// 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