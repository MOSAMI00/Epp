import { 
  ClipboardList, 
  Wrench, 
  Wallet, 
  Star, 
  ShieldAlert, 
  Clock, 
  CheckCircle2,
  ChevronLeft
} from 'lucide-react';
import { KPICard } from '../components/KPICard';
import { StatusBadge, type StatusType } from '../components/StatusBadge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Link } from 'react-router-dom';

const spendingData = [
  { name: 'أكتوبر', amount: 15000 },
  { name: 'نوفمبر', amount: 25000 },
  { name: 'ديسمبر', amount: 10000 },
  { name: 'يناير', amount: 45000 },
  { name: 'فبراير', amount: 87500 },
  { name: 'مارس', amount: 30000 },
];

const distributionData = [
  { name: 'مكتملة', value: 9, color: '#27AE60' },
  { name: 'قيد الاستخدام', value: 2, color: '#E67E22' },
  { name: 'مؤكدة', value: 1, color: '#3498DB' },
];

const recentRentals = [
  { id: '#OP-1047', equipment: 'مولد كهرباء 10KVA', owner: 'أحمد المؤجر', date: '01 فبراير - 04 فبراير', total: '45,000 ر.ي', status: 'In Use' as StatusType },
  { id: '#OP-1048', equipment: 'خلاطة خرسانة', owner: 'محمد علي', date: '15 يناير - 18 يناير', total: '42,000 ر.ي', status: 'Completed' as StatusType },
  { id: '#OP-1049', equipment: 'حفار بوكلين', owner: 'شركة المعدات', date: '10 مارس - 12 مارس', total: '120,000 ر.ي', status: 'Pending' as StatusType },
];

const Overview = () => {
  const isKycVerified = false;

  return (
    <div className="overview-page">
      {!isKycVerified && (
        <div className="alert alert-warning">
          <div className="alert-content">
            <span className="alert-icon">⚠️</span>
            <div>
              <h4 className="fw-bold" style={{ marginBottom: '0.25rem' }}>لم تكتمل عملية التحقق من هويتك بعد</h4>
              <p className="text-muted" style={{ fontSize: '0.875rem' }}>ارفع صورة بطاقتك الشخصية لإتمام حجزك الأول</p>
            </div>
          </div>
          <Link to="/kyc" className="btn btn-primary" style={{ backgroundColor: '#F39C12', color: 'white' }}>
            التحقق الآن <ChevronLeft size={16} />
          </Link>
        </div>
      )}

      {/* Row 1 KPIs */}
      <div className="grid" style={{ marginBottom: '1.5rem' }}>
        <div className="col-3 col-lg-6 col-md-12">
          <KPICard 
            title="طلباتي" 
            value="12 طلب" 
            subtitle="3 نشطة | 9 مكتملة" 
            icon={<ClipboardList size={24} />} 
          />
        </div>
        <div className="col-3 col-lg-6 col-md-12">
          <KPICard 
            title="الجارية" 
            value="2 قيد الاستخدام" 
            subtitle="● In Use" 
            icon={<Wrench size={24} />} 
          />
        </div>
        <div className="col-3 col-lg-6 col-md-12">
          <KPICard 
            title="إجمالي" 
            value="87,500 ر.ي" 
            subtitle="إجمالي ما دفعته" 
            icon={<Wallet size={24} />} 
          />
        </div>
        <div className="col-3 col-lg-6 col-md-12">
          <KPICard 
            title="تقييمي" 
            value="4.7 / 5" 
            subtitle="12 تقييم" 
            icon={<Star size={24} />} 
          />
        </div>
      </div>

      {/* Row 2 KPIs */}
      <div className="grid" style={{ marginBottom: '2rem' }}>
        <div className="col-4 col-md-12">
          <KPICard 
            title="Escrow المحتجز" 
            value="15,000 ر.ي" 
            subtitle="(تأمين 2 عمليات)" 
            icon={<ShieldAlert size={24} color="#F39C12" />} 
          />
        </div>
        <div className="col-4 col-md-12">
          <KPICard 
            title="بانتظار التأكيد" 
            value="1 طلب" 
            subtitle="قيد مراجعة المؤجر" 
            icon={<Clock size={24} color="#3498DB" />} 
          />
        </div>
        <div className="col-4 col-md-12">
          <KPICard 
            title="مكتملة هذا الشهر" 
            value="5 عمليات" 
            trend="▲ +2 عن الشهر الماضي"
            trendUp={true}
            icon={<CheckCircle2 size={24} color="#27AE60" />} 
          />
        </div>
      </div>

      {/* Charts & Tables */}
      <div className="grid">
        <div className="col-8 col-lg-12">
          <div className="card" style={{ height: '100%' }}>
            <div className="d-flex justify-content-between align-items-center" style={{ marginBottom: '1.5rem' }}>
              <h4 className="fw-bold">إنفاقي — آخر 6 أشهر</h4>
              <select className="btn btn-outline" style={{ padding: '0.25rem 0.5rem' }}>
                <option>آخر 6 أشهر</option>
                <option>سنة</option>
              </select>
            </div>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={spendingData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Bar dataKey="amount" fill="#2D5A27" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="col-4 col-lg-12">
          <div className="card" style={{ height: '100%' }}>
            <h4 className="fw-bold" style={{ marginBottom: '1.5rem' }}>توزيع طلباتي</h4>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="d-flex justify-content-between" style={{ marginTop: '1rem' }}>
              {distributionData.map((item) => (
                <div key={item.name} className="d-flex align-items-center gap-2">
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: item.color }}></div>
                  <span style={{ fontSize: '0.875rem' }}>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card">
            <div className="d-flex justify-content-between align-items-center" style={{ marginBottom: '1.5rem' }}>
              <h4 className="fw-bold">آخر طلباتي</h4>
              <Link to="/rentals" className="btn btn-outline">عرض الكل <ChevronLeft size={16} /></Link>
            </div>
            <div className="table-responsive">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>رقم الطلب</th>
                    <th>المعدة</th>
                    <th>المؤجر</th>
                    <th>من-إلى</th>
                    <th>الإجمالي</th>
                    <th>الحالة</th>
                    <th>الإجراء</th>
                  </tr>
                </thead>
                <tbody>
                  {recentRentals.map((rental) => (
                    <tr key={rental.id}>
                      <td className="fw-bold">{rental.id}</td>
                      <td>{rental.equipment}</td>
                      <td>{rental.owner}</td>
                      <td>{rental.date}</td>
                      <td>{rental.total}</td>
                      <td><StatusBadge status={rental.status} /></td>
                      <td>
                        {rental.status === 'Confirmed' ? (
                          <button className="btn btn-primary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>دفع الآن</button>
                        ) : (
                          <Link to="/rentals" className="text-muted">عرض التفاصيل</Link>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
