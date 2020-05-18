export default interface IContactData{
    name: string,
    email: string,
    reason: string,
    notes: string,
}


export const NewContact = ():IContactData => {
    return {
        name: "",
        email: "",
        reason: "",
        notes: "",
    }
}