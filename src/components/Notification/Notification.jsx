import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Notification extends Component {
  static propTypes = {
    message: PropTypes.string,
  };
  render() {
    const { message } = this.props;

    return <p>{message}</p>;
  }
}
