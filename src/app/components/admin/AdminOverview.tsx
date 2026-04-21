import { TrendingUp, TrendingDown, ClipboardList, DollarSign, AlertTriangle, Users, ArrowUpRight } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const lineChartData = [
  { date: '01', مكتملة: 42, ملغاة: 8 },
  { date: '05', مكتملة: 38, ملغاة: 12 },
  { date: '10', مكتملة: 51, ملغاة: 6 },
  { date: '15', مكتملة: 48, ملغاة: 9 },
  { date: '20', مكتملة: 61, ملغاة: 4 },
  { date: '25', مكتملة: 55, ملغاة: 7 },
  { date: '30', مكتملة: 68, ملغاة: 5 },
];

const pieChartData = [
  { name: 'Pending', value: 145, color: '#888888' },
  { name: 'Confirmed', value: 234, color: '#3498DB' },
  { name: 'In Use', value: 189, color: '#F39C12' },
  { name: 'Completed', value: 672, color: '#2D5A27' },
  { name: 'Cancelled', value: 87, color: '#E74C3C' },
  { name: 'Disputed', value: 18, color: '#C0392B' },
];

export function AdminOverview() {
  return (
    <div className="space-y-6">
      {/* KPI Cards - Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-border">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <ClipboardList className="w-6 h-6 text-primary" />
            </div>
            <div className="flex items-center gap-1 text-[#27AE60] text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+12%</span>
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-1">1,240</h3>
          <p className="text-sm text-muted-foreground">عمليات التأجير</p>
          <p className="text-xs text-muted-foreground mt-2">هذا الشهر</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-border">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-[#F39C12]/10 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-[#F39C12]" />
            </div>
            <div className="flex items-center gap-1 text-[#27AE60] text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+8%</span>
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-1">4.2M ر.ي</h3>
          <p className="text-sm text-muted-foreground">إجمالي الأرباح</p>
          <p className="text-xs text-muted-foreground mt-2">هذا الشهر</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-border">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-[#E74C3C]/10 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-[#E74C3C]" />
            </div>
            <div className="px-2 py-1 bg-[#E74C3C]/10 text-[#E74C3C] text-xs rounded-full">
              يحتاج مراجعة
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-1">18</h3>
          <p className="text-sm text-muted-foreground">النزاعات المفتوحة</p>
          <p className="text-xs text-muted-foreground mt-2">تتطلب تدخلاً فورياً</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-border">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-[#3498DB]/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-[#3498DB]" />
            </div>
            <div className="flex items-center gap-1 text-[#27AE60] text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+24</span>
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-1">3,580</h3>
          <p className="text-sm text-muted-foreground">المستخدمون</p>
          <p className="text-xs text-muted-foreground mt-2">اليوم</p>
        </div>
      </div>

      {/* KPI Cards - Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-border">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold">معدل الإلغاء</h4>
            <div className="flex items-center gap-1 text-[#27AE60] text-sm">
              <TrendingDown className="w-4 h-4" />
              <span>-2%</span>
            </div>
          </div>
          <div className="text-2xl font-bold">7.2%</div>
          <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-[#F39C12]" style={{ width: '7.2%' }} />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-border">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold">معدل النزاعات</h4>
            <span className="text-xs px-2 py-1 bg-[#27AE60]/10 text-[#27AE60] rounded-full">ممتاز</span>
          </div>
          <div className="text-2xl font-bold">1.8%</div>
          <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-[#27AE60]" style={{ width: '1.8%' }} />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-border">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold">Escrow المحتجز</h4>
          </div>
          <div className="text-2xl font-bold">840K ر.ي</div>
          <p className="text-xs text-muted-foreground mt-2">من 124 عملية نشطة</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg">عمليات التأجير — آخر 30 يوماً</h3>
            <div className="flex gap-2">
              {['أسبوع', 'شهر', '3 أشهر', 'سنة'].map((period, i) => (
                <button
                  key={period}
                  className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                    i === 1
                      ? 'bg-primary text-white'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
              <XAxis dataKey="date" stroke="#888888" />
              <YAxis stroke="#888888" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="مكتملة" stroke="#2D5A27" strokeWidth={2} />
              <Line type="monotone" dataKey="ملغاة" stroke="#F39C12" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl p-6 border border-border">
          <h3 className="font-bold text-lg mb-6">توزيع حالات الطلبات</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {pieChartData.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-muted-foreground">{item.name}</span>
                </div>
                <span className="font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tables Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Disputes */}
        <div className="bg-white rounded-xl border border-border overflow-hidden">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-lg">آخر النزاعات</h3>
            <button className="text-primary text-sm hover:underline flex items-center gap-1">
              <span>عرض الكل</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr className="text-right">
                  <th className="p-3 font-semibold">ID</th>
                  <th className="p-3 font-semibold">المستأجر</th>
                  <th className="p-3 font-semibold">المعدة</th>
                  <th className="p-3 font-semibold">الحالة</th>
                  <th className="p-3 font-semibold">الإجراء</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { id: '#2045', renter: 'أحمد محمد', equipment: 'مولد 10KVA', status: 'مفتوح' },
                  { id: '#2038', renter: 'سعيد علي', equipment: 'خلاطة', status: 'قيد المراجعة' },
                  { id: '#2031', renter: 'خالد حسن', equipment: 'كاميرا', status: 'مفتوح' },
                ].map((dispute) => (
                  <tr key={dispute.id} className="hover:bg-muted/50">
                    <td className="p-3 font-mono text-xs text-muted-foreground">{dispute.id}</td>
                    <td className="p-3">{dispute.renter}</td>
                    <td className="p-3 text-muted-foreground">{dispute.equipment}</td>
                    <td className="p-3">
                      <span className="px-2 py-1 bg-[#E74C3C]/10 text-[#E74C3C] text-xs rounded-full">
                        {dispute.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <button className="text-primary hover:underline text-xs">مراجعة</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="bg-white rounded-xl border border-border overflow-hidden">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-lg">آخر البلاغات</h3>
            <button className="text-primary text-sm hover:underline flex items-center gap-1">
              <span>عرض الكل</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr className="text-right">
                  <th className="p-3 font-semibold">ID</th>
                  <th className="p-3 font-semibold">المُبلِغ</th>
                  <th className="p-3 font-semibold">النوع</th>
                  <th className="p-3 font-semibold">الأولوية</th>
                  <th className="p-3 font-semibold">الإجراء</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { id: '#R-523', reporter: 'محمد صالح', type: 'نشاط مشبوه', priority: 'عالية' },
                  { id: '#R-518', reporter: 'فاطمة أحمد', type: 'محتوى غير لائق', priority: 'متوسطة' },
                  { id: '#R-512', reporter: 'عبدالله علي', type: 'احتيال', priority: 'عالية' },
                ].map((report) => (
                  <tr key={report.id} className="hover:bg-muted/50">
                    <td className="p-3 font-mono text-xs text-muted-foreground">{report.id}</td>
                    <td className="p-3">{report.reporter}</td>
                    <td className="p-3 text-muted-foreground">{report.type}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          report.priority === 'عالية'
                            ? 'bg-[#E74C3C]/10 text-[#E74C3C]'
                            : 'bg-[#F39C12]/10 text-[#F39C12]'
                        }`}
                      >
                        {report.priority}
                      </span>
                    </td>
                    <td className="p-3">
                      <button className="text-primary hover:underline text-xs">معالجة</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
