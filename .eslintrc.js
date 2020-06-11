module.exports = {
    settings: {
        react: {
            version: 'detect',
        },
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
                "@typescript-eslint/member-delimiter-style": 0
            }
        }
    ]
};
