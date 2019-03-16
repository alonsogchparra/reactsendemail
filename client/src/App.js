import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button, Navbar, NavbarBrand, Alert } from 'reactstrap';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    name:'',
    email: '',
    message: '',
    visible:false
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {name, email, message} = this.state;

    axios.post('/api/form', {
      name,
      email,
      message
    })
    .then(res => {
      this.setState({
        name: '',
        email: '',
        message: '',
        visible: true
      });
      console.log('Then');
    })
    .catch(err => {
      console.log(err);
    });

  }

  closeAlertMessage = () => {
    this.setState({ visible: false });
  }


  render() {
    return (
      <div className="App">

        <div className="mb-5">
          <Navbar color="info" className="py-3">
            <NavbarBrand
              className="mx-auto">
              <h3 className="text-white font-weight-bolder">React Send Email</h3>
            </NavbarBrand>
          </Navbar>
        </div>

        <Alert
          color="primary"
          isOpen={this.state.visible}
          toggle={this.closeAlertMessage}
          >
          Message Sent!
        </Alert>

        <Form onSubmit={this.handleSubmit} className="mx-auto w-50">
          <FormGroup>
            <Label className="font-weight-bolder">Name:</Label>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label className="font-weight-bolder">Email:</Label>
            <Input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label className="font-weight-bolder">Message:</Label>
            <Input
              type="textarea"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button color="primary" className="btn-block font-weight-bolder">Submit</Button>
        </Form>

        <div className="my-5">
          <p className=" font-weight-bolder">Check the original tutorial or watch more on <a href="https://www.youtube.com/channel/UC33Y0c5LX9Z2TvtxpztaFUA" target="_blank" rel="noopener noreferrer">Shakhor Smith's Youtube Channel</a></p>
        </div>

        <div className="fixed-bottom">
          <Navbar color="info" className="py-3">
            <NavbarBrand
              className="mx-auto">
              <h4 className="text-white font-weight-bolder">Develop by: Alonso Parra</h4>
            </NavbarBrand>
          </Navbar>
        </div>

      </div>
    );
  }
}

export default App;
