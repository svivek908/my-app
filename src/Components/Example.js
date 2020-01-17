import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


export default class Example extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fields: {},
      errors: {}
    }
  }
  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

   // Name
     if(!fields["name"]){
       formIsValid = false;
       errors["name"] = "Cannot be empty";
     }
     if(typeof fields["name"] !== "undefined"){
       if(!fields["name"].match(/^[a-zA-Z]+$/)){
         formIsValid = false;
         errors["name"] = "Only letters";
       }      	
     }

    //Email
    if(!fields["email"]){
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if(typeof fields["email"] !== "undefined"){
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
    this.setState({errors: errors});
    return formIsValid;
  }
  contactSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
      alert("Form submitted");
    }else{
      //alert("Form has errors.")
    }

  }

  handleChange(field, e){    		
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
  }
    render(){
  return (
    <div className="container" >
      <div className="row" className="col-md-4">   
        <Form  onSubmit= {this.contactSubmit.bind(this)}>
        <FormGroup>
            <Label for="exampleEmail">Name</Label>
            <Input type="name" name="name" id="exampleName" placeholder="PLease Enter Name " onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
            <span className="error">{this.state.errors["name"]}</span>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="PLease Enter Email " onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
            <span className="error">{this.state.errors["email"]}</span>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="PLease Enter Password" />
          </FormGroup>
          
          <Button >Submit</Button>
        </Form>
      </div>
    </div>
  );}
        }