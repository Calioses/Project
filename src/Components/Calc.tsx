import React,{Component} from "react";
import {Form} from "reactstrap";
import Field from "../Components/Field";
import { Input } from "reactstrap";
import { FormGroup, Button } from "reactstrap";
import { observable, action, computed, } from "mobx";
import { observer } from "mobx-react";
import INumber from "../Interfaces/INumber";
import { NewNumber } from "../Interfaces/INumber";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';




@observer
export default class Calc extends Component{
    @observable num1: number | null=null;
    @observable num2: number | null=null;

    @computed
    get result(): number | string {
      if(this.num1&&this.num2){
        return this.num1+this.num2;
      }
      else {
        return "";
      }
    }
    

render(){
    return(

        
        

        <FormGroup>   
            <label>
                Input 1:
            <Input
            type="text"
            id="num1"
            name="num1"
            value={this.num1 || ""}
            onChange={(e)=>{ 
              let x = e.currentTarget.value;
              this.num1= x? parseFloat(x):null;
            }} 
            />
            </label>
            

            
            <label>
                Input 2:
        <Input
            type="text"
            id="num2"
            name="num2" 
            value={this.num2 || ""} 
            onChange={(e)=>{ 
              let x = e.currentTarget.value;
              this.num2= x? parseFloat(x):null;
            }} 
            />
            </label>

            <label>
                Output:
        <Input
            
            id="num3"
            name="num3" 
            type="text"
            value={this.result}
            />
            </label>

            <UncontrolledDropdown>
      <DropdownToggle caret>
      Pick an operation
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>+</DropdownItem>
        <DropdownItem>-</DropdownItem>
        <DropdownItem>x</DropdownItem>
        <DropdownItem>÷</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>

<p>
<Button 
  color="primary"
  size="lg"

>
  Submit
</Button>
</p>
</FormGroup>
        )
    }
}
















