import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import RugNabar from "components/Navbars/RugNabar";
import RugCard from "components/Layouts/RugCard";
import CardsFooter from "components/Footers/CardsFooter.js";


// index page sections
import Download from "../IndexSections/Download.js";

class RugPrice extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
       <RugNabar />
        <RugNabar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex" fluid>
           
                <Row className="row-grid align-items-center">
                    <Col className="order-md-2" md="6">
                    <img
                        alt="..."
                        className="img-fluid floating"
                        src={require("assets/img/Home-main.PNG")}
                    />
                    </Col>
                    <Col className="order-md-1" md="6" fluid>
                    <div className="pr-md-5">
                        
                        <h1 className="header-bold">Price</h1>
                        <h2 className="header2-bold">TORONTO'S BEST RUG CLEANERS</h2>
                       
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
                        <Button color="primary" size="lg" >  
                         <span className="btn-inner--icon">
                                <i className="fa fa-play-circle" />
                            </span>
                                <span className="btn-inner--text px-2">Our Process</span>
                         </Button>
                        <Button color="primary"size="lg">
                        <span className="btn-inner--icon">
                          <i class="fa fa-usd"></i>
                          </span>
                          <span className="btn-inner--text px-2">Our Prices</span>
                        </Button>
                    </div>
                    <div>
                    <Row className="justify-content-center pt-3">
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/argon-design-system?ref=adsr-landing-page"
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/certificate/top-choice-award-rug-cleaners.png")}
                        />
                      </a>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/vue-argon-design-system?ref=adsr-landing-page"
                        id="tooltip265846671"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/certificate/homestars-best-of-award-winner-2021..png")}
                        />
                      </a>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/argon-design-system-angular?ref=adsr-landing-page"
                        id="tooltip233150499"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/certificate/bbb-accredited-business-a-rated..png")}
                        />
                      </a>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        id="tooltip308866163"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/certificate/consumer-choice-award-rug-cleaning-gta..png")}
                        />
                      </a>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        id="tooltip76119384"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/certificate/ARCS-Association-of-Rug-care-specialists..png")}
                        />
                      </a>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        id="tooltip646643508"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/certificate/CFA-Candian-Fabricare-Association-Rug-Cleaning..png")}
                        />
                      </a>
                    </Col>
                  </Row>

                    </div>
                    </Col>
                </Row>
                
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
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
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container fluid>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                             30% Off Rug Cleaning Special
                          </h6>
                          <p className="description mt-3">
                            We are offering a limited-time, 30%OFF rug cleaning and FREE Pickup & Delivery to 1st time customers.
                          </p>
                          <Button className="mt-4" color="primary" href="#pablo" onClick={(e) => e.preventDefault()}>
                            <span className="btn-inner--text ">COUPON DETAILS</span>
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            FREE Pickup & Delivery
                          </h6>
                          <p className="description mt-3">
                             Servicing all cities in Ontario with our Free Pickup & Delivery service. Check out our schedule.
                          </p>
                          <Button className="mt-4" color="success" href="#pablo" onClick={(e) => e.preventDefault()}>
                            <span className="btn-inner--text ">Schedule a Pickup</span>
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            In-House Carpet Cleaning
                          </h6>
                          <p className="description mt-3">
                            Professional in-house carpet cleaning in Toronto and the Greater Toronto Area and we love making carpets clean.
                          </p>
                          <Button className="mt-4" color="warning" href="#pablo" onClick={(e) => e.preventDefault()}>
                             <span className="btn-inner--text ">Carpet Cleaning</span>
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg">
            <Container fluid>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="12">
                <img
                   alt="Sample"
                   src={require("assets/img/Award-Winning.PNG")}
                 />

                </Col>
              </Row>
             </Container>
        </section>
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Accredited Rug Cleaner</h2>
                  <p className="lead text-muted">
                    At Love Your Rug we always strive to be ahead of our competitors by providing only the best rug cleaning and rug repair services in Canada. Our continued excellence has helped us achieve the Consumers Choice Award, as well as the Top Choice Mark of Excellence Award by consumers nationwide, giving you another reason to choose Love Your Rug
                  </p>
                </Col>
              </Row>


              {/* Sectoion 5 Starts  */}
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="3" className='ps-2'>
                      <Card className="card-lift--hover shadow border-0">
                      <CardImg
                    alt="Card image cap"
                    src={require("assets/img/c1.png")}
                    style={{
                        height: 300
                    }}
                    top
                    width="100%"
                    />
                        <CardBody className="py-5">
                          <h4 className="text-primary text-uppercase">
                          Homestars Best of Award Winner
                          </h4>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="3">
                      <Card className="card-lift--hover shadow border-0">
                      <img
                         alt="Sample"
                         src={require("assets/img/c2.png")}
                     />
                        <CardBody className="py-5">
                          <h4 className="text-success text-uppercase">
                          Consumer Choice Award Winner
                          </h4>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="3">
                      <Card className="card-lift--hover shadow border-0">
                      <img
                         alt="Sample"
                         src={require("assets/img/c3.png")}
                     />
                        <CardBody className="py-5">
                          
                          <h4 className="text-warning text-uppercase">
                          BBB Accredited Business
                          </h4>
                          
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="3">
                      <Card className="card-lift--hover shadow border-0">
                      <img
                         alt="Sample"
                         src={require("assets/img/c4.png")}
                     />
                        <CardBody className="py-5">
                          <h4 className="text-primary text-uppercase">
                          Top Choice Award Mark of Excellence
                          </h4>
                        
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            </section>

            <section className="section section-data section-shaped">
            <Container fluid>
              <Row>
              <Col lg="4">
                  <RugCard header1="Wool Rug Cleaning"
                    para1=" We will make your wool rug look as good as new once it goes through our award-winning wool carpet cleaning process..."
                    btn1="Wool Rug Cleaning"
                    img="spr1.png"
                  />


                </Col><Col lg="4">
                  <RugCard header1="Wool Rug Cleaning"
                    para1=" We will make your wool rug look as good as new once it goes through our award-winning wool carpet cleaning process..."
                    btn1="Wool Rug Cleaning"
                    img="spr2.png"
                  />


                </Col><Col lg="4">
                  <RugCard header1="Wool Rug Cleaning"
                    para1=" We will make your wool rug look as good as new once it goes through our award-winning wool carpet cleaning process..."
                    btn1="Wool Rug Cleaning"
                    img="spr3.png"
                  />


                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-data section-shaped">
            <Container fluid>
              <Row>
              <Col lg="4">
                  <RugCard header1="Wool Rug Cleaning"
                    para1=" We will make your wool rug look as good as new once it goes through our award-winning wool carpet cleaning process..."
                    btn1="Wool Rug Cleaning"
                    img="spr4.png"
                  />


                </Col><Col lg="4">
                  <RugCard header1="Wool Rug Cleaning"
                    para1=" We will make your wool rug look as good as new once it goes through our award-winning wool carpet cleaning process..."
                    btn1="Wool Rug Cleaning"
                    img="spr5.png"
                  />


                </Col><Col lg="4">
                  <RugCard header1="Wool Rug Cleaning"
                    para1=" We will make your wool rug look as good as new once it goes through our award-winning wool carpet cleaning process..."
                    btn1="Wool Rug Cleaning"
                    img="spr6.png"
                  />


                </Col>
              </Row>
            </Container>
          </section>
          <Container className="py-lg-md d-flex mt-4" 
            style={{flex:1,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',}}>
    
            <Row>
                <div>
                <Button
                    color="primary"
                    size="lg"
                >
                   OUR PRICES
                </Button>
                </div>
            </Row>
          </Container>
          <Container className="py-lg-md d-flex mt-6" fluid>
           
                <Row className="row-grid align-items-center">
                   
                    <Col className="order-md-2" md="6">
                    <div className="pr-md-5">
                        
                        <h6 className="header">OUR SATISFACTION GUARANTEE</h6>
                        <h1 className="header1-bold">100% Customer Satisfaction Guarantee</h1>
                        <p>At Love Your Rug we take pride in our industry-leading rug cleaning services in Toronto. Our 100% customer satisfaction guarantee on all our rug cleaning services ensures that our customers are confident in getting their prized area rug professionally cleaned with us. We have cleaned well over a million of area rugs since 1894 and we are confident that you will be happy with our professional work.</p>
                        <p className="paragraph-bold">If you are not satisfied with the rug cleaning or rug repair services that you receive from Love Your Rug in Toronto, we will re-service your rug at no additional cost.</p>
                    </div>
                    
                    
                    </Col>
                     <Col className="order-md-1" md="6">
                    <img
                        alt="..."
                        className="img-fluid floating"
                        src={require("assets/img/rc1.png")}
                    />
                    </Col>
                </Row>
                
              </Container>


              <Container className="py-lg-md d-flex mt-8" fluid>
           
                <Row className="row-grid align-items-center">
                   
                    <Col className="order-md-1" md="6">
                    <div className="pr-md-5">
                        
                        <h6 className="header">TORONTO CARPET CLEANING EXPERTS</h6>
                        <h1 className="header1-bold">Professional Carpet Cleaning Toronto & G.T.A.</h1>
                        <p>Dirty carpets are not only unsafe for your family due to the harmful bacteria and allergens that get trapped inside of them, but the dirt and debris also speed up the deterioration process and decrease the longevity of your expensive carpet. Our proven process for carpet cleaning in Toronto is performed thoroughly with the latest carpet cleaning equipment and eco, human and pet friendly products. Our carpet cleaning technicians will have your carpet looking new and smelling fresh in no time. From pre-inspection to pre-treatment, steam carpet cleaning and deodorization, we are Toronto’s trusted carpet cleaners.</p>

                        <ul className="unorderd-list">
                        <li>
                          <i className="fa fa-check-square-o icon-checked" ></i>
                          <span className="list-text">We Service Ontario</span>
                        </li>
                        <li>
                          <i className="fa fa-check-square-o icon-checked" ></i>
                          <span className="list-text">No Subs, No Middleman</span>
                        </li>
                        </ul> 
                    </div>
                    <div>
                        <Button color="primary" size="lg">  
                         <span className="btn-inner--icon">
                                <i className="fa fa-play-circle" />
                            </span>
                                <span className="btn-inner--text px-2">FREE ESTIMATE</span>
                         </Button>
                        <Button color="primary"size="lg">
                        <span className="btn-inner--icon">
                          <i class="fa fa-usd"></i>
                          </span>
                          <span className="btn-inner--text px-2">TOLL-FREE(866)364-6732</span>
                        </Button>
                    </div>
                    
                    
                    </Col>
                     <Col className="order-md-2" md="6">
                    <h6 className="header">MOST ADVANCED TRUCK-MOUNT SYSTEMS FOR WALL-TO-WALL CARPET CLEANING</h6>
                    <img
                        alt="..."
                        className="img-fluid floating"
                        src={require("assets/img/pcc1.png")}
                    />
                    </Col>
                </Row>
                
              </Container>

              <Container className="py-lg-md d-flex mt-8" fluid>
           
                <Row className="row-grid align-items-center">
                   
                    <Col className="order-md-1" md="6">
                    <div className="pr-md-5">
                        
                        <h4 className="header">RUG SERVICES</h4>
                        <h1 className="header1-bold">Latest Rug Cleaning Technology in Canada</h1>
                        
                    </div>
                    </Col>
                     <Col className="order-md-2" md="6">
                    <h4 className="header">Love Your Rug specializes in offering professional area rug cleaning services to residents of Ontario, Canada. We dust, clean and dry area rugs using highly efficient and effective rug cleaning technologies.</h4>
                    </Col>
                </Row>
              </Container>
              <Container fluid>
              <Row>
                <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                    <h5 className="header">STEP 1</h5>
                    <h2 className="header">DUSTING</h2>
                    <CardImg
                    alt="Card image cap"
                    src={require("assets/img/rug-dusting-machine.jpg")}
                    style={{
                        height: 400
                    }}
                    top
                    width="100%"
                    />
                  </Card>
                </Col>
                <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                    <h5 className="header">STEP 2</h5>
                    <h2 className="header">CLEANING</h2>
                    <CardImg
                        alt="Card image cap"
                        src={require("assets/img/rug-cleaning-machine.jpg")}
                        style={{
                            height: 400
                        }}
                        top
                        width="100%"
                        />
                 </Card>
                </Col>
                <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                    <h5 className="header">STEP 3</h5>
                    <h2 className="header">DRYING</h2>
                    <CardImg
                        alt="Card image cap"
                        src={require("assets/img/rug-drying-machine.jpg")}
                        style={{
                            height: 400
                        }}
                        top
                        width="100%"
                        />
                 </Card>
                </Col>
              </Row>
            </Container>
            <Container className="py-lg-md d-flex mt-6" 
            style={{flex:1,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',}}>
    
            <Row>
                <div>
                <Button
                    color="primary"
                    size="lg"
                >
                  WATCH VIDEO
                </Button>
                </div>
            </Row>
          </Container>
          <Container className="py-lg-md d-flex mt-8" fluid>
           
                <Row className="row-grid align-items-center">
                   
                    <Col className="order-md-1" md="6">
                    <div className="pr-md-5">
                        
                        
                        <h1 className="header1-bold">Premium Rug Cleaning Services in Toronto</h1>
                        
                    </div>
                    </Col>
                     <Col className="order-md-2" md="6">
                    <h4 className="header">On top of our industry-leading rug cleaning services, we offer the following additional rug cleaning services for any customers who may require them.</h4>
                    </Col>
                </Row>
              </Container>

              <section className="section section-data section-shaped">
                <Container fluid>
                <Row>
                    <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                        <CardImg
                        alt="Card image cap"
                        src={require("assets/img/area-rug-enzyme-treatment-toronto.jpg")}
                        style={{
                            height: 400
                        }}
                        top
                        width="100%"
                        />
                        <CardBody>
                        
                    <Row>
                        
                        <Col lg="12">
                        <div>
                            <h2 className="card-h2">Area Rug Enzyme Treatment</h2>
                        </div>
                        <div>
                        <p className="description mt-3">
                        Our Area Rug Enzyme Treatment gives you peace of mind knowing that unpleasant odours and dangerous bacteria won’t return to your area rug. This treatment will penetrate deep into your area rug’s fibres and ensure harmful bacteria don’t make an unwanted comeback. We recommend this enzyme treatment for people with deep stains from pets and high foot traffic.</p>
                        </div>
                        </Col>
                    </Row>
                        </CardBody>
                    </Card>

                    </Col>
                    <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                        <CardImg
                            alt="Card image cap"
                            src={require("assets/img/area-rug-disinfectant-toronto.jpg")}
                            style={{
                                height: 400
                            }}
                            top
                            width="100%"
                            />
                    <CardBody className="text">
                    <Row>
                    
                    <Col lg="12">
                    <div>
                        <h2 className="card-h2">Area Rug Disinfectant</h2>
                        </div>
                        <div>
                        <p className="description mt-3">
                        If you have pets or children, our area rug disinfectant is perfect for you. It is 100% safe for not only humans and animals but also for the environment! The disinfectant kills bacteria, deodorizes your area rug and improves the air quality in your home. The cherry on top is it will give your area rug an irresistible fresh, yet very mild and pleasant lemony scent so it will look, feel and smell brand new every time!  
                            </p>
                        </div>
                    </Col>
                    </Row>
                    </CardBody>
                    </Card>

                    </Col>
                    <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                        <CardImg
                            alt="Card image cap"
                            src={require("assets/img/area-rug-scotchgard-toronto.jpg")}
                            style={{
                                height: 400
                            }}
                            top
                            width="100%"
                            />
                    <CardBody className="text">
                    <Row>
                    
                    <Col lg="12">
                    <div>
                        <h2 className="card-h2">Area Rug Fabric Protector</h2>
                        </div>
                        <div>
                        <p className="description mt-3">
                        The area rug Fabric Protector treatment is a premium rug protector solution that makes it easier to wipe stains clean off of your area rug if spills happen in the future. It additionally makes future professional area rug cleaning easier and extends the life of your rug. This treatment is ideal for area rugs in high traffic areas such as dining rooms, kitchens and bedrooms.  
                            </p>
                        </div>
                    </Col>
                    </Row>
                    </CardBody>
                    </Card>

                    </Col>
                </Row>
                </Container>
            </section>
            <section className="section section-data section-shaped">
                <Container fluid>
                <Row>
                    <Col lg="6">
                    <Card className="card-lift--hover shadow border-0">
                        <CardImg
                        alt="Card image cap"
                        src={require("assets/img/area-rug-stain-removal-toronto.jpg")}
                        style={{
                            height: 400
                        }}
                        top
                        width="100%"
                        />
                        <CardBody>
                        
                    <Row>
                       
                        <Col lg="12">
                        <div>
                            <h2 className="card-h2">Area Rug Stain Removal</h2>
                        </div>
                        <div>
                        <p className="description mt-3">
                        Additional area rug stain removal may be required if your rug has tricky stains such as greasy, oily stains from bodily fluids, food or beverage spills. Our experienced rug technicians will pre-spray and work on minimizing and often completely eliminating the stain. If the stain isn’t stuck to the rug’s fibres, it will come out with our proven rug stain removal methods.
                       </p>
                        </div>
                        </Col>
                    </Row>
                        </CardBody>
                    </Card>

                    </Col>
                    <Col lg="6">
                    <Card className="card-lift--hover shadow border-0">
                        <CardImg
                            alt="Card image cap"
                            src={require("assets/img/Non-Slip-Rug-Pad-Toronto.jpg")}
                            style={{
                                height: 400
                            }}
                            top
                            width="100%"
                            />
                    <CardBody className="text">
                    <Row>
                    
                    <Col lg="12">
                    <div>
                        <h2 className="card-h2">Non-Slip Rug Pad</h2>
                        </div>
                        <div>
                        <p className="description mt-3">
                        Our heavy-duty non-slip rug pad provides a strong grip to prevent the rug from slipping and moving. We offer three different kinds of rug pads— Eco By Design, Eco Preferred & Eco Supreme, each catering to individual needs. Along with thick and medium cushioning, we also offer thin rug pads that do not add height or obstruct door clearance. Our products come with a special moisture barrier to prevent any liquid from seeping into your rug and ruining your hardwood floors.
                        </p>
                        </div>
                    </Col>
                    </Row>
                    </CardBody>
                    </Card>

                    </Col>
                </Row>
                </Container>
            </section>

            <Container className="py-lg-md d-flex" fluid>
           
                <Row className="row-grid align-items-center">
                    <Col className="order-md-1" md="6">
                    <div className="pr-md-5">
                        <h6 className="header">TO OUR VALUED CUSTOMERS</h6>
                        <h1 className="header1-bold">Area Rug Cleaners For Over a Century</h1>
                        <p className="description mt-3">
                        We take special pride in offering our customers top-quality carpet cleaning and area rug cleaning services at prices much lower than the other rug and carpet cleaners in the Greater Toronto Area. We specialize in the following services: Persian Rug Cleaning, Oriental Rug Cleaning, Silk Rug Cleaning, Wool Rug Cleaning, Synthetic Rug Cleaning, Sheep Skin Cleaning, Cow Skin Cleaning, Flokati Rug Cleaning, and Carpet Cleaning.
                        </p>
                    </div>
                    <div>
                        <Button color="primary" size="lg">  
                        
                                <span className="btn-inner--text px-2">GET PRICE</span>
                         </Button>
                    </div>
                    </Col>
                    <Col className="order-md-2" md="6">
                    <img
                        alt="..."
                        className="img-fluid floating"
                        src={require("assets/img/rug-cleaning-video-home-1.jpg")}
                    />
                    </Col>
                </Row>
            </Container>

            <Container className="py-lg-md d-flex mt-6"  fluid>
           
           <Row className="row-grid align-items-center">
               
               <Col className="order-md-1" md="6">
               <img
                   alt="..."
                   className="img-fluid floating"
                   src={require("assets/img/rug-cleaning-and-repair-pickup-delivery.png")}
               />
               </Col>
               <Col className="order-md-2" md="6">
               <div className="pr-md-5">
                   <h6 className="header">SERVING ALL CITIES IN ONTARIO</h6>
                   <h1 className="header1-bold">SERVING ALL CITIES IN ONTARIO FREE Weekly Rug Cleaning Pickup & Delivery in Ontario</h1>
                   <p className="description mt-3">
                   Our rug pickup and delivery is available throughout Ontario, from London all the way to Ottawa. Check out our low prices, dates and times for your location and schedule your rug cleaning pickup now
                    </p>
               </div>
               <div>
               <Button color="primary" size="lg">  
                         <span className="btn-inner--icon">
                                <i className="fa fa-play-circle" />
                            </span>
                                <span className="btn-inner--text px-2">SCHEDULE A PICKUP</span>
                         </Button>
                        <Button color="primary"size="lg">
                        <span className="btn-inner--icon">
                          <i class="fa fa-usd"></i>
                          </span>
                          <span className="btn-inner--text px-2">VIEW ALL LOCATION</span>
                        </Button>
               </div>
               </Col>
           </Row>
       </Container>
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default RugPrice;
