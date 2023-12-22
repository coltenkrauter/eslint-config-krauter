/**
 * Custom config base for projects using typescript.
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
            extends: [
                'plugin:import/typescript',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            // For performance run typescript on ts files
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: './tsconfig.json',
            },
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/naming-convention': [
                    'error',
                    { format: ['camelCase'], selector: 'default' },
                    { format: ['PascalCase'], selector: 'enumMember' },
                    { format: ['camelCase', 'PascalCase'], selector: 'function' },
                    {
                        format: ['camelCase'],
                        leadingUnderscore: 'allow',
                        selector: 'parameter',
                        trailingUnderscore: 'allow',
                    },
                    { format: ['PascalCase'], selector: 'typeLike' },
                    {
                        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
                        selector: 'variable',
                    },
                    {
                        format: null,
                        leadingUnderscore: 'allow',
                        selector: ['typeProperty', 'objectLiteralProperty'],
                    },
                ],
                '@typescript-eslint/no-explicit-any': [
                    'error',
                    { ignoreRestArgs: true },
                ],
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    { argsIgnorePattern: '^_+$' },
                ],
                '@typescript-eslint/restrict-template-expressions': [
                    'error',
                    { allowAny: true },
                ],
                'no-param-reassign': ['error', { props: false }],
            },
        },
        {
            /**
             * Relax rules in test files
             */
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/test/**/*.{j,t}s?(x)',
                '**/*.spec.{j,t}s?(x)',
                '**/*.test.{j,t}s?(x)',
            ],
            rules: {
                '@typescript-eslint/no-unsafe-call': 'off',
                '@typescript-eslint/no-unsafe-member-access': 'off',
            },
        },
    ],
}
