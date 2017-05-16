import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import OmayeliArenyeka from './interviews/OmayeliArenyeka';
import PaulFord from './interviews/PaulFord';
import JacobThornton from './interviews/JacobThornton';
import NoahKulwin from './interviews/NoahKulwin';
import JennSchiffer from './interviews/JennSchiffer';
import ChristinaWallace from './interviews/ChristinaWallace';
import TracyChou from './interviews/TracyChou';


export default class InterviewList extends Component {
  constructor(props) {
    super(props)
    this.interviewList = {
      'Omayeli Arenyeka': OmayeliArenyeka,
      'Paul Ford': PaulFord,
      'Jacob Thornton': JacobThornton,
      'Noah Kulwin': NoahKulwin,
      'Jenn Schiffer': JennSchiffer,
      'Christina Wallace': ChristinaWallace,
      'Tracy Chou': TracyChou,
    }
    this.state = {showList: true}
  }

  convertNameToURL(name) {
    return `/${name.replace(/ +/g, '-').toLowerCase()}`
  }

  renderList() {
    return Object.keys(this.interviewList).map((name) => {
      return (
        <h4 key={`interview-${name}`}>
          <Link to={this.convertNameToURL(name)}>{name}</Link>
        </h4>
      )
    })
  }

  renderRoutes() {
    return Object.keys(this.interviewList).map((name) => {
      return (
        <Route
          key={`route-${name}`}
          path={this.convertNameToURL(name)}
          component={this.interviewList[name]}
        />
      )
    })
  }

  render() {
    return (
      <Router>
        <div className="interview-list wrap wrap--guttered">
          {this.renderList()}
          {this.renderRoutes()}
        </div>
      </Router>
    );
  }
}
