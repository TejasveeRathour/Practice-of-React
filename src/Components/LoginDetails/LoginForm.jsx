import React from 'react';
import './LoginForm.css'; // Import CSS file for styling
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm() {
  return (
    <div className="centered-container">
      <Form className="form-container">
        <Form.Group className="fields" controlId="formBasicEmail">
          <Form.Label className='label'>User ID</Form.Label>
          <Form.Control className="userid" type="text" placeholder="User ID" />
        </Form.Group>

        <Form.Group className="fields" controlId="formBasicPassword">
          <Form.Label className='label'>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;