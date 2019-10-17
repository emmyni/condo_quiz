import React, { Component } from 'react'
import QuestionList from './QuestionList.js'
import ResultPage from './ResultPage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom"

  export class Quiz extends Component {
    select = (question, index) => {
        this.props.select(question, index);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/conclusion">
                        <ResultPage result={this.props.result}/>
                    </Route>
                    <QuestionList data={this.props.data} select={this.select}/>
                </Switch>
            </Router>
        )
    }
  }

  export default Quiz 