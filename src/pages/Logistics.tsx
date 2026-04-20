import { useState } from 'react';
import { Camera, Plus, Trash2, AlertTriangle, PenTool } from 'lucide-react';
import { Tabs } from '../components/Tabs';
import '../components/upload.css';

const TABS = [
  { id: 'ToReceive', label: '📦 بانتظار الاستلام (1)' },
  { id: 'InUse', label: '🔧 قيد الاستخدام (2)' },
  { id: 'ToReturn', label: '🔄 بانتظار الإرجاع (1)' },
  { id: 'Completed', label: '✅ مكتملة' },
  { id: 'Dispute', label: '⚠️ نزاع (1)' }
];

const Logistics = () => {
  const [activeTab, setActiveTab] = useState('ToReceive');

  return (
    <div className="logistics-page">
      <h3 className="fw-bold" style={{ marginBottom: '1.5rem' }}>التسليم والإرجاع</h3>
      
      <Tabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />

      <div className="grid">
        <div className="col-8 col-lg-12">

          {activeTab === 'ToReceive' && (
            <div className="card">
              <h4 className="fw-bold" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                📦 استلام المعدة — توثيق الحالة عند الاستلام
              </h4>
              
              <div style={{ backgroundColor: '#F8F9F9', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                <div className="fw-bold">الطلب: #OP-2026-1047 | مولد كهرباء 10KVA</div>
                <div className="text-muted" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>👤 المؤجر: أحمد المؤجر | 📞 +967 77X XXX XXX</div>
                <div className="text-muted" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>📅 موعد الاستلام: 01/02/2026 — 03:00 م | 📍 صنعاء - الوحدة</div>
              </div>

              <div className="step-group" style={{ marginBottom: '2rem' }}>
                <h5 className="fw-bold" style={{ marginBottom: '1rem' }}>الخطوة 1: صور حالة المعدة عند الاستلام</h5>
                <div className="d-flex gap-3 flex-wrap">
                  <div className="upload-box">
                    <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=150" alt="img" />
                    <button className="remove-img"><Trash2 size={14} /></button>
                  </div>
                  <div className="upload-box">
                    <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=150" alt="img" />
                    <button className="remove-img"><Trash2 size={14} /></button>
                  </div>
                  <div className="upload-box empty">
                    <Camera size={24} color="#888" />
                    <span style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: '#888' }}>صورة 3</span>
                  </div>
                  <div className="upload-box empty" style={{ borderStyle: 'dashed' }}>
                    <Plus size={24} color="#2D5A27" />
                  </div>
                </div>
                <div className="text-muted" style={{ fontSize: '0.875rem', marginTop: '0.75rem' }}>
                  ℹ️ ارفع 3 صور على الأقل من زوايا مختلفة
                </div>
              </div>

              <div className="step-group" style={{ marginBottom: '2rem' }}>
                <h5 className="fw-bold" style={{ marginBottom: '1rem' }}>الخطوة 2: حالة المعدة المستلمة:</h5>
                <div className="d-flex flex-column gap-2" style={{ marginBottom: '1rem' }}>
                  <label className="d-flex align-items-center gap-2">
                    <input type="radio" name="condition" defaultChecked />
                    <span>ممتازة — كما في الوصف</span>
                  </label>
                  <label className="d-flex align-items-center gap-2">
                    <input type="radio" name="condition" />
                    <span>جيدة — مع تحفظات بسيطة</span>
                  </label>
                  <label className="d-flex align-items-center gap-2">
                    <input type="radio" name="condition" />
                    <span>تختلف عن الوصف — سأرفع مشكلة</span>
                  </label>
                </div>
                <textarea 
                  className="form-control" 
                  rows={3} 
                  placeholder="ملاحظات إضافية (اختياري)..."
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', resize: 'none' }}
                ></textarea>
              </div>

              <div className="step-group" style={{ marginBottom: '2rem' }}>
                <h5 className="fw-bold" style={{ marginBottom: '1rem' }}>الخطوة 3: التوقيع الرقمي:</h5>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1rem', height: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FAFAFA', position: 'relative' }}>
                  <PenTool size={32} color="#CCC" style={{ marginBottom: '0.5rem' }} />
                  <span style={{ color: '#CCC' }}>ارسم توقيعك هنا</span>
                  <button className="btn btn-outline" style={{ position: 'absolute', bottom: '10px', left: '10px', padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>مسح التوقيع</button>
                </div>
              </div>

              <div style={{ backgroundColor: '#EAFAF1', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid #27AE60' }}>
                <label className="d-flex align-items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  <span className="fw-bold" style={{ color: '#27AE60' }}>أوافق على شروط وأحكام عقد الإيجار وأؤكد استلام المعدة</span>
                </label>
              </div>

              <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
                تأكيد الاستلام وتوقيع العقد ✅
              </button>
            </div>
          )}

          {activeTab === 'ToReturn' && (
            <div className="card">
              <h4 className="fw-bold" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                🔄 إرجاع المعدة — توثيق الحالة عند الإرجاع
              </h4>
              
              <div style={{ backgroundColor: '#F8F9F9', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                <div className="fw-bold">الطلب: #OP-2026-1047 | مولد كهرباء 10KVA</div>
                <div className="text-muted" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>📅 موعد الإرجاع المتفق عليه: 04/02/2026 — 03:00 م</div>
              </div>

              {/* Upload UI reused */}
              <div className="step-group" style={{ marginBottom: '2rem' }}>
                <h5 className="fw-bold" style={{ marginBottom: '1rem' }}>الخطوة 1: صور حالة المعدة عند الإرجاع</h5>
                <div className="d-flex gap-3 flex-wrap">
                  <div className="upload-box empty" style={{ borderStyle: 'dashed' }}>
                    <Plus size={24} color="#2D5A27" />
                  </div>
                </div>
                <div className="text-muted" style={{ fontSize: '0.875rem', marginTop: '0.75rem' }}>
                  ℹ️ صور من نفس الزوايا عند الاستلام لسهولة المقارنة
                </div>
              </div>

              <div className="step-group" style={{ marginBottom: '2rem' }}>
                <h5 className="fw-bold" style={{ marginBottom: '1rem' }}>الخطوة 2: هل المعدة بحالة سليمة؟</h5>
                <div className="d-flex flex-column gap-2">
                  <label className="d-flex align-items-center gap-2">
                    <input type="radio" name="return_condition" defaultChecked />
                    <span>نعم — بدون أضرار، كما استلمتها</span>
                  </label>
                  <label className="d-flex align-items-center gap-2">
                    <input type="radio" name="return_condition" />
                    <span>يوجد أضرار — سأقوم بوصفها</span>
                  </label>
                </div>
              </div>

              <div className="alert alert-warning" style={{ backgroundColor: '#FFF9E6', borderColor: '#F39C12' }}>
                <AlertTriangle color="#F39C12" />
                <div style={{ flex: 1, marginRight: '1rem' }}>
                  <div className="fw-bold">مهم: لديك 48 ساعة بعد الإرجاع لتقديم أي اعتراض</div>
                  <div className="text-muted" style={{ fontSize: '0.875rem' }}>على خصم من مبلغ التأمين</div>
                </div>
              </div>

              <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
                تأكيد الإرجاع ✅
              </button>
            </div>
          )}

          {activeTab === 'Dispute' && (
            <div className="card border-danger">
              <h4 className="fw-bold text-danger" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                ⚠️ الاعتراض على تقرير المؤجر
              </h4>

              <div style={{ backgroundColor: '#FFF9E6', border: '1px solid #F39C12', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                <div className="fw-bold" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>المؤجر طلب خصم: 15,000 ر.ي من تأمينك البالغ 50,000 ر.ي</div>
                <div className="text-muted" style={{ marginBottom: '1rem' }}>سبب المؤجر: "خدش على جانب المعدة"</div>
                
                <div className="d-flex justify-content-between align-items-center" style={{ marginBottom: '0.5rem' }}>
                  <span className="fw-bold text-danger">المتبقي للاعتراض: 23:14:09</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: '#E0E0E0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '50%', height: '100%', backgroundColor: '#F39C12' }}></div>
                </div>
              </div>

              <div className="step-group" style={{ marginBottom: '2rem' }}>
                <h5 className="fw-bold" style={{ marginBottom: '1rem' }}>سبب اعتراضك:</h5>
                <textarea 
                  className="form-control" 
                  rows={4} 
                  placeholder="اشرح اعتراضك بالتفصيل ولماذا تعتقد أن الخصم غير مبرر..."
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', resize: 'none' }}
                ></textarea>
              </div>

              <div className="step-group" style={{ marginBottom: '2rem' }}>
                <h5 className="fw-bold" style={{ marginBottom: '1rem' }}>أدلة داعمة (صور):</h5>
                <div className="d-flex gap-3 flex-wrap">
                  <div className="upload-box empty" style={{ borderStyle: 'dashed' }}>
                    <Plus size={24} color="#2D5A27" />
                  </div>
                </div>
              </div>

              <div className="text-muted text-center" style={{ marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                🔒 سيُعلَّق مبلغ التأمين حتى يبت الـ Admin في النزاع
              </div>

              <div className="d-flex gap-3">
                <button className="btn btn-outline" style={{ flex: 1 }}>أقبل الخصم — لا اعتراض</button>
                <button className="btn" style={{ flex: 1, backgroundColor: '#E74C3C', color: 'white' }}>تقديم الاعتراض ⚠️</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Logistics;
