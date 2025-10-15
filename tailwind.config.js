/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
  			sma: {
  				max: '429px'
  			},
  			mda: {
  				min: '430px',
  				max: '767px'
  			},
  			mdaa: {
  				min: '768px',
  				max: '820px'
  			}
  		},
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
        Varela: ["Varela Round", "sans-serif"],
        Playfair: ["Playfair Display", "serif"],
        Sora: ["Sora", "sans-serif"],
        Azeret: ["Azeret Mono", "monospace"],
        Anek: ["Anek Telugu", "sans-serif"],
        Manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        'homebg': "url('/assets/Images/hero-engineering.jpg')",
        'Aboutbg': "url('/assets/Images/cranesz.jpg')",
        'Lookforbg': "url('/assets/Images/Lookfor.jpg')",
        'Servwedobg': "url('/assets/Images/Services/wedo-sketch.jpg')",
        'ProjectBg': "url('/assets/Images/projectBg.jpg')",
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(-180deg)' },
          '101%': { transform: 'rotate(3deg)' },
        },
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        wiggle: 'wiggle 8s linear infinite',
        gradientMove: "gradientMove 10s ease infinite",
      },
      
    },
  },
  plugins: [],
}

