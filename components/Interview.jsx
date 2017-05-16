import React, {Component} from 'react';
import PaulFordInterview from './interviews/paul-ford';

export default class Interview extends Component {

  render() {
    return (
      <div className="interview">
        <PaulFordInterview />
      </div>
    );
  }
}
