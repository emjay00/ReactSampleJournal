import React from 'react';
import './App.css';
import Grid from './Components/Grid';
import Navbar from './Components/Navbar';
import data from './Components/data'

function App() {

  const gridData = data.map(item => {
    return (
      <Grid
        key={item.id}
        item={item} />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <section>
        {gridData}
      </section>
    </div>
  );
}

export default App;


