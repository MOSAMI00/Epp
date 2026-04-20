import { Home, Users, Wrench, ClipboardList, AlertTriangle, DollarSign, Flag, BarChart3, Star, FileText, Settings, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

type AdminPage = 'overview' | 'users' | 'equipment' | 'rentals' | 'disputes' | 'financial' | 'reports' | 'analytics' | 'reviews' | 'audit' | 'settings';

interface AdminSidebarProps {
  currentPage: AdminPage;
  onPageChange: (page: AdminPage) => void;
  onLogout: () => void;
}

const menuItems = [
  { id: 'overview', icon: Home, label: 'الرئيسية' },
  { id: 'users', icon: Users, label: 'المستخدمون' },
  { id: 'equipment', icon: Wrench, label: 'المعدات' },
  { id: 'rentals', icon: ClipboardList, label: 'عمليات التأجير' },
  { id: 'disputes', icon: AlertTriangle, label: 'النزاعات' },
  { id: 'financial', icon: DollarSign, label: 'الإشراف المالي' },
  { id: 'reports', icon: Flag, label: 'البلاغات' },
  { id: 'analytics', icon: BarChart3, label: 'التقارير' },
  { id: 'reviews', icon: Star, label: 'التقييمات' },
  { id: 'audit', icon: FileText, label: 'سجل العمليات' },
  { id: 'settings', icon: Settings, label: 'الإعدادات' },
];

export function AdminSidebar({ currentPage, onPageChange, onLogout }: AdminSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const SidebarContent = () => (
    <div className="h-full flex flex-col bg-[#1A1A2E] text-white">
      {/* Logo & Profile */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-xl">م</span>
          </div>
          <span className="font-bold text-lg">Admin Panel</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
            <span>👤</span>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-sm">أحمد المدير</h4>
            <span className="text-xs bg-primary px-2 py-0.5 rounded-full">Super Admin</span>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-4 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                onPageChange(item.id as AdminPage);
                setMobileOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-6 py-3 transition-colors relative ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              {isActive && <div className="absolute right-0 top-0 bottom-0 w-1 bg-white" />}
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-[#E74C3C] hover:bg-[#E74C3C]/10 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>تسجيل الخروج</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed right-0 top-0 bottom-0 w-64 z-30">
        <SidebarContent />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 right-4 z-50 w-10 h-10 bg-[#1A1A2E] text-white rounded-lg flex items-center justify-center"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="lg:hidden fixed right-0 top-0 bottom-0 w-72 z-50">
            <SidebarContent />
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 left-4 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </>
      )}
    </>
  );
}
