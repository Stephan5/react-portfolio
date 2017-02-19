import React, {Component} from 'react';
import {Icon, Grid, Button, Header, Segment, Menu, Image, Progress} from "semantic-ui-react"
export default class Footer extends Component {
  render () {
    const {personalInfo} = this.props;
    return (
      <div>
      <Grid id="underConstruction" textAlign="center">
        <Segment size="huge" basic>
          <Header as='h1' icon={true} color="grey">
            <Icon name='setting' loading color="black"/>
            Site under construction
          </Header>

          <div>
            <Progress percent="40" indicating color='teal'/>
          </div>

          {/*<div className="text-center">*/}
          {/*<Button icon="github alternate" content="See my Github" labelPosition="left"*/}
          {/*href="https://github.com/stephan5" positive/>*/}
          {/*</div>*/}
        </Segment>
      </Grid>
        <Grid>


        <Button.Group size="large" basic>
          <Button href={personalInfo.email} target="_blank">
            <Icon name='mail' /> Contact
          </Button>

          <Button color='green' href={personalInfo.github} target="_blank">
            <Icon name='github alternate' /> Github
          </Button>

          <Button color='linkedin' href={personalInfo.linkedIn} target="_blank">
            <Icon name='linkedin' /> LinkedIn
          </Button>


        <Button color='linkedin' href={personalInfo.cv} target="_blank">
          <Icon name='file text' /> CV
        </Button>


        </Button.Group>
        {/*<Menu compact icon='labeled'>*/}
          {/*<Menu.Item*/}
            {/*href={personalInfo.email}><Icon name='mail'/>Contact</Menu.Item>*/}
          {/*<Menu.Item*/}
            {/*href={personalInfo.github}><Icon name='github alternate'/>Github</Menu.Item>*/}
          {/**/}
          {/*<Menu.Item*/}
            {/*href={personalInfo.linkedIn}><Icon name='linkedin'/>LinkedIn</Menu.Item>*/}
          {/**/}
          {/*<Menu.Item*/}
            {/*href={personalInfo.cv}><Icon name='file text'/> CV </Menu.Item>*/}
        {/*</Menu>*/}
      </Grid>
      </div>
    );
  }
}
