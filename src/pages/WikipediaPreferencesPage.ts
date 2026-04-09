import { expect, Locator, Page } from '@playwright/test';
import { WikiPreferencesPageLocatorEnum as L } from '../locators/wiki-preferences-page/wiki-preferences-page-locator.enum';
import { WikiPreferencesPageTextEnum as T } from '../locators/wiki-preferences-page/wiki-preferences-page-text.enum';

export class WikipediaPreferencesPage {
    constructor(private readonly page: Page) {}

    private _chain: Promise<void> = Promise.resolve();

    private readonly timeout = {
        xs: 300,
        sm: 500,
        md: 700,
        lg: 1000,
    };

    private _enqueue(task: () => Promise<void>): this {
        this._chain = this._chain.then(task);
        return this;
    }

    async done(): Promise<void> {
        await this._chain;
    }

    // --------------------------- LAZY LOCATORS: page root --------------------------- //

    private get heading(): Locator {
        return this.page.locator(L.PAGE_HEADING);
    }

    private get bodyContent(): Locator {
        return this.page.locator(L.BODY_CONTENT);
    }

    private get preferencesForm(): Locator {
        return this.page.locator(L.PREFERENCES_FORM);
    }

    private get saveButton(): Locator {
        return this.page.locator(L.SAVE_BUTTON);
    }

    private get preferencesSearchInput(): Locator {
        return this.page.locator(L.PREFERENCES_SEARCH_INPUT);
    }

    // -------------------------- LAZY LOCATORS: tabs / panels -------------------------- //

    private get tabsWrapper(): Locator {
        return this.page.locator(L.TABS_WRAPPER);
    }

    private get tabsContent(): Locator {
        return this.page.locator(L.TABS_CONTENT);
    }

    private get activeTabPanel(): Locator {
        return this.page.locator('[role="tabpanel"]:not([aria-hidden="true"])');
    }

    private get basicInformationSection(): Locator {
        return this.page.locator(L.BASIC_INFORMATION_SECTION);
    }

    private get internationalizationSection(): Locator {
        return this.page.locator(L.INTERNATIONALIZATION_SECTION);
    }

    private get signatureSection(): Locator {
        return this.page.locator(L.SIGNATURE_SECTION);
    }

    private get userProfileTabPanel(): Locator {
        return this.basicInformationSection.locator('xpath=ancestor::*[@role="tabpanel"][1]');
    }

    // -------------------------- LAZY LOCATORS: internationalization -------------------------- //

    private get languageSelect(): Locator {
        return this.page.locator(L.LANGUAGE_SELECT);
    }

    private get languageCombobox(): Locator {
        return this.internationalizationSection.getByRole('combobox');
    }

    private get languageListbox(): Locator {
        return this.page.getByRole('listbox');
    }

    private get moreLanguageSettingsLink(): Locator {
        return this.internationalizationSection.locator(L.MORE_LANGUAGE_SETTINGS_LINK);
    }

    private get genderRadioUnspecified(): Locator {
        return this.page.locator(L.GENDER_RADIO_UNSPECIFIED);
    }

    private get genderRadioFemale(): Locator {
        return this.page.locator(L.GENDER_RADIO_FEMALE);
    }

    private get genderRadioMale(): Locator {
        return this.page.locator(L.GENDER_RADIO_MALE);
    }

    // -------------------------- LAZY LOCATORS: signature -------------------------- //

    private get signatureInput(): Locator {
        return this.page.locator(L.SIGNATURE_INPUT);
    }

    // -------------------------- LAZY LOCATORS: page tools -------------------------- //

    private get uploadFileLink(): Locator {
        return this.page.locator(L.UPLOAD_FILE_LINK);
    }

    private get printableVersionLink(): Locator {
        return this.page.locator(L.PRINTABLE_VERSION_LINK);
    }

    private get shortenedUrlLink(): Locator {
        return this.page.locator(L.SHORT_URL_LINK);
    }

    // --------------------------------- LIFECYCLE --------------------------------- //

    async open(): Promise<void> {
        await this.page.goto('/wiki/Special:Preferences');
        await this.waitLoaded();
    }

