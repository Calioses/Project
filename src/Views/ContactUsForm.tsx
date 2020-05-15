// import * as React from "react";
// import { Form } from "./Form";
// import { Field } from "./Field";

// export const ContactUsForm: React.SFC = () => {
//     return (
//         <Form
//             action="http://localhost:3000"
//             render={() => (
//                 <React.Fragment>
//                     <div className="alert alert-info" role="alert">
//                     Enter the information below and we'll get back to you as soon as we can.
//                     </div>
//                     <Field id="name" label="Name" />
//                     <Field id="email" label="Email" />
//                     <Field 
//                     id="reason"
//                     label="Reason"
//                     editor="dropdown"
//                     options={["", "Marketing", "Support", "Feedback","Jobs"]}
//                     />
//                     <Field id="notes" label="Notes" editor="multilinetextbox" />
//                     </React.Fragment>
//             )}
//             />
//     );
// };

import React,{Component} from "react";
import {Form} from "reactstrap";
import Field from "../Components/Field";

export default class ContactUsForm extends Component  {
 render(){
  return (
    <Form>
     
          <div className="alert alert-info" role="alert">
            Enter the information below and we'll get back to you as soon as we
            can.
          </div>
          <Field id="name" label="Name" />
          <Field id="email" label="Email" />
          <Field
            id="reason"
            label="Reason"
            editor="dropdown"
            options={["", "Marketing", "Support", "Feedback", "Jobs"]}
          />
          <Field id="notes" label="Notes" editor="multilinetextbox" />
        
        </Form>
  );
 }
  
};
