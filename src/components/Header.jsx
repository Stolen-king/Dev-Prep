import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ onReset }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.body.classList.contains('dark-mode');
  });
  const location = useLocation();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header style={{ 
      background: isDarkMode ? 'rgba(30, 30, 30, 0.85)' : 'rgba(255, 255, 255, 0.85)', 
      borderBottom: '1px solid var(--header-border)', 
      padding: '0 32px', 
      height: '72px',
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      transition: 'all 0.3s ease'
    }}>
      
      {/* Left Side: Logo and Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            color: 'white',
            padding: '6px 10px',
            borderRadius: '8px',
            fontWeight: '900',
            fontSize: '16px',
            letterSpacing: '1px',
            boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          </div>
          <h2 style={{ 
            margin: 0, 
            color: 'var(--text-color)', 
            fontSize: '18px', 
            fontWeight: '700',
            letterSpacing: '-0.5px'
          }}>
            DevPrep
          </h2>
        </Link>
        
        {/* Navigation Links */}
        <nav style={{ display: 'flex', gap: '8px' }}>
          <Link to="/" style={{ 
            color: 'var(--text-color)', 
            fontWeight: '600', 
            fontSize: '14px',
            padding: '8px 16px',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'all 0.2s',
            backgroundColor: location.pathname === '/' ? 'var(--bg-color)' : 'transparent'
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--bg-color)'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = location.pathname === '/' ? 'var(--bg-color)' : 'transparent'}
          >
            Dashboard
          </Link>
        </nav>
      </div>

      {/* Right Side: Actions */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <button 
          onClick={toggleTheme} 
          style={{ 
            background: 'transparent',
            border: '1px solid var(--border-hr)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-color)',
            transition: 'all 0.2s'
          }}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--bg-color)'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          {isDarkMode ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          )}
        </button>
        
        <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-hr)' }}></div>

        <button 
          onClick={onReset}
          style={{ 
            background: 'transparent',
            border: '1px solid transparent',
            borderRadius: '8px',
            padding: '8px 16px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onMouseOver={e => {
            e.currentTarget.style.backgroundColor = 'var(--error-bg-light)';
            e.currentTarget.style.color = 'var(--error-color)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--text-muted)';
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><polyline points="3 3 3 8 8 8"></polyline></svg>
          Reset Progress
        </button>
      </div>
    </header>
  );
}