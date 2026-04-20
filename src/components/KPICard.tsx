import React from 'react';
import './components.css';

interface KPICardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: string;
  trendUp?: boolean;
}

export const KPICard: React.FC<KPICardProps> = ({ title, value, subtitle, icon, trend, trendUp }) => {
  return (
    <div className="card kpi-card">
      <div className="kpi-header">
        <h4 className="kpi-title">{title}</h4>
        <div className="kpi-icon-wrapper">
          {icon}
        </div>
      </div>
      <div className="kpi-body">
        <div className="kpi-value">{value}</div>
        {subtitle && <div className="kpi-subtitle">{subtitle}</div>}
        {trend && (
          <div className={`kpi-trend ${trendUp ? 'trend-up' : 'trend-down'}`}>
            {trend}
          </div>
        )}
      </div>
    </div>
  );
};
