import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';


class Repo extends Component {

  render() {
    const {repo} = this.props;
    return (
      <li className="list-group-item">
        <a target="_blank" href={repo.html_url}>{repo.name}</a>: {repo.description}
      </li>
    );
  }
}

export default Repo;
