import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default class Statistics extends Component {
  static defaultProps = {
    good: 0,
    bad: 0,
    neutral: 0,
    total: 0,
    positivePercentage: 0,
  };
  static propTypes = {
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div className={css.stats}>
        <p>Good: {good} </p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p className={positivePercentage > 50 ? css.positive : css.negative}>
          Positive feedback: {positivePercentage}%{' '}
        </p>
      </div>
    );
  }
}
