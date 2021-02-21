import React from 'react';
import classes from'./Navtabs.module.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import RegForm from '../RegForm/RegForm'
import AddForm from '../AddForm/AddForm'
import QRScanner from '../QrScanner/QrScanner';

const Navtabs = () => {
    return (
        <Tabs className="justify-content-center m-3" defaultActiveKey="profile" id="uncontrolled-tab-example" variant="pills">
            <Tab className={classes.tab} eventKey="choose" title="Choose">            
                <RegForm />
            </Tab>
            <Tab className={classes.tab} eventKey="qrCode" title="QR-Code">
                <QRScanner />   
            </Tab>
            <Tab className={classes.tab} eventKey="addNew" title="Add new">
                <AddForm />
            </Tab>
        </Tabs>
    );
}

export default Navtabs;
