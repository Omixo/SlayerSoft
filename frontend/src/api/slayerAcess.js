import { BASE_URL } from "./config";

export async function getAccess() {
  const res = await fetch(`${BASE_URL}/slayerAccess`);
  return res.json();
}

export async function updateAccess(id, data) {
  const res = await fetch(`${BASE_URL}/slayerAccess/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
