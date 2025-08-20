const supabase = require("../config/supabase");

async function submitRating({ rater_id, rated_employee_id, rating, month, year, comments }) {
  const { data, error } = await supabase
    .from("peer_ratings")
    .insert([{ rater_id, rated_employee_id, rating, month, year, comments }])
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function getRatingsByUser(rated_employee_id) {
  const { data, error } = await supabase
    .from("peer_ratings")
    .select("*")
    .eq("rated_employee_id", rated_employee_id);
  if (error) throw error;
  return data;
}

module.exports = { submitRating, getRatingsByUser };
// This code defines a model for handling peer ratings in a Supabase database.