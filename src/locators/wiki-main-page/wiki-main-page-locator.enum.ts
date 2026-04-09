export enum WikiMainPageLocatorEnum {
    ROOT_URL = '**/wiki/Main_Page',

    // ROOT / LAYOUT
    BODY = 'body',
    MAIN_CONTENT = '#bodyContent',
    PAGE_HEADING = '#firstHeading',
    SEARCH_FORM = '#searchform',
    SEARCH_INPUT = '#searchInput',
    SEARCH_BUTTON = 'button[type="submit"]',

    // HEADER / PERSONAL AREA
    USER_MENU_DROPDOWN = '#vector-user-links-dropdown',
    USER_MENU_CHECKBOX = '#vector-user-links-dropdown-checkbox',
    USER_MENU_TRIGGER = '#vector-user-links-dropdown-checkbox',
    PERSONAL_MENU = '#p-personal',
    USER_PAGE_LINK = '#pt-userpage',
    TALK_LINK = '#pt-mytalk',
    SANDBOX_LINK = '#pt-sandbox',
    PREFERENCES_LINK = '#pt-preferences',
    BETA_LINK = '#pt-betafeatures',
    CONTRIBUTIONS_LINK = '#pt-mycontris',
    LOGOUT_LINK = '#pt-logout',
    WIKI_LOGO_ICON = '.mw-logo-icon',

    // HEADER TOOLS
    NOTIFICATIONS_ALERT_LINK = '#pt-notifications-alert',
    NOTIFICATIONS_NOTICE_LINK = '#pt-notifications-notice',
    WATCHLIST_LINK = '#ca-watch',
    APPEARANCE_DROPDOWN = '#vector-appearance-dropdown',
    LANGUAGE_VARIANTS_DROPDOWN = '#vector-variants-dropdown',
    PAGE_TOOLS_DROPDOWN = '#vector-page-tools-dropdown',
    PAGE_TOOLS_MENU = '#p-cactions',

    // PAGE TABS
    PAGE_TAB_MAIN = '#ca-nstab-main',
    PAGE_TAB_TALK = '#ca-talk',
    VIEW_TAB_READ = '#ca-view',
    VIEW_TAB_SOURCE = '#ca-viewsource',
    VIEW_TAB_HISTORY = '#ca-history',

    // SIDEBAR
    MAIN_MENU_PANEL = '#mw-panel',
    NAVIGATION_PORTLET = '#p-navigation',
    MAIN_MENU_HEADING = '.vector-pinnable-header-label',
    MAIN_PAGE_LINK = '#n-mainpage',
    CONTENTS_LINK = '#n-contents',
    CURRENT_EVENTS_LINK = '#n-currentevents',
    RANDOM_ARTICLE_LINK = '#n-randompage',
    ABOUT_WIKIPEDIA_LINK = '#n-aboutsite',
    CONTACT_US_LINK = '#n-contactpage',
    DONATE_LINK = '#n-sitesupport',
    CONTRIBUTE_LINK = '#n-help',
    HELP_LINK = '#n-help',
    LEARN_TO_EDIT_LINK = '#n-sitesupport + li, #n-helppage',
    COMMUNITY_PORTAL_LINK = '#n-portal',
    RECENT_CHANGES_LINK = '#n-recentchanges',
    UPLOAD_FILE_LINK = '#n-upload',
    SPECIAL_PAGES_LINK = '#n-specialpages',

    // RIGHT TOOLS BLOCK
    TOOLS_PORTLET = '#p-tb',
    WHAT_LINKS_HERE_LINK = '#t-whatlinkshere',
    RELATED_CHANGES_LINK = '#t-recentchangeslinked',
    PERMANENT_LINK = '#t-permalink',
    PAGE_INFORMATION_LINK = '#t-info',
    SHORT_URL_LINK = '#t-urlshortener',
    INTERLANGUAGE_LINKS_LINK = '#t-lang',
    DOWNLOAD_PDF_LINK = '#coll-download-as-rl',
    PRINTABLE_VERSION_LINK = '#t-print',
    COMMONS_LINK = '#t-wikimediacommons',
    FOUNDATION_LINK = '#t-wikimediafoundation',
    MEDIAWIKI_LINK = '#t-mediawiki',
    META_WIKI_LINK = '#t-meta',
    OUTREACH_LINK = '#t-wikimediaoutreach',
    MULTILINGUAL_WIKISOURCE_LINK = '#t-multilingual',
    WIKISPECIES_LINK = '#t-wikispecies',
    WIKIBOOKS_LINK = '#t-wikibooks',
    WIKIDATA_LINK = '#t-wikidata',

    // BANNER
    CENTRAL_BANNER = '#siteNotice',
    CENTRAL_BANNER_CLOSE_BUTTON = '#siteNotice button',

    // MAIN PAGE CONTENT BLOCKS
    WELCOME_BLOCK = '#mp-welcome',
    ARTICLE_COUNT_BLOCK = '#articlecount',
    LEFT_COLUMN = '#mp-left',
    RIGHT_COLUMN = '#mp-right',
    LOWER_BLOCK = '#mp-lower',

    FEATURED_ARTICLE_BLOCK = '#mp-tfa',
    IN_THE_NEWS_BLOCK = '#mp-itn',
    DID_YOU_KNOW_BLOCK = '#mp-dyk',
    ON_THIS_DAY_BLOCK = '#mp-otd',
    FEATURED_PICTURE_BLOCK = '#mp-tfp',

    FEATURED_ARTICLE_HEADING = '#mp-tfa-h2',
    IN_THE_NEWS_HEADING = '#mp-itn-h2',
    DID_YOU_KNOW_HEADING = '#mp-dyk-h2',
    ON_THIS_DAY_HEADING = '#mp-otd-h2',
    FEATURED_PICTURE_HEADING = '#mp-tfp-h2',

    // GENERIC HELPERS
    ALL_LINKS = 'a',
    ALL_IMAGES = 'img',
}