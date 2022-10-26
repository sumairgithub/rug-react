/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Data extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-data section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text" lg="5">
                    <h1 className="header-bold">Rug Cleaning Toronto</h1>
                    <h2 className="header2-bold">TORONTO'S BEST RUG CLEANERS</h2>

                    <div>
                      <ul className="unorderd-list">
                        <li>
                          <i className="fa fa-check-square-o icon-checked" ></i>
                          <span className="list-text">Quality Rug Cleaning Since 1894</span>
                        </li>
                        <li>
                          <i className="fa fa-check-square-o icon-checked" ></i>
                          <span className="list-text">100% Satisfaction Guarantee</span>
                        </li>
                        <li>
                          <i className="fa fa-check-square-o icon-checked" ></i>
                          <span className="list-text">Limited-Time 30% Off Rug Cleaning</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <span>
                        <Button color="primary" size="lg" type="button">
                          <span className="btn-inner--icon">
                            <i className="fa fa-play-circle" />
                          </span>
                          <span className="btn-inner--text px-2">Our Process</span>
                        </Button>
                      </span>
                      <span className="btn-text">
                        <Button color="primary" size="lg" type="button">
                          <span className="btn-inner--icon">
                          <i class="fa fa-usd"></i>
                          </span>
                          <span className="btn-inner--text px-2">Our Prices</span>
                        </Button>
                      </span>
                    </div>
                    
                    <div>
                      <span>
                      <img src=""/>
                      </span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>

                    </div>
                  </Col>
                  <Col className="image-placement" lg="7">

                    <div className="btn-wrapper mt-5">

                    </div>

                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            {/* <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div> */}
          </section>
        </div>
      </>
    );
  }
}

export default Data;
