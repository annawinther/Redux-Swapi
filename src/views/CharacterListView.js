import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import * as actionCreators from '../actions/index';
// import { charsReducer } from '../reducers/starWarsReducer';

class CharacterListView extends React.Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    // call our action
    this.props.fetchedApi()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <div><p>Please wait, fetching your data... </p></div>
      )
    }
    if (this.props.error) {
      return (
        <div><h1>{this.props.error}</h1></div>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList 
        characters={this.props.characters}
        fetching={this.props.fetching}

        fetchedApi={this.props.fetchedApi} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
function mapStateToProps(state) {
  console.log(state);
  return {
    characters: state.chacharacters,
    fetching: state.fetching,
    error: state.error,
  }
}
export default connect(
  mapStateToProps,

  actionCreators
)(CharacterListView);
