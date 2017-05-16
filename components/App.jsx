import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import InterviewList from './InterviewList';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="masthead wrap wrap--guttered maxwidth maxwidth--xl">
          <h1>
            <Link to="/">Thoughtful Tech</Link>
          </h1>
          <h6>
            Conversations with people thinking about tech and its impact on society.
          </h6>

          <Route exact path="/" component={InterviewList}/>
        </div>
      </Router>
    );
  }
}
