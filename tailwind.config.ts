import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './redux/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    // Temporarily disabled to debug
    // require('daisyui'),
  ],
  // daisyui: {
  //   themes: false,
  // },
};

export default config;
