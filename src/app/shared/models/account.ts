export class Account {
    id: any;
    username?: string;
    password?: string;
    api?: string;
    apikey?: string;
    type?: string;
    logs?: [];
    filters?: [];
    addedAt?: string;
    updatedAt?: string;
    isSilenced?: boolean;
    isDisabled?: boolean;
}
