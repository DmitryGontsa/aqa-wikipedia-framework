import { test as setup, expect } from '@playwright/test';
import { WikiAuthApiClient } from '../../src/api/auth/wiki-auth-api.client';
import { AuthStatePath } from '../../src/utils/path';

setup('authenticate via api and save storage state', async ({ request }) => {
    const authClient = new WikiAuthApiClient(request);
    await authClient.authenticateAndSaveStorageState(AuthStatePath.API);

    expect(AuthStatePath.API).toBeTruthy();
});