import React from "react";
import classes from "./Dashboard.module.css";
import Table from 'react-bootstrap/Table';

const Dashboard = () => {
  return (
    <div className={classes.wrap}>
      <div className="content-wrapper">

      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>Object</th>
            <th>Address</th>
            <th>Ticket</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Silpo</td>
            <td>Kramatorskiy, 18, Kramatorsk, Donetsk reg</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>2</td>
            <td>ATB</td>
            <td>Solnechny, 29A, Dobropillya, Donetsk reg</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Posad</td>
            <td>Molodezhny, 32, Dobropillya, Donetsk reg</td>
            <td>1</td>
            <td>5</td>
          </tr>
        </tbody>
      </Table>
      </div>
    </div>
  );
};

export default Dashboard;
