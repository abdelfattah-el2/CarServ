

module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true ,
        'node': true ,
        'jest':true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended' ,
        'airbnb' ,
        'airbnb/hooks',
        
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType':'module',
        'ecmaFeature':[
            'jsx'
        ]
    },
     'settings':{
        'react':{
            'version':'detect'
        }
     } ,
    'plugins': [
        'react'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
        
    }
};
