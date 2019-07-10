import React from 'react';
import Header from './components/Header'
import Jumbotron from './components/Jumbotron'
import Images from './characters.json'
import Card from './components/Card'

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <Card src={Images[0].image}/>
          
        
      </div>
    )
  }
}


export default App;
