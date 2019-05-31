module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true,
        "browser": false
    },
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "settings": {
        "react" :  {
            "pragma": "React", 
            "version": "detect"
        }
    },
    "globals": {
        "window": true,
        "document": true,
        "navigator": true,
        "fetch": true,
        "localStorage":true,
        "URL": true
    },
    "rules": {
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "linebreak-style": ["error", "unix"],
        "no-console": 0,
        "quotes": ["error", "single"],
        "semi": ["error", "always"]
     }
};
