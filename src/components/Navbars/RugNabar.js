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
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class RugNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
            
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container fluid>
              <NavbarBrand className="lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/logo.png")}
                  
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>

                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>

                  <NavLink href="/rug-Home"><span className="home-text" >HOME</span></NavLink>
                    
                    
                  </NavItem>
                  <NavItem>

                  <NavLink href="/rug-about-us"><span className="home-text" >AboutUs</span></NavLink>
                    
                  </NavItem>
                  <NavItem>

                  <NavLink href="/rug-service"><span className="service-text" id="tooltip184698705">Services</span></NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Rug Cleaning Services Toronto
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>

                  <NavLink href="/rug-our-process"><span className="home-text">Our Process</span></NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink href="/rug-sale"><span className="sale-text" id="tooltipSale">Sale</span></NavLink>

                   
                    <UncontrolledTooltip delay={0} target="tooltipSale">
                      Rug Cleaning & Repair Coupons
                    </UncontrolledTooltip>
                  </NavItem>

                  <NavItem>


                    <UncontrolledDropdown group>
                      <DropdownToggle caret color="Primary" className="home-text" >
                        Prices
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                          Rug Cleaning Prices
                        </DropdownItem>
                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                          Rug Repair Prices
                        </DropdownItem>
                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                          In-Home Carpet Cleaning
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>


                  </NavItem>

                  <NavItem>
                  <NavLink href="/rug-gallary"><span className="home-text" >Gallary</span></NavLink>
                   

                  </NavItem>
                  <NavItem>
                  <NavLink href="/rug-guarantee"><span className="home-text" >Guarantee</span></NavLink>
                    


                  </NavItem><NavItem>
                  <NavLink href="/rug-review"><span className="home-text" >Reviews</span></NavLink>
                    

                  </NavItem>

                  <NavItem>
                  <NavLink href="/rug-contact"><span className="home-text" >Contact</span></NavLink>
                    


                  </NavItem>






                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className=""
                      color="primary"
                      size="lg"
                      
                      href=""
                      target="_blank"
                    >

                      <span className="nav-link-inner--text ml-1">
                        Get A Quote
                      </span>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default RugNavbar;
