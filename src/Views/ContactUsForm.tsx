
import React,{Component} from "react";
import {Form} from "reactstrap";
import Field from "../Components/Field";
import { Input } from "reactstrap";
import { FormGroup } from "reactstrap";
import { observable, action, } from "mobx";
import { observer } from "mobx-react";

@observer
export default class ContactUsForm extends Component  {
  @observable name: string = "";
  @observable email: string = "";  
  @observable reason: string = ""; 
  @observable notes: string = ""; 
 
  @action
  handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id: string | null = e.currentTarget.getAttribute("id");
    if(id==="name"){
      this.name=e.currentTarget.value;
    }
    else if(id==="email"){
      this.email=e.currentTarget.value;
    }
    else if(id==="reason"){
      this.reason=e.currentTarget.value;
    }
    else if(id==="notes"){
      this.notes=e.currentTarget.value;
    }
  }

 render(){
  return (
    <Form>
     
          <div className="alert alert-info" role="alert">
            Enter the information below and we'll get back to you as soon as we
            can.
          </div>

          <FormGroup>
          <label>
            Name:
          </label>
          <Input 
            id="name" 
            name="name" 
            type="text"
            onChange={this.handleType}
            value={this.name}
            />
          </FormGroup>

          <FormGroup>
          <label>
            Email:
          </label>
          <Input 
            id="email"
            name="email"
            type="text"
            onChange={this.handleType}
            value={this.email}
            />
          </FormGroup>
          
          <FormGroup>
          <label>
            Reason:
          </label>
          <Input
            id="reason"
            name="reason" 
            onChange={this.handleType}
            options={["", "Marketing", "Support", "Feedback", "Jobs"]}
            value={this.reason}
            type="text"
            />
          </FormGroup>

          <FormGroup>
          <label>
            Notes:          
          </label>

          <Input
            type="text"
            id="notes"
            name="notes" 
            onChange={this.handleType}
            value={this.notes} 
            />
          </FormGroup>

        </Form>
  );
 }
 
};
