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
            await registerUser({ name, email, password });

            alert("User registered successfully!");
            navigate("/");

        } catch (error) {
            alert(error.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="min-h-screen flex bg-gradient-to-br from-[#f8f5ff] via-[#efe7ff] to-[#e2d4ff]">

            {/* LEFT SIDE - FORM */}
            <div className="w-full md:w-1/2 flex items-center justify-start px-40">

                <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] border border-gray-100 p-10">

                    {/* HEADER */}
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold text-gray-900">
                            Create Account
                        </h1>

                        <p className="text-gray-500 mt-2 text-sm">
                            Join and manage your tasks like a pro
                        </p>
                    </div>

                    {/* FORM */}
                    <form onSubmit={handleRegister} className="space-y-6">

                        <div>
                            <label className="text-sm text-gray-600">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full mt-2 px-4 py-3 border border-gray-200 rounded-xl
                                focus:ring-2 focus:ring-purple-400 outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mt-2 px-4 py-3 border border-gray-200 rounded-xl
                                focus:ring-2 focus:ring-purple-400 outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">Password</label>
                            <input
                                type="password"
                                placeholder="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full mt-2 px-4 py-3 border border-gray-200 rounded-xl
                                focus:ring-2 focus:ring-purple-400 outline-none transition"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600
                            text-white font-semibold shadow-md hover:shadow-xl hover:scale-[1.02]
                            transition-all duration-300"
                        >
                            Create Account
                        </button>
                    </form>

                    {/* FOOTER */}
                    <p className="text-center mt-6 text-sm text-gray-500">
                        Already have an account?{" "}
                        <span
                            onClick={() => navigate("/")}
                            className="text-purple-600 font-semibold cursor-pointer hover:underline"
                        >
                            Login
                        </span>
                    </p>
                </div>
            </div>

            <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-60 animate-pulse"></div>

            {/* RIGHT SIDE - INFO PANEL */}
            <div className="hidden md:flex w-1/2 items-center justify-center px-16 relative">

                <div className="max-w-lg text-left">

                    <h2 className="text-6xl font-bold text-gray-900 leading-tight">
                        Build your <span className="text-purple-600">Task System</span> like a PRO!!
                    </h2>

                    <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                        Manage your tasks, track progress, and stay productive with a
                        clean and modern full-stack system built for real-world use.
                    </p>

                    <div className="absolute w-72 h-72 bg-purple-300/30 rounded-full blur-3xl top-10 right-10"></div>
                </div>
            </div>
        </div>
    );
}
