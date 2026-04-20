
import { ChevronRight, Download, FileText, AlertTriangle, Calendar, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StatusBadge } from '../components/StatusBadge';

const RentalDetails = () => {
  return (
    <div className="rental-details-page">
      <Link to="/rentals" className="btn btn-outline" style={{ marginBottom: '1.5rem', display: 'inline-flex', padding: '0.5rem' }}>
        <ChevronRight size={20} /> العودة للطلبات
      </Link>

      <div className="grid">
        <div className="col-8 col-lg-12">
          {/* Section 1 - Order Info */}
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <div className="d-flex justify-content-between align-items-center" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <div>
                <h4 className="fw-bold">طلب رقم: #OP-2026-1047</h4>
                <div className="text-muted" style={{ fontSize: '0.875rem' }}>تاريخ الإنشاء: 31 يناير 2026</div>
              </div>
              <StatusBadge status="In Use" />
            </div>

            <div className="d-flex gap-4">
              <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=200" alt="Equipment" style={{ width: '120px', height: '90px', borderRadius: '8px', objectFit: 'cover' }} />
              <div>
                <h4 className="fw-bold" style={{ marginBottom: '0.25rem' }}>مولد كهرباء 10KVA</h4>
                <div className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>🏷️ فئة: مولدات كهرباء</div>
                <div className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>👤 أحمد المؤجر ⭐ 4.8</div>
                <div className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}><Phone size={14} style={{display:'inline'}}/> +967 77 XXX XXXX</div>
                <div className="text-muted" style={{ fontSize: '0.875rem' }}><MapPin size={14} style={{display:'inline'}}/> صنعاء - الوحدة، شارع ...</div>
              </div>
            </div>
          </div>

          {/* Section 2 - Period Details */}
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h4 className="fw-bold" style={{ marginBottom: '1rem' }}>تفاصيل الفترة والاستلام</h4>
            <div className="grid">
              <div className="col-6">
                <div className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}><Calendar size={14} style={{display:'inline'}}/> تاريخ الاستلام: 01/02/2026</div>
                <div className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}><Calendar size={14} style={{display:'inline'}}/> تاريخ الإرجاع: 04/02/2026</div>
                <div className="text-muted" style={{ fontSize: '0.875rem' }}>⏱️ المدة: 3 أيام</div>
              </div>
              <div className="col-6">
                <div className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}><MapPin size={14} style={{display:'inline'}}/> موقع الاستلام: صنعاء - الوحدة</div>
                <div className="text-muted" style={{ fontSize: '0.875rem' }}><Phone size={14} style={{display:'inline'}}/> رقم تواصل للتسليم: +967 77X XXX XXX</div>
              </div>
            </div>
          </div>

          {/* Section 3 - Timeline */}
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h4 className="fw-bold" style={{ marginBottom: '1rem' }}>الجدول الزمني</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="d-flex align-items-center gap-3">
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#3498DB' }}></div>
                <div style={{ flex: 1 }}>تم إرسال الطلب</div>
                <div className="text-muted" style={{ fontSize: '0.875rem' }}>01/02/2026 — 09:15 ص</div>
                <div>✅</div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#27AE60' }}></div>
                <div style={{ flex: 1 }}>تأكيد المؤجر</div>
                <div className="text-muted" style={{ fontSize: '0.875rem' }}>01/02/2026 — 10:30 ص</div>
                <div>✅</div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#27AE60' }}></div>
                <div style={{ flex: 1 }}>تم الدفع (Escrow)</div>
                <div className="text-muted" style={{ fontSize: '0.875rem' }}>01/02/2026 — 11:05 ص</div>
                <div>✅</div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#27AE60' }}></div>
                <div style={{ flex: 1 }}>توقيع العقد</div>
                <div className="text-muted" style={{ fontSize: '0.875rem' }}>01/02/2026 — 11:10 ص</div>
                <div>✅</div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#27AE60' }}></div>
                <div style={{ flex: 1 }}>استلام المعدة</div>
                <div className="text-muted" style={{ fontSize: '0.875rem' }}>01/02/2026 — 03:00 م</div>
                <div>✅</div>
              </div>
              <div className="d-flex align-items-center gap-3" style={{ padding: '0.5rem', backgroundColor: '#FEF1E6', borderRadius: '8px' }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#E67E22', animation: 'pulse 2s infinite' }}></div>
                <div style={{ flex: 1, color: '#E67E22', fontWeight: 'bold' }}>قيد الاستخدام</div>
                <div className="text-muted" style={{ fontSize: '0.875rem' }}>جارٍ الآن</div>
              </div>
              <div className="d-flex align-items-center gap-3 opacity-60">
                <div style={{ width: '14px', height: '14px', borderRadius: '50%', border: '2px solid #95A5A6' }}></div>
                <div style={{ flex: 1 }}>إرجاع المعدة</div>
                <div className="text-muted" style={{ fontSize: '0.875rem' }}>04/02/2026</div>
              </div>
              <div className="d-flex align-items-center gap-3 opacity-60">
                <div style={{ width: '14px', height: '14px', borderRadius: '50%', border: '2px solid #95A5A6' }}></div>
                <div style={{ flex: 1 }}>استرداد التأمين</div>
                <div className="text-muted" style={{ fontSize: '0.875rem' }}>بعد الإرجاع</div>
              </div>
            </div>
          </div>

          {/* Section 4 - Images */}
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h4 className="fw-bold" style={{ marginBottom: '1rem' }}>صور حالة المعدة عند الاستلام</h4>
            <div className="d-flex gap-3">
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=150" alt="Condition 1" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '8px' }} />
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=150" alt="Condition 2" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '8px' }} />
              <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=150" alt="Condition 3" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
          </div>

          {/* Section 5 - Actions */}
          <div className="d-flex gap-3">
            <button className="btn btn-outline bg-white"><FileText size={18} /> عرض العقد الإلكتروني</button>
            <button className="btn btn-outline bg-white"><Download size={18} /> تحميل العقد PDF</button>
            <button className="btn btn-outline bg-white"><Calendar size={18} /> تمديد فترة الإيجار</button>
            <button className="btn text-danger bg-white" style={{ border: '1px solid #E74C3C' }}><AlertTriangle size={18} /> تقديم اعتراض/مشكلة</button>
          </div>
        </div>

        {/* Financial Summary (Sticky) */}
        <div className="col-4 col-lg-12">
          <div className="card sticky-top">
            <h4 className="fw-bold" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>💰 الملخص المالي</h4>
            
            <div className="d-flex justify-content-between" style={{ marginBottom: '0.75rem' }}>
              <span className="text-muted">سعر اليوم:</span>
              <span className="fw-bold">15,000 ر.ي</span>
            </div>
            <div className="d-flex justify-content-between" style={{ marginBottom: '0.75rem' }}>
              <span className="text-muted">المدة (3 أيام):</span>
              <span className="fw-bold">45,000 ر.ي</span>
            </div>
            <div className="d-flex justify-content-between" style={{ marginBottom: '1rem' }}>
              <span className="text-muted">رسوم الخدمة 5%:</span>
              <span className="fw-bold">2,250 ر.ي</span>
            </div>
            
            <div style={{ borderTop: '1px dashed var(--border-color)', paddingTop: '1rem', marginBottom: '1rem' }}>
              <div className="d-flex justify-content-between" style={{ marginBottom: '0.75rem' }}>
                <span className="text-primary fw-bold">مجموع الإيجار:</span>
                <span className="fw-bold" style={{ color: 'var(--primary-green)' }}>47,250 ر.ي</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-muted">تأمين محتجز:</span>
                <span className="fw-bold">50,000 ر.ي</span>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
              <div className="d-flex justify-content-between">
                <span className="fw-bold" style={{ fontSize: '1.1rem' }}>الإجمالي المدفوع:</span>
                <span className="fw-bold" style={{ fontSize: '1.1rem' }}>97,250 ر.ي</span>
              </div>
            </div>

            <div style={{ backgroundColor: '#F8F9F9', padding: '1rem', borderRadius: '8px' }}>
              <h5 className="fw-bold" style={{ marginBottom: '0.5rem' }}>🔒 حالة Escrow</h5>
              <div className="d-flex justify-content-between" style={{ marginBottom: '0.25rem', fontSize: '0.875rem' }}>
                <span className="text-muted">المبلغ المحتجز:</span>
                <span className="fw-bold">97,250 ر.ي</span>
              </div>
              <div className="d-flex justify-content-between" style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>
                <span className="text-muted">الحالة:</span>
                <span style={{ color: '#E67E22', fontWeight: 'bold' }}>🔒 محتجز — قيد الاستخدام</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#7F8C8D', borderTop: '1px solid #E5E8E8', paddingTop: '0.5rem' }}>
                💡 سيُفرج عن التأمين للمؤجر تلقائياً بعد تأكيد الإرجاع السليم.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalDetails;
