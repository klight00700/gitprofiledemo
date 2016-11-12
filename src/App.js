import React, { Component } from 'react';
import Profile from './github/Profile';
import Search from './github/Search';
import $ from 'jquery';
import _ from 'lodash';
import logo from './logo.svg';
import './bower_components/bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  static propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
  };
  static defaultProps = {
    clientId: '2a2b470c48fc0eacbd24',
    clientSecret: 'd0610532a0692d1d5cdacadd9732806eab607fae'
  };

  constructor(props) {
    super(props);
    this.state = {
      username: 'klight00700',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }

  //get user data from github
  getUserData = () => {

    $.ajax({
      url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({userData: data}, function(){
        }.bind(this));
        _.forEach(data, function(value, key) {
          //console.log(key);
        });
      },
      error: (xhr,status, error) => {
        this.setState({username: ''});
        alert(error);
      }
    });

  }

  getUserRepos = () => {
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({userRepos: data}, function(){
        }.bind(this));
      },
      error: (xhr,status, error) => {
        this.setState({username: ''});
        alert(error)
      }
    });
  }

  handleFormSubmit = (username) => {
    this.setState({username: username}, () => {
      this.getUserData();
      this.getUserRepos();
    })
  }

  handleOnChange = (value) => {
    this.setState({perPage: value}, () => {
      this.getUserData();
      this.getUserRepos();
    })
  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }


  render() {
    return (
      <div className="page">
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">MyGithub</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="starter-template">
          <Search onFormSubmit={this.handleFormSubmit} onChangeSelect={this.handleOnChange}/>
          <Profile {...this.state} />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
