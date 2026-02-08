/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        surface: 'var(--color-surface)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(11, 60, 93, 0.12)',
        glow: '0 0 0 1px rgba(46, 196, 182, 0.25), 0 20px 40px rgba(11, 60, 93, 0.18)'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
        body: ['"Manrope"', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};
