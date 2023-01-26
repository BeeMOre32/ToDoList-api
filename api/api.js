const CONTENT_TYPE = process.env.CONTENT_TYPE;
const API_KEY = process.env.API_KEY;
const USERNAME = process.env.USERNAMES;
export const API_HEADERS = {
  "Content-Type": CONTENT_TYPE,
  apikey: API_KEY,
  username: USERNAME,
};
