import { Browser, Page, expect } from '@playwright/test';
import fs from 'fs/promises';
import path from 'path';
import { Env } from '../../utils/env';

export class WikiAuthUiService {
    constructor(private readonly browser: Browser) {}

    async authenticateAndSaveStorageState(storageStatePath: string): Promise<void> {
        const context = await this.browser.newContext();
        const page = await context.newPage();

        await this.login(page);

        await fs.mkdir(path.dirname(storageStatePath), { recursive: true });
        await context.storageState({ path: storageStatePath });

        await context.close();
    }

    private async login(page: Page): Promise<void> {
        await page.goto('/wiki/Special:UserLogin', { waitUntil: 'domcontentloaded' });

        await page.getByRole('textbox', { name: /username/i }).fill(Env.wikiUsername);
        await page.getByRole('textbox', { name: /password/i }).fill(Env.wikiPassword);
        await page.getByRole('button', { name: /log in/i }).click();

        await expect(page).toHaveURL(/\/wiki\/Main_Page/, { timeout: 1000 });
    }
}