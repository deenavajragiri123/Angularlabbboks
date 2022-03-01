export class AppUser {

    username: string;
    email: string;
    address: {};
    phone: string;

    constructor(username: string, email: string, address: {}, phone: string) {
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
    }

}