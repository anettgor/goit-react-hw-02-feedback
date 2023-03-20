import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

import css from './App.module.css';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

import Notification from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  countTotalFeedback = () => {
    this.setState({ total: this.state.total + 1 });
  };

  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    let count = (good / total) * 100;

    count = +count.toFixed();
    if (!count) {
      return 0;
    } else {
      return count;
    }
  };

  onFeedback = event => {
    const data = event.target.dataset.opinion;
    this.setState({
      [data]: this.state[data] + 1,
    });
    this.countTotalFeedback();
  };

  render() {
    const { good, neutral, bad, total } = this.state;

    return (
      <div className={css.body}>
        <Section title="Please leave feedback">
          <div>
            <FeedbackOptions text="good" onFeedback={this.onFeedback} />
            <FeedbackOptions text="neutral" onFeedback={this.onFeedback} />
            <FeedbackOptions text="bad" onFeedback={this.onFeedback} />
          </div>
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
