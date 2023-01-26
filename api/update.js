import fetch from "node-fetch";
import { API_HEADERS } from "./api";

export default async function handler({ query, body }, response) {
  const res = await fetch(process.env.API_URL + "/" + query.id, {
    method: "PUT",
    headers: API_HEADERS,
    body: body,
  });

  const data = await res.json();
  return response.status(200).json({ data });
}
