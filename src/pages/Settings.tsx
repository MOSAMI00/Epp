import { useState } from 'react';
import { User, Lock, ShieldCheck, Bell, Camera, Save } from 'lucide-react';

const GOVERNORATES = [
  'صنعاء', 'عدن', 'تعز', 'الحديدة', 'إب', 'حضرموت', 'ذمار', 'حجة', 'عمران', 
  'صعدة', 'البيضاء', 'أبين', 'لحج', 'شبوة', 'المكلا', 'الغيضة', 'سقطرى', 
  'الضالع', 'مأرب', 'الجوف', 'ريمة', 'المحويت'
];

const Settings = () => {
  const [activeMenu, setActiveMenu] = useState('profile');
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.length === 0) setPasswordStrength(0);
    else if (val.length < 6) setPasswordStrength(1);
    else if (val.length < 10) setPasswordStrength(2);
    else if (val.match(/[A-Z]/) && val.match(/[0-9]/)) setPasswordStrength(4);
    else setPasswordStrength(3);
  };

  const getStrengthColor = () => {
    if (passwordStrength === 1) return '#E74C3C'; // ضعيفة
    if (passwordStrength === 2) return '#F39C12'; // متوسطة
    if (passwordStrength === 3) return '#F1C40F'; // جيدة
    if (passwordStrength === 4) return '#2D5A27'; // قوية
    return '#E0E0E0';
  };

  return (
    <div className="settings-page grid" style={{ alignItems: 'flex-start' }}>
      
      {/* Secondary Sidebar */}
      <div className="col-3 col-md-12">
        <div className="card" style={{ padding: '1rem 0' }}>
          <button 
            className={`d-flex align-items-center gap-3 w-100 ${activeMenu === 'profile' ? 'fw-bold text-primary' : 'text-muted'}`} 
            style={{ padding: '1rem 1.5rem', backgroundColor: activeMenu === 'profile' ? '#EAF3E9' : 'transparent', color: activeMenu === 'profile' ? 'var(--primary-green)' : 'inherit', textAlign: 'right' }}
            onClick={() => setActiveMenu('profile')}
          >
            <User size={20} /> ملفي الشخصي
          </button>
          <button 
            className={`d-flex align-items-center gap-3 w-100 ${activeMenu === 'security' ? 'fw-bold text-primary' : 'text-muted'}`} 
            style={{ padding: '1rem 1.5rem', backgroundColor: activeMenu === 'security' ? '#EAF3E9' : 'transparent', color: activeMenu === 'security' ? 'var(--primary-green)' : 'inherit', textAlign: 'right' }}
            onClick={() => setActiveMenu('security')}
          >
            <Lock size={20} /> الأمان وكلمة المرور
          </button>
          <button 
            className={`d-flex align-items-center gap-3 w-100 ${activeMenu === 'kyc' ? 'fw-bold text-primary' : 'text-muted'}`} 
            style={{ padding: '1rem 1.5rem', backgroundColor: activeMenu === 'kyc' ? '#EAF3E9' : 'transparent', color: activeMenu === 'kyc' ? 'var(--primary-green)' : 'inherit', textAlign: 'right' }}
            onClick={() => setActiveMenu('kyc')}
          >
            <ShieldCheck size={20} /> التحقق من الهوية
          </button>
          <button 
            className={`d-flex align-items-center gap-3 w-100 ${activeMenu === 'notifications' ? 'fw-bold text-primary' : 'text-muted'}`} 
            style={{ padding: '1rem 1.5rem', backgroundColor: activeMenu === 'notifications' ? '#EAF3E9' : 'transparent', color: activeMenu === 'notifications' ? 'var(--primary-green)' : 'inherit', textAlign: 'right' }}
            onClick={() => setActiveMenu('notifications')}
          >
            <Bell size={20} /> الإشعارات والتفضيلات
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="col-9 col-md-12">
        <div className="card">
          
          {activeMenu === 'profile' && (
            <div>
              <h4 className="fw-bold" style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>الملف الشخصي</h4>
              
              <div className="d-flex align-items-center gap-4" style={{ marginBottom: '2rem' }}>
                <div style={{ position: 'relative' }}>
                  <img src="https://ui-avatars.com/api/?name=المستأجر&background=2D5A27&color=fff&size=128" alt="Profile" style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
                  <button style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: 'white', border: '1px solid #CCC', borderRadius: '50%', padding: '0.25rem', display: 'flex' }}>
                    <Camera size={16} />
                  </button>
                </div>
                <button className="btn btn-outline" style={{ fontSize: '0.875rem' }}>تغيير الصورة</button>
              </div>

              <div className="grid">
                <div className="col-12" style={{ marginBottom: '1rem' }}>
                  <label className="fw-bold" style={{ display: 'block', marginBottom: '0.5rem' }}>الاسم الكامل</label>
                  <input type="text" className="form-control w-100" defaultValue="اسم المستأجر" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', width: '100%' }} />
                </div>
                <div className="col-6 col-md-12" style={{ marginBottom: '1rem' }}>
                  <label className="fw-bold" style={{ display: 'block', marginBottom: '0.5rem' }}>البريد الإلكتروني</label>
                  <input type="email" className="form-control w-100" defaultValue="tenant@example.com" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', width: '100%' }} />
                  <div className="text-muted" style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>يتطلب تأكيد جديد عند التغيير</div>
                </div>
                <div className="col-6 col-md-12" style={{ marginBottom: '1rem' }}>
                  <label className="fw-bold" style={{ display: 'block', marginBottom: '0.5rem' }}>رقم الهاتف</label>
                  <div className="d-flex align-items-center" style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden' }}>
                    <span style={{ backgroundColor: '#F8F9F9', padding: '0.75rem', borderLeft: '1px solid var(--border-color)' }}>🇾🇪 +967</span>
                    <input type="tel" className="form-control" defaultValue="771234567" style={{ padding: '0.75rem', border: 'none', outline: 'none', flex: 1 }} />
                  </div>
                </div>
                <div className="col-6 col-md-12" style={{ marginBottom: '1rem' }}>
                  <label className="fw-bold" style={{ display: 'block', marginBottom: '0.5rem' }}>المحافظة</label>
                  <select className="form-control w-100" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', width: '100%', backgroundColor: 'white' }}>
                    {GOVERNORATES.map(gov => <option key={gov} value={gov}>{gov}</option>)}
                  </select>
                </div>
                <div className="col-6 col-md-12" style={{ marginBottom: '1rem' }}>
                  <label className="fw-bold" style={{ display: 'block', marginBottom: '0.5rem' }}>المديرية / الحي</label>
                  <input type="text" className="form-control w-100" defaultValue="الوحدة" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', width: '100%' }} />
                </div>
              </div>

              <div className="d-flex justify-content-end gap-3" style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                <button className="btn btn-outline">إلغاء</button>
                <button className="btn btn-primary"><Save size={18} /> حفظ التغييرات</button>
              </div>
            </div>
          )}

          {activeMenu === 'security' && (
            <div>
              <h4 className="fw-bold" style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>تغيير كلمة المرور</h4>
              
              <div style={{ marginBottom: '1rem' }}>
                <label className="fw-bold" style={{ display: 'block', marginBottom: '0.5rem' }}>كلمة المرور الحالية</label>
                <input type="password" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', width: '100%', maxWidth: '400px' }} />
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <label className="fw-bold" style={{ display: 'block', marginBottom: '0.5rem' }}>كلمة المرور الجديدة</label>
                <input type="password" onChange={handlePasswordChange} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', width: '100%', maxWidth: '400px' }} />
                
                {/* Strength Bar */}
                <div className="d-flex gap-1" style={{ maxWidth: '400px', marginTop: '0.5rem' }}>
                  <div style={{ flex: 1, height: '4px', borderRadius: '2px', backgroundColor: passwordStrength >= 1 ? getStrengthColor() : '#E0E0E0' }}></div>
                  <div style={{ flex: 1, height: '4px', borderRadius: '2px', backgroundColor: passwordStrength >= 2 ? getStrengthColor() : '#E0E0E0' }}></div>
                  <div style={{ flex: 1, height: '4px', borderRadius: '2px', backgroundColor: passwordStrength >= 3 ? getStrengthColor() : '#E0E0E0' }}></div>
                  <div style={{ flex: 1, height: '4px', borderRadius: '2px', backgroundColor: passwordStrength >= 4 ? getStrengthColor() : '#E0E0E0' }}></div>
                </div>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <label className="fw-bold" style={{ display: 'block', marginBottom: '0.5rem' }}>تأكيد كلمة المرور</label>
                <input type="password" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', width: '100%', maxWidth: '400px' }} />
              </div>

              <button className="btn btn-primary" style={{ marginBottom: '3rem' }}>تحديث كلمة المرور</button>

              <h4 className="fw-bold" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>التحقق بخطوتين (2FA)</h4>
              
              <div className="d-flex justify-content-between align-items-center" style={{ backgroundColor: '#F8F9F9', padding: '1.5rem', borderRadius: '8px' }}>
                <div>
                  <h5 className="fw-bold m-0" style={{ marginBottom: '0.5rem' }}>التحقق عبر رقم الجوال</h5>
                  <p className="text-muted m-0" style={{ fontSize: '0.875rem' }}>يضيف طبقة حماية إضافية عبر إرسال كود OTP عند تسجيل الدخول</p>
                </div>
                
                {/* Custom Toggle Switch */}
                <label style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
                  <div style={{ width: '48px', height: '24px', backgroundColor: 'var(--primary-green)', borderRadius: '12px', position: 'relative' }}>
                    <div style={{ width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '2px', right: '26px', transition: 'all 0.2s' }}></div>
                  </div>
                </label>
              </div>

            </div>
          )}

          {['kyc', 'notifications'].includes(activeMenu) && (
            <div className="text-center text-muted" style={{ padding: '4rem 0' }}>
              الرجاء استخدام الصفحات الرئيسية المخصصة لهذا القسم.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
