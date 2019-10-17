import React, { Component } from 'react'
import Answer from './Answer'

export class Question extends Component {
    select = (value) => {
        this.props.select(value);
    } 

    render() {
        // const card = {
        //     height: '200px'
        // };
        const answers = [
            '1',
            '2',
            '3',
            '4'
        ]
        return (
            <div className="container">
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                        <h1 className="title">
                            Do you have kids?
                        </h1>
                        <h2 className="subtitle">
                            Hero subtitle
                        </h2>
                        </div>
                    </div>
                </section>
                <div className="tile is-ancestor" style={{"flexWrap": "wrap"}}>
                {answers.map((value, index) => {
                    return <Answer key={index} value={value} select={this.select}/>
                })}
                </div>
                {/* <div className="card is-6" style={{card}}>
                    <div className="card-image">
                        <figure className="image is-4by3">
                        <img src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200" alt="Placeholder image"></img>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Question
