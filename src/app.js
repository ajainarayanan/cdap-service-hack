import React, {Component} from 'react';
import ReactDOM from 'react-dom';
require("font-awesome-sass-loader!./styles/font-awesome-sass.config.js");
require('./styles/main.scss');
require('./app.scss');
import Header from './components/Header';
import 'whatwg-fetch';
import {ButtonDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
import countdown from 'countdown';

window.countdown = countdown;
class ServiceUIApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }
  componentWillMount() {
    fetch('http://demo3094119.mockable.io/events')
      .then(data => data.json())
      .then(res => {
        this.setState({
          events: res.events.map(event => {
            event.eventDropdownOpen = false;
            return event;
          })
        });
      });
  }
  eventDropdownToggle(i) {
    let events = [...this.state.events];
    events[i].eventDropdownOpen = !events[i].eventDropdownOpen;
    this.setState({
      events
    });
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
              {
                this.state.events.map((event, i) => {
                  return (
                    <tr key={i}>
                      <td>{event.name}</td>
                      <td>{event.type}</td>
                      <td>{event.numberofevents}</td>
                      <td className="clearfix">
                        <span className="float-xs-left">{countdown(event.lastevent, null, null, 2).toString()}</span>
                        <div className="float-xs-right">
                          <ButtonDropdown isOpen={event.eventDropdownOpen} toggle={this.eventDropdownToggle.bind(this, i)}>
                           <DropdownToggle caret>
                             <i className="fa fa-cog"></i>
                           </DropdownToggle>
                           <DropdownMenu right>
                            <pre>
                              {JSON.stringify(event, null, 2)}
                            </pre>
                           </DropdownMenu>
                          </ButtonDropdown>
                        </div>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ServiceUIApp />, document.getElementById('app-container'));
ReactDOM.render(<Header />, document.getElementById('app-header'));
