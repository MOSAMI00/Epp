import { useState } from 'react';
import { Camera, ShieldCheck, CheckCircle2, AlertTriangle, UploadCloud } from 'lucide-react';
import '../components/upload.css';

type KycStatus = 'unverified' | 'pending' | 'verified';

const KYC = () => {
  const [status, setStatus] = useState<KycStatus>('unverified');

  return (
    <div className="kyc-page" style={{ maxWidth: '800px', margin: '0 auto' }}>
      {status === 'unverified' && (
        <div className="card" style={{ border: '2px solid #F39C12' }}>
          <div className="d-flex align-items-center gap-3" style={{ backgroundColor: '#FFF9E6', padding: '1.5rem', borderRadius: '8px 8px 0 0', margin: '-1.5rem -1.5rem 1.5rem -1.5rem', borderBottom: '1px solid #F39C12' }}>
            <AlertTriangle size={32} color="#F39C12" />
            <div>
              <h4 className="fw-bold text-danger m-0" style={{ color: '#D68910' }}>التحقق من الهوية (KYC) - لم يتم التحقق</h4>
              <p className="text-muted m-0" style={{ fontSize: '0.875rem' }}>لا يمكنك إتمام أول حجز حتى تُرفع وثيقتك وتُعتمد من الإدارة</p>
            </div>
          </div>

          <div className="step-group" style={{ marginBottom: '2rem' }}>
            <h5 className="fw-bold" style={{ marginBottom: '1rem' }}>الخطوة 1: نوع الوثيقة</h5>
            <div className="d-flex gap-4">
              <label className="d-flex align-items-center gap-2">
                <input type="radio" name="docType" defaultChecked />
                <span>بطاقة شخصية</span>
              </label>
              <label className="d-flex align-items-center gap-2">
                <input type="radio" name="docType" />
                <span>جواز سفر</span>
              </label>
              <label className="d-flex align-items-center gap-2">
                <input type="radio" name="docType" />
                <span>بطاقة عسكرية</span>
              </label>
            </div>
          </div>

          <div className="step-group" style={{ marginBottom: '2rem' }}>
            <h5 className="fw-bold" style={{ marginBottom: '1rem' }}>الخطوة 2: رفع الوثيقة</h5>
            <div className="grid">
              <div className="col-6 col-md-12">
                <div style={{ border: '2px dashed var(--border-color)', borderRadius: '8px', padding: '2rem', textAlign: 'center', backgroundColor: '#F8F9F9', cursor: 'pointer' }}>
                  <UploadCloud size={48} color="#888" style={{ marginBottom: '1rem' }} />
                  <div className="fw-bold">الوجه الأمامي</div>
                  <div className="text-muted" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>اضغط لرفع صورة</div>
                </div>
              </div>
              <div className="col-6 col-md-12">
                <div style={{ border: '2px dashed var(--border-color)', borderRadius: '8px', padding: '2rem', textAlign: 'center', backgroundColor: '#F8F9F9', cursor: 'pointer' }}>
                  <UploadCloud size={48} color="#888" style={{ marginBottom: '1rem' }} />
                  <div className="fw-bold">الوجه الخلفي</div>
                  <div className="text-muted" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>اضغط لرفع صورة</div>
                </div>
              </div>
            </div>
          </div>

          <div className="step-group" style={{ marginBottom: '2rem' }}>
            <h5 className="fw-bold" style={{ marginBottom: '1rem' }}>الخطوة 3: صورة Selfie مع الوثيقة (اختياري)</h5>
            <div style={{ border: '2px dashed var(--border-color)', borderRadius: '8px', padding: '2rem', textAlign: 'center', backgroundColor: '#F8F9F9', cursor: 'pointer', maxWidth: '300px' }}>
              <Camera size={48} color="#888" style={{ marginBottom: '1rem' }} />
              <div className="fw-bold">رفع صورة سيلفي</div>
              <div className="text-muted" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>يُسرع من عملية القبول</div>
            </div>
          </div>

          <div className="text-muted text-center" style={{ marginBottom: '1.5rem', fontSize: '0.875rem' }}>
            ℹ️ مدة المراجعة: حتى 24 ساعة — ستُشعر عند الموافقة
          </div>

          <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }} onClick={() => setStatus('pending')}>
            رفع للمراجعة ←
          </button>
        </div>
      )}

      {status === 'pending' && (
        <div className="card text-center" style={{ padding: '3rem 2rem', border: '2px solid #3498DB', backgroundColor: '#EBF5FB' }}>
          <ShieldCheck size={64} color="#3498DB" style={{ margin: '0 auto 1.5rem auto' }} />
          <h3 className="fw-bold" style={{ color: '#2980B9', marginBottom: '1rem' }}>وثيقتك قيد المراجعة</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>تم رفع وثيقتك بنجاح وهي قيد مراجعة الفريق</p>
          <div className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '2rem' }}>المتوقع: خلال 24 ساعة</div>
          <button className="btn btn-outline" onClick={() => setStatus('verified')}>محاكاة قبول الـ Admin ✅</button>
        </div>
      )}

      {status === 'verified' && (
        <div className="card" style={{ border: '2px solid #27AE60', backgroundColor: '#EAFAF1' }}>
          <div className="d-flex align-items-center gap-3 mb-4" style={{ marginBottom: '2rem' }}>
            <CheckCircle2 size={48} color="#27AE60" />
            <div>
              <h3 className="fw-bold m-0" style={{ color: '#1E8449' }}>تم التحقق من هويتك بنجاح</h3>
              <p className="text-muted m-0" style={{ fontSize: '0.875rem' }}>حسابك الآن موثق بالكامل</p>
            </div>
          </div>

          <div className="grid">
            <div className="col-4 text-muted fw-bold">نوع الوثيقة:</div>
            <div className="col-8 fw-bold">بطاقة شخصية</div>
            
            <div className="col-4 text-muted fw-bold">رقم الوثيقة:</div>
            <div className="col-8 fw-bold">****1234</div>
            
            <div className="col-4 text-muted fw-bold">تاريخ التحقق:</div>
            <div className="col-8 fw-bold">15/01/2026</div>
          </div>
          
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <button className="btn btn-outline" onClick={() => setStatus('unverified')}>إعادة ضبط المحاكاة</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KYC;
