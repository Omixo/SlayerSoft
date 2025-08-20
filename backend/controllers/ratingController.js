const supabase = require("../config/supabase");
// created by: @slayerSoft
exports.submitRating = async (req, res) => {
  try {
    const { rated_employee_id, rating, month, year, comments } = req.body;

    const { data, error } = await supabase.from("peer_ratings").insert([{
      rater_id: req.user.id,
      rated_employee_id,
      rating,
      month,
      year,
      comments
    }]).select().single();

    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRatings = async (req, res) => {
  try {
    const { userId } = req.params;
    const { data, error } = await supabase
      .from("peer_ratings")
      .select("*")
      .eq("rated_employee_id", userId);
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
