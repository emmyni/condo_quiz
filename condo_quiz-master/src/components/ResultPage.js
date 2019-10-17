import React, {Component} from 'react'

export default class resultPage extends Component {
    render() {
        const result = this.props.result().neighbourhood
        return (
            <div>
                {result ? "Your neighbourhood is " + result : 'You have not completed the quiz!'}
            </div>
        )
    }
}