import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Introduction extends Component {
  render() {
    const { personalInfo } = this.props;
    return (
      <div className="introduction">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
      </div>
    );
  }
}

Introduction.propTypes = {
  personalInfo: PropTypes.object.isRequired
};

export default Introduction