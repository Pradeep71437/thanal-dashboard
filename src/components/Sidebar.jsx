import React from "react";
import * as Icons from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NAVIGATION_ITEMS } from "../constants/dashboardData";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white dark:bg-gray-900 h-screen fixed left-0 top-0 border-r border-gray-200 dark:border-gray-700 transition-colors">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center justify-center space-x-2 px-4">
          <img
            src="https://www.thanalphilly.com/assets/img/logo/logo.png"
            className="w-full h-12 object-contain"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        <div className="px-3">
          {NAVIGATION_ITEMS.map((item) => {
            const IconComponent = Icons[item.icon];
            const isActive = location.pathname === item.path;
            return (
              <Link to={item.path} key={item.id}>
                <div
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg mb-1 cursor-pointer transition-colors ${
                    isActive
                      ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-900 dark:text-yellow-300 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
