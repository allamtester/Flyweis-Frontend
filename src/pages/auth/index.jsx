import { Outlet } from "react-router-dom";
import authLogo from "../../assets/auth-logo.png"


export default function Auth() {
  return (
    <div className="flex bg-cover bg-center h-screen bg-[url(./assets/auth-bg.jpeg)] ">
      <div className="m-auto flex h-[600px] w-[1000px] overflow-hidden rounded-xl bg-[#A5A5A538] backdrop-blur-lg shadow-xl">

        {/* Left side with logo */}
        <div className="relative flex w-1/2 items-center justify-center ">
          <img src={authLogo} alt="auth-logo" />
        </div>

        {/* Vertical divider */}
        <div className="relative w-px bg-red-500 h-11/12 top-6">
          <div className="absolute top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-red-500"></div>
          <div className="absolute bottom-0 h-2 w-2 -translate-x-1/2 rounded-full bg-red-500"></div>
        </div>

        {/* Right side with login form */}
        <div className="flex w-1/2 items-center justify-center  p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
