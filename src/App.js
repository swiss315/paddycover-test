import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
