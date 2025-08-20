import { BASE_URL } from "./config";

export async function getRatings() {
  const res = await fetch(`${BASE_URL}/ratings`);
  return res.json();
}

export async function addRating(data) {
  const res = await fetch(`${BASE_URL}/ratings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
