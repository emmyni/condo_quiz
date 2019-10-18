import React, {Component} from 'react'
import image from "./images/TheBeach.jpg"

export default class resultPage extends Component {
    render() {
        const result = this.props.result()
        const {
            neighbourhood,
            img,
            descrip,
            blurb,
            link,
        } = result
        console.log('====================================');
        console.log(result);
        console.log('====================================');
        return (
            <div className="container">
                <section className="hero is-large">
                    <div className="hero-body">
                <div className="tile is-child box">
                {neighbourhood ? "Your neighbourhood is " + neighbourhood : 'You have not completed the quiz!'}
                <img src={img} alt=""></img>
                <h3>{descrip}</h3>
                <h4>{blurb}<a href={link}> Find out more...</a></h4>
                </div>
            </div>
            </section>
            </div>
            
        )
    }
}