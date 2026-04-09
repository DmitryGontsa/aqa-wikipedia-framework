import { expect, Locator, Page } from '@playwright/test';
import { WikiMainPageLocatorEnum as L } from '../locators/wiki-main-page/wiki-main-page-locator.enum';

export class WikipediaMainPage {
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

    // ------------------------ LAZY LOCATORS: root / layout ------------------------ //

    private get body(): Locator {
        return this.page.locator(L.BODY);
    }

    private get mainContent(): Locator {
        return this.page.locator(L.MAIN_CONTENT);
    }

    private get pageHeading(): Locator {
        return this.page.locator(L.PAGE_HEADING);
    }

    private get searchForm(): Locator {
        return this.page.locator(L.SEARCH_FORM);
    }

    private get searchInput(): Locator {
        return this.page.locator(L.SEARCH_INPUT);
    }

    private get searchButton(): Locator {
        return this.page.locator(L.SEARCH_BUTTON);
    }

    // ------------------------ LAZY LOCATORS: header / user area ------------------------ //

    private get userMenuDropdown(): Locator {
        return this.page.locator(L.USER_MENU_DROPDOWN);
    }

    private get userMenuTrigger(): Locator {
        return this.page.locator(L.USER_MENU_TRIGGER);
    }

    private get personalMenu(): Locator {
        return this.page.locator(L.PERSONAL_MENU);
    }

    private get preferencesLink(): Locator {
        return this.page.locator(L.PREFERENCES_LINK);
    }

    private get talkLink(): Locator {
        return this.page.locator(L.TALK_LINK);
    }

    private get sandboxLink(): Locator {
        return this.page.locator(L.SANDBOX_LINK);
    }

    private get betaLink(): Locator {
        return this.page.locator(L.BETA_LINK);
    }

    private get contributionsLink(): Locator {
        return this.page.locator(L.CONTRIBUTIONS_LINK);
    }

    private get logoutLink(): Locator {
        return this.page.locator(L.LOGOUT_LINK);
    }

    private get userPageLink(): Locator {
        return this.page.locator(L.USER_PAGE_LINK);
    }

    private get wikiLogoIcon(): Locator {
        return this.page.locator(L.WIKI_LOGO_ICON);
    }

    // ------------------------ LAZY LOCATORS: header controls ------------------------ //

    private get notificationsAlertLink(): Locator {
        return this.page.locator(L.NOTIFICATIONS_ALERT_LINK);
    }

    private get notificationsNoticeLink(): Locator {
        return this.page.locator(L.NOTIFICATIONS_NOTICE_LINK);
    }

    private get watchlistLink(): Locator {
        return this.page.locator(L.WATCHLIST_LINK);
    }

    private get appearanceButton(): Locator {
        return this.page.locator(L.APPEARANCE_DROPDOWN);
    }

    private get languageButton(): Locator {
        return this.page.locator(L.LANGUAGE_VARIANTS_DROPDOWN);
    }

    private get pageToolsButton(): Locator {
        return this.page.locator(L.PAGE_TOOLS_DROPDOWN);
    }

    // ------------------------ LAZY LOCATORS: page tabs ------------------------ //

    private get mainPageTab(): Locator {
        return this.page.locator(L.PAGE_TAB_MAIN);
    }

    private get talkTab(): Locator {
        return this.page.locator(L.PAGE_TAB_TALK);
    }

    private get readTab(): Locator {
        return this.page.locator(L.VIEW_TAB_READ);
    }

    private get viewSourceTab(): Locator {
        return this.page.locator(L.VIEW_TAB_SOURCE);
    }

    private get viewHistoryTab(): Locator {
        return this.page.locator(L.VIEW_TAB_HISTORY);
    }

    // ------------------------ LAZY LOCATORS: left sidebar ------------------------ //

    private get mainMenuPanel(): Locator {
        return this.page.locator(L.MAIN_MENU_PANEL);
    }

    private get navigationPortlet(): Locator {
        return this.page.locator(L.NAVIGATION_PORTLET);
    }