    async waitLoaded(): Promise<void> {
        await expect(this.page).toHaveURL(/Special:Preferences/, { timeout: this.timeout.lg });
        await expect(this.preferencesForm).toBeVisible({ timeout: this.timeout.md });
        await expect(this.bodyContent).toBeVisible({ timeout: this.timeout.md });
        await expect(this.saveButton).toBeVisible({ timeout: this.timeout.md });
        await expect(this.basicInformationSection).toBeVisible({ timeout: this.timeout.md });
    }

    // --------------------------------- TAB NAVIGATION --------------------------------- //

    clickUserProfileTab(): this {
        return this._enqueue(async () => {
            const tab = await this._getTabByPanel(this.userProfileTabPanel);
            await this._clickTab(tab, this.userProfileTabPanel);
            await expect(this.basicInformationSection).toBeVisible({ timeout: this.timeout.md });
        });
    }

    // --------------------------------- PREFERENCES SEARCH --------------------------------- //

    setPreferencesSearch(value: string): this {
        return this._enqueue(async () => {
            await expect(this.preferencesSearchInput).toBeVisible({ timeout: this.timeout.sm });
            await this._clearAndType(this.preferencesSearchInput, value);
        });
    }

    clearPreferencesSearch(): this {
        return this._enqueue(async () => {
            await expect(this.preferencesSearchInput).toBeVisible({ timeout: this.timeout.sm });
            await this._clearAndType(this.preferencesSearchInput, '');
        });
    }

    // ----------------------------- INTERNATIONALIZATION ACTIONS ----------------------------- //

    scrollToInternationalization(): this {
        return this._enqueue(async () => {
            await this._ensureUserProfileTabOpened();
            await this.internationalizationSection.scrollIntoViewIfNeeded();
            await expect(this.internationalizationSection).toBeVisible({ timeout: this.timeout.md });
        });
    }

    openLanguageDropdown(): this {
        return this._enqueue(async () => {
            await this._ensureUserProfileTabOpened();
            await this._openLanguageDropdown();
        });
    }

    closeLanguageDropdown(): this {
        return this._enqueue(async () => {
            if (!(await this.languageListbox.isVisible().catch(() => false))) {
                return;
            }

            await this.languageCombobox.press('Escape').catch(() => {});
            await expect(this.languageListbox).toBeHidden({ timeout: this.timeout.md }).catch(() => {});
        });
    }

    selectLanguage(languageName: string | RegExp): this {
        return this._enqueue(async () => {
            await this._ensureUserProfileTabOpened();
            await this.internationalizationSection.scrollIntoViewIfNeeded();

            const resolved = await this._resolveLanguageOption(languageName);
            const currentValue = await this.languageSelect.inputValue();

            if (currentValue === resolved.value) {
                return;
            }

            await this.languageSelect.evaluate((select, value) => {
                const element = select as HTMLSelectElement;
                element.value = value;
                element.dispatchEvent(new Event('input', { bubbles: true }));
                element.dispatchEvent(new Event('change', { bubbles: true }));
            }, resolved.value);

            await expect(this.languageSelect).toHaveValue(resolved.value, {
                timeout: this.timeout.md,
            });

            await expect(this.saveButton).toBeEnabled({
                timeout: this.timeout.lg,
            });
        });
    }

    selectEnglish(): this {
        return this.selectLanguage(T.ENGLISH);
    }

    selectCanadianEnglish(): this {
        return this.selectLanguage(T.ENGLISH_CANADA);
    }

    selectUkrainian(): this {
        return this.selectLanguage(T.UKRAINIAN);
    }

    setGenderUnspecified(): this {
        return this._enqueue(async () => {
            await this._ensureUserProfileTabOpened();
            await this.internationalizationSection.scrollIntoViewIfNeeded();

            await expect(this.genderRadioUnspecified).toBeVisible({ timeout: this.timeout.sm });
            if (!(await this.genderRadioUnspecified.isChecked())) {
                await this.genderRadioUnspecified.check();
            }
        });
    }

    setGenderFemale(): this {
        return this._enqueue(async () => {
            await this._ensureUserProfileTabOpened();
            await this.internationalizationSection.scrollIntoViewIfNeeded();

            await expect(this.genderRadioFemale).toBeVisible({ timeout: this.timeout.sm });
            if (!(await this.genderRadioFemale.isChecked())) {
                await this.genderRadioFemale.check();
            }
        });
    }

