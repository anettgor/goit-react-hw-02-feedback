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
    const count = (good / total) * 100;

    if (!count) {
      return '-';
    } else {
      return count.toFixed();
    }
  };

  onFeedback = event => {
    const { good, bad, neutral } = this.state;
    if (event.target.textContent === 'Good') {
      this.setState({ good: good + 1 });
      this.countTotalFeedback();
    } else if (event.target.textContent === 'Bad') {
      this.setState({ bad: bad + 1 });
      this.countTotalFeedback();
    } else if (event.target.textContent === 'Neutral') {
      this.setState({ neutral: neutral + 1 });
      this.countTotalFeedback();
    } else {
      console.log('Error');
    }
  };

  render() {
    const { good, neutral, bad, total } = this.state;

    return (
      <div className={css.body}>
        <Section title="Please leave feedback">
          <div>
            <FeedbackOptions text="Good" onFeedback={this.onFeedback} />
            <FeedbackOptions text="Neutral" onFeedback={this.onFeedback} />
            <FeedbackOptions text="Bad" onFeedback={this.onFeedback} />
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
