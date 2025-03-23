import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Dashboard } from "./dashboard/dashboard";
import { Sidebar } from "./sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { LogOut, Search } from "lucide-react";
import profile from "../assets/profile.png";
import { useContext } from "react";
import { AuthContext } from "@/context/auth";


export function Home() {

    const { token, setToken, loading } = useContext(AuthContext);
    if (loading) {
        return null;
    }

    if (!token) {
        return <Navigate to="/" replace />;
    }

    const navigate = useNavigate();

    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div className="w-full h-full bg-[#eaeaeb] relative">
            <div className="absolute top-0 left-0 w-full overflow-hidden z-0">
                <svg
                    width="100%"
                    height="369"
                    viewBox="0 0 1728 369"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M796.499 306.005C366.056 404.805 77.142 368.412 -23 324.727V-10H1754V324.727C1610.13 249.65 1231.52 206.154 796.499 306.005Z"
                        fill="url(#paint0_linear_8_33)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_8_33"
                            x1="-23"
                            y1="179.5"
                            x2="1754"
                            y2="179.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.0879999" stopColor="#FF8553" />
                            <stop offset="0.448" stopColor="#E25845" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <main className="flex overflow-auto p-4 relative z-10 max-w-[1400px] w-full gap-4 mx-auto">
                <Sidebar />
                <div className="flex flex-col w-full">
                    <header className="flex justify-between items-center border-b py-4">
                        <div className="relative">
                            <div className="absolute px-4 py-2 rounded-md right-[1px] top-[1px] text-white bg-primary">
                                <Search size={18} />
                            </div>
                            <Input className="pr-8 w-[400px] text-white border-[#FFFFFF33] bg-[#FFFFFF33]" placeholder="Search..." />
                        </div>
                        <div className="flex items-center gap-4">

                            <LogOut onClick={handleLogout} />
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell-dot"><path d="M10.268 21a2 2 0 0 0 3.464 0" /><path d="M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665" /><circle cx="18" cy="8" r="3" /></svg>

                            <Avatar className="h-8 w-8">
                                <AvatarFallback>
                                    <img src={profile} alt="profile" className="h-full w-full" />
                                </AvatarFallback>
                            </Avatar>
                        </div>
                    </header>
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
