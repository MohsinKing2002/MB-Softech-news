import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar variant="dark" bg="dark">
      <Container className="align-items-center justify-content-center">
        <Navbar.Brand href="/">MB Softech News</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
