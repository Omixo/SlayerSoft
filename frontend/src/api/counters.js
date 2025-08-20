import { BASE_URL } from "./config";

export async function getCounters() {
  const res = await fetch(`${BASE_URL}/counters`);
  return res.json();
}

export async function updateCounter(role, data) {
  const res = await fetch(`${BASE_URL}/counters/${role}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
