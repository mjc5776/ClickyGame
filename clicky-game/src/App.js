import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import skyline from "./skyline.json";
import "./App.css";

class App extends Component {
  // Setting this.state.skyline to the cards json array
  state = {
    skyline,
    clickedSkylineIds: [],
    score: 0,
    goal: 12,
    status: "" 
  };

  //shuffle the skyline cards in the browser when clicked
  shuffleScoreCard = id => {
    let clickedSkylineIds = this.state.clickedSkylineIds; //This array holds all the id's of the cards that have been clicked

    if(clickedSkylineIds.includes(id)){
      this.setState({ clickedSkylineIds: [], score: 0, status:  "Sorry Game Over! Click a picture to play again!" });
      return;
    }else{
      clickedSkylineIds.push(id) //Adds clicked card id to array

      if(clickedSkylineIds.length === 12){
        this.setState({score: 12, status: "You Won! Click a picture to play again!", clickedSkylineIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ skyline, clickedSkylineIds, score: clickedSkylineIds.length, status: " " });

      for (let i = skyline.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [skyline[i], skyline[j]] = [skyline[j], skyline[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky-Game!</h1>
          <p className="App-intro">
          Click on an image to earn points, but don't click on any more than once!
          </p>
        </header>
        <Score total={this.state.score}
               goal={12}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.skyline.map(skylines => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={skylines.id}
              key={skylines.id}
              image={skylines.image}
            />
          ))}
        </Wrapper>
        <footer>
          
        </footer>
    </div>
    );
  }
}

export default App;
