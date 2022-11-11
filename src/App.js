import './style/App.css';
import Bookshelf from './components/bookshelf';
import Navbar2 from './components/navbar2';
import ThemeToggle from './components/themetoggle';
import ThemeContextProvider from './contexts/themeContext';
import AuthContextProvider, { AuthContext } from './contexts/authcontext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar2 />
          <Bookshelf />
          <ThemeToggle />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
