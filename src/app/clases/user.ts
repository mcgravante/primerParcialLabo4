
export class User {
    public user: string;
    public password: string;
    public isAdmin: boolean;

    constructor(user: string, password: string, isAdmin: boolean) {

        this.user = user;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}
