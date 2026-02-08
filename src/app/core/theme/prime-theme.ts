import Aura from '@primeuix/themes/aura';

const primaryScale = {
  50: '#eaf2f7',
  100: '#c9dbe8',
  200: '#a4c2d6',
  300: '#7aa4c0',
  400: '#4f7fa7',
  500: '#0b3c5d',
  600: '#093450',
  700: '#082a41',
  800: '#062033',
  900: '#051927',
  950: '#03121d',
};

const lightSurfaceScale = {
  0: '#ffffff',
  50: '#f3f6f8',
  100: '#e7edf1',
  200: '#d7e1e7',
  300: '#c3ced7',
  400: '#a6b4c1',
  500: '#8b9baa',
  600: '#6f8191',
  700: '#556572',
  800: '#3b4a55',
  900: '#24323a',
  950: '#141c22',
};

const darkSurfaceScale = {
  0: '#ffffff',
  50: '#dde6ec',
  100: '#bccad4',
  200: '#9aaebc',
  300: '#7b919f',
  400: '#5d7582',
  500: '#435a66',
  600: '#2f424d',
  700: '#22313a',
  800: '#18252d',
  900: '#111b21',
  950: '#0b1217',
};

export const syGestPrimeTheme = {
  ...Aura,
  primitive: {
    ...Aura.primitive,
    primary: primaryScale,
  },
  semantic: {
    ...Aura.semantic,
    primary: primaryScale,
    colorScheme: {
      light: {
        ...(Aura.semantic?.colorScheme?.light ?? {}),
        surface: lightSurfaceScale,
        primary: {
          color: '#0b3c5d',
          contrastColor: '#ffffff',
          hoverColor: '#0a3350',
          activeColor: '#082841',
        },
        highlight: {
          background: 'rgba(46, 196, 182, 0.18)',
          focusBackground: 'rgba(46, 196, 182, 0.28)',
          color: '#0b3c5d',
          focusColor: '#0b3c5d',
        },
      },
      dark: {
        ...(Aura.semantic?.colorScheme?.dark ?? {}),
        surface: darkSurfaceScale,
        primary: {
          color: '#8fbce3',
          contrastColor: '#0b1217',
          hoverColor: '#a3cbe8',
          activeColor: '#b7daed',
        },
        highlight: {
          background: 'rgba(46, 196, 182, 0.2)',
          focusBackground: 'rgba(46, 196, 182, 0.3)',
          color: '#e2e8f0',
          focusColor: '#ffffff',
        },
      },
    },
  },
};
