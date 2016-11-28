import React, {Component} from 'react';
import ReactDOM from 'react-dom';
require("font-awesome-sass-loader!./styles/font-awesome-sass.config.js");
require('./styles/main.scss');
require('./app.scss');
import Header from './components/Header';

class ServiceUIApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="tab-group">
            <div className="tab-item">List</div>
            <div className="tab-item disabled">Map</div>
            <div className="tab-item disabled">Analytics</div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Num of Events</th>
                <th>Last Event</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Phone1</td>
                <td>mobile</td>
                <td>32</td>
                <td>32 Seconds ago</td>
              </tr>
              <tr>
                <td>Phone1</td>
                <td>mobile</td>
                <td>32</td>
                <td>32 Seconds ago</td>
              </tr>
              <tr>
                <td>Phone1</td>
                <td>mobile</td>
                <td>32</td>
                <td>32 Seconds ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ServiceUIApp />, document.getElementById('app-container'));
ReactDOM.render(<Header />, document.getElementById('app-header'));
