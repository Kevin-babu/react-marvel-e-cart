import React from 'react';
import Navbar from '../components/LoggedIn/Header-components/Navbar';
import { Container } from 'react-bootstrap';

export default function Account() {
  return (
    <>
        <Navbar />
        <Container style={{marginTop : "100px"}}>
          <h1>Account</h1>
        </Container>
    </>
  )
}
