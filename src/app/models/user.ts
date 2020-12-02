

export class User {

    
    firstname : string;
    lastname : string;
    phonenumber : string;
    email : string;
    receivesNotification : boolean;
    canVolunteer : boolean;
    created_at : string;
    address1 : string;
    address2 : string;
    city : string;
    state : string;
    zip : number;
    message : string;

    constructor(firstname : string, lastname : string, phonenumber : string, email : string, address1 : string, address2 : string, city : string, state : string, zip : number, receivesNotification : boolean, canVolunteer: boolean, created_at : string, message : string){
        this.firstname = firstname;
        this.lastname = lastname;
        this.phonenumber = phonenumber;
        this.email = email;
        this.receivesNotification = receivesNotification;
        this.created_at = created_at;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.canVolunteer = canVolunteer;
        this.message = message;
        this.created_at = created_at;
    }
}
