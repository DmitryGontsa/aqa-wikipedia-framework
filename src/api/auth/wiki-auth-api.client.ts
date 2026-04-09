import {APIRequestContext, expect} from '@playwright/test';
import fs from 'fs/promises';
import path from 'path';
import {Env} from '../../utils/env';

type LoginTokenResponse = {
    query?: {
        tokens?: {
            logintoken?: string;
        };
    };
};

type LoginResponse = {
    login?: {
        result?: string;
        reason?: string;
    };
};

export class WikiAuthApiClient {
    constructor(private readonly request: APIRequestContext) {}

    async authenticateAndSaveStorageState(storageStatePath: string): Promise<void> {
        const loginToken = await this.getLoginToken();
        await this.login(loginToken);

        await this.ensureDirForFile(storageStatePath);
        await this.request.storageState({path: storageStatePath});
    }

    private async getLoginToken(): Promise<string> {
        const response = await this.request.get('/w/api.php', {
            params: {
                action: 'query',
                meta: 'tokens',
                type: 'login',
                format: 'json',
            },
        });

        expect(response.ok()).toBeTruthy();

        const body = await response.json() as LoginTokenResponse;
        const token = body.query?.tokens?.logintoken;

        if (!token) {
            throw new Error(`Login token was not returned. Response: ${JSON.stringify(body)}`);
        }

        return token;
    }

    private async login(token: string): Promise<void> {
        const response = await this.request.post('/w/api.php', {
            form: {
                action: 'login',
                lgname: Env.wikiUsername,
                lgpassword: Env.wikiPassword,
                lgtoken: token,
                format: 'json',
            },
        });

        expect(response.ok()).toBeTruthy();

        const body = await response.json() as LoginResponse;
        const result = body.login?.result;

        if (result !== 'Success') {
            throw new Error(
                `API login failed. Result: ${result ?? 'unknown'}, reason: ${body.login?.reason ?? 'n/a'}`
            );
        }
    }

    private async ensureDirForFile(filePath: string): Promise<void> {
        await fs.mkdir(path.dirname(filePath), {recursive: true});
    }
}