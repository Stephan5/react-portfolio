import React, {Component} from 'react';
import {Icon, Grid, Button, Header, Segment, Menu, Image, Progress} from "semantic-ui-react"

export default class Construction extends Component {

  constructor () {
    super();
    this.state = {
      percent: 10,
    }
  }

 percentChange (percent) {
    console.log(percent);
    if (percent <= 90) {
      this.setState({percent: this.state.percent + 5})
    } else {
      this.setState({percent: this.state.percent - 85})
    }
  };

  render () {

  window.setTimeout(() => this.percentChange(this.state.percent), 1000);
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
            <Progress percent={this.state.percent} indicating color='teal'/>
          </div>
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
      </Grid>
      </div>
    );
  }
}
