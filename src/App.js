import './style/App.css';
import Bookshelf from './components/bookshelf';
import Navbar from './components/navbar';
import ThemeToggle from './components/themetoggle';
import ThemeContextProvider from './contexts/themeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Bookshelf />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
