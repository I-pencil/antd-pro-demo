module.exports = {
    "root": true,
    "parser": "babel-eslint",
    "env": {
        "browser": true
    },
    "extends": "airbnb",
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "build/webpack.base.config.js"
            }
        }
    },
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
        'import/prefer-default-export': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        "import/no-extraneous-dependencies": [
            "off",
            { "devDependencies": false, "optionalDependencies": false, "peerDependencies": false }
        ],
        "react/jsx-filename-extension": [
            1,
            { "extensions": [".js", ".jsx"] }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ]
    }
};
