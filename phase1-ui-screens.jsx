import React, { useState } from 'react';

const Phase1UIScreens = () => {
  const [currentScreen, setCurrentScreen] = useState('matter');

  const screens = [
    { id: 'matter', label: 'Matter Detail' },
    { id: 'time', label: 'Time Entry' },
    { id: 'client', label: 'Client View' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        
        .card {
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(71, 85, 105, 0.3);
          backdrop-filter: blur(12px);
        }
        
        .tab-active {
          background: linear-gradient(135deg, #10b981, #059669);
        }
        
        .field-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #64748b;
          margin-bottom: 4px;
        }
        
        .input-field {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid rgba(71, 85, 105, 0.5);
          border-radius: 8px;
          padding: 10px 12px;
          color: white;
          width: 100%;
          transition: all 0.2s;
        }
        .input-field:focus {
          outline: none;
          border-color: #10b981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }
        
        .timeline-line {
          background: linear-gradient(180deg, #10b981, transparent);
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #10b981, #059669);
        }
        
        .btn-secondary {
          background: rgba(51, 65, 85, 0.5);
          border: 1px solid rgba(71, 85, 105, 0.5);
        }
        
        .confidence-bar {
          height: 4px;
          background: rgba(71, 85, 105, 0.3);
          border-radius: 2px;
          overflow: hidden;
        }
        .confidence-fill {
          height: 100%;
          background: linear-gradient(90deg, #10b981, #34d399);
          border-radius: 2px;
        }
        
        .ai-badge {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(16, 185, 129, 0.2));
          border: 1px solid rgba(139, 92, 246, 0.3);
        }
      `}</style>

      {/* Screen Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-slate-900 rounded-xl p-1 border border-slate-800">
          {screens.map((screen) => (
            <button
              key={screen.id}
              onClick={() => setCurrentScreen(screen.id)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                currentScreen === screen.id 
                  ? 'tab-active text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {screen.label}
            </button>
          ))}
        </div>
      </div>

      {/* Matter Detail Screen */}
      {currentScreen === 'matter' && (
        <div className="max-w-6xl mx-auto">
          <div className="card rounded-2xl overflow-hidden">
            {/* Matter Header */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 border-b border-slate-700/50">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-2xl">
                    📁
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h1 className="text-2xl font-bold text-white">Johnson v. Smith</h1>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-400">Active</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span>👤 Sarah Johnson</span>
                      <span>•</span>
                      <span>Personal Injury</span>
                      <span>•</span>
                      <span>Matter #2024-0892</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="btn-secondary px-4 py-2 rounded-lg text-sm font-medium text-white">
                    📄 Documents
                  </button>
                  <button className="btn-primary px-4 py-2 rounded-lg text-sm font-medium text-white">
                    ⏱️ Log Time
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 grid grid-cols-3 gap-6">
              {/* Left Column - Matter Info */}
              <div className="col-span-2 space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: 'Total Hours', value: '42.5', sub: 'hrs billed' },
                    { label: 'Unbilled', value: '8.2', sub: 'hrs pending' },
                    { label: 'Value', value: '$12,750', sub: 'at $300/hr' },
                    { label: 'Last Activity', value: '2h', sub: 'ago' },
                  ].map((metric, i) => (
                    <div key={i} className="bg-slate-800/50 rounded-xl p-4">
                      <div className="text-xs text-slate-500 mb-1">{metric.label}</div>
                      <div className="text-xl font-bold text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-slate-500">{metric.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Matter Details */}
                <div className="bg-slate-800/30 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-4">Matter Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="field-label">Practice Area</div>
                      <div className="text-white">Personal Injury - Auto Accident</div>
                    </div>
                    <div>
                      <div className="field-label">Responsible Attorney</div>
                      <div className="text-white">Jane Doe</div>
                    </div>
                    <div>
                      <div className="field-label">Date Opened</div>
                      <div className="text-white">October 15, 2024</div>
                    </div>
                    <div>
                      <div className="field-label">Statute of Limitations</div>
                      <div className="text-amber-400">October 15, 2026</div>
                    </div>
                    <div className="col-span-2">
                      <div className="field-label">Description</div>
                      <div className="text-slate-300 text-sm">
                        Motor vehicle accident on Highway 101. Client sustained injuries requiring surgery. Defendant ran red light. Multiple witnesses available.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-slate-800/30 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-white">Recent Activity</h3>
                    <button className="text-sm text-emerald-400">View all →</button>
                  </div>
                  <div className="space-y-4">
                    {[
                      { time: 'Today, 2:30 PM', event: 'Email sent to opposing counsel re: settlement offer', user: 'JD', type: 'email' },
                      { time: 'Today, 11:00 AM', event: 'Medical records received from St. Mary\'s Hospital', user: 'AI', type: 'doc' },
                      { time: 'Yesterday', event: 'Phone call with client (18 min) - Case update', user: 'JD', type: 'call' },
                      { time: 'Dec 26', event: 'Demand letter drafted and reviewed', user: 'JD', type: 'doc' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-xs font-medium">
                          {item.user}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-white">{item.event}</div>
                          <div className="text-xs text-slate-500">{item.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                {/* Clio Sync */}
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm font-medium text-blue-300">Synced with Clio</span>
                  </div>
                  <div className="text-xs text-slate-400">Last sync: 3 minutes ago</div>
                </div>

                {/* Related Contacts */}
                <div className="bg-slate-800/30 rounded-xl p-4">
                  <h3 className="font-semibold text-white mb-3">Related Contacts</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Sarah Johnson', role: 'Client', initials: 'SJ', color: 'from-emerald-500 to-teal-600' },
                      { name: 'Robert Smith', role: 'Defendant', initials: 'RS', color: 'from-red-500 to-rose-600' },
                      { name: 'James Wilson', role: 'Opposing Counsel', initials: 'JW', color: 'from-slate-500 to-slate-600' },
                    ].map((contact, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center text-xs font-medium`}>
                          {contact.initials}
                        </div>
                        <div>
                          <div className="text-sm text-white">{contact.name}</div>
                          <div className="text-xs text-slate-500">{contact.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Tasks */}
                <div className="ai-badge rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span>🧠</span>
                    <h3 className="font-semibold text-white">AI Suggested Tasks</h3>
                  </div>
                  <div className="space-y-2">
                    {[
                      'Follow up on medical records request',
                      'Schedule client deposition prep',
                      'Review demand letter with client',
                    ].map((task, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <input type="checkbox" className="rounded" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Time Entry Screen */}
      {currentScreen === 'time' && (
        <div className="max-w-2xl mx-auto">
          <div className="card rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-6 border-b border-emerald-500/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-2xl">
                  ⏱️
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">New Time Entry</h2>
                  <p className="text-sm text-emerald-300/70">AI-assisted time capture</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-5">
              {/* AI Detection Banner */}
              <div className="ai-badge rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl">🧠</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white mb-1">AI Detected Activity</div>
                    <p className="text-sm text-slate-300 mb-3">
                      Email correspondence with opposing counsel regarding discovery requests
                    </p>
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Confidence</div>
                        <div className="confidence-bar w-24">
                          <div className="confidence-fill" style={{ width: '94%' }}></div>
                        </div>
                        <div className="text-xs text-emerald-400 mt-1">94%</div>
                      </div>
                      <button className="text-xs text-emerald-400 hover:text-emerald-300">
                        Apply suggestion →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Matter Selection */}
              <div>
                <div className="field-label">Matter</div>
                <select className="input-field">
                  <option>Johnson v. Smith - Personal Injury</option>
                  <option>Anderson Estate - Estate Planning</option>
                  <option>TechCorp Acquisition - Corporate</option>
                </select>
              </div>

              {/* Duration */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="field-label">Duration</div>
                  <div className="flex gap-2">
                    <input type="text" className="input-field text-center" placeholder="0" style={{ width: '60px' }} defaultValue="0" />
                    <span className="text-slate-500 self-center">:</span>
                    <input type="text" className="input-field text-center" placeholder="00" style={{ width: '60px' }} defaultValue="24" />
                    <span className="text-xs text-slate-500 self-center ml-2">hrs : min</span>
                  </div>
                </div>
                <div>
                  <div className="field-label">Date</div>
                  <input type="text" className="input-field" defaultValue="December 29, 2025" />
                </div>
              </div>

              {/* Activity Type */}
              <div>
                <div className="field-label">Activity Type</div>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { icon: '📧', label: 'Email', active: true },
                    { icon: '📞', label: 'Call', active: false },
                    { icon: '📄', label: 'Document', active: false },
                    { icon: '🔍', label: 'Research', active: false },
                  ].map((type, i) => (
                    <button 
                      key={i}
                      className={`p-3 rounded-lg text-center transition-all ${
                        type.active 
                          ? 'bg-emerald-500/20 border border-emerald-500/50' 
                          : 'bg-slate-800/50 border border-slate-700/50 hover:border-slate-600'
                      }`}
                    >
                      <span className="text-lg">{type.icon}</span>
                      <div className="text-xs mt-1 text-slate-400">{type.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <div className="field-label">Description</div>
                <textarea 
                  className="input-field" 
                  rows={3}
                  defaultValue="Email correspondence with opposing counsel regarding discovery requests and document production schedule."
                ></textarea>
              </div>

              {/* Billable Toggle */}
              <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
                <div>
                  <div className="text-sm font-medium text-white">Billable</div>
                  <div className="text-xs text-slate-500">This time will be included in invoices</div>
                </div>
                <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                <button className="text-sm text-slate-400 hover:text-white">Cancel</button>
                <div className="flex gap-3">
                  <button className="btn-secondary px-4 py-2 rounded-lg text-sm font-medium text-white">
                    Save Draft
                  </button>
                  <button className="btn-primary px-6 py-2 rounded-lg text-sm font-medium text-white">
                    Save Entry →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Client View Screen */}
      {currentScreen === 'client' && (
        <div className="max-w-5xl mx-auto">
          <div className="card rounded-2xl overflow-hidden">
            {/* Client Header */}
            <div className="bg-gradient-to-r from-violet-900/50 to-purple-900/50 p-6 border-b border-violet-500/20">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-2xl font-bold">
                    SJ
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white mb-1">Sarah Johnson</h1>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span>📧 sarah.johnson@email.com</span>
                      <span>📞 (555) 123-4567</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="btn-secondary px-4 py-2 rounded-lg text-sm font-medium text-white">
                    📧 Email
                  </button>
                  <button className="btn-primary px-4 py-2 rounded-lg text-sm font-medium text-white">
                    📞 Call
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 grid grid-cols-3 gap-6">
              {/* Client Stats */}
              <div className="col-span-2">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Active Matters', value: '2', icon: '📁' },
                    { label: 'Total Billed', value: '$24,500', icon: '💰' },
                    { label: 'Outstanding', value: '$3,200', icon: '⏳' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-slate-800/50 rounded-xl p-4 flex items-center gap-4">
                      <div className="text-2xl">{stat.icon}</div>
                      <div>
                        <div className="text-xs text-slate-500">{stat.label}</div>
                        <div className="text-xl font-bold text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          {stat.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Client Matters */}
                <div className="bg-slate-800/30 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-4">Client Matters</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Johnson v. Smith', type: 'Personal Injury', status: 'Active', hours: 42.5 },
                      { name: 'Johnson Property Dispute', type: 'Real Estate', status: 'Closed', hours: 18.0 },
                    ].map((matter, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center">📁</div>
                          <div>
                            <div className="font-medium text-white">{matter.name}</div>
                            <div className="text-sm text-slate-500">{matter.type}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            matter.status === 'Active' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-slate-600/50 text-slate-400'
                          }`}>
                            {matter.status}
                          </span>
                          <span className="text-sm text-slate-400" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                            {matter.hours} hrs
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Client Details Sidebar */}
              <div className="space-y-6">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm font-medium text-blue-300">Synced with Clio</span>
                  </div>
                  <div className="text-xs text-slate-400">Contact ID: CLO-2024-8291</div>
                </div>

                <div className="bg-slate-800/30 rounded-xl p-4">
                  <h3 className="font-semibold text-white mb-3">Contact Details</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-xs text-slate-500">Address</div>
                      <div className="text-slate-300">123 Main Street<br/>San Francisco, CA 94102</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Preferred Contact</div>
                      <div className="text-slate-300">Email</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Client Since</div>
                      <div className="text-slate-300">October 2024</div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/30 rounded-xl p-4">
                  <h3 className="font-semibold text-white mb-3">Recent Communications</h3>
                  <div className="space-y-2">
                    {[
                      { type: '📧', desc: 'Case update email', time: '2 hrs ago' },
                      { type: '📞', desc: 'Phone call (18 min)', time: 'Yesterday' },
                      { type: '📧', desc: 'Document request', time: 'Dec 26' },
                    ].map((comm, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <span>{comm.type}</span>
                        <span className="flex-1 text-slate-300">{comm.desc}</span>
                        <span className="text-xs text-slate-500">{comm.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Design Label */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 rounded-xl px-6 py-3 shadow-2xl">
        <div className="text-sm text-slate-400">
          Phase 1 UI/UX • <span className="text-white font-medium">{screens.find(s => s.id === currentScreen)?.label}</span>
        </div>
      </div>
    </div>
  );
};

export default Phase1UIScreens;
