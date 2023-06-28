/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#2E53A3",
        customBlue2: "#2D509E",
        customBlue3: "#001853",
      },
      boxShadow: {
        custom1: "0px 4px 35px 0px rgba(0, 0, 0, 0.39)",
        custom2: "4px 4px 22px 0px #709DDA",
        custom3: "0px 0px 44px 0px rgba(11, 27, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
