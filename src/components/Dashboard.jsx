import React, { useState } from 'react';
import questions from '../data/questions';
import QuestionCard from './QuestionCard';

export default function Dashboard({ completedQuestions }) {
  const [filter, setFilter] = useState('All');
  const [activeCategory, setActiveCategory] = useState('development');
  const [sqlSection, setSqlSection] = useState('All');

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setFilter('All');
    setSqlSection('All');
  };

  const categoryQuestions = questions.filter(q => {
    if (activeCategory === 'development') return q.categoryType === 'development' || !q.categoryType;
    return q.categoryType === activeCategory;
  });

  const sectionQuestions = activeCategory === 'sql' && sqlSection !== 'All' 
    ? categoryQuestions.filter(q => q.section === sqlSection)
    : categoryQuestions;

  const filteredQuestions = filter === 'All' ? sectionQuestions : sectionQuestions.filter(q => q.difficulty === filter);

  const completedInCategory = completedQuestions.filter(id => 
    categoryQuestions.some(q => q.id === id)
  ).length;

  return (
    <div>
      <div className="card flex justify-between items-center" style={{ flexWrap: 'wrap', gap: '15px' }}>
        <div>
          <h1 style={{ margin: '0 0 5px 0' }}>Dashboard</h1>
          <p style={{ margin: 0, color: 'var(--text-muted)' }}>
            {activeCategory === 'development' && 'HTML • CSS • JavaScript'}
            {activeCategory === 'sql' && 'Database queries and execution'}
            {activeCategory === 'dsa' && 'Data Structures & Algorithms'}
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <h3>Progress: {completedInCategory} / {categoryQuestions.length} Completed</h3>
        </div>
      </div>

      <div className="mb-4 gap-4 flex" style={{ borderBottom: '1px solid var(--border-hr)', paddingBottom: '15px' }}>
        <button 
          className={activeCategory === 'development' ? 'btn-primary' : 'btn-secondary'} 
          onClick={() => handleCategoryChange('development')}
        >
          Development
        </button>
        <button 
          className={activeCategory === 'sql' ? 'btn-primary' : 'btn-secondary'} 
          onClick={() => handleCategoryChange('sql')}
        >
          SQL
        </button>
        <button 
          className={activeCategory === 'dsa' ? 'btn-primary' : 'btn-secondary'} 
          onClick={() => handleCategoryChange('dsa')}
        >
          DSA
        </button>
      </div>

      {activeCategory === 'sql' && (
        <a 
          href="https://leetcode.com/studyplan/top-sql-50/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'block', 
            padding: '12px 20px', 
            marginBottom: '15px', 
            backgroundColor: 'var(--card-bg)', 
            border: '1px solid var(--border-color)', 
            borderRadius: '6px',
            color: 'var(--text-color)',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'background-color 0.2s',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--bg-color)'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--card-bg)'}
        >
          Want more SQL practice? Practice the SQL Top 50 on LeetCode &rarr;
        </a>
      )}

      {activeCategory === 'dsa' && (
        <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a 
            href="https://www.geeksforgeeks.org/explore?page=1" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'block', 
              padding: '12px 20px', 
              backgroundColor: 'var(--card-bg)', 
              border: '1px solid var(--border-color)', 
              borderRadius: '6px',
              color: 'var(--text-color)',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'background-color 0.2s',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--bg-color)'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--card-bg)'}
          >
            Want more DSA practice? Explore DSA on GeeksforGeeks &rarr;
          </a>
          <a 
            href="https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'block', 
              padding: '12px 20px', 
              backgroundColor: 'var(--card-bg)', 
              border: '1px solid var(--border-color)', 
              borderRadius: '6px',
              color: 'var(--text-color)',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'background-color 0.2s',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--bg-color)'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--card-bg)'}
          >
            Follow a structured DSA roadmap with Striver's A2Z Sheet &rarr;
          </a>
        </div>
      )}

      <div className="mb-4 gap-2 flex flex-wrap">
        {['All', 'Easy', 'Medium', 'Hard'].map(f => (
          <button 
            key={f} 
            className={filter === f ? 'btn-primary' : 'btn-secondary'} 
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {activeCategory === 'sql' && (
        <div className="mb-4 gap-2 flex flex-wrap">
          {['All', 'SELECT', 'Basic Joins', 'Basic Aggregate Functions', 'Sorting and Grouping', 'Advanced Select and Joins'].map(s => (
            <button 
              key={s} 
              className={sqlSection === s ? 'btn-primary' : 'btn-secondary'} 
              onClick={() => setSqlSection(s)}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px', padding: '10px 0' }}>
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map(q => (
            <QuestionCard key={q.id} question={q} isCompleted={completedQuestions.includes(q.id)} />
          ))
        ) : (
          <div style={{ padding: '20px', color: 'var(--text-muted)' }}>No questions available for this category yet.</div>
        )}
      </div>
    </div>
  );
}