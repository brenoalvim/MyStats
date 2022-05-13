import './App.css';
import Header from '../Header/Header';
import Stats from '../Stats/Stats';
import Footer from '../Footer/Footer';

import { useState } from 'react';


function App() {

  const [stats, setStats] = useState([]);

  return (
    <div className="App" >
      <Header
        getStats={setStats}
        placeholder="GitHub Username" />
      <Stats
        stats={stats}
        text="Please enter the username in the input above" />
      <Footer
        developer="Breno Alvim"
        social="brenoalvim"
        email="brenoalvim.dev@gmail.com"
        linkFont={`https://readme-typing-svg.herokuapp.com?font=Fira+Code&center=true&vCenter=true&width=375&lines=Developed+by%3A+Breno+Alvim.`} />
    </div>
  );
}

export default App;