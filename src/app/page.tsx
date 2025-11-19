import React from 'react';

export default function Home() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
      {/* Sidebar */}
      <aside className="glass-panel" style={{
        width: '280px',
        margin: '1rem',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        height: 'calc(100vh - 2rem)',
        position: 'sticky',
        top: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, var(--primary), var(--accent))',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.2rem'
          }}>K</div>
          <span className="heading-lg" style={{ fontSize: '1.5rem' }}>KokoERP</span>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {['Dashboard', 'Inventory', 'Sales', 'AI Insights', 'Settings'].map((item, i) => (
            <a key={item} href="#" style={{
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius)',
              background: i === 0 ? 'var(--primary)' : 'transparent',
              color: i === 0 ? 'white' : 'var(--text-secondary)',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              transition: 'all 0.2s'
            }}>
              {item}
            </a>
          ))}
        </nav>

        <div style={{ marginTop: 'auto' }}>
          <div className="card" style={{ background: 'rgba(0,0,0,0.2)', border: 'none' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>System Status</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontSize: '0.875rem', fontWeight: 600 }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></span>
              Operational
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '2rem', maxWidth: '1600px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <h1 className="heading-xl">Dashboard</h1>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Welcome back, Administrator</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-secondary">Notifications</button>
            <button className="btn btn-primary">New Report</button>
          </div>
        </header>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {[
            { label: 'Total Revenue', value: '$1,240,500', change: '+12.5%', trend: 'up' },
            { label: 'Active Users', value: '3,450', change: '+5.2%', trend: 'up' },
            { label: 'Pending Orders', value: '145', change: '-2.1%', trend: 'down' },
            { label: 'AI Predictions', value: '98% Acc', change: '+1.4%', trend: 'up' },
          ].map((stat) => (
            <div key={stat.label} className="card animate-fade-in">
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{stat.label}</p>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <h3 className="heading-lg" style={{ fontSize: '1.75rem' }}>{stat.value}</h3>
                <span style={{
                  color: stat.trend === 'up' ? '#10b981' : '#ef4444',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  background: stat.trend === 'up' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '1rem'
                }}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
          <div className="card animate-fade-in" style={{ minHeight: '400px' }}>
            <h3 className="heading-lg" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Revenue Overview</h3>
            <div style={{
              width: '100%',
              height: '300px',
              background: 'linear-gradient(180deg, rgba(79, 70, 229, 0.1) 0%, rgba(79, 70, 229, 0) 100%)',
              borderBottom: '2px solid var(--primary)',
              position: 'relative',
              borderRadius: 'var(--radius)'
            }}>
              {/* Placeholder for Chart */}
              <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', color: 'var(--text-muted)' }}>
                AI Analysis: Revenue is projected to grow by 15% next quarter based on current trends.
              </div>
            </div>
          </div>

          <div className="card animate-fade-in">
            <h3 className="heading-lg" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Recent Activity</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', paddingBottom: '1rem', borderBottom: i < 5 ? '1px solid var(--border)' : 'none' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--surface)', border: '1px solid var(--border)' }}></div>
                  <div>
                    <p style={{ fontWeight: 500 }}>New order #230{i}</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>2 minutes ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
