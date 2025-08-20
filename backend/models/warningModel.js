const supabase = require("../config/supabase");

async function issueWarning({ employee_id, issued_by, warning_type, description, severity_level }) {
  const { data, error } = await supabase
    .from("warnings")
    .insert([{ employee_id, issued_by, warning_type, description, severity_level }])
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function getWarningsByUser(employee_id) {
  const { data, error } = await supabase
    .from("warnings")
    .select("*")
    .eq("employee_id", employee_id);
  if (error) throw error;
  return data;
}

module.exports = { issueWarning, getWarningsByUser };
