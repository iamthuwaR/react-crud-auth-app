// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../services/authService";
// import { useAuth } from "../context/AuthContext";

// export default function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const { login } = useAuth();
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         try {
//             const res = await loginUser({ email, password });

//             login(res.data.user, res.data.token);

//             navigate("/dashboard");
//         } catch (error) {
//             alert(error.response?.data?.message || "Login failed");
//         }
//     };

//     return (
//         <div style={{ padding: "20px" }}>
//             <h2>Login</h2>

//             <form onSubmit={handleLogin}>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <br />

//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <br />

//                 <button type="submit">Login</button>
//             </form>

//             <p style={{ marginTop: "10px" }}>
//                 Don’t have an account?{" "}
//                 <span
//                     style={{ color: "blue", cursor: "pointer" }}
//                     onClick={() => navigate("/register")}
//                 >
//                     Register here
//                 </span>
//             </p>
//         </div>
//     );
// }

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
        <div className="min-h-screen flex bg-gradient-to-br from-[#f8f5ff] via-[#efe7ff] to-[#e2d4ff]">

            {/* LEFT SIDE - FORM */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-40">

                <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] border border-gray-100 p-10">

                    {/* HEADER */}
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold text-gray-900">
                            Welcome Back
                        </h1>

                        <p className="text-gray-500 mt-2 text-sm">
                            Login to continue managing your tasks
                        </p>
                    </div>

                    {/* FORM */}
                    <form onSubmit={handleLogin} className="space-y-6">

                        {/* EMAIL */}
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

                        {/* PASSWORD */}
                        <div>
                            <label className="text-sm text-gray-600">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full mt-2 px-4 py-3 border border-gray-200 rounded-xl
                                focus:ring-2 focus:ring-purple-400 outline-none transition"
                            />
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600
                            text-white font-semibold shadow-md hover:shadow-xl hover:scale-[1.02]
                            transition-all duration-300"
                        >
                            Login
                        </button>
                    </form>

                    {/* FOOTER */}
                    <p className="text-center mt-6 text-sm text-gray-500">
                        Don’t have an account?{" "}
                        <span
                            onClick={() => navigate("/register")}
                            className="text-purple-600 font-semibold cursor-pointer hover:underline"
                        >
                            Register here
                        </span>
                    </p>
                </div>
            </div>

            {/* DIVIDER */}
            <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-60 animate-pulse"></div>

            {/* RIGHT SIDE - INFO PANEL */}
            <div className="hidden md:flex w-1/2 items-center justify-center px-16 relative">

                <div className="max-w-lg text-left">

                    <h2 className="text-6xl font-bold text-gray-900 leading-tight">
                        Welcome back to your <span className="text-purple-600">Task System</span>
                    </h2>

                    <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                        Continue organizing your tasks, tracking progress, and boosting productivity with your full-stack workspace.
                    </p>

                    {/* DECORATIVE GLOW */}
                    <div className="absolute w-72 h-72 bg-purple-300/30 rounded-full blur-3xl top-10 right-10"></div>
                </div>
            </div>
        </div>
    );
}