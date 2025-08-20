const supabase = require("../config/supabase");
const { generateRoleCode } = require("../utils/roleCodeGen");

async function getUserById(id) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
}

async function createUser({ full_name, email, role }) {
  const role_code = await generateRoleCode(role);
  const { data, error } = await supabase
    .from("users")
    .insert([{ full_name, email, role, role_code }])
    .select()
    .single();
  if (error) throw error;
  return data;
}

module.exports = { getUserById, createUser };
