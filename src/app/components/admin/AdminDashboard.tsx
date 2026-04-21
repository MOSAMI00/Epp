import { useState } from 'react';
import { Search, Bell } from 'lucide-react';
import { AdminSidebar } from './AdminSidebar';
import { AdminOverview } from './AdminOverview';
import { useNavigate } from 'react-router';

type AdminPage = 'overview' | 'users' | 'equipment' | 'rentals' | 'disputes' | 'financial' | 'reports' | 'analytics' | 'reviews' | 'audit' | 'settings';

export function AdminDashboard() {
  const navigate = useNavigate();
  const handleLogout = () => navigate('/');
  const [currentPage, setCurrentPage] = useState<AdminPage>('overview');

  const getPageTitle = () => {
    const titles: Record<AdminPage, string> = {
      overview: 'نظرة عامة',
      users: 'إدارة المستخدمين',
      equipment: 'إدارة المعدات',
      rentals: 'عمليات التأجير',
      disputes: 'إدارة النزاعات',
      financial: 'الإشراف المالي',
      reports: 'البلاغات',
      analytics: 'التقارير والإحصائيات',
      reviews: 'إدارة التقييمات',
      audit: 'سجل العمليات',
      settings: 'الإعدادات',
    };
    return titles[currentPage];
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex">
      {/* Sidebar */}
      <AdminSidebar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <div className="flex-1 lg:mr-64">
        {/* Top Bar */}
        <div className="sticky top-0 z-20 bg-white border-b border-border">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Page Title */}
              <h1 className="text-2xl font-bold">{getPageTitle()}</h1>

              {/* Right Actions */}
              <div className="flex items-center gap-4">
                {/* Search */}
                <div className="hidden md:block relative">
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="بحث..."
                    className="w-64 h-10 pr-10 pl-4 rounded-lg border border-border bg-white focus:outline-none focus:border-primary"
                  />
                </div>

                {/* Notifications */}
                <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 left-1 w-2 h-2 bg-[#E74C3C] rounded-full"></span>
                </button>

                {/* Profile */}
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span>👤</span>
                  </div>
                  <div className="hidden md:block">
                    <h4 className="font-semibold text-sm">أحمد المدير</h4>
                    <p className="text-xs text-muted-foreground">Super Admin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">
          {currentPage === 'overview' && <AdminOverview />}

          {currentPage === 'users' && (
            <div className="bg-white rounded-xl p-8 border border-border text-center">
              <h2 className="text-xl font-bold mb-2">إدارة المستخدمين</h2>
              <p className="text-muted-foreground">هذه الصفحة قيد التطوير</p>
            </div>
          )}

          {currentPage === 'equipment' && (
            <div className="bg-white rounded-xl p-8 border border-border text-center">
              <h2 className="text-xl font-bold mb-2">إدارة المعدات</h2>
              <p className="text-muted-foreground">هذه الصفحة قيد التطوير</p>
            </div>
          )}

          {currentPage === 'rentals' && (
            <div className="bg-white rounded-xl p-8 border border-border text-center">
              <h2 className="text-xl font-bold mb-2">عمليات التأجير</h2>
              <p className="text-muted-foreground">هذه الصفحة قيد التطوير</p>
            </div>
          )}

          {currentPage === 'disputes' && (
            <div className="bg-white rounded-xl p-8 border border-border text-center">
              <h2 className="text-xl font-bold mb-2">إدارة النزاعات</h2>
              <p className="text-muted-foreground">هذه الصفحة قيد التطوير</p>
            </div>
          )}

          {currentPage === 'financial' && (
            <div className="bg-white rounded-xl p-8 border border-border text-center">
              <h2 className="text-xl font-bold mb-2">الإشراف المالي</h2>
              <p className="text-muted-foreground">هذه الصفحة قيد التطوير</p>
            </div>
          )}

          {currentPage === 'reports' && (
            <div className="bg-white rounded-xl p-8 border border-border text-center">
              <h2 className="text-xl font-bold mb-2">البلاغات</h2>
              <p className="text-muted-foreground">هذه الصفحة قيد التطوير</p>
            </div>
          )}

          {currentPage === 'analytics' && (
            <div className="bg-white rounded-xl p-8 border border-border text-center">
              <h2 className="text-xl font-bold mb-2">التقارير والإحصائيات</h2>
              <p className="text-muted-foreground">هذه الصفحة قيد التطوير</p>
            </div>
          )}

          {currentPage === 'reviews' && (
            <div className="bg-white rounded-xl p-8 border border-border text-center">
              <h2 className="text-xl font-bold mb-2">إدارة التقييمات</h2>
              <p className="text-muted-foreground">هذه الصفحة قيد التطوير</p>
            </div>
          )}

          {currentPage === 'audit' && (
            <div className="bg-white rounded-xl p-8 border border-border">
              <div className="bg-[#FFF9E6] border border-[#F39C12] rounded-lg p-4 mb-6 flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <h3 className="font-bold mb-1">سجل للقراءة فقط</h3>
                  <p className="text-sm text-muted-foreground">
                    هذا السجل للقراءة فقط ولا يمكن حذفه أو تعديله. جميع العمليات مؤرشفة بشكل دائم.
                  </p>
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2 text-center">سجل العمليات (Audit Log)</h2>
              <p className="text-muted-foreground text-center">هذه الصفحة قيد التطوير</p>
            </div>
          )}

          {currentPage === 'settings' && (
            <div className="bg-white rounded-xl p-8 border border-border text-center">
              <h2 className="text-xl font-bold mb-2">الإعدادات</h2>
              <p className="text-muted-foreground">هذه الصفحة قيد التطوير</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
