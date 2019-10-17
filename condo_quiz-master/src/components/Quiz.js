import React, { Component } from 'react'
import QuestionList from './QuestionList.js'
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom"

  export class Quiz extends Component {
    select = (question, index) => {
        this.props.select(question, index);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <QuestionList data={this.props.data} select={this.select}/>
                </Switch>
            </Router>
        )
    }
  }

  export default Quiz 