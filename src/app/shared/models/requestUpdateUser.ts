export class RequestUpdateUser {
    avatar: string;
    name: string;
    surnames: string;
    email: string;
    username: string;
    settings: {
        accessibility: {
            fontFamily: string;
            fontSize: number;
            highContrast: boolean;
        };
        language: string;
        theme: 'light' | 'dark';
    };
    password: string;
    repeat_password: string;
    old_password: string;
}