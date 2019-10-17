import React, { Component } from 'react'
import Answer from './Answer'
import {
    Redirect,
  } from "react-router-dom";

export class Question extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false
        }
    }

    select = (index) => {
        this.props.select(this.props.question, index);
        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return (
                
            <Redirect to={this.props.question < 10 ? "/question" + (1+this.props.question) : "conclusion"}/>
            )
        }
        return (
            <div className="container">
                <section className="hero is-large">
                    <div className="hero-body">
                        <div className="container">
                        <h1 className="title">
                            {this.props.data.question}
                        </h1>
                        </div>
                    </div>
                </section>
                <div className="tile is-ancestor" style={{"flexWrap": "wrap"}}>
                {this.props.data.options.map((value, index) => {
                    return <Answer key={index} index={index} value={value} select={this.select}/>
                })}
                </div>
            </div>
        )
    }
}

export default Question
