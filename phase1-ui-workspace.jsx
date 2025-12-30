import React, { useState } from 'react';

const Phase1UIUX = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedMatter, setSelectedMatter] = useState(null);
  const [timeEntryExpanded, setTimeEntryExpanded] = useState(true);

  const navItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'matters', icon: '📁', label: 'Matters' },
    { id: 'clients', icon: '👥', label: 'Clients' },
    { id: 'time', icon: '⏱️', label: 'Time' },
    { id: 'calendar', icon: '📅', label: 'Calendar' },
  ];

  const recentMatters = [
    { id: 1, name: 'Johnson v. Smith', client: 'Sarah Johnson', type: 'Personal Injury', status: 'Active', hours: 12.5, lastActivity: '2 hours ago' },
    { id: 2, name: 'Anderson Estate', client: 'Anderson Family Trust', type: 'Estate Planning', status: 'Active', hours: 8.2, lastActivity: '4 hours ago' },
    { id: 3, name: 'TechCorp Acquisition', client: 'TechCorp Inc.', type: 'Corporate', status: 'Review', hours: 24.0, lastActivity: 'Yesterday' },
  ];

  const pendingTimeEntries = [
    { id: 1, activity: 'Email correspondence - Johnson case', duration: '0.4 hrs', matter: 'Johnson v. Smith', confidence: 94, source: 'Email' },
    { id: 2, activity: 'Document review - Estate planning docs', duration: '1.2 hrs', matter: 'Anderson Estate', confidence: 87, source: 'Document' },
    { id: 3, activity: 'Legal research - liability precedents', duration: '0.8 hrs', matter: 'Johnson v. Smith', confidence: 91, source: 'Browser' },
    { id: 4, activity: 'Phone call with opposing counsel', duration: '0.3 hrs', matter: 'TechCorp Acquisition', confidence: 98, source: 'Call' },
  ];

  const todayStats = [
    { label: 'Billable Hours', value: '6.2', trend: '+1.4 vs avg', positive: true },
    { label: 'Time Captured', value: '94%', trend: 'AI-assisted', positive: true },
    { label: 'Pending Review', value: '4', trend: 'entries', positive: null },
    { label: 'Active Matters', value: '12', trend: '3 need attention', positive: false },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        
        .sidebar-item {
          transition: all 0.2s ease;
        }
        .sidebar-item:hover {
          background: rgba(16, 185, 129, 0.1);
        }
        .sidebar-item.active {
          background: linear-gradient(90deg, rgba(16, 185, 129, 0.15), transparent);
          border-left: 2px solid #10b981;
        }
        
        .card {
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(71, 85, 105, 0.3);
          backdrop-filter: blur(12px);
          transition: all 0.2s ease;
        }
        .card:hover {
          border-color: rgba(16, 185, 129, 0.3);
        }
        
        .time-entry {
          transition: all 0.2s ease;
        }
        .time-entry:hover {
          background: rgba(16, 185, 129, 0.05);
        }
        
        .confidence-high { color: #10b981; }
        .confidence-med { color: #f59e0b; }
        
        .btn-primary {
          background: linear-gradient(135deg, #10b981, #059669);
          transition: all 0.2s ease;
        }
        .btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }
        
        .pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        
        .status-active { background: rgba(16, 185, 129, 0.15); color: #10b981; }
        .status-review { background: rgba(245, 158, 11, 0.15); color: #f59e0b; }
        
        .source-badge {
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 4px;
          background: rgba(99, 102, 241, 0.15);
          color: #818cf8;
        }
      `}</style>

      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-slate-900/80 border-r border-slate-800 flex flex-col">
          {/* Logo */}
          <div className="p-5 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <span className="text-xl">⚖️</span>
              </div>
              <div>
                <div className="font-semibold text-white">LegalAI</div>
                <div className="text-xs text-slate-500">Practice Management</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`sidebar-item w-full flex items-center gap-3 px-5 py-3 text-left ${
                  activeTab === item.id ? 'active text-white' : 'text-slate-400'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Clio Sync Status */}
          <div className="p-4 border-t border-slate-800">
            <div className="bg-slate-800/50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full pulse"></div>
                <span className="text-xs text-slate-400">Clio Connected</span>
              </div>
              <div className="text-xs text-slate-500">Last sync: 2 min ago</div>
            </div>
          </div>

          {/* User */}
          <div className="p-4 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-sm font-semibold">
                JD
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white truncate">Jane Doe</div>
                <div className="text-xs text-slate-500">Partner</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/50">
            <div>
              <h1 className="text-xl font-semibold text-white">Good afternoon, Jane</h1>
              <p className="text-sm text-slate-500">Monday, December 29, 2025</p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search matters, clients..."
                  className="w-64 bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">⌘K</span>
              </div>
              
              {/* Notifications */}
              <button className="relative p-2 text-slate-400 hover:text-white">
                <span className="text-xl">🔔</span>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="flex-1 overflow-auto p-6 bg-slate-950">
            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {todayStats.map((stat, i) => (
                <div key={i} className="card rounded-xl p-4">
                  <div className="text-sm text-slate-400 mb-1">{stat.label}</div>
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-bold text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {stat.value}
                    </span>
                    <span className={`text-xs ${stat.positive === true ? 'text-emerald-400' : stat.positive === false ? 'text-amber-400' : 'text-slate-500'}`}>
                      {stat.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Left Column - Time Tracking */}
              <div className="col-span-2 space-y-6">
                {/* AI Time Capture Panel */}
                <div className="card rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        <span className="text-emerald-400">🧠</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">AI Time Capture</h3>
                        <p className="text-xs text-slate-500">4 entries pending review</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setTimeEntryExpanded(!timeEntryExpanded)}
                      className="text-slate-400 hover:text-white"
                    >
                      {timeEntryExpanded ? '▼' : '▶'}
                    </button>
                  </div>
                  
                  {timeEntryExpanded && (
                    <div className="divide-y divide-slate-800/50">
                      {pendingTimeEntries.map((entry) => (
                        <div key={entry.id} className="time-entry p-4 flex items-center gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="source-badge">{entry.source}</span>
                              <span className="text-sm text-white">{entry.activity}</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-slate-500">
                              <span>📁 {entry.matter}</span>
                              <span>•</span>
                              <span className={entry.confidence >= 90 ? 'confidence-high' : 'confidence-med'}>
                                {entry.confidence}% confidence
                              </span>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-sm font-medium text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                              {entry.duration}
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <button className="btn-primary px-3 py-1.5 rounded-lg text-xs font-medium text-white">
                              Approve
                            </button>
                            <button className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-slate-800">
                              Edit
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="p-4 bg-slate-800/30 flex items-center justify-between">
                    <span className="text-sm text-slate-400">Total pending: <span className="text-white font-medium">2.7 hrs</span></span>
                    <button className="btn-primary px-4 py-2 rounded-lg text-sm font-medium text-white">
                      Approve All →
                    </button>
                  </div>
                </div>

                {/* Recent Matters */}
                <div className="card rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
                    <h3 className="font-semibold text-white">Recent Matters</h3>
                    <button className="text-sm text-emerald-400 hover:text-emerald-300">View all →</button>
                  </div>
                  
                  <div className="divide-y divide-slate-800/50">
                    {recentMatters.map((matter) => (
                      <div 
                        key={matter.id} 
                        className="p-4 flex items-center gap-4 hover:bg-slate-800/30 cursor-pointer transition-colors"
                        onClick={() => setSelectedMatter(matter)}
                      >
                        <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-lg">
                          📁
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-white">{matter.name}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              matter.status === 'Active' ? 'status-active' : 'status-review'
                            }`}>
                              {matter.status}
                            </span>
                          </div>
                          <div className="text-sm text-slate-500">{matter.client} • {matter.type}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                            {matter.hours} hrs
                          </div>
                          <div className="text-xs text-slate-500">{matter.lastActivity}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <div className="card rounded-xl p-4">
                  <h3 className="font-semibold text-white mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: '➕', label: 'New Matter' },
                      { icon: '👤', label: 'Add Client' },
                      { icon: '⏱️', label: 'Log Time' },
                      { icon: '📄', label: 'New Doc' },
                    ].map((action, i) => (
                      <button 
                        key={i}
                        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
                      >
                        <span className="text-xl">{action.icon}</span>
                        <span className="text-xs text-slate-400">{action.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Activity Timeline */}
                <div className="card rounded-xl p-4">
                  <h3 className="font-semibold text-white mb-4">Today's Activity</h3>
                  <div className="space-y-4">
                    {[
                      { time: '2:30 PM', event: 'Email sent to Sarah Johnson', type: 'email' },
                      { time: '1:15 PM', event: 'Document uploaded to Anderson Estate', type: 'doc' },
                      { time: '11:00 AM', event: 'Call with TechCorp (24 min)', type: 'call' },
                      { time: '9:45 AM', event: 'Clio sync completed', type: 'sync' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="text-xs text-slate-500 w-16 pt-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          {item.time}
                        </div>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5"></div>
                        <div className="flex-1 text-sm text-slate-300">{item.event}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Insights */}
                <div className="card rounded-xl p-4 border-emerald-500/20 bg-emerald-500/5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">💡</span>
                    <h3 className="font-semibold text-white">AI Insight</h3>
                  </div>
                  <p className="text-sm text-slate-300 mb-3">
                    You typically bill 2.3 more hours on Mondays. Consider reviewing the Anderson Estate documents during your afternoon focus block.
                  </p>
                  <button className="text-sm text-emerald-400 hover:text-emerald-300">
                    Show me the documents →
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Design Annotations Overlay */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 rounded-xl px-6 py-3 flex items-center gap-6 shadow-2xl">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-emerald-500"></span>
          <span className="text-xs text-slate-400">Primary Actions</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-violet-500"></span>
          <span className="text-xs text-slate-400">AI-Powered</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-blue-500"></span>
          <span className="text-xs text-slate-400">Clio Synced</span>
        </div>
        <div className="text-xs text-slate-500 border-l border-slate-700 pl-6">
          Phase 1 UI/UX • Attorney Workspace
        </div>
      </div>
    </div>
  );
};

export default Phase1UIUX;
