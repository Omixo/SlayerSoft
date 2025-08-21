import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("users").select("*");
      if (error) {
        console.error("Supabase Error:", error);
      } else {
        setUsers(data);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users from Supabase</h1>
      {users.length === 0 ? (
        <p>No users found or error fetching.</p>
      ) : (
        <ul className="space-y-2">
          {users.map((u) => (
            <li key={u.id} className="p-2 bg-gray-100 rounded-md">
              <strong>{u.full_name}</strong> ({u.role}) – {u.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
