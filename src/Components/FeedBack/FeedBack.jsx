import React, { useState } from 'react';
import classes from'./FeedBack.module.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AddObject from './AddObject/AddObject'
import QRScanner from './QrScanner/QrScanner';
import Geolocation from './Geolocation/Geolocation';
import SelectObject from './SelectObject/SelectObject';
import Rating from './Rating/Rating';

const CustomerFeedback = () => {
    const [ currTab, setTab ] = useState('qrCode')
    return (
        <div className={classes.wrap}>
            <Tabs
              className="justify-content-center m-3"
              activeKey={currTab}
              onSelect={(key) => setTab(key)}
              id="uncontrolled-tab" variant="pills"
            >
                <Tab className={classes.tab} eventKey="qrCode" title="Scan QR">
                    <SelectObject />
                  { (currTab === 'qrCode') && <QRScanner/>}
                </Tab>
                <Tab className={classes.tab} eventKey="GPS" title="GPS">
                    <SelectObject />
                    <Geolocation />
                </Tab>
                <Tab className={classes.tab} eventKey="newPoint" title="New point">
                    <AddObject />
                </Tab>
            </Tabs>
            <Rating/>
        </div>
    );
}
export default CustomerFeedback;
