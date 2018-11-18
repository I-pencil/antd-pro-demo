module.exports = {
    "root": true,
    "parser": "babel-eslint",
    "env": {
        "browser": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 8,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-debugger": 1,
        "no-console": 1,
        "max-len": [
            2,
            { "code": 150 }
        ],
        "camelcase": 0,
        "prefer-destructuring": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "import/prefer-default-export": 0,
        "import/no-mutable-exports": 0,
        "import/no-named-as-default": 0,
        "import/no-named-as-default-member": 0,
        "import/no-unresolved": [
            2,
            { "ignore": ["^@"] }
        ],
        "import/no-extraneous-dependencies": [
            0,
            { "devDependencies": false, "optionalDependencies": false, "peerDependencies": false }
        ],
        "react/sort-comp": 0,
        "react/destructuring-assignment": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-first-prop-new-line": 0,
        "react/forbid-prop-types": 0,
        "react/no-array-index-key": 0,
        "react/jsx-one-expression-per-line": 0,
        "react/no-multi-comp": 0,
        "linebreak-style": [
            2,
            "unix"
        ],
        "quotes": [
            2,
            "single"
        ],
        "semi": [
            1,
            "always"
        ]
    }
};
