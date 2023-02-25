import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AdminNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">

        {/* <Navbar bg="light" expand="lg"> */}
          <Container fluid>

      <img
              src="/images/logo.jpg" width="300" height="50" className="d-inline-block align-top"
              alt="React Bootstrap logo" />

            {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-5 fw-medium fs-5"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link href="/admin/home">Home</Nav.Link>
            <NavDropdown title="Faculty" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/admin/addFaculty" className='text-danger'>Add Faculty</NavDropdown.Item>
              <NavDropdown.Item href="/admin/facultyList" className='text-danger'>Faculty List</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
            <NavDropdown title="Students" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/admin/addStudent" className='text-danger'>Add Students</NavDropdown.Item>
              <NavDropdown.Item href="/admin/studentList" className='text-danger'>Students List</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
            <Nav.Link href="/admin/contact">Contact</Nav.Link>
            <Nav.Link href="/" >Logout</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;