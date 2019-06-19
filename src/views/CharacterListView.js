import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import * as actionCreators from '../actions/index';
import { charsReducer } from '../reducers/starWarsReducer';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchedCharacters()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
function mapStateToProps(state) {
  return {
    characters: charsReducer,
  }
}
export default connect(
  mapStateToProps,
  {
    actionCreators
  }
)(CharacterListView);
