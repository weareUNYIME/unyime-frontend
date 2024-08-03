/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': "#002C15",
        'light-green': "#4CAF50",
        'neon-yellow': "#E5FF14",
        'light-cream': "rgba(242, 243, 233, 0.9)",
        'neutral-900': "#000000",
        'neutral-600': "#61656E",
        'neutral-000': "#FFFFFF",
      },
      fontFamily: {
        bicyclette: ["Bicyclette", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        title: "78px",
        'section-title': "48px",
        subtitle: "24px",
        regular: "16px",
        small: "14px",
        tiny: "12px",
      },
      backgroundImage: {
        "hero-image": "url('/public/assets/images/landing_happy-volunteers.png')"
      },
    },
  },
  plugins: [],
}

