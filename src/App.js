
import './App.css';
import {ThemeProvider} from './context/ThemeContext';
import Container from './components/Container';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
 
      <ThemeProvider>
        <UserContextProvider>
        <Container />
        </UserContextProvider>
      </ThemeProvider>

  );
}

export default App;
