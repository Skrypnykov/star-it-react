import React, { Component } from 'react';
import classes from './QrScanner.module.css';
import QrReader from 'react-qr-reader';

var timeInMs = Date.now();

class QrScanner extends Component {
  state = {
    result: 'No result'
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
        <div className="content-wrapper">
            <div className={classes.object}>
              <div className="name">
              <p>Name: <span></span></p>
              </div>
              <div className="address">
                <p>Address: <span></span></p>
              </div>
              <div className="ticketWindow">
                <p>Ticket window: <span></span></p>
              </div>
              <div className="time">
                <p>Time: <span>{Date(timeInMs)}</span></p>
              </div>
            </div>
            <div className={classes.wrap}>
                <QrReader
                delay={300}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: '100%'}}
                />
                <p>{this.state.result}</p>
            </div>
        </div>
    )
  }
}

export default QrScanner;