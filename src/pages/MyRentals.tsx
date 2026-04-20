import { useState } from 'react';
import { Search, Filter, Eye, FileText, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StatusBadge, type StatusType } from '../components/StatusBadge';
import { Tabs } from '../components/Tabs';
import '../components/Tabs.css';

const MOCK_RENTALS = [
  {
    id: '#OP-1047',
    equipment: 'مولد كهرباء 10KVA',
    owner: 'أحمد المؤجر',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=100',
    date: '01 فبراير → إلى: 04 فبراير',
    duration: '3 أيام',
    location: 'صنعاء - الوحدة',
    rentAmount: '45,000 ر.ي',
    escrowAmount: '50,000 ر.ي',
    status: 'In Use' as StatusType,
  },
  {
    id: '#OP-1048',
    equipment: 'خلاطة خرسانة',
    owner: 'محمد علي',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1541888086225-ee952a1ba763?auto=format&fit=crop&q=80&w=100',
    date: '15 يناير → إلى: 18 يناير',
    duration: '3 أيام',
    location: 'صنعاء - التحرير',
    rentAmount: '42,000 ر.ي',
    escrowAmount: '40,000 ر.ي',
    status: 'Completed' as StatusType,
  },
  {
    id: '#OP-1049',
    equipment: 'حفار بوكلين',
    owner: 'شركة المعدات',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1579541592065-9a8449c25621?auto=format&fit=crop&q=80&w=100',
    date: '10 مارس → إلى: 12 مارس',
    duration: '2 أيام',
    location: 'صنعاء - السبعين',
    rentAmount: '120,000 ر.ي',
    escrowAmount: '200,000 ر.ي',
    status: 'Pending' as StatusType,
  },
  {
    id: '#OP-1050',
    equipment: 'سقالات معدنية',
    owner: 'عبدالله سعيد',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=100',
    date: '05 مارس → إلى: 20 مارس',
    duration: '15 أيام',
    location: 'صنعاء - الحصبة',
    rentAmount: '30,000 ر.ي',
    escrowAmount: '10,000 ر.ي',
    status: 'Confirmed' as StatusType,
  }
];

const TABS = [
  { id: 'All', label: 'الكل' },
  { id: 'Pending', label: '⏳ Pending (1)' },
  { id: 'Confirmed', label: '✅ Confirmed' },
  { id: 'In Use', label: '🔧 In Use' },
  { id: 'Completed', label: '🎉 Completed' },
  { id: 'Cancelled', label: '❌ Cancelled' },
  { id: 'Disputed', label: '⚠️ Disputed' },
];

const MyRentals = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredRentals = MOCK_RENTALS.filter(rental => 
    activeTab === 'All' || rental.status === activeTab
  );

  return (
    <div className="rentals-page">
      <div className="d-flex justify-content-between align-items-center" style={{ marginBottom: '1.5rem' }}>
        <h3 className="fw-bold">طلباتي (12 طلب)</h3>
        <div className="d-flex gap-2">
          <button className="btn btn-outline"><Search size={16} /> بحث</button>
          <button className="btn btn-outline"><Filter size={16} /> فلتر</button>
        </div>
      </div>

      <Tabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />

      <div className="grid">
        {filteredRentals.map(rental => (
          <div key={rental.id} className="col-12">
            <div className={`card ${rental.status === 'Cancelled' ? 'opacity-60' : ''} ${rental.status === 'Disputed' ? 'border-danger' : ''}`}>
              <div className="d-flex align-items-start justify-content-between" style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
                <div className="d-flex gap-3">
                  <img src={rental.image} alt={rental.equipment} style={{ width: '72px', height: '72px', borderRadius: '8px', objectFit: 'cover' }} />
                  <div>
                    <h4 className="fw-bold" style={{ marginBottom: '0.25rem' }}>{rental.equipment}</h4>
                    <div className="text-muted" style={{ fontSize: '0.875rem' }}>
                      👤 {rental.owner} | ⭐ {rental.rating} <span style={{ margin: '0 0.5rem' }}>•</span> {rental.id}
                    </div>
                  </div>
                </div>
                <StatusBadge status={rental.status} />
              </div>

              <div className="grid" style={{ padding: '1rem 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="col-4 col-md-12">
                  <div className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>📅 من: {rental.date}</div>
                  <div className="text-muted" style={{ fontSize: '0.875rem' }}>⏱️ {rental.duration}</div>
                </div>
                <div className="col-4 col-md-12">
                  <div className="text-muted" style={{ fontSize: '0.875rem' }}>📍 {rental.location}</div>
                </div>
                <div className="col-4 col-md-12">
                  <div className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>💰 إيجار: {rental.rentAmount}</div>
                  <div className="text-muted" style={{ fontSize: '0.875rem' }}>🛡️ تأمين محتجز: {rental.escrowAmount}</div>
                </div>
              </div>

              <div style={{ padding: '1rem 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="text-muted" style={{ fontSize: '0.875rem' }}>
                  Timeline مختصر: ✅ حجز → ✅ تأكيد → {['In Use', 'Completed'].includes(rental.status) ? '✅ دفع' : '💳 دفع'} → {rental.status === 'Completed' ? '✅ إرجاع' : '🔧 استخدام'}
                </div>
              </div>

              <div className="d-flex gap-3 align-items-center" style={{ paddingTop: '1rem' }}>
                <Link to={`/rentals/${rental.id.replace('#', '')}`} className="btn btn-outline" style={{ fontSize: '0.875rem' }}><Eye size={16} /> عرض التفاصيل</Link>
                {['Confirmed', 'In Use', 'Completed'].includes(rental.status) && (
                  <button className="btn btn-outline" style={{ fontSize: '0.875rem' }}><FileText size={16} /> عرض العقد</button>
                )}
                {['In Use', 'Completed'].includes(rental.status) && (
                  <button className="btn btn-outline text-danger" style={{ fontSize: '0.875rem', borderColor: '#E74C3C' }}><AlertTriangle size={16} color="#E74C3C" /> تقرير مشكلة</button>
                )}
                
                <div style={{ marginRight: 'auto' }}>
                  {rental.status === 'Pending' && <button className="btn text-danger" style={{ backgroundColor: '#FDEDEC' }}>إلغاء الطلب</button>}
                  {rental.status === 'Confirmed' && <button className="btn btn-primary">ادفع الآن</button>}
                  {rental.status === 'Completed' && <button className="btn" style={{ backgroundColor: '#F39C12', color: 'white' }}>قيّم التجربة ⭐</button>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRentals;
