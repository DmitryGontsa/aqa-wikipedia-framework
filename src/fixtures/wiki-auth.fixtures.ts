import { test as base, expect } from '@playwright/test';
import { WikipediaMainPage } from '../pages/WikipediaMainPage';
import { WikipediaPreferencesPage } from '../pages/WikipediaPreferencesPage';

type WikipediaFixtures = {
    wikipediaMainPage: WikipediaMainPage;
    wikipediaPreferencesPage: WikipediaPreferencesPage;
};

export const test = base.extend<WikipediaFixtures>({
    wikipediaMainPage: async ({ page }, use) => {
        const wikipediaMainPage = new WikipediaMainPage(page);
        await use(wikipediaMainPage);
    },

    wikipediaPreferencesPage: async ({ page }, use) => {
        const wikipediaPreferencesPage = new WikipediaPreferencesPage(page);
        await use(wikipediaPreferencesPage);
    },
});

export { expect };