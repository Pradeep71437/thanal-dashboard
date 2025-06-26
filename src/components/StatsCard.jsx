import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatsCard = ({ title, value, change, period, trend, bgColor, iconColor, changeColor }) => {
  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown;
  
  return (
    <div className={`${bgColor} dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{title}</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{value}</p>
          <div className="flex items-center space-x-2">
            <div className={`flex items-center space-x-1 ${changeColor}`}>
              <TrendIcon className="w-3 h-3" />
              <span className="text-sm font-medium">{change}</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">{period}</span>
          </div>
        </div>
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconColor} dark:opacity-80`}>
          <div className="w-6 h-6 bg-current rounded opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;