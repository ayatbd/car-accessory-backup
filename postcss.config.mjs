const config = {
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#0A0A0A",
        softGray: "#F3F4F6",
        brand: {
          light: "#93C5FD",
          DEFAULT: "#3B82F6",
          dark: "#1E3A8A",
        },
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
