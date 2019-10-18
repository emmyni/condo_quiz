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

        const heroBody = {
            padding: ' 48px 24px'
        }
        console.log('====================================');
        console.log(result);
        console.log('====================================');
        return (
            <div className="container">
                <section className="hero is-large">
                    <div className="hero-body" style={heroBody}>
                        <div className="tile is-ancestor">
                            <div className="tile is-child box has-text-centered">
                                <h1 className="title">
                                    {neighbourhood ? "Your neighbourhood is " + neighbourhood : 'You have not completed the quiz!'}
                                </h1>
                                <img src={img} alt=""></img>
                                <h3>{descrip}</h3>
                                <h4>{blurb}<a href={link}> Find out more...</a></h4>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
        )
    }
}