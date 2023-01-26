import fetch from "node-fetch";
import { API_HEADERS } from "./api";

export default async function handler(request, response) {
  const res = await fetch(process.env.API_URL + "/reorder", {
    method: "PUT",
    headers: API_HEADERS,
    body: request.body,
  });

  const data = res.json();
  return response.status(200).json({ data });
}
