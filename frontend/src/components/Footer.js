import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container fluid className='color-fot' variant='dark'>
        <font color={'white'}>
        <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright: BioMART
        </Container>
      </div>
      </font>
      </Container>
    </footer>
  );
}
export default Footer
