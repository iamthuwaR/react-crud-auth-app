import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await loginUser({ email, password });

            login(res.data.user, res.data.token);

            navigate("/dashboard");
        } catch (error) {
            alert(error.response?.data?.message || "Login failed");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />

                <button type="submit">Login</button>
            </form>

            <p style={{ marginTop: "10px" }}>
                Don’t have an account?{" "}
                <span
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => navigate("/register")}
                >
                    Register here
                </span>
            </p>
        </div>
    );
}