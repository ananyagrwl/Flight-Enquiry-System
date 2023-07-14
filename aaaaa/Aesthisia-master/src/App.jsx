import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
