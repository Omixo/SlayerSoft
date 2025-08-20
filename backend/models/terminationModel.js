const supabase = require("../config/supabase");

async function requestTermination({ employee_id, requested_by, reason, termination_type }) {
  const { data, error } = await supabase
    .from("termination")
    .insert([{ employee_id, requested_by, reason, termination_type }])
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function updateTerminationStatus(id, status) {
  const { data, error } = await supabase
    .from("termination")
    .update({ status })
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

module.exports = { requestTermination, updateTerminationStatus };