    private get mainPageLink(): Locator {
        return this.page.locator(L.MAIN_PAGE_LINK);
    }

    private get contentsLink(): Locator {
        return this.page.locator(L.CONTENTS_LINK);
    }

    private get currentEventsLink(): Locator {
        return this.page.locator(L.CURRENT_EVENTS_LINK);
    }

    private get randomArticleLink(): Locator {
        return this.page.locator(L.RANDOM_ARTICLE_LINK);
    }

    private get aboutWikipediaLink(): Locator {
        return this.page.locator(L.ABOUT_WIKIPEDIA_LINK);
    }

    private get contactUsLink(): Locator {
        return this.page.locator(L.CONTACT_US_LINK);
    }

    private get donateLink(): Locator {
        return this.page.locator(L.DONATE_LINK);
    }

    private get helpLink(): Locator {
        return this.page.locator(L.HELP_LINK);
    }

    private get communityPortalLink(): Locator {
        return this.page.locator(L.COMMUNITY_PORTAL_LINK);
    }

    private get recentChangesLink(): Locator {
        return this.page.locator(L.RECENT_CHANGES_LINK);
    }

    private get uploadFileLink(): Locator {
        return this.page.locator(L.UPLOAD_FILE_LINK);
    }

    private get specialPagesLink(): Locator {
        return this.page.locator(L.SPECIAL_PAGES_LINK);
    }

    // ------------------------ LAZY LOCATORS: right tools block ------------------------ //

    private get toolsPortlet(): Locator {
        return this.page.locator(L.TOOLS_PORTLET);
    }

    private get whatLinksHereLink(): Locator {
        return this.page.locator(L.WHAT_LINKS_HERE_LINK);
    }

    private get relatedChangesLink(): Locator {
        return this.page.locator(L.RELATED_CHANGES_LINK);
    }

    private get permanentLink(): Locator {
        return this.page.locator(L.PERMANENT_LINK);
    }

    private get pageInformationLink(): Locator {
        return this.page.locator(L.PAGE_INFORMATION_LINK);
    }

    private get shortenedUrlLink(): Locator {
        return this.page.locator(L.SHORT_URL_LINK);
    }

    private get interlanguageLinksLink(): Locator {
        return this.page.locator(L.INTERLANGUAGE_LINKS_LINK);
    }

    private get downloadPdfLink(): Locator {
        return this.page.locator(L.DOWNLOAD_PDF_LINK);
    }

    private get printableVersionLink(): Locator {
        return this.page.locator(L.PRINTABLE_VERSION_LINK);
    }

    // --------------------------- LAZY LOCATORS: banner --------------------------- //

    private get centralBanner(): Locator {
        return this.page.locator(L.CENTRAL_BANNER);
    }

    private get centralBannerCloseButton(): Locator {
        return this.page.locator(L.CENTRAL_BANNER_CLOSE_BUTTON);
    }

    // ------------------------ LAZY LOCATORS: content blocks ------------------------ //

    private get welcomeBlock(): Locator {
        return this.page.locator(L.WELCOME_BLOCK);
    }

    private get articleCountBlock(): Locator {
        return this.page.locator(L.ARTICLE_COUNT_BLOCK);
    }

    private get featuredArticleBlock(): Locator {
        return this.page.locator(L.FEATURED_ARTICLE_BLOCK);
    }

    private get inTheNewsBlock(): Locator {
        return this.page.locator(L.IN_THE_NEWS_BLOCK);
    }

    private get didYouKnowBlock(): Locator {
        return this.page.locator(L.DID_YOU_KNOW_BLOCK);
    }

    private get onThisDayBlock(): Locator {
        return this.page.locator(L.ON_THIS_DAY_BLOCK);
    }

    private get featuredPictureBlock(): Locator {
        return this.page.locator(L.FEATURED_PICTURE_BLOCK);
    }

    private get featuredArticleHeading(): Locator {
        return this.page.locator(L.FEATURED_ARTICLE_HEADING);
    }

    private get inTheNewsHeading(): Locator {
        return this.page.locator(L.IN_THE_NEWS_HEADING);
    }

