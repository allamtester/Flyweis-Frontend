import { cn } from "@/lib/utils";
import {
  BarChart3,
  Users,
  Star,
  Settings,
  History,
  Calendar,
  Bell,
  List,
  BarChart,
  DollarSign,
  Tag,
  MessageCircle,
  Package,
  Share2,
  Map,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const SidebarItem = ({ icon, label, isActive, to }) => {
  return (
    <Link to={to}>
      <div
        className={cn(
          "w-full flex justify-start items-center gap-2 border-0 px-6 py-3 text-base rounded-xl font-semibold",
          isActive
            ? "bg-[#00A3B5] text-white hover:bg-[#00A3B5]/90"
            : "text-[#199FB1] hover:bg-gray-100"
        )}
      >
        {/* {icon} */}
        {label}
      </div>
    </Link>
  );
};

export function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname.replace("/", ""); // Get the current route

  const SideBarItems = [
    { label: "Dashboard", icon: BarChart3, to: "dashboard" },
    { label: "User Management", icon: Users, to: "usermanagement" },
    { label: "Rating and Review", icon: Star, to: "ratingReview" },
    { label: "Settings", icon: Settings, to: "settings" },
    { label: "History", icon: History, to: "history" },
    { label: "All Bookings", icon: Calendar, to: "allBookings" },
    { label: "Push Notification", icon: Bell, to: "pushNotification" },
    { label: "Transaction List", icon: List, to: "transactionList" },
    { label: "Google Analytics", icon: BarChart, to: "analytics" },
    { label: "Multi-Currency", icon: DollarSign, to: "multiCurrency" },
    { label: "Category", icon: Tag, to: "category" },
    { label: "Live Chat History", icon: MessageCircle, to: "liveChatHistory" },
    { label: "Package Plan", icon: Package, to: "packagePlan" },
    { label: "Referral History", icon: Share2, to: "referralHistory" },
    { label: "Google Map", icon: Map, to: "googleMap" },
  ];

  return (
    <div className="w-[290px] bg-white p-4 flex flex-col gap-1 shadow-lg rounded-md">
      <div className="flex items-center justify-center py-4 mb-4">
        <h2 className="text-xl font-bold text-[#00A3B5]">Logo</h2>
      </div>
      <div>
        {SideBarItems.map((item) => (
          <div key={item.label}>
            <SidebarItem
              icon={<item.icon size={18} />}
              label={item.label}
              isActive={currentPath === item.to}
              to={item.to}
            />
            <div className="border-b my-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
