import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Mobile from './projectComponents/Mobile.js';
import TechStackItem from './projectComponents/TechStackItem';
import { Divider, Grid, Header, Image, Label, Segment } from 'semantic-ui-react';

export default class Project extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render () {
    const { project } = this.props;

    const techStackItems = project.tech_stack.map((tech, index) => {
      return <TechStackItem key={index} tech={tech}/>;
    });

    const techStackColumns = techStackItems.length >= 5 ? 5 : techStackItems.length;

    return (
      <Segment raised className='project-container'>
        <Header as='h2'>
          {project.logo ? <Image shape='circular' href={project.project_url} src={project.logo}/> : null}
          <Header.Content>
            Starling Developers
            <Header.Subheader>
             Starling Bank
            </Header.Subheader>
          </Header.Content>
        </Header>
        <div className='image-container'>
          <div className='screenshot-container'>
            <img src={project.desktop_image}/>
            {project.mobile_image !== '' ? <Mobile image={project.mobile_image}/> : null}
          </div>
        </div>
        <div className='project-info'>
          <Header>{project.title}</Header>
          <a href='https://www.starlingbank.com'>Starling Bank</a>
          {project.github_url ? <a href={project.github_url} target='_blank'>
            {project.github_url !== '' ? 'Github' : null}
          </a> : null}
          <div>{project.date}</div>
          <h3>Background</h3>
          <div>{project.background}</div>
          <h3>Role</h3>
          <div>{project.role}</div>
          <h3>Tech Stack</h3>
          <Grid textAlign='center' columns={techStackColumns} divided>
            <Grid.Row>
              {techStackItems}
            </Grid.Row>
          </Grid>
        </div>
      </Segment>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired
};
