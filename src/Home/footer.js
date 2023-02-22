import { Col, Container, Row } from "react-bootstrap";
import { a } from "react-router-dom";

function Footer() {
  return (
    <div className="kellerFooter">
      <Container>
        <Row>
          <Col sm={3}>
            <h6>SITEMAP</h6>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Our Team</a>
              </li>
              <li>
                <a href="">Cases</a>
              </li>
              <li>
                <a href="">Practice Areas</a>
              </li>
              <li>
                <a href="">News & Insights</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </Col>
          <Col sm={6}>
            <h6>FEATURED CASES</h6>
            <ul>
              <li>
                <a href="">Camp Lejeune Litigation</a>
              </li>
              <li>
                <a href="">NEC/Infant Formula Litigation</a>
              </li>
              <li>
                <a href="">Acetaminophen/Tylenol Litigation</a>
              </li>
              <li>
                <a href="">Zantac Litigation</a>
              </li>
              <li>
                <a href="">3M Combat Arms Earplugs Litigation</a>
              </li>
              <li>
                <a href="">View All Cases</a>
              </li>
            </ul>
          </Col>
          <Col sm={3}>
            <h6>OFFICES</h6>
            <ul>
              <li>
                <a href="">Camp Lejeune Litigation</a>
              </li>
              <li>
                <a href="">NEC/Infant Formula Litigation</a>
              </li>
              <li>
                <a href="">Acetaminophen/Tylenol Litigation</a>
              </li>
              <li>
                <a href="">Zantac Litigation</a>
              </li>
              <li>
                <a href="">3M Combat Arms Earplugs Litigation</a>
              </li>
              <li>
                <a href="">View All Cases</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
