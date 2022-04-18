import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

function ContactUs() {
  return (
    <>
        <div id='contactus'>
            <h1 className='mb-5'>Get In Touch</h1>
        </div>
        <div className='w-75 mx-auto'>
        <Form>
  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGridPassword">

      <Form.Control type="text" placeholder="Name" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    
  </Row>

  <Form.Group className="mb-3" >
    <Form.Control style={{paddingBottom:"200px"}} placeholder="Type your Message" />
  </Form.Group>
  <Button className='my-3 py-3 px-5' variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    </>
  )
}

export default ContactUs