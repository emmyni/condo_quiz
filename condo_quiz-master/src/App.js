import React, { Component } from "react";
import Quiz from './components/Quiz.js'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questionAnswer: [
        {
          question: "Do you have kids?",
          selected: null,
          picture: "url('https://www.familyvacationcritic.com/uploads/sites/19/2018/09/large-multi-gen-travel-1280x640.jpg')",
          options: [{
            option: "No and I never will",
            link2Neighbourhood: [1,2,3,]
          },
          {
            option: "Nah but I will someday",
            link2Neighbourhood: [1,2,3,]
          },
          {
            option: "Yes and I haven't slept in 2.5 years",
            link2Neighbourhood: [1,2,3,]
          },
          {
            option: "Yeah and we're starting to look at universities",
            link2Neighbourhood: [1,2,3,]
          },]
        },
        {
          question: "How do you feel about pets?",
          selected: null,
          picture: "url('https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=678&h=381')",
          options: [{
            option: "I love how happy my dog is",
            link2Neighbourhood: [1,2,3,]
          },
          {
            option: "My cat just gets me",
            link2Neighbourhood: [1,2,3,]
          },
          {
            option: "No but I'd smile at dogs on the subway",
            link2Neighbourhood: [1,2,3,]
          },
          {
            option: "Animals aren't for me",
            link2Neighbourhood: [1,2,3,]
          },]
        },
        {
          question: "How do you get to work? ",
          selected: null,
          picture: "url('https://www.seco.com/media/wysiwyg/mercati/transportation.jpg')",
          options: [{
            option: "Car",
            link2Neighbourhood: [1,2,3,]
          },
          {
            option: "Walk",
            link2Neighbourhood: [1,2,3,]
          },
          {
            option: "Bike",
            link2Neighbourhood: [1,2,3,]
          },
          {
            option: "TTC",
            link2Neighbourhood: [1,2,3,]
          },]
        },
        {
          question: "You're getting dinner after work, where do you go?",
          selected: null,
          picture: "url('https://www.omnihotels.com/-/media/images/hotels/gpirst/restaurants/gpirst-omni-grove-park-inn-edison-main-dining.jpg?w=1170')",
          options: [{
            option: "A date at a cute bistro",
          },
          {
            option: "I've got to change, it's going to be fancy",
          },
          {
            option: "Drinks with a friend at that cool bar",
          },
          {
            option: "Somewhere trendy and new",
          },]
        },
        {
          question: "Where's your favourite place for a walk on Saturday mornings?",
          selected: null,
          picture: "url('https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Article+Image+Update/Running/brisk+walk/carousel.jpg')",
          options: [{
            option: "Somewhere I can be near the water",
          },
          {
            option: "A nice shady park",
          },
          {
            option: "I love to do a bit of window shopping on my walks",
          },
          {
            option: "I prefer to chill at home",
          },]
        },
        {
          question: "It's time to get out of your routine and try something new! What are you doing?",
          selected: null,
          picture: "url('https://henricolibrary.org/images/easyblog_articles/129/20190712-hobbies-blog.jpg')",
          options: [{
            option: "Checking out the local library",
          },
          {
            option: "Catching a new movie",
          },
          {
            option: "Joining a sports league at the community centre",
          },
          {
            option: "Volunteering somewhere",
          },]
        },
        {
          question: "You're leaving a bar at 1:00AM, how do you get home?",
          selected: null,
          picture: "url('http://www.deephouseamsterdam.com/wp-content/uploads/2017/05/underground-toronto-featured.jpg')",
          options: [{
            option: "I'll walk a bit",
          },
          {
            option: "I'm taking the night bus",
          },
          {
            option: "Uber",
          },
          {
            option: "I don't stay out that late",
          },]
        },
        {
          question: "You're making pancakes and are out of milk and eggs. What do you do?",
          selected: null,
          picture: "url('https://media.wsimag.com/attachments/e93e9eb9c2850d7ffe69d0383ed27baf224eafd3/store/fill/690/388/35defd11ef8de6b2a0af60645188fd44f1fdcc1e7ed397421e56f58cd7c7/Eggs-milk-and-cheese.jpg')",
          options: [{
            option: "I'll just hop in the car and head to the grocery store",
          },
          {
            option: "I can just walk to the shop down the road",
          },
          {
            option: "I'll get my groceries quickly delivered",
          },
          {
            option: "Let's get brunch instead",
          },]
        },
        {
          question: "How are you going to unwind at the end of a long week?",
          selected: null,
          picture: "url('https://www.citynews1130.com/wp-content/blogs.dir/sites/9/2017/09/08/weekend-e1504923767172.jpg')",
          options: [{
            option: "I'm headed to the club",
          },
          {
            option: "That open mic night at the local bar sounds cool",
          },
          {
            option: "I'll get some friends together for a nice quiet dinner out",
          },
          {
            option: "Movie night at home",
          },]
        },
        {
          question: "What building type do you prefer to live in?",
          selected: null,
          picture: "url('http://d2kcmk0r62r1qk.cloudfront.net/imageSponsors/xlarge/2016_07_15_12_22_04_affinity_rose_streetscape_2_final.jpg')",
          options: [{
            option: "High rise with lots of cool amenities",
          },
          {
            option: "Lower rise with a nice backyard",
          },
          {
            option: "Sleek townhouse",
          },
          {
            option: "Open concept loft",
          },]
        },
      ],
      result: [
        {
          neighbourhood: 'Trinity Bellwoods',
          value: 0,
          img: require('./components/images/62-Claremont-St-2.jpg'),
          link: 'https://condos.ca/toronto/trinity-bellwoods/condos-for-sale?tab=listings&neighbourhood_id=862',
          blurb: "Ask any West End resident where their favourite place to spend a lazy day in the sun and chances are they’ll say, Trinity Bellwoods. The 37-acre park is the heart of this neighbourhood, offering a quiet refuge from Queen Street West's trendy cafés, art galleries, and restaurants.",
        },
        {
          neighbourhood: 'King West',
          value: 0,
          img: require('./components/images/270-Wellington-W-1.jpg'),
          link: 'https://condos.ca/toronto/king-west/condos-for-sale?tab=listings&neighbourhood_id=753',
          blurb: "Know as the city’s premier Entertainment District, King West can boast about having amazing restaurants, historic theatres and some of the coolest condos in Toronto.",
        },
        {
          neighbourhood: 'Leslieville',
          value: 0,
          img: require('./components/images/245-Carlaw-Ave-1.jpg'),
          link: 'https://condos.ca/toronto/south-riverdale-leslieville/condos-for-sale?tab=listings&neighbourhood_id=867',
          blurb: "South Riverdale-Leslieville residents enjoy a pleasant mix of natural settings, quiet residential streets, and a lively selection of chic shops and restaurants on Queen Street.",
        },
        {
          neighbourhood: 'The Beaches',
          value: 0,
          img: require('./components/images/TheBeach.jpg'),
          link: 'https://condos.ca/toronto/the-beaches/condos-for-sale?tab=listings&neighbourhood_id=870',
          blurb: "Laid back and community focused, The Beaches are a great place for condo living. There are some amazing organic cafes and food shops, quirky curios and antique shops to spend the winter months.",
        },
        {
          neighbourhood: 'The Waterfront',
          value: 0,
          img: require('./components/images/10-Yonge-St-11.jpg'),
          link: 'https://condos.ca/toronto/the-waterfront/condos-for-sale?tab=listings&neighbourhood_id=747',
          blurb: "There is a great community feel on The Waterfront with numerous parks and beaches to enjoy and always something interesting happening, whether it’s live music at Harbourfront Centre in the summer or free public skating in the winter.",
        },
        {
          neighbourhood: 'High Park',
          value: 0,
          img: require('./components/images/1-Old-Mill-2.jpg'),
          link: 'https://condos.ca/toronto/high-park-north/condos-for-sale?tab=listings&neighbourhood_id=857',
          blurb: "The 400-acre outdoor recreational space offers an abundance of natural greenery and walking trails, plus playing fields, tennis and basketball courts, children’s playgrounds, education and cultural facilities, and even a zoo.",
        },
        {
          neighbourhood: 'Yorkville',
          value: 0,
          img: require('./components/images/38-Avenue-2.jpg'),
          link: 'https://condos.ca/toronto/yorkville/condos-for-sale?tab=listings&neighbourhood_id=760',
          blurb: "Yorkville gives you access to the worlds most sought after brands such as Hermes, Chanel and Rolex. Luxury abounds with not only amazing shopping but also some of the most exclusive and long-standing restaurants in Toronto, there is no better place to be on a beautiful day than the patio at One or Sassafraz.",
        }
      ]
    }
  }

  result = () => {
    let largestObj = {
      value: -1,
    }
    const {
      result,
      questionAnswer,
    } = this.state
    for(let i = 0; i < 7; i++) {
      if (largestObj.value < result[i].value) {
        largestObj = result[i]
        largestObj.index = i
      }
    }
    largestObj.descrip = ""
    if (questionAnswer[0].selected === 2 && (largestObj.index === 2 || largestObj.index === 3)) {
      largestObj.descrip = (largestObj.neighbourhood === 'The Beaches' ? 'The comminuty focus ' : 'The natural setting and quiet residential streets ') +`at ${largestObj.neighbourhood} is great for someone like yourself that has children or want to have children. ` + largestObj.descrip
    }
    if (questionAnswer[1].selected === 0 && (largestObj.index === 5 || largestObj.index === 0 || largestObj.index === 3)) {
      largestObj.descrip = `You will love this neighbourhood as much as your dog because of the parks and places you could go to! `+ largestObj.descrip
    }
    if (questionAnswer[3].selected === 3 && largestObj.index === 1) {
      largestObj.descrip = `Filled with trendy and cool restraunts, you will always be able to find places to eat and have fun! `+ largestObj.descrip
    }
    if (questionAnswer[4].selected === 0 && (largestObj.index === 3 || largestObj.index === 4)) {
      largestObj.descrip = `For someone that enjoys being near the water such as yourself, ${largestObj.neighbourhood} is ideal and the place to be. ` + largestObj.descrip
    }
    if (questionAnswer[8].selected == 2 && (largestObj.index == 2 || largestObj.index == 6)) {
      largestObj.descrip = `${largestObj.neighbourhood} has many restaurants and is perfect for when you want a nice quiet dinner with friends. ` + largestObj.descrip
    }
    
    return largestObj
  }

  select = (question, index) => {
    this.setState(prevState => {
      let questionAnswer = {...prevState.questionAnswer};
      questionAnswer[question].selected = index;
      return questionAnswer;
    });

    switch(question) {
      case 0:
        switch(index) {
          case 0:
            this.setState(prevState => {
              let result = {...prevState.result};
              result[1].value += 2;
              result[4].value += 1;
              return result;
            });
            break;
          case 1:
            this.setState(prevState => {
              let result = {...prevState.result};
              result[0].value += 2;
              result[5].value += 1;
              return result;
            });
            break;
            case 2:
              this.setState(prevState => {
                let result = {...prevState.result};
                result[3].value += 2;
                result[2].value += 1;
                return result;
              });
              break;
            case 3:
              this.setState(prevState => {
                let result = {...prevState.result};
                result[6].value += 1;
                return result;
              });
              break;
            default:
              break;
        }
        break;
      case 1:
          switch(index) {
            case 0:
              this.setState(prevState => {
                let result = {...prevState.result};
                result[0].value += 2;
                result[5].value += 1;
                result[3].value += 3;
                return result;
              });
              break;
            case 1:
              this.setState(prevState => {
                let result = {...prevState.result};
                result[6].value += 1;
                return result;
              });
              break;
              case 2:
                this.setState(prevState => {
                  let result = {...prevState.result};
                  result[1].value += 2;
                  result[2].value += 1;
                  return result;
                });
                break;
              case 3:
                this.setState(prevState => {
                  let result = {...prevState.result};
                  result[4].value += 1;
                  return result;
                });
                break;
              default:
                break;
          }
        break;
      case 2:
          switch(index) {
            case 0:
              this.setState(prevState => {
                let result = {...prevState.result};
                result[6].value += 2;
                result[3].value += 1;
                return result;
              });
              break;
            case 1:
              this.setState(prevState => {
                let result = {...prevState.result};
                result[0].value += 2;
                result[2].value += 1;
                return result;
              });
              break;
              case 2:
                this.setState(prevState => {
                  let result = {...prevState.result};
                  result[4].value += 2;
                  return result;
                });
                break;
              case 3:
                this.setState(prevState => {
                  let result = {...prevState.result};
                  result[1].value += 1;
                  result[5].value += 2;
                  return result;
                });
                break;
              default:
                break;
          }
        break;
      case 3:
          switch(index) {
            case 0:
              this.setState(prevState => {
                let result = {...prevState.result};
                result[2].value += 3;
                result[5].value += 2;
                result[3].value += 1;
                return result;
              });
              break;
            case 1:
              this.setState(prevState => {
                let result = {...prevState.result};
                result[6].value += 2;
                result[4].value += 1;
                return result;
              });
              break;
              case 2:
                this.setState(prevState => {
                  let result = {...prevState.result};
                  result[0].value += 2;
                  return result;
                });
                break;
              case 3:
                this.setState(prevState => {
                  let result = {...prevState.result};
                  result[1].value += 1;
                  return result;
                });
                break;
              default:
                break;
          }
        break;
      case 4:
          switch(index) {
            case 0:
              this.setState(prevState => {
                let result = {...prevState.result};
                result[3].value += 2;
                result[4].value += 1;
                return result;
              });
              break;
            case 1:
              this.setState(prevState => {
                let result = {...prevState.result};
                result[5].value += 2;
                result[0].value += 1;
                return result;
              });
              break;
              case 2:
                this.setState(prevState => {
                  let result = {...prevState.result};
                  result[6].value += 1;
                  result[2].value += 2;
                  return result;
                });
                break;
              case 3:
                this.setState(prevState => {
                  let result = {...prevState.result};
                  result[1].value += 1;
                  return result;
                });
                break;
              default:
                break;
          }
        break;
      case 5:
          switch(index) {
            case 0:
              this.setState(prevState => {
                let result = {...prevState.result};
                result[2].value += 2;
                result[0].value += 1;
                return result;
              });
              break;
            case 1:
              this.setState(prevState => {
                let result = {...prevState.result};
                result[6].value += 2;
                result[1].value += 1;
                return result;
              });
              break;
              case 2:
                this.setState(prevState => {
                  let result = {...prevState.result};
                  result[5].value += 1;
                  result[3].value += 2;
                  return result;
                });
                break;
              case 3:
                this.setState(prevState => {
                  let result = {...prevState.result};
                  result[4].value += 1;
                  return result;
                });
                break;
              default:
                break;
          }
        break;
      case 6:
        switch(index) {
          case 0:
            this.setState(prevState => {
              let result = {...prevState.result};
              result[2].value += 1;
              return result;
            });
            break;
          case 1:
            this.setState(prevState => {
              let result = {...prevState.result};
              result[5].value += 2;
              result[0].value += 1;
              return result;
            });
            break;
          case 2:
            this.setState(prevState => {
              let result = {...prevState.result};
              result[1].value += 1;
              result[4].value += 2;
              result[6].value += 3;
              return result;
            });
            break;
          case 3:
            this.setState(prevState => {
              let result = {...prevState.result};
              result[3].value += 1;
              return result;
            });
            break;
          default:
            break;
        }
        break;
      case 7:
        switch(index) {
          case 0:
            this.setState(prevState => {
              let result = {...prevState.result};
              result[3].value += 1;
              return result;
            });
            break;
          case 1:
            this.setState(prevState => {
              let result = {...prevState.result};
              result[4].value += 3;
              result[0].value += 2;
              result[5].value += 1;
              return result;
            });
            break;
          case 2:
            this.setState(prevState => {
              let result = {...prevState.result};
              result[6].value += 1;
              return result;
            });
            break;
          case 3:
            this.setState(prevState => {
              let result = {...prevState.result};
              result[1].value += 1;
              result[2].value += 2;
              return result;
            });
            break;
          default:
            break;
        }
        break;
      case 8:
        switch(index) {
          case 0:
            this.setState(prevState => {
              let result = {...prevState.result};
              result[1].value += 1;
              return result;
            });
            break;
          case 1:
            this.setState(prevState => {
              let result = {...prevState.result};
              result[0].value += 2;
              result[5].value += 1;
              return result;
            });
            break;
          case 2:
            this.setState(prevState => {
              let result = {...prevState.result};
              result[2].value += 2;
              result[6].value += 1;
              return result;
            });
            break;
          case 3:
            this.setState(prevState => {
              let result = {...prevState.result};
              result[4].value += 1;
              result[3].value += 2;
              return result;
            });
            break;
          default:
            break;
        }
        break;
      case 9:
          switch(index) {
            case 0:
              this.setState(prevState => {
                let result = {...prevState.result};
                result[4].value += 3;
                result[1].value += 2;
                result[6].value += 1;
                return result;
              });
              break;
            case 1:
              this.setState(prevState => {
                let result = {...prevState.result};
                result[5].value += 2;
                result[3].value += 1;
                return result;
              });
              break;
              case 2:
                this.setState(prevState => {
                  let result = {...prevState.result};
                  result[2].value += 1;
                  return result;
                });
                break;
              case 3:
                this.setState(prevState => {
                  let result = {...prevState.result};
                  result[0].value += 1;
                  return result;
                });
                break;
              default:
                break;
          }
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <Quiz data={this.state.questionAnswer} select={this.select} result={this.result}/>
    );
  }
}

export default App;
