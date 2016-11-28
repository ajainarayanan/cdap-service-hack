import React from 'react';
require('./header.scss');
export default function Header() {
  return (
    <div className="app-header">
      <div className="row">
        <div className="col-xs-3">
          <h2>
            Things Watcher
          </h2>
          <small>
            Powered by CDAP
          </small>
          <span className="fa icon-fist"></span>
        </div>
        <div className="col-xs-2">
          <h2>12</h2>
          <small>Things</small>
        </div>
        <div className="col-xs-2">
          <h2>782</h2>
          <small>Events</small>
        </div>
        <div className="col-xs-5">
          <div className="row">
            <div className="col-xs-6">

            </div>
            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-7">
                  <h2>32 seconds ago</h2>
                  <small>Last seen event</small>
                </div>
                <div className="col-xs-5 text-xs-center">
                  <div className="fa fa-cog fa-2x"></div>
                  <div>Manage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
