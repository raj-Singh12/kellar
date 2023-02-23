import { Col, Container, Row, Image } from "react-bootstrap";
import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";

function Highlight() {
  return (
    <div className="highlight">
      <Container>
        <Row>
          <Col sm={4}>
            <div className="box">
                <Image src="" />
                
            </div>
          </Col>
          <Col sm={4}>1</Col>
          <Col sm={4}>1</Col>
          <Col sm={4}>1</Col>
          <Col sm={4}>1</Col>
          <Col sm={4}>1</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Highlight;
