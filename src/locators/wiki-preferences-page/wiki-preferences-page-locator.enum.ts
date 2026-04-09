export enum WikiPreferencesPageLocatorEnum {
    ROOT_URL = '**/wiki/Special:Preferences*',

    // PAGE ROOT
    PAGE_HEADING = '#firstHeading',
    BODY_CONTENT = '#bodyContent',
    PREFERENCES_FORM = '#preferences',
    SAVE_BUTTON = 'button[type="submit"]',
    EDIT_TOKEN_INPUT = '#wpEditToken',

    // SEARCH INSIDE PREFERENCES
    PREFERENCES_SEARCH_INPUT = 'input[placeholder="Search preferences"]',

    // TABS WRAPPER
    TABS_WRAPPER = '.mw-prefs-tabs-wrapper',
    TABS_MENU = '.oo-ui-menuLayout-menu',
    TABS_CONTENT = '.oo-ui-menuLayout-content',

    // USER PROFILE GENERAL SECTIONS
    BASIC_INFORMATION_SECTION = '#mw-prefsection-personal',
    INTERNATIONALIZATION_SECTION = '#mw-prefsection-personal-i18n',
    SIGNATURE_SECTION = '#mw-prefsection-personal-signature',

    // INTERNATIONALIZATION
    LANGUAGE_SELECT = 'select[name="wplanguage"]',
    LANGUAGE_SELECT_WRAPPER = '#mw-input-wplanguage',
    LANGUAGE_COMBOBOX = '[role="combobox"][aria-autocomplete="list"]',
    LANGUAGE_LISTBOX = '[role="listbox"]',
    LANGUAGE_OPTION = '[role="option"]',
    LANGUAGE_HIDDEN_INPUT = 'input[name="wpgender"]',
    MORE_LANGUAGE_SETTINGS_LINK = 'a[href*="language"]',

    // GENDER IN MESSAGES
    GENDER_RADIO_UNSPECIFIED = 'input[type="radio"][value="unknown"]',
    GENDER_RADIO_FEMALE = 'input[type="radio"][value="female"]',
    GENDER_RADIO_MALE = 'input[type="radio"][value="male"]',

    // SIGNATURE
    SIGNATURE_INPUT = 'input[name="wpsignature"]',
    TREAT_AS_WIKI_MARKUP_CHECKBOX = 'input[type="checkbox"][name="wpnick"]',

    // COMMON FIELDSET HELPERS
    FIELDSET = 'fieldset',
    LEGEND = 'legend',
    TEXTAREA = 'textarea',
    CHECKBOX = 'input[type="checkbox"]',
    RADIO = 'input[type="radio"]',

    // PAGE TOOLS / SIDE TOOLS VISIBLE ON PAGE
    TOOLS_PORTLET = '#p-tb',
    UPLOAD_FILE_LINK = '#t-upload',
    PRINTABLE_VERSION_LINK = '#t-print',
    SHORT_URL_LINK = '#t-urlshortener',
}