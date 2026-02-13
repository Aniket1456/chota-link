import { Routes, Route } from "react-router-dom";
import CreateLinkPage from "./pages/CreateLinkPage";
import DashboardPage from "./pages/DashboardPage";
import ExpiredPage from "./pages/ExpiredPage";
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateLinkPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/expired" element={<ExpiredPage />} />
    </Routes>
  );
}

export default App;
