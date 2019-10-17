import React, { Component } from 'react'
import Answer from './Answer'
import { Button } from 'react-bulma-components'

export class Question extends Component {
    render() {
        // const card = {
        //     height: '200px'
        // };
        return (
            <div className="container">
                <section class="hero">
                    <div class="hero-body">
                        <div class="container">
                        <h1 class="title">
                            Do you have kids?
                        </h1>
                        <h2 class="subtitle">
                            Hero subtitle
                        </h2>
                        </div>
                    </div>
                </section>
                <div class="tile is-ancestor" style={{"flex-wrap": "wrap"}}>
                    <Answer />
                    <Answer />
                    <Answer />
                    <Answer />
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
