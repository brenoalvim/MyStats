import './App.css';
import Header from '../Header/Header';
import Stats from '../Stats/Stats';
import Footer from '../Footer/Footer';

import { useState } from 'react';


function App() {

  const [stats, setStats] = useState([]);

  return (
    <div className="App" >
      <Header getStats={setStats} placeholder="GitHub Username" />
      <Stats stats={stats} text="Please enter the username in the input above" />
      <Footer />
    </div>
  );
}

export default App;