import React,{Component} from "react";
import {Form} from "reactstrap";
import Field from "../Components/Field";
import { Input } from "reactstrap";
import { FormGroup, Button } from "reactstrap";
import { observable, action, } from "mobx";
import { observer } from "mobx-react";
import DomainStore from "../Store/DomainStore";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';




@observer
export default class Calc extends Component{
    @observable num1: number
    @observable num2: number;
render(){
    return(

        
        

        <FormGroup>   
            <label>
                Input 1:
            <Input
            type="number"
            id="num1"
            name="num1" 
            />
            </label>
            

            
            <label>
                Input 2:
        <Input
            type="number"
            id="num2"
            name="num2" 
            />
            </label>

            <label>
                Output:
        <output
            
            id="num3"
            name="num3" 
            />
            </label>

            {/* <UncontrolledDropdown>
      <DropdownToggle caret>
      Pick an oper
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>+</DropdownItem>
        <DropdownItem>-</DropdownItem>
        <DropdownItem>x</DropdownItem>
        <DropdownItem>÷</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown> */}

{/* <p>
<Button 
  color="primary"
  size="lg"

>
  Submit
</Button>
</p> */}
</FormGroup>
        )
    }
}
















