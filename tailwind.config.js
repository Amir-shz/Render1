/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			iranSans: [
  				'var(--font-IranSans)'
  			]
  		},
  		colors: {
  			primary: '#E3AE7E'
  		},
  		keyframes: {
  			marquee: {
  				'0%': {
  					transform: 'translateX(80%)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
  			scaleZoom: {
  				'0%': {
  					transform: 'scale(100%)'
  				},
  				'50%': {
  					transform: 'scale(110%)'
  				},
  				'100%': {
  					transform: 'scale(100%)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			marquee: 'marquee 18s linear infinite',
  			scaleZoom: 'scaleZoom 6s linear infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
