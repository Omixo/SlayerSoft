const supabase = require("../config/supabase");

async function awardBadge({ employee_id, badge_type, criteria_met, awarded_by }) {
  const { data, error } = await supabase
    .from("badges")
    .insert([{ employee_id, badge_type, criteria_met, awarded_by }])
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function getBadgesByUser(employee_id) {
  const { data, error } = await supabase
    .from("badges")
    .select("*")
    .eq("employee_id", employee_id);
  if (error) throw error;
  return data;
}

module.exports = { awardBadge, getBadgesByUser };
//created by: @slayerSoft