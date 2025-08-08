import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ArticleProvider } from './contexts/ArticleContext';
import Navigation from './components/Navigation';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import NewArticleForm from './components/NewArticleForm';
import Home from './components/Home';
import Contact from './components/Contact';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <ArticleProvider>
      <Router>
        <div className="App">
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<ArticleList />} />
              <Route path="/article/:id" element={<ArticleDetail />} />
              <Route path="/new" element={<NewArticleForm />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ArticleProvider>
  );
}

export default App;
