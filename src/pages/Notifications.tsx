import { useState } from 'react';
import { Tabs } from '../components/Tabs';
import { Check, CheckCircle2, CreditCard, Package, Scale, DollarSign, Trash2 } from 'lucide-react';

const TABS = [
  { id: 'All', label: 'الكل (9)' },
  { id: 'Unread', label: 'غير مقروءة (3)' },
  { id: 'Orders', label: 'طلبات' },
  { id: 'Payments', label: 'دفع' },
  { id: 'Delivery', label: 'تسليم' }
];

const NOTIFICATIONS = [
  {
    id: 1,
    type: 'order_confirmed',
    icon: <CheckCircle2 size={24} color="#27AE60" />,
    title: 'تم تأكيد طلب حجزك!',
    message: 'أحمد المؤجر قبل طلبك لـ [مولد 10KVA]. ادفع الآن لإتمام الحجز.',
    action: 'ادفع الآن ←',
    time: 'منذ 5 دقائق',
    unread: true,
    borderColor: '#3498DB',
    bgColor: '#F0F7FF'
  },
  {
    id: 2,
    type: 'payment_reminder',
    icon: <CreditCard size={24} color="#F39C12" />,
    title: 'تذكير بالدفع',
    message: 'عليك إتمام الدفع للطلب #OP-1047 خلال ساعتين وإلا سيتم إلغاء الحجز تلقائياً.',
    action: 'انتقل للدفع',
    time: 'منذ ساعتين',
    unread: true,
    borderColor: '#F39C12',
    bgColor: '#FFF9E6'
  },
  {
    id: 3,
    type: 'delivery_reminder',
    icon: <Package size={24} color="#3498DB" />,
    title: 'موعد استلام المعدة اليوم',
    message: 'تذكير بموعد استلام "حفار بوكلين" الساعة 03:00 م في صنعاء - السبعين.',
    time: 'اليوم، 09:00 ص',
    unread: true,
    borderColor: '#3498DB',
    bgColor: '#F0F7FF'
  },
  {
    id: 4,
    type: 'escrow_release',
    icon: <DollarSign size={24} color="#27AE60" />,
    title: 'تم استرداد التأمين',
    message: 'تم إرجاع 50,000 ر.ي (تأمين مولد 10KVA) إلى محفظتك بنجاح.',
    time: 'أمس، 05:30 م',
    unread: false,
    borderColor: 'transparent',
    bgColor: '#FFFFFF'
  },
  {
    id: 5,
    type: 'dispute_result',
    icon: <Scale size={24} color="#8E44AD" />,
    title: 'نتيجة النزاع',
    message: 'تم البت في النزاع حول "خلاطة خرسانة". قررت الإدارة خصم 5,000 ر.ي فقط من التأمين بدلاً من 15,000 ر.ي.',
    time: '01 فبراير 2026',
    unread: false,
    borderColor: 'transparent',
    bgColor: '#FFFFFF'
  }
];

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="notifications-page">
      <div className="d-flex justify-content-between align-items-center" style={{ marginBottom: '1.5rem' }}>
        <h3 className="fw-bold">الإشعارات</h3>
        <div className="d-flex gap-2">
          <button className="btn btn-outline" style={{ fontSize: '0.875rem' }}><Check size={16} /> تحديد الكل كمقروء</button>
          <button className="btn btn-outline text-danger" style={{ fontSize: '0.875rem', borderColor: '#E74C3C' }}><Trash2 size={16} color="#E74C3C" /> مسح الكل</button>
        </div>
      </div>

      <Tabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />

      <div className="d-flex flex-column gap-3">
        {NOTIFICATIONS.map(note => (
          <div key={note.id} className="card d-flex gap-3 align-items-start" style={{ 
            backgroundColor: note.bgColor, 
            borderRight: `4px solid ${note.borderColor}`,
            padding: '1.5rem',
            position: 'relative'
          }}>
            {note.unread && (
              <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', width: '8px', height: '8px', backgroundColor: '#3498DB', borderRadius: '50%' }}></div>
            )}
            
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              {note.icon}
            </div>
            
            <div style={{ flex: 1 }}>
              <h5 className="fw-bold" style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{note.title}</h5>
              <p className="text-muted" style={{ marginBottom: '0.75rem', lineHeight: '1.5' }}>{note.message}</p>
              
              {note.action && (
                <button className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  {note.action}
                </button>
              )}
              
              <div className="text-muted" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                🕐 {note.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
