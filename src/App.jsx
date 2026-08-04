import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CanvasHome from './components/CanvasHome';
import CaseStudyPage from './components/CaseStudyPage';
import Clarity from '@microsoft/clarity';

const App = () => {
  useEffect(() => {
    // Microsoft Clarity Integration
    Clarity.init('vzk09jf34w');
  }, []);

  return (
    <Routes>
      <Route path="/" element={<CanvasHome />} />
      <Route path="/project/:id" element={<CaseStudyPage />} />
    </Routes>
  );
}

export default App;
