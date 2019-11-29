
import React from "react";
import {connect} from "react-redux"
import {withRouter} from "react-router";
import {login} from "redux/actions/authActions";
import AuthService from 'services/auth'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
const authService = new AuthService();

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state={
      email: '',
      password: ''
    }
  }

  handleInput = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  login = (e) => {
    e.preventDefault();
    const payload = {
      email: this.state.email,
      password:this.state.password
    }
 
    authService.login(payload)
    .then(res=>{
      console.log(res)
      if(res.status === 'success'){
        this.props.login(res)
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
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
 
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign in with credentials</small>
              </div>
              <Form role="form" onSubmit={(e)=>this.login(e)}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" value={this.state.email} type="email" name='email' onChange={(e)=>this.handleInput(e)}/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" name="password"  value={this.state.password} onChange={(e)=>this.handleInput(e)}/>
                  </InputGroup>
                </FormGroup>
                {/* <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div> */}
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit" >
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          {/* <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Create new account</small>
              </a>
            </Col>
          </Row> */}
        </Col>
      </>
    );
  }
}


const mapStateToProps = state => ({
   user: state.user
});

export default connect(mapStateToProps,{login})(withRouter(Login));

