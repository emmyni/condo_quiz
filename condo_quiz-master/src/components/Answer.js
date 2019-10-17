import React, { Component } from 'react'


export class Answer extends Component {
    render() {
        return (
            <div className="tile is-6 is-parent">
                <div className="tile is-child box">
                    <figure className="image is-4by3">
                        <img src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
                    </figure>
                    <p className="title">{this.props.value}</p>
                </div>
            </div>
        )
    }
}

export default Answer
