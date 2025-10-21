import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ImagePreloader from './components/ImagePreloader';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Pricing from './pages/Pricing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

// Hook to update page title
function usePageTitle(title: string) {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ImagePreloader />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teenused" element={<Services />} />
            <Route path="/tooted" element={<Products />} />
            <Route path="/meist" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/hinnakiri" element={<Pricing />} />
            <Route path="/blogi" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privaatsuspoliitika" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;