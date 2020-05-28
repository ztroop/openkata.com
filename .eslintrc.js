module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    "plugins": [
        "react-hooks"
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    "rules": {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    },
    "overrides": [
        {
            "files": ["*.ts", "*.tsx"],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:react/recommended',
            ],
            rules: {
                "react/no-unescaped-entities": 0,
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/no-parameter-properties": ["error", { "allows": ["public readonly"] }],
                "@typescript-eslint/no-use-before-define": ["error", {
                    "functions": false,
                    "classes": true,
                    variables: true
                }],
                "@typescript-eslint/prefer-interface": "off",
                "no-unused-vars": "off",
                "@typescript-eslint/no-unused-vars": ["error", {
                    "vars": "all",
                    "argsIgnorePattern": "^_",
                    "ignoreRestSiblings": true
                }]
            }
        }
    ]
};
