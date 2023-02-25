import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/posts" element={<Posts />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
