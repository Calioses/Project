import {observable, action, computed} from "mobx";
import IContactData,{ NewContact } from "../Interfaces/IContactData";



export default class DomainStore{
  @observable data: IContactData = NewContact();

  @observable loading: boolean = false;

    postContact = async() =>{
        this.loading=true;
        await fetch("http://www.yahoo.com/finance")
        .catch(err=>{
            this.loading=false;
        });
        this.loading=false;
    }
    




}