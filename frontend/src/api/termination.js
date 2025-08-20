import { BASE_URL } from "./config";

export async function getTerminations() {
  const res = await fetch(`${BASE_URL}/termination`);
  return res.json();
}

export async function addTermination(data) {
  const res = await fetch(`${BASE_URL}/termination`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
