import React, { useState } from "react";

export default function TestPanel() {
  const [users, setUsers] = useState([]);
  const [warnings, setWarnings] = useState([]);

  const loadUsers = async () => {
    const res = await fetch("http://localhost:4000/users");
    const data = await res.json();
    setUsers(data);
  };

  const addUser = async () => {
    const res = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test User",
        email: `test${Date.now()}@example.com`,
      }),
    });
    const data = await res.json();
    console.log("User added:", data);
    loadUsers(); // refresh list
  };

  const loadWarnings = async () => {
    const res = await fetch("http://localhost:4000/warnings");
    const data = await res.json();
    setWarnings(data);
  };

  const addWarning = async () => {
    const res = await fetch("http://localhost:4000/warnings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: 1,
        reason: "Late to work",
      }),
    });
    const data = await res.json();
    console.log("Warning added:", data);
    loadWarnings();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Backend Test Panel</h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Users</h3>
        <button
          onClick={loadUsers}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Load Users
        </button>
        <button
          onClick={addUser}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
        <pre className="bg-gray-100 p-2 mt-2 rounded">
          {JSON.stringify(users, null, 2)}
        </pre>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Warnings</h3>
        <button
          onClick={loadWarnings}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Load Warnings
        </button>
        <button
          onClick={addWarning}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Warning
        </button>
        <pre className="bg-gray-100 p-2 mt-2 rounded">
          {JSON.stringify(warnings, null, 2)}
        </pre>
      </div>
    </div>
  );
}
