import React from 'react';
import { Button, Grid, Header, Icon, Label, Progress, Segment } from 'semantic-ui-react';
import { personalInfoData } from '../../src/data/personalInfo';
import renderer from 'react-test-renderer';

const personalInfo = personalInfoData;

it('renders correctly', () => {
  const tree = renderer.create(
    <Segment raised>
      <Label as='p' color='teal' ribbon>Coming Soon</Label>
      <Grid id='underConstruction' textAlign='center'>
        <Segment basic size='huge'>
          <Header as='h1' icon={true} color='black'>
            <Icon name='setting' loading color='black'/>
            Site under construction
          </Header>
          <div>
            <Progress percent={40} indicating color='teal'/>
          </div>
        </Segment>
      </Grid>
      <Grid>
        <Button.Group size='large' basic>
          <Button href={personalInfo.email} target='_blank'>
            <Icon name='mail'/> Contact
          </Button>

          <Button color='green' href={personalInfo.github} target='_blank'>
            <Icon name='github alternate'/> Github
          </Button>

          <Button color='linkedin' href={personalInfo.linkedIn} target='_blank'>
            <Icon name='linkedin'/> LinkedIn
          </Button>

          <Button color='linkedin' href={personalInfo.cv} target='_blank'>
            <Icon name='file text'/> CV
          </Button>
        </Button.Group>
      </Grid>
    </Segment>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});