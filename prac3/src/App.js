import logo from './logo.svg';
import home from './home';
import about from './about';
import { BrowserRouter as Router,Link,Routes, Route, Switch } from 'react-router-dom';
import contact from './contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<home />} />
        <Route path="/about" element={<about />} />
        <Route path="/contact" element={<contact />} />
      </Routes>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
