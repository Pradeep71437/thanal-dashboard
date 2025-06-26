import React from 'react';
import { LEAD_STATUS_DATA } from '../constants/dashboardData';

const LeadStatusCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Lead status distribution</h3>
      
      <div className="space-y-6">
        {LEAD_STATUS_DATA.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`${item.color} h-2 rounded-full transition-all duration-300`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadStatusCard;