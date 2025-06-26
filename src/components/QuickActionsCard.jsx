import React from 'react';
import * as Icons from 'lucide-react';
import { QUICK_ACTIONS } from '../constants/dashboardData';

const QuickActionsCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Actions</h3>
      
      <div className="space-y-4">
        {QUICK_ACTIONS.map((action) => {
          const IconComponent = Icons[action.icon];
          return (
            <div key={action.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
              <div className={`w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center ${action.iconColor}`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">{action.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">{action.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActionsCard;