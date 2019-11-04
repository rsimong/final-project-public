export class User {
    id: any;
    username: string;
    avatar: string;
    name: string;
    surname: string;
    password: string;
    email: string;
    language: string;
    // tslint:disable-next-line:ban-types
    notifications: Object[];
    // tslint:disable-next-line:ban-types
    accounts: Object[];
    createdAt: string;
    isDisabled: boolean;
    authdata?: any;
}
