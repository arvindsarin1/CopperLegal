const { useState, useEffect } = React;

// Modal Component - Light Mode
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 modal-overlay" onClick={onClose}>
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" />
      <div className="flex items-end md:items-center justify-center min-h-full p-0 md:p-4">
        <div
          className="modal-content relative bg-white border border-slate-200 rounded-t-2xl md:rounded-2xl w-full md:max-w-lg max-h-[85vh] overflow-auto shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 p-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-slate-200 active-scale touch-action transition-colors"
            >
              ✕
            </button>
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

// Bottom Sheet Component for Mobile - Light Mode
const BottomSheet = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 modal-overlay md:hidden" onClick={onClose}>
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" />
      <div className="absolute bottom-0 left-0 right-0 modal-content">
        <div
          className="bg-white border-t border-slate-200 rounded-t-2xl max-h-[80vh] overflow-auto shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-10 h-1 bg-slate-300 rounded-full" />
          </div>
          <div className="px-4 pb-2">
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          </div>
          <div className="p-4 pt-2 pb-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

// Success Toast Component
const Toast = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 modal-content">
      <div className="bg-emerald-500 text-white px-6 py-3 rounded-xl shadow-lg shadow-emerald-500/25 flex items-center gap-2">
        <span className="text-lg">✓</span>
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
};

// AI Sparkle Icon Component
const AISparkle = () => (
  <svg className="w-4 h-4 text-violet-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
  </svg>
);

