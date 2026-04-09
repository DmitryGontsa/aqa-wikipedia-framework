import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
import { AuthStatePath } from './src/utils/path';

dotenv.config();

const isCI = !!process.env.CI;

export default defineConfig({
    testDir: './tests',
    timeout: 120_000,
    expect: {
        timeout: 10_000,
    },
    fullyParallel: false,
    forbidOnly: isCI,
    retries: isCI ? 1 : 0,
    workers: 1,
    reporter: [
        ['html', {outputFolder: 'playwright-report', open: 'never'}],
        ['list'],
    ],
    use: {
        baseURL: process.env.WIKI_BASE_URL || 'https://en.wikipedia.org',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        headless: isCI,
        ignoreHTTPSErrors: true,
        viewport: isCI ? { width: 1920, height: 1080 } : null,
        launchOptions: isCI
            ? {}
            : {
                args: ['--start-maximized'],
            },
    },
    projects: [
        // {
        //     name: 'auth-api-setup',
        //     testMatch: /.*auth\.api\.setup\.ts/,
        // },
        {
            name: 'auth-ui-setup',
            testMatch: /.*auth\.ui\.setup\.ts/,
        },
        // {
        //     name: 'wikipedia-ui-tests-with-api-auth_[chromium]',
        //     use: {
        //         browserName: 'chromium',
        //         storageState: AuthStatePath.API,
        //     },
        //     dependencies: ['auth-api-setup'],
        //     testIgnore: /.*auth\.(api|ui)\.setup\.ts/,
        // },
        {
            name: 'wikipedia-ui-tests-with-ui-auth_[chromium]',
            use: {
                browserName: 'chromium',
                storageState: AuthStatePath.UI,
            },
            dependencies: ['auth-ui-setup'],
            testIgnore: /.*auth\.(api|ui)\.setup\.ts/,
        },
    ],
});