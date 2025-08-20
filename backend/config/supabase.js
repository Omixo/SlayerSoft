const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY, // server key (RLS bypass on server)
  { auth: { persistSession: false } }
);

module.exports = { supabase };
