import fetch from "node-fetch";
import { API_HEADERS } from "./api";

export default async function handler({ query }, response) {
  const res = await fetch(process.env.API_URL + "/" + query.id, {
    method: "DELETE",
    headers: API_HEADERS,
  });

  const data = await res.json();
  return response.status(200).json({ data });
}
