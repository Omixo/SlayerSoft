import { BASE_URL } from "./config";

export async function getBadges() {
  const res = await fetch(`${BASE_URL}/badges`);
  return res.json();
}

export async function addBadge(data) {
  const res = await fetch(`${BASE_URL}/badges`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
