export class ReplyApi {
    id: string;
    logo: {
        tag: string;
        src: string;
    };
    name: string;
    description: string;
    short_description: string;
    categories: string[];
    version: number;
    price: number;
    api_version: number;
    isDeprecated: boolean;
    isDisabled: boolean;
    brandName: string;
    brandColor: string;
    brandURL: string;
    productURL: string;
    docURL: string;
    createdAt: string;
    updatedAt: string;
}