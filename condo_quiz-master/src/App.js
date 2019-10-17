import React from 'react';
import Question from './components/Question'
import Quiz from './components/Quiz.js'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import './App.css';

function App() {
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
    <Quiz data={questionAnswer}></Quiz>
  );
}

export default App;
