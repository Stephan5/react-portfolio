import React, { Component } from 'react';
import { Icon, Image, Menu } from 'semantic-ui-react';
import logo from '../assets/stephan5-logo.png';

const onClick = (e, { name }) => {
  this.setState({ activeItem: name });
};

export default class Header extends Component {

  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    const { activeItem } = this.state;
    const { personalInfo } = this.props;
    return (
      <Menu>
        <Menu.Item header>
          <Image src={logo} width='40px' height='40px'/>
        </Menu.Item>

        <Menu.Item
          name='projects'
          active={activeItem === 'projects'}
          onClick={onClick}>
          <Icon name='rocket'/>Projects</Menu.Item>

        <Menu.Item
          name='technologies'
          active={activeItem === 'technologies'}
          onClick={onClick}>
          <Icon name='lab'/>Technologies</Menu.Item>

        <Menu.Item
          name='design'
          active={activeItem === 'design'}
          onClick={onClick}>
          <Icon name='eyedropper'/>Design</Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item href={personalInfo.email}>
            <Icon name='mail'/>Contact</Menu.Item>
          <Menu.Item href={personalInfo.github}>
            <Icon name='github alternate'/>Github
          </Menu.Item>
          <Menu.Item href={personalInfo.linkedIn}>
            <Icon name='linkedin'/>LinkedIn
          </Menu.Item>
          <Menu.Item href={personalInfo.cv}>
            <Icon name='file text'/>CV
          </Menu.Item>
        </Menu.Menu>
      </Menu>

    );
  }
}
