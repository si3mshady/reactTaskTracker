import React from 'react'
import Note from './Note'
import  Table from 'react-bootstrap/Table'
import Accordion from  'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Mesa() {
  // https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
  const time = new Date().getTime();
 
 

  var timeStamp = new Date(time)
    return (
        <>
        
        <Table striped bordered hover
        style={{marginTop:'10%'}}
        >
  <thead>
    <tr>
      <th>Date</th>
      <th>Miles</th>
      <th>Water</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>

      <Accordion >
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      {timeStamp.toLocaleDateString()}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        Saturday
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
</td>

      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
        </>
    )
}