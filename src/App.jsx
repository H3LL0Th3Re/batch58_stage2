import { useState, useEffect } from 'react';
import Header from './header';
import About from './about';
import Projects from './projects';
import Footer from './footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.title = `Welcome to My Website - ${theme === 'light' ? 'Light Mode' : 'Dark Mode'}`;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Header />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
