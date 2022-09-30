import { useState } from "react";
import { Section } from "components/Section/Section";
import { Notification } from "components/Notification/Notification";
import { Statistics } from "../Statistic/Statistic";
import { FeedbackOptions } from "../Feeedback/FeedbackOptions"
import { Container, InnerContainer } from "./App.styled";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onChangeFeedback = (opinion) => {
    switch (opinion) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      
      default:
        return;
   }
  }
    
  const options = ["good", "neutral", "bad"];


  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  }

  const countPositiveFeedbackPercentage = () => {
    const totalAmount = countTotalFeedback();
    return Math.round((good/totalAmount) *100) + "%";
  };
  


        
      return (
        <Container>
          <InnerContainer>
            <Section title="Please leave your feedback">
              <FeedbackOptions
              options={options}
              onLeaveFeedback={onChangeFeedback}                   
              />
            </Section>

            <Section title="Statistics">
              {countTotalFeedback() > 0 ?( <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positiveFeedbackPercentage = {countPositiveFeedbackPercentage()}
              />)
              : (<Notification message="There is no feedback"/>)
            }
              </Section>
          </InnerContainer>
          </Container>
        )
};



//==========================WAS===============================================//

// import { Component } from "react";
// import { Section } from "components/Section/Section";
// import { Notification } from "components/Notification/Notification";
// import { Statistics } from "../Statistic/Statistic";
// import { FeedbackOptions } from "../Feeedback/FeedbackOptions"
// import { Container, InnerContainer } from "./App.styled";

// export class App extends Component{
//   state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
//   }

//   onHandleClick = (key) => {
//     this.setState(prevState => {
//       return {
//         [key]: prevState[key] + 1
//       }
//     })
//   }
    

//   countTotalFeedback(){
//       const object = this.state;
//         return Object.values(object).reduce(
//         (total, item) => total + item, 0
//     );
//   }

//   countPositiveFeedbackPercentage() {
//     const totalAmount = this.countTotalFeedback();
//     return Math.round((this.state.good/totalAmount) *100) + "%";
//   };
  
//     render() {
//       const { good, neutral, bad } = this.state;
        
//       return (
//         <Container>
//           <InnerContainer>
//             <Section title="Please leave your feedback">
//               <FeedbackOptions
//               options={Object.keys(this.state)}
//               onLeaveFeedback={this.onHandleClick}                   
//               />
//             </Section>

//             <Section title="Statistics">
//               {this.countTotalFeedback() > 0 ?( <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={ this.countTotalFeedback()}
//               positiveFeedbackPercentage = {this.countPositiveFeedbackPercentage()}
//               />)
//               : (<Notification message="There is no feedback"/>)
//             }
//               </Section>
//           </InnerContainer>
//           </Container>
//         )
//     }
// };
