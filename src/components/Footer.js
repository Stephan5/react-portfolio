import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const { personalInfo } = this.props;
    return (
      <footer className="footer" color="grey">
        <span id="footer-text-wrap" color="grey">
        Built by {personalInfo.name}
        </span>
      </footer>
    );
  }
}
