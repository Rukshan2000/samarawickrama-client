


// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';


// components
import Blog from './components/Blog';

// blog page
import BlogContent from './blogpages/BlogContent';


// Tool pages



// main pages
import HomePage from './pages/HomePage.jsx';
import SplashPage from './pages/SplashPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import UnderDevelopmentPage from './pages/UnderDevelopmentPage.jsx';










const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<SplashPage />} />
        <Route path="/homepage" element={<HomePage />} /> 
        <Route path="/blogpage" element={<BlogPage />} /> 
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogContent />} />
        <Route path="/underdevelopmentpage" element={<UnderDevelopmentPage />} /> 








      </Routes>
    </BrowserRouter>
  );
};

export default App;
