# sveltekit 기본 설정 템플릿

## 구성

- svelte 4.2.7
- typescript
- node v.18.18.2
- npm v9.8.1

## 실행

```bash
npm install
```

## 빌드

```bash
# adapter node 설정 필요.
npm run build 
``` 

## 폴더구조

```bash
svelte-template/
├── lib/
├── routes/
│ ├── +layout.svelte
│ ├── +page.svelte
├── src/
│ ├── common/
│ │ └── components/
│ ├── lib/
│ │ ├── store/
│ │ ├── type/
│ │ └── util/
│ └── main.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── .eslintrc.js
├── vite.config.js
└── README.md
```

## 라이브러리

### package.json

프로젝트의 주요 스크립트와 의존성을 관리하는 파일입니다.

```bash
{
  "name": "svelte-template",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview",
    "check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
    "check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch"
  },
  "devDependencies": {
    "@sveltejs/adapter-auto": "^3.2.2",
    // SvelteKit 어댑터, 환경에 맞게 자동으로 선택
    "@sveltejs/adapter-node": "^5.2.0",
    // SvelteKit 어댑터, Node.js 서버용
    "@sveltejs/kit": "^2.0.0",
    // SvelteKit, Svelte 기반 풀스택 프레임워크
    "@sveltejs/vite-plugin-svelte": "^3.0.0",
    // Vite 플러그인, Svelte 지원
    "@tailwindcss/aspect-ratio": "^0.4.2",
    // Tailwind CSS 플러그인, 종횡비 유틸리티
    "@tailwindcss/forms": "^0.5.7",
    // Tailwind CSS 플러그인, 폼 스타일링
    "@types/node": "^20.14.12",
    // Node.js 타입 정의, TypeScript 사용 시 필요
    "@typescript-eslint/eslint-plugin": "^7.17.0",
    // ESLint 플러그인, TypeScript 코드 린팅
    "@typescript-eslint/parser": "^7.17.0",
    // ESLint 파서, TypeScript 코드 린팅 지원
    "autoprefixer": "^10.4.19",
    // PostCSS 플러그인, CSS 자동 접두사 추가
    "eslint": "^8.57.0",
    // ESLint, 코드 품질과 스타일 점검 도구
    "eslint-config-prettier": "^9.1.0",
    // ESLint 설정, Prettier와 충돌 방지
    "eslint-import-resolver-typescript": "^3.6.1",
    // ESLint 플러그인, TypeScript 모듈 해석 지원
    "eslint-plugin-import-no-duplicates-prefix-resolved-path": "^2.0.0",
    // ESLint 플러그인, 경로가 해결된 중복된 가져오기 방지
    "eslint-plugin-prettier": "^5.2.1",
    // ESLint 플러그인, Prettier 코드 포맷팅 지원
    "eslint-plugin-svelte": "^2.43.0",
    // ESLint 플러그인, Svelte 코드 린팅 지원
    "eslint-plugin-tailwindcss": "^3.17.4",
    // ESLint 플러그인, Tailwind CSS 클래스 린팅 지원
    "postcss": "^8.4.40",
    // PostCSS, CSS 변환 도구
    "prettier-plugin-svelte": "^3.2.6",
    // Prettier 플러그인, Svelte 코드 포맷팅 지원
    "prettier-plugin-tailwindcss": "^0.6.5",
    // Prettier 플러그인, Tailwind CSS 클래스 포맷팅 지원
    "sass": "^1.77.8",
    // Sass, CSS 전처리기
    "svelte": "^4.2.7",
    // Svelte, 웹 애플리케이션 프레임워크
    "svelte-check": "^3.6.0",
    // Svelte 코드 점검 도구, 타입 검사 및 린트
    "svelte-eslint-parser": "^0.41.0",
    // Svelte 코드 파서, ESLint에서 Svelte 파일 지원
    "svelte-preprocess": "^6.0.2",
    // Svelte 전처리기, 다양한 언어 및 기능 지원
    "tailwindcss": "^3.4.6",
    // Tailwind CSS, 유틸리티 퍼스트 CSS 프레임워크
    "tslib": "^2.6.3",
    // TypeScript 런타임 라이브러리
    "typescript": "^5.0.0",
    // TypeScript, 정적 타입을 지원하는 JavaScript
    "vite": "^5.0.3"
    // Vite, 빠른 웹 개발 빌드 도구
  },
  "dependencies": {
    "axios": "^1.7.2"
    // Axios, HTTP 클라이언트 라이브러리
  },
  "type": "module"
}
```

