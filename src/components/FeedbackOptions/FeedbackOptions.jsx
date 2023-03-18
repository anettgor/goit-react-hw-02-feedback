import { Component } from 'react';
import css from './FeedbackOptions.module.css';
export default class FeedbackOptions extends Component {
  render() {
    const { text, onFeedback } = this.props;

    return (
      <button className={css.btn} type="button" onClick={onFeedback}>
        {text}
      </button>
    );
  }
}
