import React from "react";
// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardImg,
    Row,
    Col
  } from "reactstrap";

  
class RugCard extends React.Component {
    
    render() {
        return (
          <>
            <Card className="card-lift--hover shadow border-0">
            
                <CardImg
                    alt="Card image cap"
                    src={require(`assets/img/${this.props.img}`)}
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
                        <h2 className="card-h2">{this.props.header1} </h2>
                      </div>
                      <div>
                        <p className="description mt-3">{this.props.para1} </p>
                      </div>
                      <div>
                      <Button color="primary" size="lg" type="button">
                          <span className="btn-inner--text ">{this.props.btn1}</span>
                        </Button>
                      </div>
                    </Col>
                   </Row>
                </CardBody>
            </Card>
         </>
      );
    }
  }

  export default RugCard;