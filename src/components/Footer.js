import React, { Component } from 'react';
import { Segment, Divider, Header, Label } from 'semantic-ui-react'
export default class Footer extends Component {
  render() {
    const { personalInfo } = this.props;
    return (
      <Segment basic className="footer">
        <Divider />
        <span><Header as="h4">Built by
        <Label as='p' size="large" color="teal">
          Stephan
        </Label>
        </Header></span>
      </Segment>
    );
  }
}
