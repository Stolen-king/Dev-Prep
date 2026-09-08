import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import questions from '../data/questions';
import CodeEditor from './CodeEditor';
import Preview from './Preview';
import TestResults from './TestResults';
import { runTests } from '../utils/testRunner';
import { runSqlTests } from '../utils/sqlRunner';

export default function QuestionPage({ markCompleted, completedQuestions }) {
  const { id } = useParams();
  const question = questions.find(q => q.id === parseInt(id));

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [sql, setSql] = useState('');
  const [testResults, setTestResults] = useState(null);
  const [testError, setTestError] = useState(null);
  const [previewContent, setPreviewContent] = useState('');

  useEffect(() => {
    if (question) {
      setHtml(question.starterHTML || '');
      setCss(question.starterCSS || '');
      setJs(question.starterJS || '');
      setSql(question.starterSQL || '');
      setTestResults(null);
      setTestError(null);
      setPreviewContent('');
    }
  }, [question]);

  if (!question) return <div>Question not found.</div>;

  const testCasesCount = Array.isArray(question.testCases) ? question.testCases.length : 0;

  const handleRunCode = () => {
    if (question.categoryType === 'sql') return;

    // We create a temporary DOM parser to inject CSS and JS into the student's full HTML document
    const parser = new DOMParser();
    const doc = parser.parseFromString(html || '<!DOCTYPE html><html><head></head><body></body></html>', 'text/html');

    if (css) {
      const style = doc.createElement('style');
      style.textContent = css;
      doc.head.appendChild(style);
    }

    if (js) {
      const script = doc.createElement('script');
      script.textContent = `
        try {
          ${js}
        } catch(e) {
          console.error(e);
        }
      `;
      doc.body.appendChild(script);
    }

    const combined = '<!DOCTYPE html>\n' + doc.documentElement.outerHTML;
    setPreviewContent(combined);
  };

  const handleRunTests = async () => {
    if (!Array.isArray(question.testCases)) {
      setTestError("This question has no test cases configured.");
      return;
    }
    if (question.testCases.length === 0) {
      setTestError("This question currently has 0 configured test cases.");
      return;
    }

    setTestError(null);

    if (question.categoryType === 'sql') {
      const results = await runSqlTests(sql, question.testCases, question.schema, question.sampleData);
      if (results.error) {
        setTestError(results.error);
        return;
      }
      setTestResults(results);
      if (results.allPassed) markCompleted(question.id);
    } else {
      handleRunCode(); // update preview first
      const results = await runTests(html, css, js, question.testCases);
      setTestResults(results);
      if (results.allPassed) {
        markCompleted(question.id);
      }
    }
  };

  return (
    <div>
      <div className="mb-4">
        <Link to="/" className="btn-secondary">← Back</Link>
      </div>
      
      <div className="card">
        <h2>Question {question.id}</h2>
        <h1>{question.title}</h1>
        <p><strong>Difficulty:</strong> {question.difficulty}</p>
        <p><strong>Technology:</strong> {question.category}</p>
        
        <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid var(--border-hr)' }}/>
        
        <h3>Problem Statement</h3>
        <p>{question.description}</p>
        
        {question.categoryType === 'sql' && (
          <div style={{ marginTop: '20px' }}>
            <h3>Database Schema</h3>
            {question.schema && Object.entries(question.schema).map(([table, cols]) => (
              <div key={table} style={{ marginBottom: '15px' }}>
                <strong>Table: {table}</strong>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '5px' }}>
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid var(--border-hr)', padding: '5px', textAlign: 'left' }}>Column Name</th>
                      <th style={{ border: '1px solid var(--border-hr)', padding: '5px', textAlign: 'left' }}>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(cols).map(([cName, cType]) => (
                      <tr key={cName}>
                        <td style={{ border: '1px solid var(--border-hr)', padding: '5px' }}>{cName}</td>
                        <td style={{ border: '1px solid var(--border-hr)', padding: '5px' }}>{cType}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}

            <h3>Sample Data</h3>
            {question.sampleData && Object.entries(question.sampleData).map(([table, rows]) => (
              <div key={table} style={{ marginBottom: '15px', overflowX: 'auto' }}>
                <strong>Table: {table}</strong>
                {rows.length > 0 ? (
                  <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '5px' }}>
                    <thead>
                      <tr>
                        {Object.keys(rows[0]).map(k => (
                          <th key={k} style={{ border: '1px solid var(--border-hr)', padding: '5px', background: 'var(--card-bg)', textAlign: 'left' }}>{k}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, i) => (
                        <tr key={i}>
                          {Object.values(row).map((val, j) => (
                            <td key={j} style={{ border: '1px solid var(--border-hr)', padding: '5px' }}>{val === null ? 'null' : String(val)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : <p>No data</p>}
              </div>
            ))}
          </div>
        )}

        <h3>Requirements</h3>
        <ul>
          {question.requirements.map((req, i) => <li key={i}>{req}</li>)}
        </ul>
      </div>

      <div className="card">
        <h3>EDITOR</h3>
        <CodeEditor 
          categoryType={question.categoryType}
          html={html} setHtml={setHtml} 
          css={css} setCss={setCss} 
          js={js} setJs={setJs} 
          sql={sql} setSql={setSql}
        />
        
        <div className="mt-4 gap-2 flex">
          {question.categoryType !== 'sql' && (
             <button className="btn-secondary" onClick={handleRunCode}>Run Code</button>
          )}
          <button className="btn-primary" onClick={handleRunTests}>Run Tests</button>
        </div>
      </div>

      {testError && (
        <div className="card text-red">
          <strong>Error: </strong> {testError}
        </div>
      )}

      <div className="card">
        {testResults ? (
          <TestResults results={testResults} />
        ) : (
          <div>
            <h3>TEST RESULTS</h3>
            <div style={{ marginBottom: '15px' }}>
              <strong>Test Cases: {testCasesCount}</strong>
              <div style={{ marginTop: '10px' }}>
                0 / {testCasesCount} Tests Passed
              </div>
            </div>
          </div>
        )}
      </div>

      {question.categoryType !== 'sql' && (
        <div className="card">
          <h3>PREVIEW</h3>
          <Preview content={previewContent} />
        </div>
      )}
    </div>
  );
}