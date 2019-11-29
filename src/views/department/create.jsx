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


class CreateDept extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            description:"",
            status:'ACTIVE',
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

                                    <h3 className="mb-0">Create Loan</h3>

                                </CardHeader>
                                <CardBody>

                                    <Card className="bg-secondary border-0">

                                        <CardBody className="px-lg-5 py-lg-5">
                                            <div className="text-center text-muted mb-4">
                                                <h5>Fill the form to create a new Loan</h5>
                                            </div>
                                            <Form role="form" onSubmit={(e)=>this.login(e)}>
                                                <Row form>
                                                    <Col md={9}>
                                                        <FormGroup>
                                                            <Label for="name">Name</Label>
                                                            <Input type="text" name="name" id="name" onChange={(e)=>this.handleInput(e)}/>
                                                        </FormGroup>
                                                    </Col>

                                                    <Col md={3}>
                                                        <FormGroup>
                                                            <Label for="status">Status</Label>
                                                            <Input type="select" name="status" id="status" onChange={(e)=>this.handleInput(e)}>
                                                                <option value="ACTIVE">Active</option>
                                                                <option value="INACTIVE">InActive</option>
                                                            </Input>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={12}>
                                                        <FormGroup>
                                                            <Label for="description">Description</Label>
                                                            <Input type="text" name="description" id="description" onChange={(e)=>this.handleInput(e)}/>
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

export default CreateDept;
