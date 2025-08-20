const supabase = require("../config/supabase");

exports.requestTermination = async (req, res) => {
  try {
    const { employee_id, reason, termination_type } = req.body;

    const { data, error } = await supabase.from("termination").insert([{
      employee_id,
      requested_by: req.user.id,
      reason,
      termination_type
    }]).select().single();

    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTerminationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const { data, error } = await supabase
      .from("termination")
      .update({ status })
      .eq("id", id)
      .select().single();

    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
