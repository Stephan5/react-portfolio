import React, {Component} from 'react';
import {Icon, Grid, Button, Header, Segment} from "semantic-ui-react"
export default class Footer extends Component {
  render () {
    const {personalInfo} = this.props;
    return (
      <Grid id="underConstruction" textAlign="center" relaxed >
        <Segment  size="huge" >
          <Header as='h1' icon>
            <Icon name='cogs'/>
            Site under construction
          <br/>
            <Header.Subheader>
              When it's ready, it'll blow your mind.
            </Header.Subheader>
          </Header>
          <br/>
          <div className="text-center">
            <Button icon="github alternate" content="See my Github" labelPosition="left"
                    href="https://github.com/stephan5" positive/>
          </div>
        </Segment>
      </Grid>
    );
  }
}
