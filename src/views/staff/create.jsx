/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip, Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Col, Label
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";
import StaffService from "services/staffService";
const staffService = new StaffService();
class CreateStaff extends React.Component {
  constructor(props){
    super(props);
    this.state={
      firstname:"",
      middlename:"",
      lastname:"",
      email:"",
      gender:"",
      age:"",
      employeeNumber:"",
      status:false,
    }
  }

  handleInput = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  login = (e) => {
    e.preventDefault();
    // const payload = {
    //   email: this.state.email,
    //   password:this.state.password
    // }

    staffService.create(this.state)
        .then(res=>{
          if(res.status === 'success'){
          }else{
            alert(res.message)
          }
        })
        .catch(err=>{
          console.log(err)
        })
  }

  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Card className="shadow">
                <CardHeader className="border-0">
        
                  <h3 className="mb-0">Create Staff</h3>
            
                </CardHeader>
                <CardBody>

          <Card className="bg-secondary border-0">
 
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <h5>Fill the form to create a new Staff</h5>
              </div>
              <Form role="form" onSubmit={(e)=>this.login(e)}>
                <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="firstname">First Name</Label>
                      <Input type="text" name="firstname" id="firstname" onChange={(e)=>this.handleInput(e)}/>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="middlename">Middle Name</Label>
                      <Input type="text" name="middlename" id="middlename" onChange={(e)=>this.handleInput(e)}/>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="lastname">Last Name</Label>
                      <Input type="text" name="lastname" id="lastname" onChange={(e)=>this.handleInput(e)}/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={3}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="text" name="email" id="email" onChange={(e)=>this.handleInput(e)}/>
                </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="employeeNumber">Employee Number</Label>
                      <Input type="number" min={10} name="employeeNumber" id="employeeNumber" onChange={(e)=>this.handleInput(e)}/>
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                <FormGroup>
                  <Label for="age">Age</Label>
                  <Input type="number" min={10} name="age" id="age" onChange={(e)=>this.handleInput(e)}/>
                </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="gender">Gender</Label>
                      <Input type="select" name="gender" id="gender" onChange={(e)=>this.handleInput(e)}>
                        <option>Male</option>
                        <option>Female</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="level">Level</Label>
                      <Input type="select" name="level" id="level" onChange={(e)=>this.handleInput(e)}>
                        <option>1</option>
                        {/*<option>2</option>*/}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit">
                    Save
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>


                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default CreateStaff;
