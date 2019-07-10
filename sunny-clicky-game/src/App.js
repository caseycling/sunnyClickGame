import React from 'react';
import DisplayCharacters from './components/index'
import Images from './characters.json'

function App() {
  return <DisplayCharacters 
    src={Images[0].image}
    
  />;
}

console.log(Images[0].image)

export default App;
