import { Component } from "react";
import { Section } from "./components/Feedback/Section/Section";
import { Statistics } from "./components/Feedback/Statistics/Statistics";
import { FeedbackOptions } from "./components/Feedback/FeedbackOptions/FeedbackOptions";
import { Notification } from "./components/Feedback/Notification/Notification";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Methods
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total > 0) {
      return Math.round((this.state.good / total) * 100);
    }
    return 0;
  };
  handleFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
         {this.countTotalFeedback() !== 0 ?  <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          /> : <Notification message="There is no feedback"></Notification>
          }
        </Section>
      </>
    );
  }
}
 
export default App;

