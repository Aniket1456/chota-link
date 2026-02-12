import { Routes, Route } from "react-router-dom";
import CreateLinkPage from "./pages/CreateLinkPage";
import DashboardPage from "./pages/DashboardPage";
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateLinkPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
