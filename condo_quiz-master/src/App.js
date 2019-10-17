import React, { Component } from "react";
import Quiz from './components/Quiz.js'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import './App.css';

class App extends Component {

  select = (value) => {
    console.log(value)
  }

  render() {
    let questionAnswer = [
      {
        question: "hi",
        selected: null,
        answers: [{
          option: "first",
          link2Neighbourhood: [1,2,3,]
        }]
      },
      {
        question: "hi2234",
      },
      {
        question: "hi4222",
      },
    ]

    return (
      <Quiz data={questionAnswer} select={this.select}></Quiz>
    );
  }
}

export default App;
