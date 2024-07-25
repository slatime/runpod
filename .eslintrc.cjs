module.exports = {
    root: true, // 현재 디렉토리를 루트로 설정
    globals: {
        App: "writable", // 전역 변수 App을 수정 가능하게 설정
        naver: "readonly", // 전역 변수 naver을 읽기 전용으로 설정
        google: "readonly" // 전역 변수 google을 읽기 전용으로 설정
    },
    extends: [
        'eslint:recommended', // ESLint 추천 설정 사용
        'plugin:@typescript-eslint/recommended', // TypeScript ESLint 추천 설정 사용
        'plugin:svelte/recommended', // Svelte ESLint 추천 설정 사용
        'plugin:svelte/prettier', // Svelte와 Prettier 통합 설정
        'plugin:import/typescript', // TypeScript import 관련 설정
        'prettier', // Prettier 설정
        'plugin:tailwindcss/recommended', // Tailwind CSS ESLint 추천 설정 사용
    ],
    parser: '@typescript-eslint/parser', // TypeScript 파서 사용
    plugins: [
        '@typescript-eslint', // TypeScript ESLint 플러그인
        'import', // import 관련 ESLint 플러그인
        'prettier', // Prettier ESLint 플러그인
        'svelte', // Svelte ESLint 플러그인
        'tailwindcss' // Tailwind CSS ESLint 플러그인
    ],
    parserOptions: {
        sourceType: 'module', // 모듈 시스템 사용
        ecmaVersion: 2020, // ECMAScript 2020 구문 지원
        extraFileExtensions: ['.svelte'], // 추가 파일 확장자로 .svelte 설정
    },
    env: {
        browser: true, // 브라우저 환경 설정
        es2017: true, // ECMAScript 2017 구문 지원
        node: true, // Node.js 환경 설정
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts', '.svelte', '.config', '.vite'], // Node.js 모듈 해석 설정
            },
            typescript: {
                project: ['./tsconfig.json'], // TypeScript 프로젝트 설정 파일 경로
            },
        },
        tailwindcss: {
            callees: ['classnames', 'clsx', 'ctl'], // Tailwind CSS 호출 설정
            config: './tailwind.config.js', // Tailwind CSS 구성 파일 경로
            cssFiles: [
                '**/*.css', // 모든 CSS 파일 포함
                '!**/node_modules', // node_modules 디렉토리 제외
                '!**/.*', // 숨김 파일 제외
                '!**/dist', // dist 디렉토리 제외
                '!**/build', // build 디렉토리 제외
            ],
            cssFilesRefreshRate: 5000, // CSS 파일 새로 고침 간격 설정
            removeDuplicates: true, // 중복 클래스 제거
            skipClassAttribute: false, // class 속성 건너뛰기 여부
            whitelist: [], // 화이트리스트 클래스 설정
            tags: [], // 사용자 정의 태그 설정
            classRegex: '^class(Name)?$', // 클래스 정규 표현식 설정
        },
    },
    rules: {
        '@typescript-eslint/ban-ts-comment': ['warn'], // @ts- 주석 금지 경고
        '@typescript-eslint/no-var-requires': ['off'], // var requires 금지 비활성화
        '@typescript-eslint/no-unused-vars': ['warn'], // 사용하지 않는 변수 경고
        'no-constant-condition': ['off'], // 상수 조건 금지 비활성화
        'svelte/no-at-html-tags': ['off'], // @html 태그 금지 비활성화
        'svelte/invalid-css-identifier': ['off'], // 잘못된 CSS 식별자 금지 비활성화
        'svelte/a11y-no-onchange': 'off', // 접근성 onchange 이벤트 금지 비활성화
        'svelte-a11y/click-events-have-key-events': 'off', // 접근성 클릭 이벤트 키 이벤트 필요 비활성화
        'svelte-a11y/no-static-element-interactions': 'off', // 접근성 정적 요소 상호작용 금지 비활성화
        'svelte/a11y-no-noninteractive-element-interactions': 'off', // 접근성 비상호작용 요소 상호작용 금지 비활성화
        'svelte/a11y-no-noninteractive-element-to-interactive-role': 'off', // 접근성 비상호작용 요소 상호작용 역할 금지 비활성화
        'svelte/a11y-no-noninteractive-tabindex': 'off', // 접근성 비상호작용 tabindex 금지 비활성화
        'svelte/valid-compile': ['error', { 'ignoreWarnings': false }], // 유효한 컴파일 오류 설정
        '@typescript-eslint/no-explicit-any': 'off', // 명시적 any 타입 금지 비활성화
        'no-nested-ternary': 0, // 중첩 삼항 연산자 금지 비활성화
        'no-unused-vars': 'off', // 사용하지 않는 변수 금지 비활성화
    },
    overrides: [
        {
            files: ['*.svelte'], // Svelte 파일에 대한 설정
            parser: 'svelte-eslint-parser', // Svelte ESLint 파서 사용
            parserOptions: {
                parser: {
                    ts: '@typescript-eslint/parser', // TypeScript 파서 사용
                    js: 'espree', // JavaScript 파서 사용
                    typescript: '@typescript-eslint/parser', // TypeScript 파서 사용
                },
                sourceType: 'module', // 모듈 시스템 사용
                ecmaVersion: 2021, // ECMAScript 2021 구문 지원
                ecmaFeatures: {
                    globalReturn: false, // 전역 반환 비활성화
                    impliedStrict: false, // 암시적 엄격 모드 비활성화
                    jsx: false, // JSX 지원 비활성화
                },
            },
            rules: {
                'svelte/a11y-no-onchange': 'off', // 접근성 onchange 이벤트 금지 비활성화
                'svelte-a11y/click-events-have-key-events': 'off', // 접근성 클릭 이벤트 키 이벤트 필요 비활성화
                'svelte-a11y/no-static-element-interactions': 'off', // 접근성 정적 요소 상호작용 금지 비활성화
                'svelte/a11y-no-noninteractive-element-interactions': 'off', // 접근성 비상호작용 요소 상호작용 금지 비활성화
                'svelte/a11y-no-noninteractive-element-to-interactive-role': 'off', // 접근성 비상호작용 요소 상호작용 역할 금지 비활성화
                'svelte/a11y-no-noninteractive-tabindex': 'off', // 접근성 비상호작용 tabindex 금지 비활성화
                'svelte/valid-compile': ['error', { 'ignoreWarnings': true }], // 유효한 컴파일 오류 설정
            }
        },
    ],
}
