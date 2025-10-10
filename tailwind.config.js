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
        'homebg': "url('/goodhope/src/assets/Images/hero-engineering.jpg')",
        'Aboutbg': "url('./src/assets/Images/cranesz.jpg')",
        'Lookforbg': "url('./src/assets/Images/Lookfor.jpg')",
        'Servwedobg': "url('./src/assets/Images/Services/wedo-sketch.jpg')",
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(-180deg)' },
          '101%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 8s linear infinite',
      }
    },
  },
  plugins: [],
}

