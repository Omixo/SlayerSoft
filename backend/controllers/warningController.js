const supabase = require("../config/supabase");
// created by: @slayerSoft
exports.issueWarning = async (req, res) => {
  try {
    const { employee_id, warning_type, description, severity_level } = req.body;

    const { data, error } = await supabase.from("warnings").insert([{
      employee_id,
      issued_by: req.user.id,
      warning_type,
      description,
      severity_level
    }]).select().single();

    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getWarnings = async (req, res) => {
  try {
    const { userId } = req.params;
    const { data, error } = await supabase
      .from("warnings")
      .select("*")
      .eq("employee_id", userId);
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
