import path from 'path';

export const AuthStatePath = {
    API: path.resolve('playwright/.auth/user-api.json'),
    UI: path.resolve('playwright/.auth/user-ui.json'),
} as const;