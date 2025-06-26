import React from "react";
import * as Icons from "lucide-react";

import { TrendingUp, TrendingDown } from "lucide-react";

const StatsCard = ({
  title,
  value,
  change,
  period,
  trend,
  bgColor,
  borderColor,
  iconColor,
  iconbgColor,
  icon,
  changeColor,
}) => {
  const TrendIcon = trend === "up" ? TrendingUp : TrendingDown;
  const IconComponent = Icons[icon];

  return (
    <div
      className={`${bgColor} border-b-[5px] dark:border-b-[5px]  ${borderColor} dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            {title}
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            {value}
          </p>
          <div className="flex items-center space-x-2">
            <div className={`flex items-center space-x-1 ${changeColor}`}>
              <TrendIcon className="w-3 h-3" />
              <span className="text-sm font-medium">{change}</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {period}
            </span>
          </div>
        </div>
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconbgColor} dark:opacity-80`}
        >
          <div className={`w-6 h-6 rounded  ${iconColor}`}>
            <IconComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
