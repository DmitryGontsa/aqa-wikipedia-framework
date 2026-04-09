export class Env {
    static get wikiBaseUrl(): string {
        return process.env.WIKI_BASE_URL || 'https://en.wikipedia.org';
    }

    static get wikiUsername(): string {
        const value = process.env.WIKI_USERNAME;
        if (!value) {
            throw new Error('WIKI_USERNAME is not set');
        }
        return value;
    }

    static get wikiPassword(): string {
        const value = process.env.WIKI_PASSWORD;
        if (!value) {
            throw new Error('WIKI_PASSWORD is not set');
        }
        return value;
    }
}