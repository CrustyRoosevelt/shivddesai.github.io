import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest': '#2F5233',
        'forest-dark': '#1F3622',
        'light': '#8FA98F',
        'pale': '#F5F7F5'
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backgroundImage: {
        'name-gradient': 'linear-gradient(135deg, #2F5233 0%, #1F3622 100%)',
      }
    },
  },
  plugins: [],
}

export default config 