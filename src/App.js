import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">      
      <header className="App-header">
        <Link to={'/client-side'}>Client-side Rendering</Link>
        <Link to={'/server-side'}>Server-side Rendering</Link>
      </header>
    </div>
  );
}

export default App;
