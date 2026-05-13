import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const res = await registerUser({
                name,
                email,
                password,
            });

            console.log("REGISTER SUCCESS:", res.data);

            alert("User registered successfully!");

            // redirect to login page
            navigate("/");

        } catch (error) {
            console.log("REGISTER ERROR:", error.response?.data || error.message);

            alert(
                error.response?.data?.message ||
                "Registration failed"
            );
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Register</h2>

            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />

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

                <button type="submit">Register</button>
            </form>

            <p style={{ marginTop: "10px" }}>
                Already have an account?{" "}
                <span
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => navigate("/")}
                >
                    Login here
                </span>
            </p>
        </div>
    );
}