    setGenderMale(): this {
        return this._enqueue(async () => {
            await this._ensureUserProfileTabOpened();
            await this.internationalizationSection.scrollIntoViewIfNeeded();

            await expect(this.genderRadioMale).toBeVisible({ timeout: this.timeout.sm });
            if (!(await this.genderRadioMale.isChecked())) {
                await this.genderRadioMale.check();
            }
        });
    }

    clickMoreLanguageSettings(): this {
        return this._enqueue(async () => {
            await this._ensureUserProfileTabOpened();
            await this.internationalizationSection.scrollIntoViewIfNeeded();

            await expect(this.moreLanguageSettingsLink).toBeVisible({ timeout: this.timeout.sm });
            await this.moreLanguageSettingsLink.click();
        });
    }

    // ---------------------------------- SAVE ACTIONS ---------------------------------- //

    clickSave(): this {
        return this._enqueue(async () => {
            await this.saveButton.scrollIntoViewIfNeeded().catch(() => {});
            await expect(this.saveButton).toBeVisible({ timeout: this.timeout.sm });

            const isDisabled = await this.saveButton.isDisabled().catch(() => true);
            if (isDisabled) {
                return;
            }

            await Promise.all([
                this.page.waitForLoadState('domcontentloaded', { timeout: this.timeout.lg }).catch(() => {}),
                this.saveButton.click(),
            ]);

            await expect(this.saveButton).toBeDisabled({
                timeout: this.timeout.lg,
            }).catch(() => {});
        });
    }

    savePreferences(): this {
        return this._enqueue(async () => {
            await this.saveButton.scrollIntoViewIfNeeded().catch(() => {});
            await expect(this.saveButton).toBeVisible({ timeout: this.timeout.sm });
            await expect(this.saveButton).toBeEnabled({ timeout: this.timeout.sm });

            await Promise.all([
                this.page.waitForLoadState('domcontentloaded', { timeout: this.timeout.lg }).catch(() => {}),
                this.saveButton.click(),
            ]);
        });
    }

    // ---------------------------------- ASSERTIONS: page ---------------------------------- //

    async expectLoaded(): Promise<void> {
        await this._chain;
        await this.waitLoaded();
    }

    async expectUserProfileTabSelected(): Promise<void> {
        await this._chain;
        const tab = await this._getTabByPanel(this.userProfileTabPanel);
        await expect(tab).toHaveAttribute('aria-selected', 'true', { timeout: this.timeout.sm });
    }

    async expectSaveDisabled(): Promise<void> {
        await this._chain;
        await expect(this.saveButton).toBeDisabled({ timeout: 2000 });
    }

    async expectSaveEnabled(): Promise<void> {
        await this._chain;
        await expect(this.saveButton).toBeEnabled({ timeout: this.timeout.sm });
    }

    // ---------------------------------- ASSERTIONS: sections ---------------------------------- //

    async expectBasicInformationVisible(): Promise<void> {
        await this._chain;
        await this._ensureUserProfileTabOpened();
        await expect(this.basicInformationSection).toBeVisible({ timeout: this.timeout.md });
    }

    async expectInternationalizationVisible(): Promise<void> {
        await this._chain;
        await this._ensureUserProfileTabOpened();
        await this.internationalizationSection.scrollIntoViewIfNeeded();
        await expect(this.internationalizationSection).toBeVisible({ timeout: this.timeout.md });
    }

    async expectSignatureVisible(): Promise<void> {
        await this._chain;
        await this._ensureUserProfileTabOpened();
        await this.signatureSection.scrollIntoViewIfNeeded();
        await expect(this.signatureSection).toBeVisible({ timeout: this.timeout.md });
    }

    // ----------------------------- ASSERTIONS: internationalization ----------------------------- //

    async expectLanguageComboboxVisible(): Promise<void> {
        await this._chain;
        await this._ensureUserProfileTabOpened();
        await this.internationalizationSection.scrollIntoViewIfNeeded();
        await expect(this.languageCombobox).toBeVisible({ timeout: this.timeout.md });
    }

    async expectLanguageDropdownOpened(): Promise<void> {
        await this._chain;
        await expect(this.languageListbox).toBeVisible({ timeout: this.timeout.md });
    }

    async expectLanguageDropdownClosed(): Promise<void> {
        await this._chain;
        await expect(this.languageListbox).toBeHidden({ timeout: this.timeout.md });
    }

