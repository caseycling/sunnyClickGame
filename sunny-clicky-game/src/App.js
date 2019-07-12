import React from 'react';
import Header from './components/Header/Header'
import Jumbotron from './components/Jumbotron/Jumbotron'
import Images from './characters.json'
import Card from './components/Card/Card'
import Wrapper from './components/Wrapper/wrapper'


class App extends React.Component {

  //Set initial state of scores
  state = {
    cards: Images,
    currentScore: 0,
    highScore: 0
  }

  //Build randomly displayed cards
  shuffle = (cards) => {
    let counter = cards.length;
    // While there are elements in the cards
    while (counter > 0) {
      // Pick a random  and decrease counter by 1
      let index = Math.floor(Math.random() * counter);
      counter--;

      // And swap the last element with it
      let temp = cards[counter];
      cards[counter] = cards[index];
      cards[index] = temp;
    }
    return cards;
  }

  //Set high score with conditionals
  highScore = curScore => {
    if (curScore > this.state.highScore) {
      this.setState({
        highScore: curScore
      })
    }
  }

  //On clicking a card, check if its clicked value is true
  checkClick = (id) => {
    let score = this.state.currentScore;
    //If a player clicks a card with clicked value of false, 
    if (this.state.cards[id].clicked === "false") {
      // change clicked value to true, increase current by one and shuffle cards

      this.setState((curState) => ({
        currentScore: score + 1,
        cards: curState.cards.map(card => {
          if (card.id === id) {
            card.clicked = "true"
          }
          return card;
        }),
        highScore: curState.highScore
      }))

      this.shuffle(this.state.cards)

      //If a player clicks a card with clicked value of true,   
    } else {
      // change all cards clicked value to false, reset current to zero and shuffle cards
      this.setState((curState) => ({
        currentScore: 0,
        // cards: curState.cards.map(card => {
        //   card.clicked = "false";
        // })
      }))

      this.shuffle(this.state.cards)
    }
  }

    render() {
      return (
        <div>
          {/* Import header component, using currentScore and highScore from state as props */}
          <Header current={this.state.currentScore} high={this.state.highScore} />
          {/* Import jumbtoron component */}
          <Jumbotron />

          {/* Call highscore function here to avoid hoisting error */}
          {this.highScore(this.state.currentScore)}
          {this.state.cards.map(card => (
            // <Wrapper>
            <Card
              key={card.id}
              image={card.image}
              id={card.id}
              clicked={card.clicked}
              onClick={this.checkClick}
            />
            //</Wrapper>

          ))}

        </div>
      )
    }
  }



export default App;
