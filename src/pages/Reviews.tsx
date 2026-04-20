import { useState } from 'react';
import { Star } from 'lucide-react';
import { Tabs } from '../components/Tabs';

const TABS = [
  { id: 'Received', label: 'التقييمات المستلمة' },
  { id: 'Sent', label: 'التقييمات المُرسلة' },
  { id: 'Pending', label: '⏳ بانتظار تقييمي (2)' }
];

const REVIEWS = [
  {
    id: 1,
    reviewer: 'أحمد المؤجر',
    rating: 5,
    equipment: 'مولد كهرباء 10KVA',
    date: '01-04 فبراير 2026',
    comment: 'مستأجر ممتاز، حافظ على المعدة وأعادها بحالة رائعة وفي الوقت المحدد.',
    timeAgo: 'منذ يومين'
  },
  {
    id: 2,
    reviewer: 'محمد علي',
    rating: 4,
    equipment: 'خلاطة خرسانة',
    date: '15-18 يناير 2026',
    comment: 'تجربة جيدة جداً، الدفع كان سريعاً.',
    timeAgo: 'منذ أسبوعين'
  }
];

const Reviews = () => {
  const [activeTab, setActiveTab] = useState('Received');
  const [hoverRating, setHoverRating] = useState(0);
  const [rating, setRating] = useState(0);

  return (
    <div className="reviews-page">
      {/* Header Summary */}
      <div className="card d-flex gap-4 align-items-center" style={{ marginBottom: '2rem', backgroundColor: '#F8F9F9' }}>
        <div className="text-center" style={{ padding: '1rem', borderLeft: '1px solid var(--border-color)', minWidth: '150px' }}>
          <div className="d-flex justify-content-center" style={{ color: '#F1C40F', marginBottom: '0.5rem' }}>
            <Star size={24} fill="#F1C40F" />
            <Star size={24} fill="#F1C40F" />
            <Star size={24} fill="#F1C40F" />
            <Star size={24} fill="#F1C40F" />
            <Star size={24} fill="#F1C40F" opacity={0.5} />
          </div>
          <h2 className="fw-bold m-0">4.7 من 5</h2>
          <div className="text-muted" style={{ fontSize: '0.875rem' }}>12 تقييم إجمالي</div>
        </div>
        
        <div style={{ flex: 1 }}>
          <div className="d-flex align-items-center gap-2" style={{ marginBottom: '0.25rem' }}>
            <span style={{ width: '20px' }}>5★</span>
            <div style={{ flex: 1, height: '8px', backgroundColor: '#E0E0E0', borderRadius: '4px' }}>
              <div style={{ width: '80%', height: '100%', backgroundColor: '#F1C40F', borderRadius: '4px' }}></div>
            </div>
            <span style={{ width: '20px', textAlign: 'left' }}>8</span>
          </div>
          <div className="d-flex align-items-center gap-2" style={{ marginBottom: '0.25rem' }}>
            <span style={{ width: '20px' }}>4★</span>
            <div style={{ flex: 1, height: '8px', backgroundColor: '#E0E0E0', borderRadius: '4px' }}>
              <div style={{ width: '30%', height: '100%', backgroundColor: '#F1C40F', borderRadius: '4px' }}></div>
            </div>
            <span style={{ width: '20px', textAlign: 'left' }}>3</span>
          </div>
          <div className="d-flex align-items-center gap-2" style={{ marginBottom: '0.25rem' }}>
            <span style={{ width: '20px' }}>3★</span>
            <div style={{ flex: 1, height: '8px', backgroundColor: '#E0E0E0', borderRadius: '4px' }}>
              <div style={{ width: '10%', height: '100%', backgroundColor: '#F1C40F', borderRadius: '4px' }}></div>
            </div>
            <span style={{ width: '20px', textAlign: 'left' }}>1</span>
          </div>
          <div className="d-flex align-items-center gap-2" style={{ marginBottom: '0.25rem' }}>
            <span style={{ width: '20px' }}>2★</span>
            <div style={{ flex: 1, height: '8px', backgroundColor: '#E0E0E0', borderRadius: '4px' }}></div>
            <span style={{ width: '20px', textAlign: 'left' }}>0</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span style={{ width: '20px' }}>1★</span>
            <div style={{ flex: 1, height: '8px', backgroundColor: '#E0E0E0', borderRadius: '4px' }}></div>
            <span style={{ width: '20px', textAlign: 'left' }}>0</span>
          </div>
        </div>
      </div>

      <Tabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'Received' && (
        <div className="grid">
          {REVIEWS.map(review => (
            <div key={review.id} className="col-6 col-lg-12">
              <div className="card">
                <div className="d-flex justify-content-between align-items-start" style={{ marginBottom: '1rem' }}>
                  <div className="d-flex gap-3 align-items-center">
                    <img src={`https://ui-avatars.com/api/?name=${review.reviewer}&background=random`} alt={review.reviewer} style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
                    <div>
                      <h5 className="fw-bold m-0">{review.reviewer}</h5>
                      <div className="text-muted" style={{ fontSize: '0.875rem' }}>🔧 {review.equipment} | {review.date}</div>
                    </div>
                  </div>
                  <div className="d-flex" style={{ color: '#F1C40F' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < review.rating ? "#F1C40F" : "transparent"} />
                    ))}
                    <span className="text-muted" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}>{review.rating}/5</span>
                  </div>
                </div>
                <p style={{ lineHeight: '1.6', backgroundColor: '#F9F9F9', padding: '1rem', borderRadius: '8px', marginBottom: '0.5rem' }}>
                  "{review.comment}"
                </p>
                <div className="text-muted text-left" style={{ fontSize: '0.75rem' }}>
                  {review.timeAgo}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'Pending' && (
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h4 className="fw-bold" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
            ⭐ قيّم تجربتك
          </h4>
          
          <div className="d-flex gap-3 align-items-center" style={{ backgroundColor: '#F8F9F9', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
            <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=100" alt="Equipment" style={{ width: '64px', height: '64px', borderRadius: '8px', objectFit: 'cover' }} />
            <div>
              <div className="fw-bold" style={{ fontSize: '1.1rem' }}>مولد كهرباء 10KVA</div>
              <div className="text-muted">المؤجر: شركة المعدات الثقيلة</div>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h5 className="fw-bold" style={{ marginBottom: '0.5rem' }}>التقييم العام للمؤجر:</h5>
            <div className="d-flex gap-1" style={{ cursor: 'pointer' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  size={32} 
                  color={star <= (hoverRating || rating) ? "#F1C40F" : "#E0E0E0"} 
                  fill={star <= (hoverRating || rating) ? "#F1C40F" : "transparent"}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>

          <div className="grid" style={{ marginBottom: '2rem' }}>
            <div className="col-12 text-muted fw-bold" style={{ marginBottom: '-1rem' }}>تقييمات فرعية:</div>
            
            <div className="col-6 d-flex justify-content-between align-items-center">
              <span>دقة وصف المعدة:</span>
              <div className="d-flex"><Star size={16} fill="#E0E0E0" color="#E0E0E0" /><Star size={16} fill="#E0E0E0" color="#E0E0E0" /><Star size={16} fill="#E0E0E0" color="#E0E0E0" /><Star size={16} fill="#E0E0E0" color="#E0E0E0" /><Star size={16} fill="#E0E0E0" color="#E0E0E0" /></div>
            </div>
            <div className="col-6 d-flex justify-content-between align-items-center">
              <span>حالة المعدة:</span>
              <div className="d-flex"><Star size={16} fill="#E0E0E0" color="#E0E0E0" /><Star size={16} fill="#E0E0E0" color="#E0E0E0" /><Star size={16} fill="#E0E0E0" color="#E0E0E0" /><Star size={16} fill="#E0E0E0" color="#E0E0E0" /><Star size={16} fill="#E0E0E0" color="#E0E0E0" /></div>
            </div>
            <div className="col-6 d-flex justify-content-between align-items-center">
              <span>مستوى التواصل:</span>
              <div className="d-flex"><Star size={16} fill="#E0E0E0" color="#E0E0E0" /><Star size={16} fill="#E0E0E0" color="#E0E0E0" /><Star size={16} fill="#E0E0E0" color="#E0E0E0" /><Star size={16} fill="#E0E0E0" color="#E0E0E0" /><Star size={16} fill="#E0E0E0" color="#E0E0E0" /></div>
            </div>
            <div className="col-6 d-flex justify-content-between align-items-center">
              <span>الالتزام بالمواعيد:</span>
              <div className="d-flex"><Star size={16} fill="#E0E0E0" color="#E0E0E0" /><Star size={16} fill="#E0E0E0" color="#E0E0E0" /><Star size={16} fill="#E0E0E0" color="#E0E0E0" /><Star size={16} fill="#E0E0E0" color="#E0E0E0" /><Star size={16} fill="#E0E0E0" color="#E0E0E0" /></div>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h5 className="fw-bold" style={{ marginBottom: '0.5rem' }}>مراجعة نصية (اختياري):</h5>
            <textarea 
              className="form-control" 
              rows={4} 
              placeholder="شارك تجربتك مع المؤجر والمعدة..."
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', resize: 'none' }}
            ></textarea>
          </div>

          <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
            إرسال التقييم ✅
          </button>
        </div>
      )}
    </div>
  );
};

export default Reviews;
