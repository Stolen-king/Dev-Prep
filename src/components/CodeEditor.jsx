import React, { useState } from 'react';

export default function CodeEditor({ categoryType, html, setHtml, css, setCss, js, setJs, sql, setSql }) {
  const [activeTab, setActiveTab] = useState('HTML');

  if (categoryType === 'sql') {
    return (
      <div>
        <div className="flex gap-2 mb-4">
          <button className="btn-primary">SQL</button>
        </div>
        <textarea 
          value={sql} 
          onChange={(e) => setSql(e.target.value)} 
          style={{ width: '100%', height: '300px', fontFamily: 'monospace', padding: '10px', boxSizing: 'border-box' }}
          placeholder="-- Write your SQL query here..."
        />
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button className={activeTab === 'HTML' ? 'btn-primary' : 'btn-secondary'} onClick={() => setActiveTab('HTML')}>HTML</button>
        <button className={activeTab === 'CSS' ? 'btn-primary' : 'btn-secondary'} onClick={() => setActiveTab('CSS')}>CSS</button>
        <button className={activeTab === 'JavaScript' ? 'btn-primary' : 'btn-secondary'} onClick={() => setActiveTab('JavaScript')}>JavaScript</button>
      </div>
      
      <div>
        {activeTab === 'HTML' && (
          <textarea 
            value={html} 
            onChange={(e) => setHtml(e.target.value)} 
            style={{ width: '100%', height: '300px', fontFamily: 'monospace', padding: '10px', boxSizing: 'border-box' }}
          />
        )}
        {activeTab === 'CSS' && (
          <textarea 
            value={css} 
            onChange={(e) => setCss(e.target.value)} 
            style={{ width: '100%', height: '300px', fontFamily: 'monospace', padding: '10px', boxSizing: 'border-box' }}
          />
        )}
        {activeTab === 'JavaScript' && (
          <textarea 
            value={js} 
            onChange={(e) => setJs(e.target.value)} 
            style={{ width: '100%', height: '300px', fontFamily: 'monospace', padding: '10px', boxSizing: 'border-box' }}
          />
        )}
      </div>
    </div>
  );
}