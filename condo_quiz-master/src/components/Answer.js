import React, { Component } from 'react'


export class Answer extends Component {
    select = () => {
        this.props.select(this.props.value);
    } 
    render() {
        return (
            <div className="tile is-6 is-parent" onClick={this.select}>
                <div className="tile is-child box">
                    {/* <figure className="image is-4by3">
                        <img src={this.props.link}></img>
                    </figure> */}
                    <p className="title">{this.props.value}</p>
                </div>
            </div>
        )
    }
}

export default Answer
