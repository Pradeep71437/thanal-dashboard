import React from 'react';
import { SCHEDULE_ITEMS } from '../constants/dashboardData';

const TodaysScheduleCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Today's schedule</h3>
      
      <div className="space-y-4">
        {SCHEDULE_ITEMS.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">{item.time}</p>
            </div>
            <span className={`px-2 py-1 rounded-md text-xs font-medium ${item.statusColor}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysScheduleCard;