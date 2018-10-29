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
