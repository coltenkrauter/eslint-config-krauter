/**
 * Config base for projects using react.
 */

module.exports = {
    env: {
        browser: true,
        es2024: true,
        node: true,
    },
    extends: require.resolve('./base.js'),
    overrides: [
        {
            extends: ['airbnb', 'airbnb/hooks', 'plugin:react/jsx-runtime'],
            files: ['*.jsx', '*.tsx'],
            plugins: ['react'],
            rules: {
                'no-console': ['error', { allow: ['warn', 'error'] }],
                'no-restricted-syntax': [
                    'error',
                    {
                        message:
              'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
                        selector: 'LabeledStatement',
                    },
                    {
                        message:
              '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
                        selector: 'WithStatement',
                    },
                ],
                'react/function-component-definition': [
                    'error',
                    { namedComponents: 'function-declaration' },
                ],
                'react/jsx-props-no-spreading': 'off',
                'jsx-quotes': ['error', 'prefer-single'],
                'object-curly-spacing': ['error', 'never'],

                // Adjust or disable rules for import/no-unresolved and import/extensions as needed
                'import/no-unresolved': 'off',
                'import/extensions': 'off',
            },
        },
        {
            files: ['*.{test,spec}.{j,t}s?(x)'],
            rules: {
                'no-param-reassign': ['error', { props: false }],
                'react/jsx-props-no-spreading': 'off',
            },
        },
    ],
    settings: { react: { version: 'detect' } },
}
