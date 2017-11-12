import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Mobile extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render () {
    const { image } = this.props;
    return (
      <div className='mobile-container hide-when-small'>
        <div className='iphone'>

          <img src={image}/>
        </div>

      </div>
    );
  }
}

Mobile.propTypes = {
  image: PropTypes.string.isRequired
};
