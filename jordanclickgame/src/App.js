import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from "./components/Box";
import Container from "./components/Container";
import Leader from "./components/Leader";
import boxes from "./boxes.json";
import "./App.css";

class App extends Component {
  // Setting this.state.boxes to the boxes json array
  state = {
    boxes,
    SCORE: 0,
    HIGHSCORE: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.boxes.forEach(box => {
      box.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.boxes.find((o, i) => {
      if (o.id === id) {
        if(boxes[i].count === 0){
          boxes[i].count = boxes[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.boxes.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.boxes and render a boxbox component for each box object
  render() {
    return (
      <Container>
        <Leader id="title" score={this.state.score} highscore={this.state.highscore}>Play with the J's</Leader>
        {this.state.boxes.map(box => (
          <Box
            clickCount={this.clickCount}
            id={box.id}
            key={box.id}
            image={box.image}
          />
        ))}
      </Container>
    );
  }
}

export default App;
