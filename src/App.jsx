import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import QuestionPage from './components/QuestionPage';

function App() {
  const [completedQuestions, setCompletedQuestions] = useState([]);

  const markCompleted = (id) => {
    if (!completedQuestions.includes(id)) {
      setCompletedQuestions([...completedQuestions, id]);
    }
  };

  const resetSession = () => {
    setCompletedQuestions([]);
  };

  return (
    <Router>
      <Header onReset={resetSession} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard completedQuestions={completedQuestions} />} />
          <Route path="/question/:id" element={<QuestionPage markCompleted={markCompleted} completedQuestions={completedQuestions} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;