    private get didYouKnowHeading(): Locator {
        return this.page.locator(L.DID_YOU_KNOW_HEADING);
    }

    private get onThisDayHeading(): Locator {
        return this.page.locator(L.ON_THIS_DAY_HEADING);
    }

    private get featuredPictureHeading(): Locator {
        return this.page.locator(L.FEATURED_PICTURE_HEADING);
    }

    // -------------------------------------- LIFECYCLE -------------------------------------- //

    async open(): Promise<void> {
        await this.page.goto('/wiki/Main_Page');
        await this.waitLoaded();
    }

    async waitLoaded(): Promise<void> {
        await expect(this.page).toHaveURL(/\/wiki\/Main_Page/, { timeout: this.timeout.lg });
        await expect(this.searchInput).toBeVisible({ timeout: this.timeout.md });
        await expect(this.mainPageTab).toBeVisible({ timeout: this.timeout.md });
        await expect(this.welcomeBlock).toBeVisible({ timeout: this.timeout.md });
    }

    // ------------------------------- CHAINABLE ACTIONS: search ------------------------------- //

    setSearchValue(value: string): this {
        return this._enqueue(async () => {
            await expect(this.searchInput).toBeVisible({ timeout: this.timeout.sm });
            await this._clearAndType(this.searchInput, value);
        });
    }

    clickSearch(): this {
        return this._enqueue(async () => {
            await expect(this.searchButton).toBeVisible({ timeout: this.timeout.sm });
            await this.searchButton.click();
        });
    }

    searchFor(value: string): this {
        return this._enqueue(async () => {
            await expect(this.searchInput).toBeVisible({ timeout: this.timeout.sm });
            await this._clearAndType(this.searchInput, value);

            await Promise.all([
                this.page.waitForURL(/\/wiki\/|\/w\/index\.php/, { timeout: this.timeout.lg }),
                this.searchButton.click(),
            ]);
        });
    }

    // ------------------------------- CHAINABLE ACTIONS: user menu ------------------------------- //

    openUserMenu(): this {
        return this._enqueue(async () => {
            await this._openUserMenu();
        });
    }

    clickPreferences(): this {
        return this._enqueue(async () => {
            await this._openUserMenu();
            await expect(this.preferencesLink).toBeVisible({ timeout: this.timeout.sm });

            await Promise.all([
                this.page.waitForURL(/Special:Preferences/, { timeout: 3000 }),
                this.preferencesLink.click(),
            ]);
        });
    }

    clickTalk(): this {
        return this._enqueue(async () => {
            await this._openUserMenu();
            await expect(this.talkLink).toBeVisible({ timeout: this.timeout.sm });
            await this.talkLink.click();
        });
    }

    clickSandbox(): this {
        return this._enqueue(async () => {
            await this._openUserMenu();
            await expect(this.sandboxLink).toBeVisible({ timeout: this.timeout.sm });
            await this.sandboxLink.click();
        });
    }

    clickBeta(): this {
        return this._enqueue(async () => {
            await this._openUserMenu();
            await expect(this.betaLink).toBeVisible({ timeout: this.timeout.sm });
            await this.betaLink.click();
        });
    }

    clickContributions(): this {
        return this._enqueue(async () => {
            await this._openUserMenu();
            await expect(this.contributionsLink).toBeVisible({ timeout: this.timeout.sm });
            await this.contributionsLink.click();
        });
    }

    clickLogout(): this {
        return this._enqueue(async () => {
            await this._openUserMenu();
            await expect(this.logoutLink).toBeVisible({ timeout: this.timeout.sm });
            await this.logoutLink.click();
        });
    }

    // ------------------------------- CHAINABLE ACTIONS: page tabs ------------------------------- //

    clickMainPageTab(): this {
        return this._enqueue(async () => {
            await expect(this.mainPageTab).toBeVisible({ timeout: this.timeout.sm });
            await this.mainPageTab.click();
        });
    }

