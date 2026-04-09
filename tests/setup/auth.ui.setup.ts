import { test as setup, expect } from '@playwright/test';
import { WikiAuthUiService } from '../../src/api/auth/wiki-auth-ui.service';
import { AuthStatePath } from '../../src/utils/path';

setup('authenticate via ui and save storage state', async ({ browser }) => {
    const authService = new WikiAuthUiService(browser);
    await authService.authenticateAndSaveStorageState(AuthStatePath.UI);

    expect(AuthStatePath.UI).toBeTruthy();
});