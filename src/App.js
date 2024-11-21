import './App.css';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import { ApiContext } from './context/contextApi';

function App() {
  
  return (
    <ApiContext>
      <div className="App">
        <NavBar />
        <MainPage />
      </div>
    </ApiContext>
  );
}

export default App;
