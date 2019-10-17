import React, { Component } from 'react'
import Answer from './Answer'

export class Question extends Component {
    select = (index) => {
        this.props.select(this.props.question,index);
    } 

    render() {
        console.log('====================================');
        console.log(this.props);
        console.log('====================================');

        const picture = {
            background: "url('https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=678&h=381')",
            backgroundSize: 'cover'
        }

        return (
            <div className="container">
                <br></br>
                <section className="hero is-large" style={picture}>
                    <div className="hero-body">
                        <div className="container">
                        <h1 className="title">
                            {this.props.data.question}
                        </h1>
                        </div>
                    </div>
                </section>
                <section className="hero is-small">
                    <div className="hero-body">
                        <div className="container">
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
