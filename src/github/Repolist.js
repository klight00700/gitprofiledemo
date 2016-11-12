import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Repo from './Repo';
import $ from 'jquery';
import _ from 'lodash';


class Repolist extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    var list = _.map(this.props.userRepos, repo => {
      return <Repo repo={repo} key={repo.id} {...this.props} />
    });
    return (
      <div>
        <ul className="list-group">
          {list}
        </ul>

      </div>
    );
  }
}

export default Repolist;
