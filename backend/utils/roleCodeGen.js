const supabase = require("../config/supabase");

async function generateRoleCode(role) {
  const { data, error } = await supabase
    .from("counters")
    .select("*")
    .eq("role", role)
    .single();

  if (error) throw error;

  if (data.current_count >= data.max_range) {
    throw new Error(`${role} codes exhausted`);
  }

  const newCode = data.current_count + 1;

  await supabase
    .from("counters")
    .update({ current_count: newCode })
    .eq("role", role);

  return newCode;
}

module.exports = { generateRoleCode };
