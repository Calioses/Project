
import React,{Component} from "react";
import {Form} from "reactstrap";
import Field from "../Components/Field";
import { Input } from "reactstrap";
import { FormGroup, Button } from "reactstrap";
import { observable, action, } from "mobx";
import { observer } from "mobx-react";
import DomainStore from "../Store/DomainStore";


const DS: DomainStore = new DomainStore();

@observer
export default class ContactUsForm extends Component  {
  @action
  handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id: string | null = e.currentTarget.getAttribute("id");
    if(id==="name"){
      DS.data.name=e.currentTarget.value;
    }
    else if(id==="email"){
      DS.data.email=e.currentTarget.value;
    }
    else if(id==="reason"){
      DS.data.reason=e.currentTarget.value;
    }
    else if(id==="notes"){
      DS.data.notes=e.currentTarget.value;
    }
  }

  submit= (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    DS.postContact();
  }

 render(){
  return (
    <Form onSubmit={this.submit}>
     
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
            value={DS.data.name}
            disabled={DS.loading}
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
            value={DS.data.email}
            disabled={DS.loading}
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
            value={DS.data.reason}
            disabled={DS.loading}
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
            value={DS.data.notes}
            disabled={DS.loading} 
            />
          </FormGroup>

          <p>
            <Button 
              color="primary"
              size="lg"
              disabled={DS.loading}
            >
              Submit
            </Button>
          </p>


        </Form>
  );
 }
 
};
