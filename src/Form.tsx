import * as React from "react";
import { render } from "@testing-library/react";

interface IFormProps {
    action: string;
}
export interface IValues {
    [key: string]: any;
}

export interface IErrors {
    [key: string]: string;
}

export interface IFormState {
    values: IValues;

    errors: IErrors;

    submitSuccess?: boolean;
}

export class Form extends React.Component<IFormProps, IFormState> {
    constructor(props: IFormProps) {
        super(props);

        const errors: IErrors = {};

    const values: IValues = {};
    this.state = {
        errors,
        values
    };
    }
}

private haveErrors(errors: IErrors) {
    let haveError: boolean = false;

Object.keys(errors).map((key: string) => {
    if (errors[key].length > 0) {
        haveError = true;
    }
});
return haveError;
}

private HandleSubmit = async(
    e: React.FormEvent<HTMLFormElement>
): Promise<void> => {
    e.preventDefault();
}

if (this.validateForm()) {
    const submitSuccess: boolean = await this.submitForm();
    this.setState({ submitSuccess });
}
private validateForm(): boolean {
//TODO - validate form
return true;
}

public render() {
    const { submitSuccess, errors } = this.State; 
    return (
        <form onSubmit={this.handleSubmit} noValidate={true}>
            <div className="container">
                {// TODO - render fields}











            </div>
    )
}