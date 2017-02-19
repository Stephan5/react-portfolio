import React, {Component} from 'react';
import {Icon, Grid, Button, Header, Segment, Menu, Image} from "semantic-ui-react"
export default class Footer extends Component {
  render () {
    const {personalInfo} = this.props;
    return (
      <Grid id="underConstruction" textAlign="center" relaxed>
        <Segment size="huge">
          <Header as='h1' icon>
            <Icon name='cogs'/>
            Site under construction
          </Header>
          <br/>
          {/*<div className="text-center">*/}
          {/*<Button icon="github alternate" content="See my Github" labelPosition="left"*/}
          {/*href="https://github.com/stephan5" positive/>*/}
          {/*</div>*/}
        </Segment>
        <br/>
        <Menu compact icon='labeled'>
          <Menu.Item
            href={personalInfo.email}><Icon name='mail'/>Contact</Menu.Item>
          <Menu.Item
            href={personalInfo.github}><Icon name='github alternate'/>Github</Menu.Item>

          <Menu.Item
            href={personalInfo.linkedIn}><Icon name='linkedin'/>LinkedIn</Menu.Item>

          <Menu.Item
            href={personalInfo.cv}><Icon name='file text'/> CV </Menu.Item>
        </Menu>
      </Grid>
    );
  }
}
