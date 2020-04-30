export class ReplyAccessToken {
    api: string;
    request: {
        method: 'GET' | 'POST';
        uri: string;
        headers: Object;
        body: Object;
    };
    requestType: string;
    finish: boolean;
}