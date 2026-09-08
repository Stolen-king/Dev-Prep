import React from 'react';

export default function TestResults({ results }) {
  if (results.error) {
    return (
      <div>
        <h3>TEST RESULTS</h3>
        <div className="text-red">✗ Runtime Error</div>
        <pre style={{ background: 'var(--error-bg)', padding: '10px', borderRadius: '4px', overflowX: 'auto', color: 'var(--error-color)' }}>
          {results.error}
        </pre>
      </div>
    );
  }

  return (
    <div>
      <h3>TEST RESULTS</h3>
      <div style={{ marginBottom: '15px' }}>
        <strong>{results.passedTests} / {results.totalTests} Tests Passed</strong>
        {results.allPassed && (
          <div className="text-green" style={{ marginTop: '10px' }}>
            <strong>✓ All Test Cases Passed</strong>
            <br/>
            <strong>✓ Question Completed</strong>
          </div>
        )}
      </div>
      
      {results.results.map((t, i) => (
        <div key={i} style={{ marginBottom: '10px', paddingBottom: '10px', borderBottom: '1px solid var(--border-hr)' }}>
          <div className={t.passed ? 'text-green' : 'text-red'}>
            {t.passed ? '✓' : '✗'} {t.name}
          </div>
          {!t.passed && t.message && (
            <div style={{ marginTop: '5px', fontSize: '14px', background: 'var(--error-bg-light)', padding: '8px', borderLeft: '3px solid var(--error-color)' }}>
              <div>{t.message}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}