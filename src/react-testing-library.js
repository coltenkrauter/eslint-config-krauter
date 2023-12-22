/**
 * Config base for projects using react-testing-library.
 */

module.exports = {
    env: {
        browser: true,
        es2024: true,
        node: true,
    },
    overrides: [
        {
            // React testing library rules are specific to tests and extending base.js is not needed as other config will cover them
            extends: ['plugin:testing-library/react'],

            // For performance enable react-testing-library only on test files
            files: ['**/?(*.)+(test).{js,jsx,ts,tsx}'],
            rules: {},
        },
        {
            files: ['**/test-utils.tsx'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                'import/export': 'off',
            },
        },
    ],
}
