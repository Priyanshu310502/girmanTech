/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'], // Enables dark mode using the 'class' strategy
	content: [
		'./index.html', // Ensure your HTML files are included
		'./src/**/*.{html,js,jsx,ts,tsx}', // Ensure Tailwind scans all relevant file extensions
	],
	// theme: {
	//   extend: {
	// 	borderRadius: {
	// 	  lg: 'var(--radius)', // Custom border radius variable
	// 	  md: 'calc(var(--radius) - 2px)', // Custom border radius with calculation
	// 	  sm: 'calc(var(--radius) - 4px)', // Custom border radius with calculation
	// 	},
	// 	colors: {
	// 	  background: 'hsl(var(--background))', // Custom background color variable
	// 	  foreground: 'hsl(var(--foreground))', // Custom foreground color variable
	// 	  card: {
	// 		DEFAULT: 'hsl(var(--card))', // Custom card color
	// 		foreground: 'hsl(var(--card-foreground))', // Custom card foreground color
	// 	  },
	// 	  popover: {
	// 		DEFAULT: 'hsl(var(--popover))', // Custom popover color
	// 		foreground: 'hsl(var(--popover-foreground))', // Custom popover foreground color
	// 	  },
	// 	  primary: {
	// 		DEFAULT: 'hsl(var(--primary))', // Custom primary color
	// 		foreground: 'hsl(var(--primary-foreground))', // Custom primary foreground color
	// 	  },
	// 	  secondary: {
	// 		DEFAULT: 'hsl(var(--secondary))', // Custom secondary color
	// 		foreground: 'hsl(var(--secondary-foreground))', // Custom secondary foreground color
	// 	  },
	// 	  muted: {
	// 		DEFAULT: 'hsl(var(--muted))', // Custom muted color
	// 		foreground: 'hsl(var(--muted-foreground))', // Custom muted foreground color
	// 	  },
	// 	  accent: {
	// 		DEFAULT: 'hsl(var(--accent))', // Custom accent color
	// 		foreground: 'hsl(var(--accent-foreground))', // Custom accent foreground color
	// 	  },
	// 	  destructive: {
	// 		DEFAULT: 'hsl(var(--destructive))', // Custom destructive color
	// 		foreground: 'hsl(var(--destructive-foreground))', // Custom destructive foreground color
	// 	  },
	// 	  border: 'hsl(var(--border))', // Custom border color
	// 	  input: 'hsl(var(--input))', // Custom input field color
	// 	  ring: 'hsl(var(--ring))', // Custom ring color
	// 	  chart: {
	// 		'1': 'hsl(var(--chart-1))', // Custom chart color 1
	// 		'2': 'hsl(var(--chart-2))', // Custom chart color 2
	// 		'3': 'hsl(var(--chart-3))', // Custom chart color 3
	// 		'4': 'hsl(var(--chart-4))', // Custom chart color 4
	// 		'5': 'hsl(var(--chart-5))', // Custom chart color 5
	// 	  },
	// 	},
	//   },
	// },

	theme: {
    	extend: {
    		colors: {
    			white: '#FFFFFF',
    			lightBlue: '#B1CBFF',
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		},
    		backgroundImage: {
    			'custom-gradient': 'linear-gradient(180deg, #FFFFFF 31%, #B1CBFF 100%)'
    		},
    		keyframes: {
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
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [
		require('tailwindcss-animate'), // Plugin for animation support
	],
}