    async expectSelectedLanguage(languageName: string | RegExp): Promise<void> {
        await this._chain;
        await this._expectSelectedLanguage(languageName);
    }

    async expectGenderUnspecifiedChecked(): Promise<void> {
        await this._chain;
        await expect(this.genderRadioUnspecified).toBeChecked({ timeout: this.timeout.sm });
    }

    async expectGenderFemaleChecked(): Promise<void> {
        await this._chain;
        await expect(this.genderRadioFemale).toBeChecked({ timeout: this.timeout.sm });
    }

    async expectGenderMaleChecked(): Promise<void> {
        await this._chain;
        await expect(this.genderRadioMale).toBeChecked({ timeout: this.timeout.sm });
    }

    async getSelectedLanguageValue(): Promise<string> {
        await this._chain;
        return await this.languageSelect.inputValue();
    }

    async expectSelectedLanguageValue(value: string): Promise<void> {
        await this._chain;
        await expect(this.languageSelect).toHaveValue(value, { timeout: this.timeout.sm });
    }

    // ---------------------------------------- SERVICE HELPERS ---------------------------------------- //

    private async _getTabByPanel(panel: Locator): Promise<Locator> {
        const panelId = await panel.getAttribute('id');

        if (!panelId) {
            throw new Error('Controlled tab panel id was not found.');
        }

        return this.page.locator(`[role="tab"][aria-controls="${panelId}"]`);
    }

    private async _clickTab(tab: Locator, expectedPanel?: Locator): Promise<void> {
        await expect(tab).toBeVisible({ timeout: this.timeout.sm });
        await tab.click();
        await expect(tab).toHaveAttribute('aria-selected', 'true', { timeout: this.timeout.md });

        if (expectedPanel) {
            await expect(expectedPanel).toBeVisible({ timeout: this.timeout.md });
        }
    }

    private async _ensureUserProfileTabOpened(): Promise<void> {
        const panelVisible = await this.userProfileTabPanel.isVisible().catch(() => false);

        if (panelVisible) {
            return;
        }

        const tab = await this._getTabByPanel(this.userProfileTabPanel);
        await this._clickTab(tab, this.userProfileTabPanel);
    }

    private async _openLanguageDropdown(): Promise<void> {
        await this.internationalizationSection.scrollIntoViewIfNeeded();

        if (await this.languageListbox.isVisible().catch(() => false)) {
            return;
        }

        await expect(this.languageCombobox).toBeVisible({ timeout: this.timeout.sm });
        await this.languageCombobox.click();
        await expect(this.languageListbox).toBeVisible({ timeout: this.timeout.md });
    }

    private async _resolveLanguageOption(
        languageName: string | RegExp,
    ): Promise<{ value: string; label: string }> {
        const options = await this.languageSelect.evaluate((select) => {
            return Array.from((select as HTMLSelectElement).options).map((option) => ({
                value: option.value,
                label: option.text.trim(),
            }));
        });

        const match = options.find((option) => {
            if (typeof languageName === 'string') {
                return option.label === languageName;
            }

            return languageName.test(option.label);
        });

        if (!match) {
            throw new Error(
                `Language option was not found: ${
                    typeof languageName === 'string'
                        ? languageName
                        : languageName.toString()
                }`,
            );
        }

        return match;
    }

    private async _expectSelectedLanguage(languageName: string | RegExp): Promise<void> {
        const selectedLabel = await this.languageSelect.evaluate((select) => {
            const element = select as HTMLSelectElement;
            return element.options[element.selectedIndex]?.text.trim() ?? '';
        });

        if (typeof languageName === 'string') {
            expect(selectedLabel).toBe(languageName);
            return;
        }

        expect(selectedLabel).toMatch(languageName);
    }

    private async _clearAndType(input: Locator, value: string): Promise<void> {
        await input.scrollIntoViewIfNeeded().catch(() => {});
        await input.click({ force: true });

        const mod = process.platform === 'darwin' ? 'Meta' : 'Control';
        await input.press(`${mod}+A`).catch(() => {});
        await input.press('Backspace').catch(() => {});

        await input.fill(value);
        await expect(input).toHaveValue(value, { timeout: this.timeout.sm });
    }
}