import React from 'react';
import Header from './components/Header'
import Jumbotron from './components/Jumbotron'
import Images from './characters.json'
import Card from './components/Card'

class App extends React.Component {

  //Set initial state of scores
  state = {
    cards: Images,
    currentScore: 0,
    highScore: 0
  }



  //If a player clicks a card with clicked value of false, 
  // increase current by one and shuffle cards


  //If a player clicks a card with clicked value of true, 
  // reset current to zero and shuffle cards

  //If current score is greater than high score, 
  // make current score new high score

  render() {


    return (
      <div>
        <Header current={this.state.currentScore} high={this.state.highScore} />
        <Jumbotron />
        <div>
          {this.state.cards.map(card => (
            <Card src={card.image}
              id={card.id}
              clicked={card.clicked}
            />
          ))}
        </div>


      </div>
    )
  }
}


export default App;
