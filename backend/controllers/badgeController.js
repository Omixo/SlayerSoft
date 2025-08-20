const supabase = require("../config/supabase");
//created by: @slayerSoft 
exports.awardBadge = async (req, res) => {
  try {
    const { employee_id, badge_type, criteria_met } = req.body;

    const { data, error } = await supabase.from("badges").insert([{
      employee_id,
      badge_type,
      criteria_met,
      awarded_by: req.user.id
    }]).select().single();

    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBadges = async (req, res) => {
  try {
    const { userId } = req.params;
    const { data, error } = await supabase
      .from("badges")
      .select("*")
      .eq("employee_id", userId);
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
