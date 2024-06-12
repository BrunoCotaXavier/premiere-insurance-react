import logo from './logo.svg';
import './App.css';
import { AppRoutes } from './routes';

import { Header } from './components/header'
import { BrowserRouter as Router } from 'react-router-dom';
import { TabBottom } from './components/tab-bottom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppRoutes />
        <TabBottom />
      </div>
    </Router>
  );
}

export default App;
