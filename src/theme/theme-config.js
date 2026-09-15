// ----------------------------------------------------------------------

export const themeConfig = {
  /** **************************************
   * Base
   *************************************** */
  defaultMode: 'light',
  modeStorageKey: 'theme-mode',
  direction: 'ltr',
  classesPrefix: 'minimal',
  /** **************************************
   * Css variables
   *************************************** */
  cssVariables: {
    cssVarPrefix: '',
    colorSchemeSelector: 'data-color-scheme',
  },
  /** **************************************
   * Typography
   *************************************** */
  fontFamily: {
    primary: 'Public Sans Variable',
    secondary: 'Barlow',
  },
  /** **************************************
   * Palette
   *************************************** */
  /**
   * Marham brand palette, from the mobile app's design tokens (`mobile-assets/palette.ts`)
   * as used on the Marham website, so web and app agree.
   *
   * `main` values are the canonical `brandPrimary` (navy) / `brandSecondary` (teal); the
   * lighter and darker steps come from that file's own 50–900 ramps, so nothing here is an
   * invented shade. The logo is navy with a teal M — there is no orange in the brand.
   */
  palette: {
    primary: {
      // palette.primary50 / primary300 / brandPrimary / primary600 / primary800
      lighter: '#E6EDF1',
      light: '#6694AA',
      main: '#104D71',
      dark: '#003E5A',
      darker: '#001F2D',
      contrastText: '#FFFFFF',
    },
    secondary: {
      // palette.secondary100 / secondary300 / brandSecondary / secondary700 / secondary900
      lighter: '#E3F5F7',
      light: '#AAE0E6',
      main: '#73CDD6',
      dark: '#349EAA',
      darker: '#326065',
      /**
       * Dark text, matching the app's `secondaryForeground: gray900`. The brand
       * teal is light — white on it measures about 1.9:1, so a "Book now" button
       * in secondary would have had an effectively unreadable label.
       */
      contrastText: '#111827',
    },
    info: {
      // palette.blue50 / blue500
      lighter: '#E6F2FB',
      light: '#4DA5E4',
      main: '#0079D6',
      dark: '#005CA3',
      darker: '#003D6B',
      contrastText: '#FFFFFF',
    },
    success: {
      // palette.success50 / success300 / success500 / success700
      lighter: '#E9F5ED',
      light: '#78C292',
      main: '#1E9A49',
      dark: '#167038',
      darker: '#125C2C',
      contrastText: '#FFFFFF',
    },
    warning: {
      // palette.warning50 / warning100 / warning500 / warning700
      lighter: '#FFF3E6',
      light: '#FFD9AC',
      main: '#FF8A00',
      dark: '#C46A00',
      darker: '#995300',
      contrastText: '#111827',
    },
    error: {
      // palette.error50 / error300 / error500 / error700
      lighter: '#FBE9EB',
      light: '#E67B85',
      main: '#D62344',
      dark: '#A81A34',
      darker: '#80151F',
      contrastText: '#FFFFFF',
    },
    /**
     * The app's neutral ramp, replacing the kit's blue-tinted greys.
     *
     * `palette.js` maps light-mode text to grey[800] / grey[600] / grey[500], which lands on the
     * app's `text` (gray900 #111827), `textSecondary` (gray600 #4B5563) and a legible muted step.
     *
     * One deliberate departure: the app's `textMuted` is gray400 (#9CA3AF), which is 2.6:1 on
     * white and fails WCAG AA. Nothing maps to it; the muted role uses gray500 (#6B7280, 5.0:1).
     */
    grey: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#111827',
      900: '#030712',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
  },
};
