import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard />
      </Router>
    </div>
  );
}

export default App;
