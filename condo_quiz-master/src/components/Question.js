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
        this.props.select(this.props.question,index);
        this.setState({
            redirect: true,
            hover: false
        })
    }

    render() {
        let boxShadowStyle = {
            border: '2px solid',
            boxShadow: '8px 10px 10px #888888'
        }

        const picture = {
            background: this.props.data.picture,
            backgroundSize: 'cover'
        }
        const question = {
            background: 'white',
            padding: '20px'
        }

        if (this.state.redirect) {
            return (
                <Redirect to={this.props.question < 9 ? "/question" + (1+this.props.question) : "conclusion"}/>
            )
        }
        return (
            <div className="container">
                <br></br>
                <section className="hero is-large" style={boxShadowStyle}>
                    <div className="hero-body" style={picture}>
                        <div className="container">
                        </div>
                    </div>
                    <div className="hero-foot" style={question}>
                        <div className="container has-text-centered">
                            <h1 className="title">
                                {this.props.data.question}
                            </h1>
                        </div>
                    </div>
                </section>
                <br></br>
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