    clickTalkTab(): this {
        return this._enqueue(async () => {
            await expect(this.talkTab).toBeVisible({ timeout: this.timeout.sm });
            await this.talkTab.click();
        });
    }

    clickReadTab(): this {
        return this._enqueue(async () => {
            await expect(this.readTab).toBeVisible({ timeout: this.timeout.sm });
            await this.readTab.click();
        });
    }

    clickViewSourceTab(): this {
        return this._enqueue(async () => {
            await expect(this.viewSourceTab).toBeVisible({ timeout: this.timeout.sm });
            await this.viewSourceTab.click();
        });
    }

    clickViewHistoryTab(): this {
        return this._enqueue(async () => {
            await expect(this.viewHistoryTab).toBeVisible({ timeout: this.timeout.sm });
            await this.viewHistoryTab.click();
        });
    }

    // ------------------------------- CHAINABLE ACTIONS: sidebar ------------------------------- //

    clickMainPageLink(): this {
        return this._enqueue(async () => {
            await expect(this.mainPageLink).toBeVisible({ timeout: this.timeout.sm });
            await this.mainPageLink.click();
        });
    }

    clickContents(): this {
        return this._enqueue(async () => {
            await expect(this.contentsLink).toBeVisible({ timeout: this.timeout.sm });
            await this.contentsLink.click();
        });
    }

    clickCurrentEvents(): this {
        return this._enqueue(async () => {
            await expect(this.currentEventsLink).toBeVisible({ timeout: this.timeout.sm });
            await this.currentEventsLink.click();
        });
    }

    clickRandomArticle(): this {
        return this._enqueue(async () => {
            await expect(this.randomArticleLink).toBeVisible({ timeout: this.timeout.sm });
            await this.randomArticleLink.click();
        });
    }

    clickAboutWikipedia(): this {
        return this._enqueue(async () => {
            await expect(this.aboutWikipediaLink).toBeVisible({ timeout: this.timeout.sm });
            await this.aboutWikipediaLink.click();
        });
    }

    clickContactUs(): this {
        return this._enqueue(async () => {
            await expect(this.contactUsLink).toBeVisible({ timeout: this.timeout.sm });
            await this.contactUsLink.click();
        });
    }

    clickDonate(): this {
        return this._enqueue(async () => {
            await expect(this.donateLink).toBeVisible({ timeout: this.timeout.sm });
            await this.donateLink.click();
        });
    }

    clickHelp(): this {
        return this._enqueue(async () => {
            await expect(this.helpLink).toBeVisible({ timeout: this.timeout.sm });
            await this.helpLink.click();
        });
    }

    clickCommunityPortal(): this {
        return this._enqueue(async () => {
            await expect(this.communityPortalLink).toBeVisible({ timeout: this.timeout.sm });
            await this.communityPortalLink.click();
        });
    }

    clickRecentChanges(): this {
        return this._enqueue(async () => {
            await expect(this.recentChangesLink).toBeVisible({ timeout: this.timeout.sm });
            await this.recentChangesLink.click();
        });
    }

    clickUploadFile(): this {
        return this._enqueue(async () => {
            await expect(this.uploadFileLink).toBeVisible({ timeout: this.timeout.sm });
            await this.uploadFileLink.click();
        });
    }

    clickSpecialPages(): this {
        return this._enqueue(async () => {
            await expect(this.specialPagesLink).toBeVisible({ timeout: this.timeout.sm });
            await this.specialPagesLink.click();
        });
    }

    // ------------------------------- CHAINABLE ACTIONS: tools block ------------------------------- //

    clickWhatLinksHere(): this {
        return this._enqueue(async () => {
            await expect(this.whatLinksHereLink).toBeVisible({ timeout: this.timeout.sm });
            await this.whatLinksHereLink.click();
        });
    }

    clickRelatedChanges(): this {
        return this._enqueue(async () => {
            await expect(this.relatedChangesLink).toBeVisible({ timeout: this.timeout.sm });
            await this.relatedChangesLink.click();
        });
    }

