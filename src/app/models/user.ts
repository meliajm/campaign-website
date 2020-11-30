export class User {

    
    firstname : string;
    lastname : string;
    phonenumber : string;
    email : string;
    receivesNotification : boolean;
    created_at : string;

    constructor(firstname : string, lastname : string, phonenumber : string, email : string, receivesNotification : boolean, created_at : string){
        this.firstname = firstname;
        this.lastname = lastname;
        this.phonenumber = phonenumber;
        this.email = email;
        this.receivesNotification = receivesNotification;
        this.created_at = created_at;
    }
}
