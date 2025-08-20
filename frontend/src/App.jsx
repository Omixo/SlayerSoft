import { Routes, Route, Link, Navigate } from "react-router-dom";
import TestPanel from "./pages/TestPanel";

function Home() {
  return <div className="p-6">Welcome to SlayerSoft 👋 — use the Test Panel to verify backend.</div>;
}

export default function App() {
  return (
    <div className="min-h-screen">
      <nav className="flex items-center gap-4 p-3 border-b">
        <Link to="/" className="font-semibold">SlayerSoft</Link>
        <Link to="/test" className="text-sm underline">Test Panel</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestPanel />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
