const { supabase } = require("../config/supabase");

exports.getAll = async () => {
  const { data, error } = await supabase
    .from("slayer_access")
    .select("*")
    .order("id", { ascending: true });
  if (error) throw error;
  return data;
};

exports.update = async (id, patch) => {
  const { data, error } = await supabase
    .from("slayer_access")
    .update(patch)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
};