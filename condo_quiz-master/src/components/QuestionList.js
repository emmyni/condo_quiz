import React, { Component } from 'react'
import {
    Route,
  } from "react-router-dom"
import Question from './Question.js'

export class QuestionList extends Component {
    select = (value) => {
        this.props.select(value);
    }  
    render() {
        return this.props.data.map((data, index) => {
            return ( 
                <Route path={"/question"+index} key={index}>
                    <Question data={data} index={index} select={this.select}/>
                </Route>
            )
        })
    }
}

export default QuestionList 