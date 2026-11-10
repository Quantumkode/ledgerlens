import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './pages/Home.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import NotFound from './pages/NotFound.jsx';
import Kit from './pages/Kit.jsx';
import { routesMeta } from './data/seo.js';

class ErrorBoundary extends React.Component {
  state = { err: null };
  static getDerivedStateFromError(err) { return { err }; }
  render() {
    if (this.state.err)
      return (
        <div className="mx-auto max-w-xl px-6 py-32 text-center">
          <h1 className="font-display text-3xl">Something went wrong.</h1>
          <p className="mt-3 text-ink/70">Please reload the page. If it keeps happening, email us.</p>
        </div>
      );
    return this.props.children;
  }
}

function useRouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const m = routesMeta[pathname] || routesMeta['/404'];
    document.title = m.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', m.description);
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('is-in'), io.unobserve(e.target))),
      { threshold: 0.12 }
    );
    document.querySelectorAll('[data-reveal]').forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [pathname, hash]);
}

export default function App() {
  useRouteEffects();
  return (
    <ErrorBoundary>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-paper">Skip to content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/app" element={<Kit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </ErrorBoundary>
  );
}
