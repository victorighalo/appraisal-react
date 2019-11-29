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
    UncontrolledTooltip, NavItem, NavLink
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";
import {NavLink as NavLinkRRD} from "react-router-dom";

class Loan extends React.Component {
    render() {
        return (
            <>
                <Header />
                {/* Page content */}
                <Container className="mt--7" fluid>
                    {/* Table */}
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="border-0">


                                    <NavLink
                                        to="/admin/create/loan"
                                        className="float-right"
                                        tag={NavLinkRRD}
                                    >
                                        <Button className="float-right" color="primary" type="button" >
                                            Create
                                        </Button>
                                    </NavLink>
                                    <h3 className="mb-0">Loan List</h3>

                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                    <tr>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Marital Status</th>
                                        <th scope="col">Number</th>
                                        <th scope="col">Name Of School</th>
                                        <th scope="col">Level</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Department</th>
                                        <th scope="col">Entitled Number of Days</th>
                                        <th scope="col" />
                                    </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </Table>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Loan;
