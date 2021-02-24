import React from 'react';
import classes from'./Navtabs.module.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AddObject from '../AddObject/AddObject'
import QRScanner from '../QrScanner/QrScanner';
import Geolocation from '../Geolocation/Geolocation';
import SelectObject from '../SelectObject/SelectObject';
import Rating from '../Rating/Rating';

const Navtabs = () => {
    return (
        <div>
            <Tabs className="justify-content-center m-3" defaultActiveKey="qrCode" id="uncontrolled-tab-example" variant="pills">
                <Tab className={classes.tab} eventKey="qrCode" title="Scan QR">            
                    <SelectObject />
                    <QRScanner />   
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

export default Navtabs;
