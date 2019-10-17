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
    select = (value) => {
        this.props.select(value);
        this.setState({
            redirect: true
        })
    } 

    render() {
        if (this.state.redirect) {
            return (
            <Redirect to={"/question" + (1+this.props.index)}/>
            )
        }
        return (
            <div className="container">
                <section className="hero">
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
                    return <Answer key={index} value={value} select={this.select}/>
                })}
                </div>
            </div>
        )
    }
}

export default Question
