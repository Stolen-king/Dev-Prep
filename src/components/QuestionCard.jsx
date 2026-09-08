import React from 'react';
import { Link } from 'react-router-dom';

export default function QuestionCard({ question, isCompleted }) {
  const tags = question.category ? question.category.split(' • ') : [];
  
  const getTagStyle = (tag) => {
    switch(tag.trim()) {
      case 'HTML': return { bg: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa' };
      case 'CSS': return { bg: 'rgba(34, 197, 94, 0.15)', color: '#4ade80' };
      case 'JavaScript': return { bg: 'rgba(234, 179, 8, 0.15)', color: '#facc15' };
      case 'SQL': return { bg: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' };
      case 'DSA': return { bg: 'rgba(244, 63, 94, 0.15)', color: '#fb7185' };
      default: return { bg: 'rgba(107, 114, 128, 0.15)', color: '#9ca3af' };
    }
  };

  const renderDifficultyBars = (diff) => {
    const bars = [];
    let active = 0;
    let color = '';
    if (diff === 'Easy') { active = 1; color = '#4ade80'; }
    if (diff === 'Medium') { active = 2; color = '#fb923c'; }
    if (diff === 'Hard') { active = 3; color = '#ef4444'; }
    
    for (let i = 0; i < 3; i++) {
      bars.push(
        <div key={i} style={{
          width: '4px',
          height: i === 0 ? '8px' : i === 1 ? '12px' : '16px',
          backgroundColor: i < active ? color : 'var(--border-hr)',
          borderRadius: '2px',
          display: 'inline-block',
          marginLeft: '3px',
          verticalAlign: 'bottom'
        }} />
      );
    }
    return <span style={{ marginLeft: '6px', display: 'inline-flex', alignItems: 'flex-end', height: '16px' }}>{bars}</span>;
  };

  const diffColor = question.difficulty === 'Hard' ? '#ef4444' : question.difficulty === 'Medium' ? '#fb923c' : '#4ade80';

  return (
    <Link to={`/question/${question.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%', boxSizing: 'border-box' }}>
      <div className="card question-card hover-lift" style={{ 
        cursor: 'pointer', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        padding: '24px',
        margin: 0,
        boxSizing: 'border-box',
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        borderRadius: '16px',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
      }}>
        
        {/* Top Row: Number & Title */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ 
            backgroundColor: 'rgba(59, 130, 246, 0.15)', 
            color: '#60a5fa', 
            padding: '4px 10px', 
            borderRadius: '6px', 
            fontWeight: '700', 
            marginRight: '12px', 
            fontSize: '14px' 
          }}>
            {question.id.toString().padStart(2, '0')}
          </span>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>{question.title}</h3>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          {tags.map((tag, idx) => {
            const style = getTagStyle(tag);
            return (
              <React.Fragment key={idx}>
                {idx > 0 && <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>•</span>}
                <span style={{ 
                  backgroundColor: style.bg, 
                  color: style.color, 
                  padding: '3px 10px', 
                  borderRadius: '6px', 
                  fontSize: '12px', 
                  fontWeight: '600' 
                }}>
                  {tag}
                </span>
              </React.Fragment>
            );
          })}
        </div>

        {/* Difficulty */}
        <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
          Difficulty:&nbsp;<span style={{ color: diffColor, fontWeight: '600' }}>{question.difficulty}</span> {renderDifficultyBars(question.difficulty)}
        </div>

        {/* Spacer to push completion to bottom */}
        <div style={{ flexGrow: 1 }}></div>

        {/* Completion status */}
        <div style={{ marginTop: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', marginBottom: '12px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: isCompleted ? '#4ade80' : 'var(--text-muted)' }}>
              {isCompleted ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
              )}
              Completed
            </span>
            
            {isCompleted ? (
              <span style={{ color: '#4ade80', display: 'flex', alignItems: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#4ade80" stroke="var(--card-bg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ borderRadius: '50%' }}>
                  <circle cx="12" cy="12" r="10" stroke="none"></circle>
                  <polyline points="16 8 10 14.01 7 11.01"></polyline>
                </svg>
              </span>
            ) : (
              <span style={{ color: 'var(--text-muted)', fontWeight: '700' }}>0%</span>
            )}
          </div>
          <div style={{ height: '6px', backgroundColor: 'var(--border-hr)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: isCompleted ? '100%' : '0%', height: '100%', backgroundColor: '#4ade80', transition: 'width 0.5s ease' }}></div>
          </div>
        </div>

      </div>
    </Link>
  );
}