/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aside-white': 'white',
        'heading-color': '#1D1D1D',
        'text-color': '#2D3748',
        'form-link-color': '#007AFF',
      },
    },
  },
  plugins: [],
};
