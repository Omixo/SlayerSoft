const supabase = require("../config/supabase");
const { generateRoleCode } = require("../utils/roleCodeGen");
// created by: @slayerSoft
exports.getMe = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", req.user.id)
      .single();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { full_name, email, role } = req.body;
    const role_code = await generateRoleCode(role);

    const { data, error } = await supabase.from("users").insert([{
      full_name, email, role, role_code
    }]).select().single();

    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
