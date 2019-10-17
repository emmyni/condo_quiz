import React from 'react';
import Question from './components/Question'
import Quiz from './components/Quiz.js'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import './App.css';

function App() {
  let questionAnswer = [
    {
      question: "Do you have kids?",
      selected: null,
      options: [{
        option: "No and I never will",
        link2Neighbourhood: [1,2,3,]
      },
      {
        option: "Nah but I will someday",
        link2Neighbourhood: [1,2,3,]
      },
      {
        option: "Yes and I haven't slept in 2.5 years",
        link2Neighbourhood: [1,2,3,]
      },
      {
        option: "Yeah and we're starting to look at universities",
        link2Neighbourhood: [1,2,3,]
      },]
    },
    {
      question: "How do you feel about pets?",
      selected: null,
      options: [{
        option: "I love how happy my dog is",
        link2Neighbourhood: [1,2,3,]
      },
      {
        option: "My cat just gets me",
        link2Neighbourhood: [1,2,3,]
      },
      {
        option: "No but I'd smile at dogs on the subway",
        link2Neighbourhood: [1,2,3,]
      },
      {
        option: "Animals aren't for me",
        link2Neighbourhood: [1,2,3,]
      },]
    },
    {
      question: "How do you get to work? ",
      selected: null,
      options: [{
        option: "Car",
        link2Neighbourhood: [1,2,3,]
      },
      {
        option: "Walk",
        link2Neighbourhood: [1,2,3,]
      },
      {
        option: "Bike",
        link2Neighbourhood: [1,2,3,]
      },
      {
        option: "TTC",
        link2Neighbourhood: [1,2,3,]
      },]
    },
    {
      question: "You're getting dinner after work, where do you go?",
      selected: null,
      options: [{
        option: "A date at a cute bistro",
      },
      {
        option: "I've got to change, it's going to be fancy",
      },
      {
        option: "Drinks with a friend at that cool bar",
      },
      {
        option: "Somewhere trendy and new",
      },]
    },
    {
      question: "Where's your favourite place for a walk on Saturday mornings?",
      selected: null,
      options: [{
        option: "Somewhere I can be near the water",
      },
      {
        option: "A nice shady park",
      },
      {
        option: "I love to do a bit of window shopping on my walks",
      },
      {
        option: "I prefer to chill at home",
      },]
    },
    {
      question: "It's time to get out of your routine and try something new! What are you doing?",
      selected: null,
      options: [{
        option: "Checking out the local library",
      },
      {
        option: "Catching a new movie",
      },
      {
        option: "Joining a sports league at the community centre",
      },
      {
        option: "Volunteering somewhere",
      },]
    },
    {
      question: "You're leaving a bar at 1:00AM, how do you get home?",
      selected: null,
      options: [{
        option: "I'll walk a bit",
      },
      {
        option: "I'm taking the night bus",
      },
      {
        option: "Uber",
      },
      {
        option: "I don't stay out that late",
      },]
    },
    {
      question: "You're making pancakes and are out of milk and eggs. What do you do?",
      selected: null,
      options: [{
        option: "I'll just hop in the car and head to the grocery store",
      },
      {
        option: "I can just walk to the shop down the road",
      },
      {
        option: "I'll get my groceries quickly delivered,",
      },
      {
        option: "Let's get brunch instead",
      },]
    },
    {
      question: "How are you going to unwind at the end of a long week?",
      selected: null,
      options: [{
        option: "I'm headed to the club",
      },
      {
        option: "That open mic night at the local bar sounds cool",
      },
      {
        option: "I'll get some friends together for a nice quiet dinner out",
      },
      {
        option: "Movie night at home",
      },]
    },
    {
      question: "What building type do you prefer to live in?",
      selected: null,
      options: [{
        option: "High rise with lots of cool amenities",
      },
      {
        option: "Lower rise with a nice backyard",
      },
      {
        option: "Sleek townhouse",
      },
      {
        option: "Open concept loft",
      },]
    },
  ]

  return (
    <Quiz data={questionAnswer}></Quiz>
  );
}

export default App;
