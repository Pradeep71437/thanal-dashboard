import React from "react";
import * as Icons from "lucide-react";
import { NAVIGATION_ITEMS } from "../constants/dashboardData";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white dark:bg-gray-900 h-screen fixed left-0 top-0 border-r border-gray-200 dark:border-gray-700 transition-colors">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center justify-center space-x-2 px-5">
          {/* <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
            <Icons.Flame className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl text-gray-900 dark:text-white">THANAI</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">CATERING COMPANY</span> */}
          <img
            src="https://www.thanalphilly.com/assets/img/logo/logo.png"
            clasName="w-10"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        <div className="px-3">
          {NAVIGATION_ITEMS.map((item) => {
            const IconComponent = Icons[item.icon];
            return (
              <div
                key={item.id}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg mb-1 cursor-pointer transition-colors ${
                  item.active
                    ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-900 dark:text-yellow-300 font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
