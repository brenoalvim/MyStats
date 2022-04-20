import './App.css';
import Header from '../Header/Header';
import Stats from '../Stats/Stats';

import { useState } from 'react';


function App() {

  const [stats, setStats] = useState([]);

  return (
    <div className="App" >
      <Header getStats={setStats} placeholder="GitHub Username" />
      <Stats stats={stats} />
    </div>
  );
}

export default App;