    clickPermanentLink(): this {
        return this._enqueue(async () => {
            await expect(this.permanentLink).toBeVisible({ timeout: this.timeout.sm });
            await this.permanentLink.click();
        });
    }

    clickPageInformation(): this {
        return this._enqueue(async () => {
            await expect(this.pageInformationLink).toBeVisible({ timeout: this.timeout.sm });
            await this.pageInformationLink.click();
        });
    }

    clickShortenedUrl(): this {
        return this._enqueue(async () => {
            await expect(this.shortenedUrlLink).toBeVisible({ timeout: this.timeout.sm });
            await this.shortenedUrlLink.click();
        });
    }

    clickEditInterlanguageLinks(): this {
        return this._enqueue(async () => {
            await expect(this.interlanguageLinksLink).toBeVisible({ timeout: this.timeout.sm });
            await this.interlanguageLinksLink.click();
        });
    }

    clickDownloadPdf(): this {
        return this._enqueue(async () => {
            await expect(this.downloadPdfLink).toBeVisible({ timeout: this.timeout.sm });
            await this.downloadPdfLink.click();
        });
    }

    clickPrintableVersion(): this {
        return this._enqueue(async () => {
            await expect(this.printableVersionLink).toBeVisible({ timeout: this.timeout.sm });
            await this.printableVersionLink.click();
        });
    }

    // -------------------------------- CHAINABLE ACTIONS: banner -------------------------------- //

    closeCentralBanner(): this {
        return this._enqueue(async () => {
            if (!(await this.centralBanner.isVisible().catch(() => false))) {
                return;
            }

            await expect(this.centralBannerCloseButton).toBeVisible({ timeout: this.timeout.sm });
            await this.centralBannerCloseButton.click();

            await expect(this.centralBanner).toBeHidden({ timeout: this.timeout.md }).catch(() => {});
        });
    }

    clickOnWikiLogoIcon(): this {
        return this._enqueue(async () => {
            await expect(this.wikiLogoIcon).toBeVisible({ timeout: this.timeout.sm });

            await Promise.all([
                this.page.waitForURL(/\/wiki\/Main_Page/, { timeout: this.timeout.lg }).catch(() => {}),
                this.wikiLogoIcon.click(),
            ]);
        });
    }

    // -------------------------------------- ASSERTIONS -------------------------------------- //

    async expectLoaded(): Promise<void> {
        await this._chain;
        await this.waitLoaded();
    }

    async expectPageHeading(): Promise<void> {
        await this._chain;
        await expect(this.pageHeading).toBeVisible({ timeout: this.timeout.md });
    }

    async expectSearchVisible(): Promise<void> {
        await this._chain;
        await expect(this.searchForm).toBeVisible({ timeout: this.timeout.sm });
        await expect(this.searchInput).toBeVisible({ timeout: this.timeout.sm });
        await expect(this.searchButton).toBeVisible({ timeout: this.timeout.sm });
    }

    async expectSearchControlsText(
        expectedPlaceholder: string,
        expectedButtonText: string,
    ): Promise<void> {
        await this._chain;

        const localizedSearchInput = this.searchForm.getByPlaceholder(expectedPlaceholder, { exact: true });
        const localizedSearchButton = this.searchForm.getByRole('button', { name: expectedButtonText, exact: true });

        await expect(localizedSearchInput).toBeVisible({ timeout: this.timeout.md });
        await expect(localizedSearchInput).toHaveAttribute('placeholder', expectedPlaceholder, {
            timeout: this.timeout.md,
        });

        await expect(localizedSearchButton).toBeVisible({ timeout: this.timeout.md });
        await expect(localizedSearchButton).toHaveText(expectedButtonText, {
            timeout: this.timeout.md,
        });
    }

    async expectUserMenuAvailable(): Promise<void> {
        await this._chain;
        await expect(this.userMenuTrigger).toBeVisible({ timeout: this.timeout.sm });
    }

    async expectPreferencesVisibleInUserMenu(): Promise<void> {
        await this._chain;
        await this._openUserMenu();
        await expect(this.preferencesLink).toBeVisible({ timeout: this.timeout.sm });
    }

