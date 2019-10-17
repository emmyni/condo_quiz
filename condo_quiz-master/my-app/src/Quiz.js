import React from 'react'
import QuestionList from './QuestionList.js'
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom"

  function quiz(props) {
    return (
        <Router>
            <Switch>
                <QuestionList data={props.data} />
            </Switch>
        </Router>
    )
  }

  export default quiz