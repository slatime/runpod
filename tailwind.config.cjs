/** @type {function(*): string} */
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';
const withAlphaValue = varName => `hsl(var(--${varName}))`;
export default {
    content: ['./src/**/*.{html,js,ts,svelte}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1496px',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                xs: '0rem',
                sm: '0rem',
            },
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1496px',
            },
        },
        extend: {

            colors: {
                primary: withAlphaValue('primary-color'),
                primaryHover: withAlphaValue('primary-color-hover'),
                secondary:withAlphaValue('secondary-color'),
                secondaryHover: withAlphaValue('secondary-color-hover'),
                brandBgDark: {
                    1:withAlphaValue('surface-dark'),
                    2:withAlphaValue('surface-dark-sub')
                },
                brandBg:withAlphaValue('surface-light'),
                Border:{
                    1:withAlphaValue('border1'),
                    2:withAlphaValue('border1'),
                },
                textDark: {
                    1: withAlphaValue('text-dark1'),
                    2: withAlphaValue('text-dark2'),
                    3: withAlphaValue('text-dark3'),
                },
                textLight: {
                    1: withAlphaValue('text-light1'),
                    2: withAlphaValue('text-light2'),
                    3: withAlphaValue('text-light3'),
                },
            },
        },
    },
    variants: {
        extend: {
            fill: ['hover', 'group-hover'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        plugin(function ({ addVariant, matchUtilities, theme }) {
            addVariant('hocus', ['&:hover', '&:focus']);
            // Square utility
            matchUtilities(
                {
                    square: value => ({
                        width: value,
                        height: value,
                    }),
                },
                { values: theme('spacing') },
            );
        }),
    ],
};