    async expectSidebarVisible(): Promise<void> {
        await this._chain;
        await expect(this.mainMenuPanel).toBeVisible({ timeout: this.timeout.md });
        await expect(this.navigationPortlet).toBeVisible({ timeout: this.timeout.md });
    }

    async expectMainTabsVisible(): Promise<void> {
        await this._chain;
        await expect(this.mainPageTab).toBeVisible({ timeout: this.timeout.sm });
        await expect(this.talkTab).toBeVisible({ timeout: this.timeout.sm });
        await expect(this.readTab).toBeVisible({ timeout: this.timeout.sm });
        await expect(this.viewSourceTab).toBeVisible({ timeout: this.timeout.sm });
        await expect(this.viewHistoryTab).toBeVisible({ timeout: this.timeout.sm });
    }

    async expectToolsBlockVisible(): Promise<void> {
        await this._chain;
        await expect(this.toolsPortlet).toBeVisible({ timeout: this.timeout.md });
        await expect(this.whatLinksHereLink).toBeVisible({ timeout: this.timeout.sm });
        await expect(this.relatedChangesLink).toBeVisible({ timeout: this.timeout.sm });
        await expect(this.pageInformationLink).toBeVisible({ timeout: this.timeout.sm });
        await expect(this.downloadPdfLink).toBeVisible({ timeout: this.timeout.sm });
    }

    async expectMainContentBlocksVisible(): Promise<void> {
        await this._chain;
        await expect(this.welcomeBlock).toBeVisible({ timeout: this.timeout.md });
        await expect(this.articleCountBlock).toBeVisible({ timeout: this.timeout.md });
        await expect(this.featuredArticleBlock).toBeVisible({ timeout: this.timeout.md });
        await expect(this.inTheNewsBlock).toBeVisible({ timeout: this.timeout.md });
        await expect(this.didYouKnowBlock).toBeVisible({ timeout: this.timeout.md });
        await expect(this.onThisDayBlock).toBeVisible({ timeout: this.timeout.md });
        await expect(this.featuredPictureBlock).toBeVisible({ timeout: this.timeout.md });
    }

    async expectFeaturedSectionTitles(): Promise<void> {
        await this._chain;
        await expect(this.featuredArticleHeading).toBeVisible({ timeout: this.timeout.sm });
        await expect(this.inTheNewsHeading).toBeVisible({ timeout: this.timeout.sm });
        await expect(this.featuredPictureHeading).toBeVisible({ timeout: this.timeout.sm });
    }

    async expectWelcomeTextVisible(firstText: string, secondText: string): Promise<void> {
        await this._chain;
        await expect(this.welcomeBlock).toContainText(firstText, { timeout: this.timeout.sm });
        await expect(this.welcomeBlock).toContainText(secondText, { timeout: this.timeout.sm });
    }

    async expectSearchValue(value: string): Promise<void> {
        await this._chain;
        await expect(this.searchInput).toHaveValue(value, { timeout: this.timeout.sm });
    }

    async expectUrlContains(value: string | RegExp): Promise<void> {
        await this._chain;

        if (typeof value === 'string') {
            await expect(this.page).toHaveURL(new RegExp(value), { timeout: this.timeout.lg });
            return;
        }

        await expect(this.page).toHaveURL(value, { timeout: this.timeout.lg });
    }

    // ------------------------------------ SERVICE HELPERS ------------------------------------ //

    private async _openUserMenu(): Promise<void> {
        const visible = await this.personalMenu.isVisible().catch(() => false);

        if (visible) {
            return;
        }

        await expect(this.userMenuTrigger).toBeVisible({ timeout: this.timeout.lg });

        const isChecked = await this.userMenuTrigger.isChecked().catch(() => false);
        if (!isChecked) {
            await this.userMenuTrigger.check();
        }

        await expect(this.personalMenu).toBeVisible({ timeout: this.timeout.lg });
    }

    private _normalizeText(value: string | null | undefined): string {
        return (value ?? '').replace(/\s+/g, ' ').trim();
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