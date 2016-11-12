import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';


class Search extends Component {

  onSubmit(e) {
    e.preventDefault();
    let username = this.refs.username.value.trim();
    if(!username) {
      alert('please enter a username');
    }
    this.props.onFormSubmit(username);
    this.refs.username.value = '';
  }
  onChange(e) {
    e.preventDefault();
    let valueSelect = this.refs.select.value;
    valueSelect = parseInt(valueSelect);
    this.props.onChangeSelect(valueSelect);
  }

  render() {

    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="row">
          <div className="col-xs-12 col-sm-8">
            <label>Search Github Users</label>
            <input type="text" ref="username" className="form-control" />
          </div>
          <div className="col-xs-12 col-sm-4">
          <label>&nbsp;</label>
            <select ref="select" className="form-control" onChange={this.onChange.bind(this)}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
          </div>
        </div>

      </form>
    );
  }
}

export default Search;
