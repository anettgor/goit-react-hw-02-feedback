import { Component } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
export default class FeedbackOptions extends Component {
  static propTypes = {
    text: PropTypes.string,
    onFeedback: PropTypes.func,
  };
  render() {
    const { text, onFeedback } = this.props;

    return (
      <button
        className={css.btn}
        type="button"
        data-opinion={text}
        onClick={onFeedback}
      >
        {text}
      </button>
    );
  }
}
