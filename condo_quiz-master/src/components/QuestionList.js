import React from 'react'
import {
    Route,
  } from "react-router-dom"
import Question from './Question.js'

function QuestionList(props) {
    return props.data.map((data, index) => {
        console.log([data, index])
        return ( 
            <Route path={"/question"+index} key={index}>
                <Question data={data}/>
            </Route>
        )
    })
}

export default QuestionList 