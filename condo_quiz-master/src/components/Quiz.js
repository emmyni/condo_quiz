import React from 'react'
import QuestionList from './QuestionList.js'
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom"

  function Quiz(props) {
    return (
        <Router>
            <Switch>
                <QuestionList data={props.data} />
            </Switch>
        </Router>
    )
  }

  export default Quiz 