// Main Prototype Component
const CopperLegalPrototype = () => {
  const [currentScreen, setCurrentScreen] = useState('matters');
  const [selectedMatter, setSelectedMatter] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);
  const [showTimeEntry, setShowTimeEntry] = useState(false);
  const [showDocuments, setShowDocuments] = useState(false);
  const [showNewMatter, setShowNewMatter] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [activityType, setActivityType] = useState('email');
  const [isBillable, setIsBillable] = useState(true);

  const showSuccessToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  // Sample Data
  const matters = [
    {
      id: 1,
      name: 'Johnson v. Smith',
      client: 'Sarah Johnson',
      type: 'Personal Injury',
      status: 'Active',
      number: '2024-0892',
      hours: 42.5,
      unbilled: 8.2,
      value: '$12,750',
      lastActivity: '2h ago',
      description: 'Motor vehicle accident on Highway 101. Client sustained injuries requiring surgery.',
      attorney: 'Jane Doe',
      dateOpened: 'October 15, 2024',
      sol: 'October 15, 2026',
    },
    {
      id: 2,
      name: 'Anderson Estate',
      client: 'Michael Anderson',
      type: 'Estate Planning',
      status: 'Active',
      number: '2024-0915',
      hours: 18.0,
      unbilled: 3.5,
      value: '$5,400',
      lastActivity: '1d ago',
      description: 'Estate planning and trust administration for high-net-worth individual.',
      attorney: 'Jane Doe',
      dateOpened: 'November 1, 2024',
      sol: 'N/A',
    },
    {
      id: 3,
      name: 'TechCorp Acquisition',
      client: 'TechCorp Inc.',
      type: 'Corporate',
      status: 'Active',
      number: '2024-0945',
      hours: 86.0,
      unbilled: 12.0,
      value: '$34,400',
      lastActivity: '4h ago',
      description: 'M&A transaction - acquisition of smaller competitor.',
      attorney: 'John Smith',
      dateOpened: 'December 1, 2024',
      sol: 'N/A',
    },
  ];

  const clients = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '(555) 123-4567',
      address: '123 Main Street\nSan Francisco, CA 94102',
      activeMatters: 1,
      totalBilled: '$24,500',
      outstanding: '$3,200',
      since: 'October 2024',
      initials: 'SJ',
      color: 'from-violet-500 to-purple-600',
    },
    {
      id: 2,
      name: 'Michael Anderson',
      email: 'manderson@email.com',
      phone: '(555) 234-5678',
      address: '456 Oak Avenue\nPalo Alto, CA 94301',
      activeMatters: 1,
      totalBilled: '$8,400',
      outstanding: '$1,050',
      since: 'November 2024',
      initials: 'MA',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 3,
      name: 'TechCorp Inc.',
      email: 'legal@techcorp.com',
      phone: '(555) 345-6789',
      address: '789 Tech Park Blvd\nMenlo Park, CA 94025',
      activeMatters: 1,
      totalBilled: '$34,400',
      outstanding: '$4,800',
      since: 'December 2024',
      initials: 'TC',
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  const recentActivities = [
    { time: 'Today, 2:30 PM', event: 'Email sent to opposing counsel re: settlement offer', user: 'JD', type: 'email' },
    { time: 'Today, 11:00 AM', event: "Medical records received from St. Mary's Hospital", user: 'AI', type: 'doc' },
    { time: 'Yesterday', event: 'Phone call with client (18 min) - Case update', user: 'JD', type: 'call' },
    { time: 'Dec 26', event: 'Demand letter drafted and reviewed', user: 'JD', type: 'doc' },
  ];

  const documents = [
    { name: 'Demand Letter v2.pdf', date: 'Dec 26, 2024', size: '245 KB' },
    { name: 'Medical Records - St. Mary.pdf', date: 'Dec 29, 2024', size: '1.2 MB' },
    { name: 'Police Report.pdf', date: 'Oct 20, 2024', size: '890 KB' },
    { name: 'Client Intake Form.pdf', date: 'Oct 15, 2024', size: '156 KB' },
    { name: 'Insurance Correspondence.pdf', date: 'Nov 12, 2024', size: '432 KB' },
  ];

  // Navigation Items
  const navItems = [
    { id: 'matters', label: 'Matters', icon: '📁' },
    { id: 'clients', label: 'Clients', icon: '👥' },
    { id: 'time', label: 'Time', icon: '⏱️' },
    { id: 'calendar', label: 'Calendar', icon: '📅' },
  ];

  // Matters List Screen - Light Mode
  const MattersListScreen = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">Matters</h1>
          <p className="text-sm text-slate-500">{matters.length} active matters</p>
        </div>
        <button
          onClick={() => setShowNewMatter(true)}
          className="btn-primary px-4 py-2.5 rounded-xl text-sm font-semibold text-white active-scale touch-action"
        >
          + New
        </button>
      </div>

      <div className="space-y-3">
        {matters.map((matter) => (
          <div
            key={matter.id}
            onClick={() => setSelectedMatter(matter)}
            className="bg-white border border-slate-200 rounded-2xl p-4 cursor-pointer hover:shadow-md hover:border-slate-300 active-scale touch-action transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xl flex-shrink-0 shadow-lg shadow-blue-500/20">
                📁
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-slate-900 truncate">{matter.name}</h3>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {matter.status}
                  </span>
                </div>
                <p className="text-sm text-slate-600 truncate">{matter.client} • {matter.type}</p>
                <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                  <span className="mono font-medium text-slate-700">{matter.hours} hrs</span>
                  <span>{matter.lastActivity}</span>
                </div>
              </div>
              <span className="text-slate-400 text-lg">›</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Matter Detail Screen - Light Mode
  const MatterDetailScreen = ({ matter }) => (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => setSelectedMatter(null)}
          className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 active-scale touch-action transition-colors"
        >
          ←
        </button>
        <div className="flex-1">
          <h1 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">{matter.name}</h1>
          <p className="text-sm text-slate-500">{matter.type} • #{matter.number}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
        <button
          onClick={() => setShowTimeEntry(true)}
          className="btn-primary px-4 py-2.5 rounded-xl text-sm font-semibold text-white flex items-center gap-2 flex-shrink-0 active-scale touch-action"
        >
          ⏱️ Log Time
        </button>
        <button
          onClick={() => setShowDocuments(true)}
          className="btn-secondary px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 flex items-center gap-2 flex-shrink-0 active-scale touch-action"
        >
          📄 Documents
        </button>
        <button className="btn-secondary px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 flex items-center gap-2 flex-shrink-0 active-scale touch-action">
          📧 Email
        </button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Total Hours', value: matter.hours, sub: 'hrs billed' },
          { label: 'Unbilled', value: matter.unbilled, sub: 'hrs pending' },
          { label: 'Value', value: matter.value, sub: 'at $300/hr' },
          { label: 'Last Activity', value: matter.lastActivity.replace(' ago', ''), sub: 'ago' },
        ].map((metric, i) => (
          <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-3 md:p-4">
            <div className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">{metric.label}</div>
            <div className="text-lg md:text-xl font-bold text-slate-900 mono">{metric.value}</div>
            <div className="text-xs text-slate-500">{metric.sub}</div>
          </div>
        ))}
      </div>

      {/* Clio Sync Badge */}
      <div className="sync-badge rounded-xl p-3 flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        <span className="text-sm font-medium">Synced with Clio</span>
        <span className="text-xs text-slate-500 ml-auto">3 min ago</span>
      </div>

      {/* Matter Details */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900 mb-4">Matter Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">Client</div>
            <div className="text-slate-800 font-medium">{matter.client}</div>
          </div>
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">Responsible Attorney</div>
            <div className="text-slate-800 font-medium">{matter.attorney}</div>
          </div>
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">Date Opened</div>
            <div className="text-slate-800 font-medium">{matter.dateOpened}</div>
          </div>
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">Statute of Limitations</div>
            <div className={matter.sol !== 'N/A' ? 'text-amber-600 font-semibold' : 'text-slate-800 font-medium'}>{matter.sol}</div>
          </div>
          <div className="md:col-span-2">
            <div className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">Description</div>
            <div className="text-slate-600">{matter.description}</div>
          </div>
        </div>
      </div>

      {/* AI Suggested Tasks */}
      <div className="relative bg-gradient-to-br from-violet-50 via-white to-indigo-50 border border-violet-200 rounded-2xl p-5 shadow-sm">
        {/* AI Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-100 border border-violet-200">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative rounded-full h-2 w-2 bg-violet-500"></span>
          </span>
          <span className="text-xs font-semibold text-violet-700">AI</span>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <AISparkle />
          <h3 className="font-semibold text-slate-900">AI Suggested Tasks</h3>
        </div>
        <div className="space-y-3">
          {[
            'Follow up on medical records request',
            'Schedule client deposition prep',
            'Review demand letter with client',
          ].map((task, i) => (
            <label key={i} className="flex items-center gap-3 cursor-pointer touch-action group">
              <input type="checkbox" className="w-5 h-5 rounded-lg border-slate-300 text-emerald-500 focus:ring-emerald-500/20" />
              <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">{task}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-slate-900">Recent Activity</h3>
          <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">View all →</button>
        </div>
        <div className="space-y-4">
          {recentActivities.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                item.user === 'AI'
                  ? 'bg-violet-100 text-violet-700'
                  : 'bg-slate-100 text-slate-700'
              }`}>
                {item.user}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-slate-800">{item.event}</div>
                <div className="text-xs text-slate-500">{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Contacts */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900 mb-3">Related Contacts</h3>
        <div className="space-y-3">
          {[
            { name: 'Sarah Johnson', role: 'Client', initials: 'SJ', color: 'from-emerald-500 to-teal-600' },
            { name: 'Robert Smith', role: 'Defendant', initials: 'RS', color: 'from-red-500 to-rose-600' },
            { name: 'James Wilson', role: 'Opposing Counsel', initials: 'JW', color: 'from-slate-500 to-slate-600' },
          ].map((contact, i) => (
            <div key={i} className="flex items-center gap-3 p-2 -mx-2 rounded-xl hover:bg-slate-50 cursor-pointer touch-action transition-colors">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center text-xs font-bold text-white shadow-md`}>
                {contact.initials}
              </div>
              <div>
                <div className="text-sm font-medium text-slate-900">{contact.name}</div>
                <div className="text-xs text-slate-500">{contact.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Clients List Screen - Light Mode
  const ClientsListScreen = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">Clients</h1>
          <p className="text-sm text-slate-500">{clients.length} clients</p>
        </div>
        <button className="btn-primary px-4 py-2.5 rounded-xl text-sm font-semibold text-white active-scale touch-action">
          + New
        </button>
      </div>

      <div className="space-y-3">
        {clients.map((client) => (
          <div
            key={client.id}
            onClick={() => setSelectedClient(client)}
            className="bg-white border border-slate-200 rounded-2xl p-4 cursor-pointer hover:shadow-md hover:border-slate-300 active-scale touch-action transition-all"
          >
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${client.color} flex items-center justify-center text-base font-bold text-white flex-shrink-0 shadow-lg`}>
                {client.initials}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-900 truncate">{client.name}</h3>
                <p className="text-sm text-slate-500 truncate">{client.email}</p>
                <div className="flex items-center gap-4 mt-1 text-xs text-slate-500">
                  <span>{client.activeMatters} matter{client.activeMatters > 1 ? 's' : ''}</span>
                  <span className="mono font-medium text-slate-700">{client.totalBilled} billed</span>
                </div>
              </div>
              <span className="text-slate-400 text-lg">›</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Client Detail Screen - Light Mode
  const ClientDetailScreen = ({ client }) => (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => setSelectedClient(null)}
          className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 active-scale touch-action transition-colors"
        >
          ←
        </button>
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${client.color} flex items-center justify-center text-base font-bold text-white flex-shrink-0 shadow-lg`}>
          {client.initials}
        </div>
        <div className="flex-1">
          <h1 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">{client.name}</h1>
          <p className="text-sm text-slate-500">{client.email}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button className="btn-primary px-4 py-2.5 rounded-xl text-sm font-semibold text-white flex items-center gap-2 flex-1 justify-center active-scale touch-action">
          📞 Call
        </button>
        <button className="btn-secondary px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 flex items-center gap-2 flex-1 justify-center active-scale touch-action">
          📧 Email
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Active Matters', value: client.activeMatters, icon: '📁' },
          { label: 'Total Billed', value: client.totalBilled, icon: '💰' },
          { label: 'Outstanding', value: client.outstanding, icon: '⏳' },
        ].map((stat, i) => (
          <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
            <div className="text-xl mb-1">{stat.icon}</div>
            <div className="text-lg font-bold text-slate-900 mono">{stat.value}</div>
            <div className="text-xs text-slate-500">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Clio Sync */}
      <div className="sync-badge rounded-xl p-3 flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        <span className="text-sm font-medium">Synced with Clio</span>
      </div>

      {/* Contact Details */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900 mb-3">Contact Details</h3>
        <div className="space-y-3 text-sm">
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">Phone</div>
            <div className="text-slate-800 font-medium">{client.phone}</div>
          </div>
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">Address</div>
            <div className="text-slate-600 whitespace-pre-line">{client.address}</div>
          </div>
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">Client Since</div>
            <div className="text-slate-800 font-medium">{client.since}</div>
          </div>
        </div>
      </div>

      {/* Client Matters */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900 mb-3">Matters</h3>
        <div className="space-y-3">
          {matters.filter(m => m.client === client.name).map((matter, i) => (
            <div
              key={i}
              onClick={() => {
                setSelectedClient(null);
                setSelectedMatter(matter);
                setCurrentScreen('matters');
              }}
              className="flex items-center justify-between p-3 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 active-scale touch-action transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">📁</div>
                <div>
                  <div className="font-medium text-slate-900">{matter.name}</div>
                  <div className="text-sm text-slate-500">{matter.type}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                  matter.status === 'Active'
                    ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200'
                    : 'bg-slate-100 text-slate-600'
                }`}>
                  {matter.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Communications */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900 mb-3">Recent Communications</h3>
        <div className="space-y-3">
          {[
            { type: '📧', desc: 'Case update email', time: '2 hrs ago' },
            { type: '📞', desc: 'Phone call (18 min)', time: 'Yesterday' },
            { type: '📧', desc: 'Document request', time: 'Dec 26' },
          ].map((comm, i) => (
            <div key={i} className="flex items-center gap-3 text-sm p-2 -mx-2 rounded-xl hover:bg-slate-50 transition-colors">
              <span className="text-lg">{comm.type}</span>
              <span className="flex-1 text-slate-700">{comm.desc}</span>
              <span className="text-xs text-slate-500">{comm.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Time Entry Screen - Light Mode
  const TimeEntryScreen = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">Time Entries</h1>
          <p className="text-sm text-slate-500">Today: 4.5 hrs logged</p>
        </div>
        <button
          onClick={() => setShowTimeEntry(true)}
          className="btn-primary px-4 py-2.5 rounded-xl text-sm font-semibold text-white active-scale touch-action"
        >
          + Log Time
        </button>
      </div>

      {/* AI Detection Banner */}
      <div className="relative bg-gradient-to-br from-violet-50 via-white to-indigo-50 border border-violet-200 rounded-2xl p-5 shadow-sm">
        {/* AI Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-100 border border-violet-200">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative rounded-full h-2 w-2 bg-violet-500"></span>
          </span>
          <span className="text-xs font-semibold text-violet-700">AI</span>
        </div>

        <div className="flex items-start gap-3">
          <AISparkle />
          <div className="flex-1">
            <div className="text-sm font-semibold text-slate-900 mb-1">AI Detected Activity</div>
            <p className="text-sm text-slate-600 mb-3">
              Email correspondence with opposing counsel regarding discovery requests
            </p>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500 mb-1.5">Confidence</div>
                <div className="flex items-center gap-3">
                  <div className="confidence-bar w-24">
                    <div className="confidence-fill" style={{ width: '94%' }}></div>
                  </div>
                  <span className="text-sm font-mono font-semibold text-emerald-600">94%</span>
                </div>
              </div>
              <button
                onClick={() => setShowTimeEntry(true)}
                className="text-sm font-medium text-emerald-600 hover:text-emerald-700 active-scale touch-action transition-colors"
              >
                Log this →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Entries */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900 mb-4">Today</h3>
        <div className="space-y-3">
          {[
            { matter: 'Johnson v. Smith', desc: 'Email correspondence re: settlement', duration: '0:24', billable: true },
            { matter: 'Anderson Estate', desc: 'Document review - trust amendment', duration: '1:30', billable: true },
            { matter: 'TechCorp Acquisition', desc: 'Conference call with all parties', duration: '2:00', billable: true },
            { matter: 'Admin', desc: 'Internal team meeting', duration: '0:30', billable: false },
          ].map((entry, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
              <div className="flex-1">
                <div className="font-medium text-slate-900 text-sm">{entry.matter}</div>
                <div className="text-sm text-slate-500">{entry.desc}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-sm font-semibold text-slate-900 mono">{entry.duration}</div>
                <div className={`text-xs font-medium ${entry.billable ? 'text-emerald-600' : 'text-slate-500'}`}>
                  {entry.billable ? 'Billable' : 'Non-billable'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Summary */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900 mb-4">This Week</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">Total Hours</div>
            <div className="text-2xl font-bold text-slate-900 mono">24.5</div>
          </div>
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">Billable</div>
            <div className="text-2xl font-bold text-emerald-600 mono">22.0</div>
          </div>
        </div>
      </div>
    </div>
  );

  // Calendar Screen - Light Mode
  const CalendarScreen = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">Calendar</h1>
          <p className="text-sm text-slate-500">December 2024</p>
        </div>
        <button className="btn-primary px-4 py-2.5 rounded-xl text-sm font-semibold text-white active-scale touch-action">
          + Event
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900 mb-4">Today's Schedule</h3>
        <div className="space-y-3">
          {[
            { time: '9:00 AM', title: 'Client Call - Johnson', type: 'call' },
            { time: '11:00 AM', title: 'Document Review', type: 'task' },
            { time: '2:00 PM', title: 'Deposition Prep - TechCorp', type: 'meeting' },
            { time: '4:00 PM', title: 'Team Standup', type: 'meeting' },
          ].map((event, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
              <div className="text-sm text-slate-500 mono w-16 font-medium">{event.time}</div>
              <div className="flex-1">
                <div className="font-medium text-slate-900 text-sm">{event.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900 mb-4">Upcoming Deadlines</h3>
        <div className="space-y-3">
          {[
            { date: 'Dec 31', title: 'Discovery Response Due - Johnson v. Smith', urgent: true },
            { date: 'Jan 5', title: 'Filing Deadline - Anderson Estate', urgent: false },
            { date: 'Jan 10', title: 'Closing Date - TechCorp Acquisition', urgent: false },
          ].map((deadline, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
              <div className={`text-sm mono w-16 font-medium ${deadline.urgent ? 'text-red-600' : 'text-slate-500'}`}>
                {deadline.date}
              </div>
              <div className="flex-1">
                <div className="font-medium text-slate-900 text-sm">{deadline.title}</div>
              </div>
              {deadline.urgent && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 ring-1 ring-red-200 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  Urgent
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Time Entry Modal Content - Light Mode
  const TimeEntryModalContent = () => (
    <div className="space-y-5">
      {/* AI Detection Banner */}
      <div className="relative bg-gradient-to-br from-violet-50 via-white to-indigo-50 border border-violet-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <AISparkle />
          <div className="flex-1">
            <div className="text-sm font-semibold text-slate-900 mb-1">AI Detected Activity</div>
            <p className="text-sm text-slate-600 mb-3">
              Email correspondence with opposing counsel regarding discovery requests
            </p>
            <div className="flex items-center gap-4">
              <div>
                <div className="text-xs text-slate-500 mb-1">Confidence</div>
                <div className="flex items-center gap-2">
                  <div className="confidence-bar w-20">
                    <div className="confidence-fill" style={{ width: '94%' }}></div>
                  </div>
                  <span className="text-xs font-mono font-semibold text-emerald-600">94%</span>
                </div>
              </div>
              <button className="text-xs font-medium text-emerald-600 hover:text-emerald-700 transition-colors">Apply suggestion →</button>
            </div>
          </div>
        </div>
      </div>

      {/* Matter Selection */}
      <div>
        <label className="text-xs text-slate-500 uppercase tracking-wider font-medium block mb-2">Matter</label>
        <select className="input-field">
          <option>Johnson v. Smith - Personal Injury</option>
          <option>Anderson Estate - Estate Planning</option>
          <option>TechCorp Acquisition - Corporate</option>
        </select>
      </div>

      {/* Duration */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-slate-500 uppercase tracking-wider font-medium block mb-2">Duration</label>
          <div className="flex items-center gap-2">
            <input type="text" className="input-field text-center" defaultValue="0" style={{ width: '60px' }} />
            <span className="text-slate-400">:</span>
            <input type="text" className="input-field text-center" defaultValue="24" style={{ width: '60px' }} />
            <span className="text-xs text-slate-500 ml-1">h : m</span>
          </div>
        </div>
        <div>
          <label className="text-xs text-slate-500 uppercase tracking-wider font-medium block mb-2">Date</label>
          <input type="text" className="input-field" defaultValue="Dec 29, 2024" />
        </div>
      </div>

      {/* Activity Type */}
      <div>
        <label className="text-xs text-slate-500 uppercase tracking-wider font-medium block mb-2">Activity Type</label>
        <div className="grid grid-cols-4 gap-2">
          {[
            { id: 'email', icon: '📧', label: 'Email' },
            { id: 'call', icon: '📞', label: 'Call' },
            { id: 'doc', icon: '📄', label: 'Document' },
            { id: 'research', icon: '🔍', label: 'Research' },
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => setActivityType(type.id)}
              className={`p-3 rounded-xl text-center transition-all active-scale touch-action ${
                activityType === type.id
                  ? 'bg-emerald-50 border-2 border-emerald-500 ring-2 ring-emerald-500/20'
                  : 'bg-slate-50 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span className="text-lg block">{type.icon}</span>
              <span className={`text-xs ${activityType === type.id ? 'text-emerald-700 font-medium' : 'text-slate-600'}`}>{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="text-xs text-slate-500 uppercase tracking-wider font-medium block mb-2">Description</label>
        <textarea
          className="input-field"
          rows={3}
          defaultValue="Email correspondence with opposing counsel regarding discovery requests and document production schedule."
        />
      </div>

      {/* Billable Toggle */}
      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
        <div>
          <div className="text-sm font-medium text-slate-900">Billable</div>
          <div className="text-xs text-slate-500">Include in invoices</div>
        </div>
        <button
          onClick={() => setIsBillable(!isBillable)}
          className={`w-12 h-7 rounded-full relative transition-colors ${isBillable ? 'bg-emerald-500' : 'bg-slate-300'}`}
        >
          <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-all ${isBillable ? 'right-1' : 'left-1'}`} />
        </button>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={() => setShowTimeEntry(false)}
          className="btn-secondary flex-1 py-3 rounded-xl text-sm font-semibold text-slate-700 active-scale touch-action"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            setShowTimeEntry(false);
            showSuccessToast('Time entry saved');
          }}
          className="btn-primary flex-1 py-3 rounded-xl text-sm font-semibold text-white active-scale touch-action"
        >
          Save Entry
        </button>
      </div>
    </div>
  );

  // Documents Modal Content - Light Mode
  const DocumentsModalContent = () => (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search documents..."
            className="input-field pl-10"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
        </div>
        <button className="btn-primary px-4 py-3 rounded-xl text-sm font-semibold text-white active-scale touch-action">
          Upload
        </button>
      </div>

      {documents.map((doc, i) => (
        <div
          key={i}
          className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 active-scale touch-action transition-colors"
        >
          <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-lg text-red-600">
            📄
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-medium text-slate-900 text-sm truncate">{doc.name}</div>
            <div className="text-xs text-slate-500">{doc.date} • {doc.size}</div>
          </div>
          <button className="text-slate-400 p-2 hover:text-slate-600 transition-colors">⋮</button>
        </div>
      ))}
    </div>
  );

  // New Matter Modal Content - Light Mode
  const NewMatterModalContent = () => (
    <div className="space-y-4">
      <div>
        <label className="text-xs text-slate-500 uppercase tracking-wider font-medium block mb-2">Matter Name</label>
        <input type="text" className="input-field" placeholder="e.g., Smith v. Jones" />
      </div>

      <div>
        <label className="text-xs text-slate-500 uppercase tracking-wider font-medium block mb-2">Client</label>
        <select className="input-field">
          <option value="">Select a client...</option>
          {clients.map((client) => (
            <option key={client.id} value={client.id}>{client.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-xs text-slate-500 uppercase tracking-wider font-medium block mb-2">Practice Area</label>
        <select className="input-field">
          <option value="">Select practice area...</option>
          <option>Personal Injury</option>
          <option>Corporate</option>
          <option>Estate Planning</option>
          <option>Real Estate</option>
          <option>Family Law</option>
        </select>
      </div>

      <div>
        <label className="text-xs text-slate-500 uppercase tracking-wider font-medium block mb-2">Description</label>
        <textarea className="input-field" rows={3} placeholder="Brief description of the matter..." />
      </div>

      <div className="flex gap-3 pt-2">
        <button
          onClick={() => setShowNewMatter(false)}
          className="btn-secondary flex-1 py-3 rounded-xl text-sm font-semibold text-slate-700 active-scale touch-action"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            setShowNewMatter(false);
            showSuccessToast('Matter created');
          }}
          className="btn-primary flex-1 py-3 rounded-xl text-sm font-semibold text-white active-scale touch-action"
        >
          Create Matter
        </button>
      </div>
    </div>
  );

  // Render current screen content
  const renderScreen = () => {
    if (selectedMatter) {
      return <MatterDetailScreen matter={selectedMatter} />;
    }
    if (selectedClient) {
      return <ClientDetailScreen client={selectedClient} />;
    }

    switch (currentScreen) {
      case 'matters':
        return <MattersListScreen />;
      case 'clients':
        return <ClientsListScreen />;
      case 'time':
        return <TimeEntryScreen />;
      case 'calendar':
        return <CalendarScreen />;
      default:
        return <MattersListScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Header - Light Mode */}
      <header className="hidden md:block fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-emerald-500/20">
                C
              </div>
              <span className="font-semibold text-slate-900">Copper Legal</span>
            </div>
            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentScreen(item.id);
                    setSelectedMatter(null);
                    setSelectedClient(null);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    currentScreen === item.id && !selectedMatter && !selectedClient
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.icon} {item.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowTimeEntry(true)}
              className="btn-primary px-4 py-2 rounded-lg text-sm font-semibold text-white"
            >
              ⏱️ Log Time
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-violet-500/20">
              JD
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header - Light Mode */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-40">
        <div className="px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-emerald-500/20">
              C
            </div>
            <span className="font-semibold text-slate-900">Copper Legal</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowTimeEntry(true)}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20"
            >
              ⏱️
            </button>
            <button
              onClick={() => setShowMobileMenu(true)}
              className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-14 md:pt-16 pb-20 md:pb-8 px-4 md:px-6">
        <div className="max-w-6xl mx-auto py-4 md:py-6">
          {renderScreen()}
        </div>
      </main>

      {/* Mobile Bottom Navigation - Light Mode */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 z-40 bottom-nav">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentScreen(item.id);
                setSelectedMatter(null);
                setSelectedClient(null);
              }}
              className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                currentScreen === item.id && !selectedMatter && !selectedClient
                  ? 'text-emerald-600'
                  : 'text-slate-500'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Sheet - Light Mode */}
      <BottomSheet
        isOpen={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
        title="Menu"
      >
        <div className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentScreen(item.id);
                setSelectedMatter(null);
                setSelectedClient(null);
                setShowMobileMenu(false);
              }}
              className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-left active-scale touch-action transition-colors"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium text-slate-900">{item.label}</span>
            </button>
          ))}
          <hr className="border-slate-200 my-4" />
          <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-left active-scale touch-action transition-colors">
            <span className="text-xl">⚙️</span>
            <span className="font-medium text-slate-900">Settings</span>
          </button>
          <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-left active-scale touch-action transition-colors">
            <span className="text-xl">❓</span>
            <span className="font-medium text-slate-900">Help & Support</span>
          </button>
        </div>
      </BottomSheet>

      {/* Time Entry Modal */}
      <Modal
        isOpen={showTimeEntry}
        onClose={() => setShowTimeEntry(false)}
        title="New Time Entry"
      >
        <TimeEntryModalContent />
      </Modal>

      {/* Documents Modal */}
      <Modal
        isOpen={showDocuments}
        onClose={() => setShowDocuments(false)}
        title="Documents"
      >
        <DocumentsModalContent />
      </Modal>

      {/* New Matter Modal */}
      <Modal
        isOpen={showNewMatter}
        onClose={() => setShowNewMatter(false)}
        title="New Matter"
      >
        <NewMatterModalContent />
      </Modal>

      {/* Success Toast */}
      <Toast message={toastMessage} isVisible={showToast} />

      {/* Prototype Label - Light Mode */}
      <div className="hidden md:block fixed bottom-4 left-1/2 -translate-x-1/2 bg-white border border-slate-200 rounded-xl px-6 py-3 shadow-lg z-50">
        <div className="text-sm text-slate-600">
          Copper Legal Prototype • <span className="text-emerald-600 font-medium">Mobile Responsive</span>
        </div>
      </div>
    </div>
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CopperLegalPrototype />);
