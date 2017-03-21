import React, {Component} from 'react';
import {Icon, Grid, Button, Header, Segment, Menu, Image, Label, Progress} from "semantic-ui-react"
import {range} from 'lodash';
const _ = require('lodash');
import {personalInfoData} from '../../src/data/personalInfo'
const personalInfo = personalInfoData;
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Segment raised>
      <Label as='p' color='teal' ribbon>Coming Soon</Label>

      <Grid id="underConstruction" textAlign="center">
        <Segment basic size="huge">
          <Header as='h1' icon={true} color="black">
            <Icon name='setting' loading color="black"/>
            Site under construction
          </Header>
          <div>
            <Progress percent={40} indicating color="teal"/>
          </div>
        </Segment>
      </Grid>
      <Grid>
        <Button.Group size="large" basic>
          <Button href={personalInfo.email} target="_blank">
            <Icon name='mail'/> Contact
          </Button>

          <Button color='green' href={personalInfo.github} target="_blank">
            <Icon name='github alternate'/> Github
          </Button>

          <Button color='linkedin' href={personalInfo.linkedIn} target="_blank">
            <Icon name='linkedin'/> LinkedIn
          </Button>


          <Button color='linkedin' href={personalInfo.cv} target="_blank">
            <Icon name='file text'/> CV
          </Button>
        </Button.Group>
      </Grid>
    </Segment>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});