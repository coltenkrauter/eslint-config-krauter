/**
 * Config base for projects using react with typescript.
 */

// eslint-disable-next-line unicorn/prevent-abbreviations
module.exports = {
    extends: [require.resolve('./react.js'), require.resolve('./typescript.js')],
    overrides: [
        {
            extends: ['airbnb-typescript'],
            files: ['*.tsx'],
            rules: {
                'react/require-default-props': 'off',
            },
        },
    ],
}
