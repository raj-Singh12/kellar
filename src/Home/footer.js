import { Col, Container, Row } from "react-bootstrap";
import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className="kellerFooter">
      <Container>
        <Row>
          <Col sm={12}>
            <h2 className="text-center mb-5"><span>Call us at</span> 872-264-6677</h2>
          </Col>
        </Row>
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
            <h6>Follow us</h6>
            <ul className="social_media">
              <li>
                <a href="">
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a href="">
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a href="">
                  <BsFacebook />
                </a>
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
                <p>Chicago, IL</p>
                <p><span>150 N. Riverside Plaza, Suite 4100 Chicago, IL 60606</span></p>
              </li>
              <li>
                <p>Washington, D.C.</p>
                <p><span>1100 Vermont Avenue, N.W., 12th Floor Washington, D.C. 20005</span></p>
              </li>
              <li>
                <p>Austin, TX</p>
                <p><span>111 Congress Avenue, Suite 500 Austin, TX 78701</span></p>
              </li>
              <li>
                <p>Miami, FL</p>
                <p><span>111 Congress Avenue, Suite 500 Austin, TX 78701</span></p>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div className="d-flex text-center">
              <span>© 2022 Keller Postman LLC. All rights reserved.</span>
              <ul className="social_media">
                <li>
                  <a href="">Design by SPINX Digital</a>
                </li>
                <li>
                  <a href="">Terms</a>
                </li>
                <li>
                  <a href="">Privacy</a>
                </li>
                <li>
                  <a href="">Legal Disclaimer</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <p className="text-center">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
