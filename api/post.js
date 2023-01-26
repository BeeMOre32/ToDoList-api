import fetch from "node-fetch";
import { API_HEADERS } from "./api";

export default async function handler(request, response) {
  const res = await fetch(process.env.API_URL, {
    method: "POST",
    headers: API_HEADERS,
    body: request.body,
  });

  const data = await res.json();
  return response.status(200).json({ data });
}
