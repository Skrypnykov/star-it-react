import React, { Component } from 'react';
import classes from './QrScanner.module.css';
import QrReader from 'react-qr-reader';

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