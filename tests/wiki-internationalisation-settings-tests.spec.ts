import { test } from '../src/fixtures/wiki-auth.fixtures';
import { Internationalisation } from "../src/data/internationalisation.enum";
import { SearchControls } from "../src/data/search-controls.enum";

const testData = [
    { lang: Internationalisation.SPANISH, placeholder: SearchControls.PLACEHOLDER_ES, searchBtn: SearchControls.SEARCH_BTN_ES },
    { lang: Internationalisation.PORTUGUESE, placeholder: SearchControls.PLACEHOLDER_PT, searchBtn: SearchControls.SEARCH_BTN_PT },

    { lang: Internationalisation.FRENCH, placeholder: SearchControls.PLACEHOLDER_FR, searchBtn: SearchControls.SEARCH_BTN_FR },
    { lang: Internationalisation.GERMAN, placeholder: SearchControls.PLACEHOLDER_DE, searchBtn: SearchControls.SEARCH_BTN_DE },

    { lang: Internationalisation.UKRAINIAN, placeholder: SearchControls.PLACEHOLDER_UK, searchBtn: SearchControls.SEARCH_BTN_UK },
    { lang: Internationalisation.POLISH, placeholder: SearchControls.PLACEHOLDER_PL, searchBtn: SearchControls.SEARCH_BTN_PL }
];

test.describe('Successful verification of internationalisation wikipedia settings', () => {

    test.beforeEach(async ({ wikipediaMainPage }) => {
        await wikipediaMainPage.open();
        await wikipediaMainPage
            .openUserMenu()
            .clickPreferences()
            .done();
    })

    testData.forEach(({ lang, placeholder, searchBtn }) => {
        test(`Successful ${ lang } language test`, async ({ wikipediaMainPage, wikipediaPreferencesPage }) => {

            await wikipediaPreferencesPage
                .selectLanguage(lang)
                .clickSave()
                .done();

            await wikipediaMainPage
                .clickOnWikiLogoIcon()
                .done();

            await wikipediaMainPage.expectSearchControlsText(placeholder, searchBtn);
        });
    });

    test.afterEach(async ({ wikipediaPreferencesPage }) => {
        await wikipediaPreferencesPage.open();
        await wikipediaPreferencesPage
            .selectLanguage(Internationalisation.ENGLISH)
            .clickSave()
            .done();
    })
});
