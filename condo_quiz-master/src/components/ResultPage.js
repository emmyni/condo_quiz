import React, {Component} from 'react'

export default class resultPage extends Component {
    render() {
        return (
            <div>
                {this.props.result ? "Your neighbourhood is " + this.props.result : 'You have not completed the quiz!'}
            </div>
        )
    }
}