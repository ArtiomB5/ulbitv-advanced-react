module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:i18next/recommended",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["./tsconfig.json"]
    },
    "plugins": [
        "react",
        "i18next"
    ],
    "settings": {
        "react": {
          "version": "detect"
        }
      },
    "rules": {
        "react/jsx-indent": [2, 4],
        "react/jsx-filename-extension": [2, {extensions: [".js", ".jsx", ".tsx"]}],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "no-unused-vars": "warn",
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "warn",
        "react/function-component-definition": "off",
        "no-shadow": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "i18next/no-literal-string": ["error", { markupOnly: true }]
    }
}
