import PropTypes from "prop-types";
import css from "./FeedBack.module.css";
import { Component } from "react";

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
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
  handleClickGood = () => {
    this.setState({ good: this.state.good + 1 });
  };
  handleClickNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  handleClickBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  };
  render() {
    return (
      <>
        <h2 className={css.title}>Please leave feedback</h2>
        <div className={css.buttonsContainer}>
          <button onClick={this.handleClickGood}>Good</button>
          <button onClick={this.handleClickNeutral}>Neutral</button>
          <button onClick={this.handleClickBad}>Bad</button>
        </div>

        <h2>Statistics:</h2>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </>
    );
  }
}

export default FeedBack;
