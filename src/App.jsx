// import { useContext, useState } from "react";
// import { Toaster } from "@/components/ui/sonner";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Auth from "./pages/auth";
// import Login from "./pages/auth/login";
// import Register from "./pages/auth/register";
// import { Dashboard } from "./pages/dashboard/dashboard";
// import { Home } from "./pages/home";
// import UserManagement from "./pages/user-manage";
// import SettingsPage from "./pages/settings";
// import RatingReview from "./pages/rating-review";
// import { AuthContext, AuthProvider } from "./context/auth";

// function App() {
//   const { token, loading } = useContext(AuthContext);
//   if (loading) {
//     return null;
//   }

//   if (token) {
//     return <Navigate to="/dashboard" replace />;
//   }

//   return (
//     <>
//       <BrowserRouter>
//         <AuthProvider>
//           <Routes>
//             (<Route path="/" element={<Auth />}>
//               <Route index element={<Login />} />
//               <Route path="/register" element={<Register />} />
//             </Route>)
//             <Route path="/" element={<Home />}>
//               <Route index path="dashboard" element={<Dashboard />} />
//               <Route path="usermanagement" element={<UserManagement />} />
//               <Route path="ratingReview" element={<RatingReview />} />
//               <Route path="settings" element={<SettingsPage />} />
//               <Route path="history" element={<>history</>} />
//               <Route path="allBookings" element={<>allBookings</>} />
//               <Route path="pushNotification" element={<>pushNotification</>} />
//               <Route path="transactionList" element={<>transactionList</>} />
//               <Route path="analytics" element={<>analytics</>} />
//               <Route path="multiCurrency" element={<>multiCurrency</>} />
//               <Route path="category" element={<>category</>} />
//               <Route path="liveChatHistory" element={<>liveChatHistory</>} />
//               <Route path="packagePlan" element={<>packagePlan</>} />
//               <Route path="referralHistory" element={<>referralHistory</>} />
//               <Route path="googleMap" element={<>googleMap</>} />
//             </Route>
//           </Routes>
//         </AuthProvider>
//       </BrowserRouter>
//       <Toaster richColors />
//     </>
//   );
// }

// export default App;


import { useContext } from "react";
import { Toaster } from "@/components/ui/sonner";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Auth from "./pages/auth";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import { Dashboard } from "./pages/dashboard/dashboard";
import { Home } from "./pages/home";
import UserManagement from "./pages/user-manage";
import SettingsPage from "./pages/settings";
import RatingReview from "./pages/rating-review";
import { AuthContext, AuthProvider } from "./context/auth";

function App() {
  return (
    <AuthProvider> {/* Ensure AuthProvider wraps everything */}
      <BrowserRouter>
        <Routes>
          {/* Prevent logged-in users from accessing login */}
          <Route path="/" element={<RedirectIfAuthenticated />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute />}>
            <Route index path="dashboard" element={<Dashboard />} />
            <Route path="usermanagement" element={<UserManagement />} />
            <Route path="ratingReview" element={<RatingReview />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="history" element={<>history</>} />
            <Route path="allBookings" element={<>allBookings</>} />
            <Route path="pushNotification" element={<>pushNotification</>} />
            <Route path="transactionList" element={<>transactionList</>} />
            <Route path="analytics" element={<>analytics</>} />
            <Route path="multiCurrency" element={<>multiCurrency</>} />
            <Route path="category" element={<>category</>} />
            <Route path="liveChatHistory" element={<>liveChatHistory</>} />
            <Route path="packagePlan" element={<>packagePlan</>} />
            <Route path="referralHistory" element={<>referralHistory</>} />
            <Route path="googleMap" element={<>googleMap</>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster richColors />
    </AuthProvider>
  );
}

// Prevent access to login when already authenticated
const RedirectIfAuthenticated = () => {
  const { token } = useContext(AuthContext);
  return token ? <Navigate to="/dashboard" replace /> : <Auth />;
};

// Protect dashboard routes
const ProtectedRoute = ({ children }) => {
  const { token, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;
  return token ? <Home /> : <Navigate to="/" replace />;
};

export default App;
