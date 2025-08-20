import { BASE_URL } from "./config";

export async function getWarnings() {
  const res = await fetch(`${BASE_URL}/warnings`);
  return res.json();
}

export async function addWarning(data) {
  const res = await fetch(`${BASE_URL}/warnings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
