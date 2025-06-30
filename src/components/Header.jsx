import React from "react";
import { Search, Bell, Plus, Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/leads":
        return "Leads & Inquiries";
      case "/bookings":
        return "Bookings";
      case "/":
        return "Dashboard";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 transition-colors sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {getPageTitle()}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {currentDate}
          </p>
        </div>

        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search customers, bookings, menu items..."
            className="pl-10 pr-4 py-2 w-[550px] border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
          />
        </div>
        <div className="flex items-center space-x-4">
          {/* Search */}

          {/* Actions */}
          <button className="p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors">
            <Bell className="w-5 h-5" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-50 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Plus className="w-4 h-4" />
            <span className="font-medium">Add booking</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
