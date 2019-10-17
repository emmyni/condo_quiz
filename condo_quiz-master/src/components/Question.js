import React, { Component } from 'react'
import Answer from './Answer'

export class Question extends Component {
    select = (value) => {
        this.props.select(value);
    } 

    render() {
        console.log('====================================');
        console.log(this.props);
        console.log('====================================');
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
