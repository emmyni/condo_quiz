import React, { Component } from 'react'

export class Answer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }

    select = () => {
        this.props.select(this.props.index);
    }

    toggleHover = () => {
        this.setState({hover: !this.state.hover});
    }

    render() {
        var boxShadowStyle = {
            border: '1px solid',
            padding: '10px',
            boxhadow: '5px 10px 8px #888888'
        }

        var linkStyle;
        if (this.state.hover) {
            linkStyle = {background:'#f2f2f2'}
        }
        else {
            linkStyle = {background:'white'}
        }

        return (
            <div className="tile is-6 is-parent hover">
                <div className="tile is-child box" style={Object.assign(boxShadowStyle, linkStyle)} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.select}>
                    {/* <figure className="image is-4by3">
                        <img src={this.props.link}></img>
                    </figure> */}
                    <p className="title">{this.props.value.option}</p>
                </div>
            </div>
        )
    }
}

export default Answer
