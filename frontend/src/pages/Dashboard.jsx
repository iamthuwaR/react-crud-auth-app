import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();          
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      <p>Welcome: {user?.email}</p>

      <nav>
        <Link to="/tasks">Go to Tasks</Link>
      </nav>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}