---

## 컨벤션

- ### ESLint Configuration(`.eslintrc.cjs`)

```javascript
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
        'svelte/valid-compile': ['error', {'ignoreWarnings': false}], // 유효한 컴파일 오류 설정
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
                'svelte/valid-compile': ['error', {'ignoreWarnings': true}], // 유효한 컴파일 오류 설정
            }
        },
    ],
}
```

- ### Prettier Configuration(`.prettierrc`)
    - **arrowParens**: `avoid` - 화살표 함수에서 매개변수가 하나일 때 괄호를 생략
    - **bracketSpacing**: `true` - 객체 리터럴에서 중괄호 사이에 공백 삽입
    - **endOfLine**: `auto` - 파일의 끝줄을 자동으로 감지하여 설정
    - **htmlWhitespaceSensitivity**: `css` - HTML의 공백 감도를 CSS 방식으로 처리
    - **jsxBracketSameLine**: `true` - JSX의 마지막 `>`를 다음 줄이 아닌 같은 줄에 배치
    - **jsxSingleQuote**: `true` - JSX에서 싱글 쿼트(') 사용
    - **printWidth**: `100` - 코드 한 줄의 최대 길이를 100자로 설정
    - **proseWrap**: `preserve` - 마크다운 텍스트의 개행 방식 유지
    - **quoteProps**: `as-needed` - 객체의 속성에 필요한 경우만 따옴표 사용
    - **semi**: `true` - 문장의 끝에 세미콜론(;) 추가
    - **singleQuote**: `true` - 문자열에 싱글 쿼트(') 사용
    - **tabWidth**: `2` - 탭을 공백 2칸으로 설정
    - **trailingComma**: `all` - 여러 줄을 사용하는 구문에서 후행 콤마 추가
    - **useTabs**: `false` - 탭 대신 공백 사용
    - **vueIndentScriptAndStyle**: `true` - Vue 파일의 `<script>`와 `<style>` 태그 내부를 들여쓰기
    - **rangeStart**: `0` - 포맷팅할 파일의 시작 위치 (0이면 전체 파일 포맷팅)
    - **requirePragma**: `false` - 파일 상단에 주석을 추가해야만 포맷팅
    - **insertPragma**: `false` - 파일 상단에 Prettier 주석 삽입
    - **svelteSortOrder**: `options-styles-scripts-markup` - Svelte 파일 내의 정렬 순서
    - **svelteStrictMode**: `true` - Svelte의 엄격 모드 활성화
    - **svelteBracketNewLine**: `false` - Svelte 파일의 태그 닫기를 다음 줄에 하지 않음
    - **svelteAllowShorthand**: `false` - Svelte의 단축 속성 사용 금지
    - **svelteIndentScriptAndStyle**: `false` - Svelte 파일의 `<script>`와 `<style>` 태그 내부 들여쓰기 금지
    - **plugins**: `["prettier-plugin-svelte", "prettier-plugin-tailwindcss"]` - Svelte와 Tailwind CSS를 위한 Prettier 플러그인
    - **pluginSearchDirs**: `["."]` - 플러그인 검색 디렉토리 설정
    - **overrides**
        - **files**: `*.svelte` - Svelte 파일에 대해 Svelte 파서 사용
        - **files**: `*.json` - JSON 파일의 최대 줄 길이를 200자로 설정
    - **importOrder**
        - `^@components/(.*)$` - @components로 시작하는 경로 우선 임포트
        - `^@lib/(.*)$` - @lib로 시작하는 경로 우선 임포트
        - `^@types/(.*)$` - @types로 시작하는 경로 우선 임포트
        - `^@pages/(.*)$` - @pages로 시작하는 경로 우선 임포트
        - `^@services/(.*)$` - @services로 시작하는 경로 우선 임포트
        - `^@styles/(.*)$` - @styles로 시작하는 경로 우선 임포트
        - `^[./]` - 상대 경로 임포트
    - **importOrderSeparation**: `true` - 각 임포트 그룹 사이에 빈 줄 추가
    - **importOrderSortSpecifiers**: `true` - 임포트 명을 알파벳 순으로 정렬
    - **parser**: `typescript` - 기본 파서를 TypeScript로 설정

### tailwind

> Tailwind CSS를 사용하여 스타일링을 관리합니다.
> 프로젝트 별로 커스터마이징 하여 사용합니다.

### tailwind.config.cjs

```javascript
/** @type {function(*): string} */
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

const withAlphaValue = varName => `hsl(var(--${varName}))`;

export default {
    content: ['./src/**/*.{html,js,ts,svelte}'], // Tailwind CSS가 스타일을 적용할 파일 경로
    theme: {
        screens: {
            sm: '480px', // 작은 화면의 최소 너비
            md: '768px', // 중간 화면의 최소 너비
            lg: '976px', // 큰 화면의 최소 너비
            xl: '1496px', // 매우 큰 화면의 최소 너비
        },
        container: {
            center: true, // 컨테이너를 중앙에 정렬
            padding: {
                DEFAULT: '1rem', // 기본 패딩 설정
                xs: '0rem', // xs 스크린에서의 패딩 설정
                sm: '0rem', // sm 스크린에서의 패딩 설정
            },
            screens: {
                sm: '480px', // 작은 화면의 최소 너비
                md: '768px', // 중간 화면의 최소 너비
                lg: '976px', // 큰 화면의 최소 너비
                xl: '1496px', // 매우 큰 화면의 최소 너비
            },
        },
        extend: {
            colors: {
                primary: withAlphaValue('primary-color'), // primary 색상 설정
                primaryHover: withAlphaValue('primary-color-hover'), // primary 색상의 hover 상태 설정
                secondary: withAlphaValue('secondary-color'), // secondary 색상 설정
                secondaryHover: withAlphaValue('secondary-color-hover'), // secondary 색상의 hover 상태 설정
                brandBgDark: {
                    1: withAlphaValue('surface-dark'), // 어두운 배경 1 설정
                    2: withAlphaValue('surface-dark-sub'), // 어두운 배경 2 설정
                },
                brandBg: withAlphaValue('surface-light'), // 밝은 배경 설정
                Border: {
                    1: withAlphaValue('border1'), // 경계선 1 설정
                    2: withAlphaValue('border1'), // 경계선 2 설정
                },
                textDark: {
                    1: withAlphaValue('text-dark1'), // 어두운 텍스트 1 설정
                    2: withAlphaValue('text-dark2'), // 어두운 텍스트 2 설정
                    3: withAlphaValue('text-dark3'), // 어두운 텍스트 3 설정
                },
                textLight: {
                    1: withAlphaValue('text-light1'), // 밝은 텍스트 1 설정
                    2: withAlphaValue('text-light2'), // 밝은 텍스트 2 설정
                    3: withAlphaValue('text-light3'), // 밝은 텍스트 3 설정
                },
            },
        },
    },
    variants: {
        extend: {
            fill: ['hover', 'group-hover'], // hover 및 group-hover 상태에서 fill 유틸리티 확장
        },
    },
    plugins: [
        require('@tailwindcss/forms'), // Tailwind CSS 폼 플러그인
        require('@tailwindcss/aspect-ratio'), // Tailwind CSS 종횡비 플러그인
        plugin(function ({addVariant, matchUtilities, theme}) {
            addVariant('hocus', ['&:hover', '&:focus']); // hover 및 focus 상태를 위한 커스텀 variant 추가
            // Square utility
            matchUtilities(
                {
                    square: value => ({
                        width: value,
                        height: value,
                    }),
                },
                {values: theme('spacing')}, // spacing 테마 값을 사용하여 square 유틸리티 추가
            );
        }),
    ],
};
```
