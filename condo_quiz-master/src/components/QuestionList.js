import React, { Component } from 'react'
import {
    Route,
  } from "react-router-dom"
import Question from './Question.js'

export class QuestionList extends Component {
    select = (question, index) => {
        this.props.select(question, index);
    }  
    render() {
        return this.props.data.map((data, index) => {
            return ( 
                <Route path={"/question"+index} key={index}>
                    <Question data={data} question={index} select={this.select}/>
                </Route>
            )
        })
    }
}

export default QuestionList 