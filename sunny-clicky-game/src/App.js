import React from 'react';
import Header from './components/Header'
import Jumbotron from './components/Jumbotron'
import Images from './characters.json'
import Card from './components/Card'

class App extends React.Component {

  //Set initial state of scores
  state = {
    currentScore: 0,
    highScore: 0
  }

  render() {
    return (
      <div>
        <Header current={this.state.currentScore} high={this.state.highScore}/>
        <Jumbotron />
        <div>
          <Card src={Images[0].image} />
          <Card src={Images[1].image} />
          <Card src={Images[2].image} />
          <Card src={Images[3].image} />
          <Card src={Images[4].image} />
          <Card src={Images[5].image} />
          <Card src={Images[6].image} />
          <Card src={Images[7].image} />
          <Card src={Images[8].image} />
          <Card src={Images[9].image} />
          <Card src={Images[10].image} />
          <Card src={Images[11].image} />
        </div>


      </div>
    )
  }
}


export default App;
