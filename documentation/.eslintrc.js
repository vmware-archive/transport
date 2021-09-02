module.exports = {
    "root": true,
    "parserOptions": {
        "project": ["tsconfig.*?.json"],
        "tsconfigRootDir": __dirname,
        "createDefaultProgram": true
    },
    "overrides": [
        {
            "files": ["*.ts"],
            "plugins": [
                "eslint-plugin-import"
            ],
            "extends": [
                "plugin:@angular-eslint/recommended",
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "plugin:@angular-eslint/template/process-inline-templates",
                "plugin:prettier/recommended"
            ],
            "rules": {
                "@angular-eslint/no-input-rename": "off",
                "@typescript-eslint/member-ordering": "off",
                "@typescript-eslint/no-namespace": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/explicit-module-boundary-types": "off",
                "@typescript-eslint/no-unsafe-assignment": "warn",
                "@typescript-eslint/no-unsafe-call": "warn",
                "@typescript-eslint/no-unsafe-member-access": "warn",
                "@typescript-eslint/no-empty-function": "off",
                "@angular-eslint/use-lifecycle-interface": "off",
                "@angular-eslint/directive-class-suffix": "off",
                "@angular-eslint/no-output-on-prefix": "off",
                "@angular-eslint/no-empty-lifecycle-method": "off",
                "@angular-eslint/no-empty-function": "off",
                "@angular-eslint/no-output-rename": "off",
                "@angular-eslint/component-class-suffix": "off",
                "@angular-eslint/no-output-native": "off",
                "import/order": [
                    "error",
                    {
                        "newlines-between": "always",
                        "groups": ["external", "internal", "parent", "sibling", "index"],
                        "pathGroups": [
                            {
                                "pattern": "@vmc/**",
                                "group": "internal",
                                "position": "before"
                            },
                            {
                                "pattern": "@vmw/**",
                                "group": "external",
                                "position": "after"
                            }
                        ],
                        "pathGroupsExcludedImportTypes": ["builtin"]
                    }
                ],
            }
        },
        {
            "files": ["*.html"],
            "extends": [
                "plugin:@angular-eslint/template/recommended"
            ]
        }
    ]
};
