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

  //On clicking a card, check if its clicked value is true
  checkClick = (id) => {
     let score = this.state.currentScore;
    //If a player clicks a card with clicked value of false, 
    if(this.state.cards[id-1].clicked === "false") {
      // change clicked value to true, increase current by one and shuffle cards
      console.log("working")
      console.log(score)
      this.setState((curState) => ({
        currentScore: score + 1,
        cards: curState.cards.map(card => {
          if(card.id === id) {
            card.clicked = "true"
          }
          return card;
        }),
        highScore: curState.highScore
      }))
      console.log(this.state.currentScore)
    //If a player clicks a card with clicked value of true,   
    } else {
      // change all cards clicked value to false, reset current to zero and shuffle cards
      this.setState({
        currentScore: 0,
        
        
      })
      
    }
    console.log(this.state.cards[id-1])
    

  
 
  
  

  //If current score is greater than high score, 
  // make current score new high score

  }

  render() {
    return (
      <div>
        {/* Import header component, using currentScore and highScore from state as props */}
        <Header current={this.state.currentScore} high={this.state.highScore} />
        {/* Import jumbtoron component */}
        <Jumbotron />
        <div>
          {this.state.cards.map(card => (
            
            <Card 
              key={card.id}
              image={card.image}
              id={card.id}
              clicked={card.clicked}
              onClick={this.checkClick} 
            />
            
          ))}
        </div>
      </div>
    )
  }
}


export default App;
