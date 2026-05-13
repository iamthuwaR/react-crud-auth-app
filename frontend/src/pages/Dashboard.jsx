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
        <div className="min-h-screen bg-gradient-to-br from-[#f8f5ff] via-[#efe7ff] to-[#e2d4ff]">

            {/* TOP NAVBAR */}
            <div className="w-full bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm px-10 py-5 flex items-center justify-between">

                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Task<span className="text-purple-600">PRO</span>
                    </h1>

                    <p className="text-sm text-gray-500">
                        Productivity Dashboard
                    </p>
                </div>

                {/* USER SECTION */}
                <div className="flex items-center gap-5">

                    <div className="text-right">
                        <p className="text-sm text-gray-500">
                            Welcome back
                        </p>

                        <h3 className="font-semibold text-gray-800">
                            {user?.name}
                        </h3>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
                    >
                        Logout
                    </button>
                </div>
            </div>

            <div className="px-10 py-12">

                <div className="relative overflow-hidden bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-purple-100 p-10">

                    <div className="absolute w-72 h-72 bg-purple-300/20 rounded-full blur-3xl top-[-50px] right-[-50px]"></div>

                    <div className="relative z-10">

                        <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                            Welcome to your{" "}
                            <span className="text-purple-600">
                                Dashboard
                            </span>
                        </h2>

                        <p className="mt-5 text-lg text-gray-600 max-w-2xl leading-relaxed">
                            Manage your workflow, organize daily tasks, and
                            boost productivity with your modern full-stack
                            task management system.
                        </p>

                        {/* ACTION BUTTONS */}
                        <div className="mt-8 flex gap-4">

                            <Link
                                to="/tasks"
                                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
                            >
                                Open Tasks
                            </Link>

                            <button
                                className="px-6 py-3 rounded-xl border border-purple-200 bg-white text-purple-700 font-semibold hover:bg-purple-50 transition-all duration-300"
                            >
                                Explore Features
                            </button>
                        </div>
                    </div>
                </div>

                {/* STATS SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

                    <div className="bg-white rounded-2xl p-6 shadow-md border border-purple-100">
                        <h3 className="text-gray-500 text-sm">
                            Productivity
                        </h3>

                        <p className="mt-3 text-3xl font-bold text-gray-900">
                            92%
                        </p>

                        <p className="mt-2 text-sm text-green-600">
                            Performance increasing
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-md border border-purple-100">
                        <h3 className="text-gray-500 text-sm">
                            Active Tasks
                        </h3>

                        <p className="mt-3 text-3xl font-bold text-gray-900">
                            18
                        </p>

                        <p className="mt-2 text-sm text-purple-600">
                            Tasks currently running
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-md border border-purple-100">
                        <h3 className="text-gray-500 text-sm">
                            System Status
                        </h3>

                        <p className="mt-3 text-3xl font-bold text-gray-900">
                            Online
                        </p>

                        <p className="mt-2 text-sm text-green-600">
                            Everything working smoothly
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}