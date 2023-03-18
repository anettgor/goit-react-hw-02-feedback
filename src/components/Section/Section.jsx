import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Section.module.css';

export default class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <section className={css.section}>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  text: PropTypes.string,
};
