const { supabase } = require("../config/supabase");

exports.getAll = async () => {
  const { data, error } = await supabase
    .from("counters")
    .select("*")
    .order("min_range", { ascending: true });
  if (error) throw error;
  return data;
};

exports.getOne = async (role) => {
  const { data, error } = await supabase
    .from("counters")
    .select("*")
    .eq("role", role)
    .single();
  if (error) throw error;
  return data;
};

exports.update = async (role, patch) => {
  const { data, error } = await supabase
    .from("counters")
    .update(patch)
    .eq("role", role)
    .select()
    .single();
  if (error) throw error;
  return data;
};