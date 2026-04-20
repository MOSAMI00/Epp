import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  Home, 
  ClipboardList, 
  FileText, 
  Package, 
  Bell, 
  Star, 
  ShieldCheck, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import './DashboardLayout.css';

const navItems = [
  { path: '/', label: 'لوحة التحكم', icon: Home },
  { path: '/rentals', label: 'طلباتي', icon: ClipboardList, badge: 3 },
  { path: '/contracts', label: 'عقودي', icon: FileText },
  { path: '/logistics', label: 'التسليم والإرجاع', icon: Package },
  { path: '/notifications', label: 'الإشعارات', icon: Bell, badge: 2, badgeColor: 'red' },
  { path: '/reviews', label: 'تقييماتي', icon: Star, badge: 1, badgeColor: 'orange' },
  { path: '/kyc', label: 'التحقق من الهوية (KYC)', icon: ShieldCheck, badge: '!', badgeColor: 'orange' },
  { path: '/settings', label: 'إعدادات الحساب', icon: Settings },
];

export const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">منصة التأجير</div>
          <button className="mobile-close-btn" onClick={toggleMobileMenu}>
            <X size={24} />
          </button>
        </div>
        
        <div className="user-profile-summary">
          <img src="https://ui-avatars.com/api/?name=المستأجر&background=2D5A27&color=fff" alt="User" className="avatar" />
          <div className="user-info">
            <h4>اسم المستأجر</h4>
            <span className="user-status">📍 صنعاء | مستأجر موثق ✅</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <item.icon size={20} />
              <span className="nav-label">{item.label}</span>
              {item.badge && (
                <span className={`nav-badge badge-${item.badgeColor || 'green'}`}>
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
          
          <div className="nav-divider"></div>
          
          <button className="nav-item logout-btn">
            <LogOut size={20} color="#E74C3C" />
            <span className="nav-label text-danger">تسجيل الخروج</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* TopBar */}
        <header className="topbar">
          <div className="topbar-left d-flex align-items-center gap-3">
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              <Menu size={24} />
            </button>
            <h3 className="page-title">لوحة التحكم</h3>
          </div>
          
          <div className="topbar-right d-flex align-items-center gap-3">
            <div className="notification-bell">
              <Bell size={24} />
              <span className="bell-badge">2</span>
            </div>
            <div className="user-dropdown">
              <img src="https://ui-avatars.com/api/?name=المستأجر&background=2D5A27&color=fff" alt="User" className="topbar-avatar" />
              <span className="topbar-name">اسم المستأجر ▼</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content">
          <Outlet />
        </main>
      </div>
      
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={toggleMobileMenu}></div>
      )}
    </div>
  );
};
