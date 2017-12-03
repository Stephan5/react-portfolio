import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BenchmarkActions from '../actions/BenchmarkActions';
import Project from '../components/Project';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { startTime } from '../index';
import Construction from '../components/Construction';

export class App extends Component {
  componentDidMount () {
    const { actions } = this.props;
    actions.updateBenchmark(new Date().getTime() - startTime);
  }

  render () {

    const { projects, benchmark, personalInfo } = this.props;
    const projectEntries = projects.map((project, index) => {
      return <Project key={index} project={project}/>;
    });
    return (
      <div>
        <Header personalInfo={personalInfo}/>
        <div className='main-app-container'>
          {projectEntries}
          {/*<Construction personalInfo={personalInfo}/>*/}
        </div>
        <Footer personalInfo={personalInfo}/>
      </div>
    );
  }
}

App.propTypes = {
  projects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  benchmark: PropTypes.number.isRequired,
  personalInfo: PropTypes.object.isRequired
};

function mapStateToProps (state) {
  return {
    projects: state.projects,
    benchmark: state.benchmark,
    personalInfo: state.personalInfo
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(BenchmarkActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
