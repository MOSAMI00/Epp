import React from 'react';
import './components.css';

export type StatusType = 'Pending' | 'Confirmed' | 'In Use' | 'Completed' | 'Cancelled' | 'Disputed';

const statusMap: Record<StatusType, { label: string, colorClass: string }> = {
  'Pending': { label: '⏳ قيد الانتظار', colorClass: 'status-pending' },
  'Confirmed': { label: '✅ مؤكد', colorClass: 'status-confirmed' },
  'In Use': { label: '🔧 قيد الاستخدام', colorClass: 'status-in-use' },
  'Completed': { label: '🎉 مكتمل', colorClass: 'status-completed' },
  'Cancelled': { label: '❌ ملغي', colorClass: 'status-cancelled' },
  'Disputed': { label: '⚠️ متنازع عليه', colorClass: 'status-disputed' },
};

export const StatusBadge: React.FC<{ status: StatusType }> = ({ status }) => {
  const { label, colorClass } = statusMap[status];
  return (
    <span className={`status-badge ${colorClass}`}>
      {label}
    </span>
  );
};
