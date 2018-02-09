import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.something}</h1>
      </div>
    );
  }
}

App.propTypes = {
  something: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    something: state.something
  };
};

export default connect(mapStateToProps)(App);
