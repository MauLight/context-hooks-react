import './style/App.css';
import Bookshelf from './components/bookshelf';
import Navbar2 from './components/navbar2';
import ThemeToggle from './components/themetoggle';
import ThemeContextProvider from './contexts/themeContext';
import AuthContextProvider from './contexts/authcontext';
import BookContextProvider from './contexts/bookcontext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar2 />
          <BookContextProvider>
            <Bookshelf />
          </BookContextProvider>
          <ThemeToggle />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
