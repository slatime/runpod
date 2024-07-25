module.exports = {
    root: true,
    globals: {
        App: "writable"
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:svelte/recommended',
        'plugin:svelte/prettier',
        'plugin:import/typescript',
        'prettier',
        'plugin:tailwindcss/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import', 'prettier', 'svelte', 'tailwindcss'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        extraFileExtensions: ['.svelte'],
    },
    env: {
        browser: true,
        es2017: true,
        node: true,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts', '.svelte', '.config', '.vite'],
            },
            typescript: {
                // use an array
                project: ['./tsconfig.json'],
            },
        },
        tailwindcss: {
            // These are the default values but feel free to customize
            callees: ['classnames', 'clsx', 'ctl'],
            config: './tailwind.config.js', // returned from `loadConfig()` utility if not provided
            cssFiles: [
                '**/*.css',
                '!**/node_modules',
                '!**/.*',
                '!**/dist',
                '!**/build',
            ],
            cssFilesRefreshRate: 5_000,
            removeDuplicates: true,
            skipClassAttribute: false,
            whitelist: [],
            tags: [], // can be set to e.g. ['tw'] for use in tw`bg-blue`
            classRegex: '^class(Name)?$', // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
        },
    },
    rules: {
        '@typescript-eslint/ban-ts-comment': ['warn'],
        '@typescript-eslint/no-var-requires': ['off'],
        '@typescript-eslint/no-unused-vars': ['warn'],
        'no-constant-condition': ['off'],
        'svelte/no-at-html-tags': ['off'],
        'svelte/invalid-css-identifier': ['off'],
        // a11y 접근성 오류 무시
        'svelte/a11y-no-onchange': 'off',
        'svelte-a11y/click-events-have-key-events': 'off',
        'svelte-a11y/no-static-element-interactions': 'off',
        'svelte/a11y-no-noninteractive-element-interactions': 'off',
        'svelte/a11y-no-noninteractive-element-to-interactive-role': 'off',
        'svelte/a11y-no-noninteractive-tabindex': 'off',
        'svelte/valid-compile': ['error', { 'ignoreWarnings': false }],
        // {@html} 경고 무시
        '@typescript-eslint/no-explicit-any': 'off',
        'no-nested-ternary': 0,
        'no-unused-vars': 'off',
        // 'no-undef': 'off',
        // 'no-useless-escape': 'off',

    },
    overrides: [
        {
            files: ['*.svelte'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: {
                    ts: '@typescript-eslint/parser',
                    js: 'espree',
                    typescript: '@typescript-eslint/parser',
                },
                sourceType: 'module',
                ecmaVersion: 2021,
                cmaFeatures: {
                    globalReturn: false,
                    impliedStrict: false,
                    jsx: false,
                },
            },
            globals: {
                naver: "readonly",
                google: "readonly"
            },
            rules: {
                // a11y 접근성 오류 무시
                'svelte/a11y-no-onchange': 'off',
                'svelte-a11y/click-events-have-key-events': 'off',
                'svelte-a11y/no-static-element-interactions': 'off',
                'svelte/a11y-no-noninteractive-element-interactions': 'off',
                'svelte/a11y-no-noninteractive-element-to-interactive-role': 'off',
                'svelte/a11y-no-noninteractive-tabindex': 'off',
                'svelte/valid-compile': ['error', { 'ignoreWarnings': true }],
            }

        },
    ],
}
