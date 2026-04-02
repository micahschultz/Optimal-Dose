/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#1B1B1B',
          card: '#242424',
          accent: '#00BF63',
          'accent-dim': 'rgba(0, 191, 99, 0.15)',
          'accent-glow': 'rgba(0, 191, 99, 0.4)',
          text: '#E8E8E8',
          'text-muted': '#888888',
          border: 'rgba(255, 255, 255, 0.06)',
        },
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
        serif: ['"Times New Roman"', 'Times', 'Georgia', 'serif'],
        mono: ['"Space Mono"', '"IBM Plex Mono"', 'monospace'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        '9xl': ['8rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
      },
      backgroundImage: {
        noise: "url('/images/noise.svg')",
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
