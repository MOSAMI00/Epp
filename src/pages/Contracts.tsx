import { useState } from 'react';
import { Search, Filter, Eye, Download, Printer, X } from 'lucide-react';

const CONTRACTS_DATA = [
  { id: 'عقد-1047', owner: 'أحمد المؤجر', equipment: 'مولد 10KVA', date: '01/02/2026', amount: '97,250 ر.ي' },
  { id: 'عقد-1041', owner: 'محمد المؤجر', equipment: 'خلاطة خرسانة', date: '15/01/2026', amount: '42,000 ر.ي' },
];

const Contracts = () => {
  const [selectedContract, setSelectedContract] = useState<string | null>(null);

  return (
    <div className="contracts-page">
      <div className="d-flex justify-content-between align-items-center" style={{ marginBottom: '1.5rem' }}>
        <h3 className="fw-bold">عقودي (8 عقود)</h3>
        <div className="d-flex gap-2">
          <div className="d-flex align-items-center" style={{ backgroundColor: 'white', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '0 0.75rem' }}>
            <Search size={16} color="#888" />
            <input type="text" placeholder="بحث برقم العقد" style={{ border: 'none', outline: 'none', padding: '0.5rem', background: 'transparent' }} />
          </div>
          <button className="btn btn-outline"><Filter size={16} /> فلتر التاريخ</button>
        </div>
      </div>

      <div className="card">
        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>رقم العقد</th>
                <th>المؤجر</th>
                <th>المعدة</th>
                <th>تاريخ الإنشاء</th>
                <th>المبلغ</th>
                <th>إجراء</th>
              </tr>
            </thead>
            <tbody>
              {CONTRACTS_DATA.map((contract) => (
                <tr key={contract.id}>
                  <td className="fw-bold text-primary" style={{ color: 'var(--primary-green)' }}>{contract.id}</td>
                  <td>{contract.owner}</td>
                  <td>{contract.equipment}</td>
                  <td>{contract.date}</td>
                  <td className="fw-bold">{contract.amount}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem' }} onClick={() => setSelectedContract(contract.id)}>
                        <Eye size={16} /> عرض
                      </button>
                      <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem' }}>
                        <Download size={16} /> تحميل
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contract Viewer Modal */}
      {selectedContract && (
        <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <div className="card modal-content" style={{ width: '100%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto', padding: 0 }}>
            
            <div className="modal-header d-flex justify-content-between align-items-center" style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-color)', backgroundColor: '#F8F9F9', position: 'sticky', top: 0 }}>
              <h4 className="fw-bold m-0">عقد الإيجار رقم {selectedContract}</h4>
              <button className="btn" onClick={() => setSelectedContract(null)}><X size={20} /></button>
            </div>
            
            <div className="modal-body" style={{ padding: '2rem' }}>
              <div className="text-center" style={{ marginBottom: '2rem' }}>
                <h3 className="fw-bold text-primary" style={{ color: 'var(--primary-green)' }}>منصة التأجير</h3>
                <h4 style={{ marginTop: '1rem', borderBottom: '2px solid #EEE', display: 'inline-block', paddingBottom: '0.5rem' }}>عقد إيجار إلكتروني</h4>
              </div>

              <div className="grid" style={{ marginBottom: '1.5rem', backgroundColor: '#F8F9F9', padding: '1rem', borderRadius: '8px' }}>
                <div className="col-6">
                  <span className="text-muted">المستأجر:</span> <strong style={{ fontSize: '1.1rem' }}>اسم المستأجر</strong>
                </div>
                <div className="col-6" style={{ textAlign: 'left' }}>
                  <span className="text-muted">المؤجر:</span> <strong style={{ fontSize: '1.1rem' }}>أحمد المؤجر</strong>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <div className="d-flex justify-content-between" style={{ borderBottom: '1px solid #EEE', padding: '0.75rem 0' }}>
                  <span className="text-muted">المعدة:</span>
                  <strong>مولد كهرباء 10KVA — ديزل، صامت</strong>
                </div>
                <div className="d-flex justify-content-between" style={{ borderBottom: '1px solid #EEE', padding: '0.75rem 0' }}>
                  <span className="text-muted">مدة الإيجار:</span>
                  <strong>من 01/02/2026 إلى 04/02/2026 (3 أيام)</strong>
                </div>
                <div className="d-flex justify-content-between" style={{ borderBottom: '1px solid #EEE', padding: '0.75rem 0' }}>
                  <span className="text-muted">مبلغ الإيجار:</span>
                  <strong>45,000 ر.ي</strong>
                </div>
                <div className="d-flex justify-content-between" style={{ borderBottom: '1px solid #EEE', padding: '0.75rem 0' }}>
                  <span className="text-muted">رسوم الخدمة:</span>
                  <strong>2,250 ر.ي</strong>
                </div>
                <div className="d-flex justify-content-between" style={{ borderBottom: '1px solid #EEE', padding: '0.75rem 0' }}>
                  <span className="text-muted">مبلغ التأمين:</span>
                  <strong>50,000 ر.ي (يُعاد بعد الإرجاع السليم)</strong>
                </div>
                <div className="d-flex justify-content-between" style={{ padding: '0.75rem 0', backgroundColor: '#EAFAF1' }}>
                  <span className="fw-bold" style={{ color: 'var(--primary-green)' }}>الإجمالي المحتجز في Escrow:</span>
                  <strong style={{ color: 'var(--primary-green)' }}>97,250 ر.ي</strong>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h5 className="fw-bold" style={{ marginBottom: '0.5rem' }}>شروط التأجير:</h5>
                <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>يلتزم المستأجر باستخدام المعدة في الغرض المخصص لها، وإعادتها بنفس الحالة التي استلمها بها. وأي أعطال ناتجة عن سوء الاستخدام يتحمل المستأجر تكاليف إصلاحها ويُخصم من التأمين...</p>
              </div>

              <div className="grid" style={{ marginTop: '3rem', borderTop: '2px dashed #EEE', paddingTop: '2rem' }}>
                <div className="col-6 text-center">
                  <div className="text-muted" style={{ marginBottom: '1rem' }}>التوقيع الرقمي - المستأجر:</div>
                  <div style={{ fontFamily: 'cursive', fontSize: '1.5rem', color: '#2C3E50' }}>اسم المستأجر</div>
                </div>
                <div className="col-6 text-center">
                  <div className="text-muted" style={{ marginBottom: '1rem' }}>التوقيع الرقمي - المؤجر:</div>
                  <div style={{ fontFamily: 'cursive', fontSize: '1.5rem', color: '#2C3E50' }}>أحمد المؤجر</div>
                </div>
              </div>
              <div className="text-center text-muted" style={{ marginTop: '2rem', fontSize: '0.875rem' }}>
                تاريخ وساعة التوقيع: 01/02/2026 — 11:10 ص
              </div>
            </div>

            <div className="modal-footer d-flex justify-content-between align-items-center" style={{ padding: '1rem 1.5rem', borderTop: '1px solid var(--border-color)', backgroundColor: '#F8F9F9' }}>
              <div className="text-danger d-flex align-items-center gap-2" style={{ fontSize: '0.875rem' }}>
                ⚠️ هذا العقد موقّع ومُؤرشف — لا يمكن تعديله
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-outline"><Printer size={16} /> طباعة</button>
                <button className="btn btn-primary"><Download size={16} /> تحميل PDF</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contracts;
