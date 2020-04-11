export class ReplyUser {
    id: any;
    avatar: string;
    name: string;
    surnames: string;
    accounts: [];
    filters: [];
    email: string;
    username: string;
    role: 'basic' | 'admin';
    settings: {
        accessibility: {
            fontFamily: string;
            fontSize: number;
            highContrast: boolean;
        };
        language: string;
        theme: 'light' | 'dark';
    };
    createdAt: string;
    updatedAt: string;
}
