import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { iconsData } from '../../data/techStackIcons';
import { Grid, Image } from 'semantic-ui-react';

export default class TechStackItem extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render () {
    const { tech } = this.props;

    if (iconsData[ tech ]) {
      return (
        <Grid.Column style={{ marginTop: '10px' }}>
          <Image className='tech-icon' src={iconsData[ tech ]}/>
          {tech}
        </Grid.Column>
      );
    } else {
      return (
        <div>
          {tech}
          <img className='tech-icon'
               src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Transparent_square.svg/2000px-Transparent_square.svg.png'/>
        </div>
      );
    }
  }
}

TechStackItem.propTypes = {
  tech: PropTypes.string.isRequired
};
