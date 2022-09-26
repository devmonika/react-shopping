/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#20ea53",
                
        "secondary": "#00ccc1",
                
        "accent": "#141ea8",
                
        "neutral": "#20262D",
                
        "base-100": "#FFFFFF",
                
        "info": "#53ABEE",
                
        "success": "#0C5F42",
                
        "warning": "#F9D158",
                
        "error": "#F56866",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
