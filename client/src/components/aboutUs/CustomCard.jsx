import React from 'react'

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
export default function CustomCard() {
  return (
    <Card>
      <Card.Img variant='top' src='holder.js/100px160' />
      <Card.Body>
        <Card.Title>Ronit Kumar Baranwal</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className='text-muted'>Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
}
