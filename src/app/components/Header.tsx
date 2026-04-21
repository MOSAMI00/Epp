import { Search, Bell, MapPin, Menu, X, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationCount] = useState(3);
  const navigate = useNavigate();

  return (
    <>
      {/* Desktop & Tablet Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        {/* Main Header Bar */}
        <div className="hidden md:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-[72px]">
              {/* Right: Logo & Name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-xl">م</span>
                </div>
                <span className="font-bold text-lg text-primary">منصة تأجير المعدات</span>
              </div>

              {/* Center: Search */}
              <div className="flex-1 max-w-xl mx-8">
                <div className="relative">
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="ابحث عن معدة للإيجار في اليمن..."
                    className="w-full h-12 pr-12 pl-4 rounded-lg border border-border bg-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Left: Location, Notifications, Login, Add */}
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-3 h-10 rounded-lg hover:bg-muted transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">المحافظة</span>
                </button>

                <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
                  <Bell className="w-5 h-5" />
                  {notificationCount > 0 && (
                    <span className="absolute top-1 left-1 w-5 h-5 bg-destructive text-white text-xs rounded-full flex items-center justify-center">
                      {notificationCount}
                    </span>
                  )}
                </button>

                <Link to="/cart" className="relative p-2 rounded-lg hover:bg-muted transition-colors">
                  <ShoppingCart className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
                  <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-white">
                    1
                  </span>
                </Link>

                <Link
                  to="/login"
                  className="px-4 h-10 rounded-lg hover:bg-muted transition-colors flex items-center justify-center"
                >
                  تسجيل الدخول
                </Link>

                <Link
                  to="/register"
                  className="px-6 h-12 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
                >
                  أضف معدتك
                </Link>

                <Link
                  to="/admin"
                  className="px-4 h-10 border border-muted-foreground rounded-lg hover:bg-muted transition-colors text-sm flex items-center justify-center"
                >
                  🛡️ Admin
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden">
          {/* Top Row */}
          <div className="flex items-center justify-between h-14 px-4 border-b border-border">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold">م</span>
              </div>
              <span className="font-bold text-primary">منصة تأجير المعدات</span>
            </div>

            <div className="flex items-center gap-2">
              <button className="relative p-2">
                <Bell className="w-5 h-5" />
                {notificationCount > 0 && (
                  <span className="absolute top-0 left-0 w-4 h-4 bg-destructive text-white text-[10px] rounded-full flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </button>
              <Link to="/cart" className="relative p-2">
                <ShoppingCart className="w-5 h-5 text-foreground" />
                <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-white">
                  1
                </span>
              </Link>
              <button className="p-2">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-sm">👤</span>
                </div>
              </button>
            </div>
          </div>

          {/* Search Row */}
          <div className="p-3 border-b border-border">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="ابحث عن معدة في اليمن..."
                className="w-full h-11 pr-11 pl-3 rounded-lg border border-border bg-white focus:outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[112px] bg-black/50 z-40" onClick={() => setMobileMenuOpen(false)}>
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-lg p-4" onClick={e => e.stopPropagation()}>
              <nav className="flex flex-col gap-2">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-lg hover:bg-muted">الرئيسية</Link>
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-lg hover:bg-muted">تصفح المعدات</Link>
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-lg hover:bg-muted">كيف تعمل المنصة</Link>
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-lg hover:bg-muted">من نحن</Link>
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-lg hover:bg-muted">مركز المساعدة</Link>
                <hr className="my-2" />
                <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="p-3 text-right rounded-lg bg-muted block">تسجيل الدخول</Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="p-3 text-right rounded-lg bg-primary text-white block">أضف معدتك</Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Category Strip - Sticky */}
      <div className="sticky top-[72px] md:top-[72px] z-40 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {[
              'الكل',
              'مولدات كهرباء',
              'بناء وأعمال',
              'زراعة',
              'تصوير',
              'فعاليات',
              'رياضة',
              'طبي',
              'أخرى'
            ].map((category, index) => (
              <button
                key={category}
                className={`px-4 h-10 rounded-full whitespace-nowrap transition-colors ${
                  index === 0
                    ? 'bg-primary text-white'
                    : 'bg-white text-muted-foreground border border-border hover:border-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
