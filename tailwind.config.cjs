// tailwind.config.cjs
module.exports = {
	darkMode: 'class',
	content: [
	  "./src/**/*.{astro,js,jsx,ts,tsx}",
	  "./public/**/*.html"
	],
	theme: {
	  extend: {
		fontFamily: {
		  sans: ['Inter', 'sans-serif'], // Fuente para texto normal
		  code: ['Fira Code', 'monospace'] // Fuente para bloques de código
		},
		colors: {
			primaryBackground: '#421B56',     // Fondo principal en negro
			secondaryBackground: '#2e2e2e',   // Fondo secundario en gris oscuro
			primaryColor: '#9A4FDA',          // Malva vibrante como color principal
			secondaryColor: '#d8b4e2',        // Lavanda suave como color secundario
			primaryText: '#ffffff',           // Texto en blanco para buen contraste
			accent: '#8a2be2',       // Color secundario complementario
			dark: {
				primary: '#2D1B3D',    // Morado oscuro para fondos en modo oscuro
				secondary: '#1F1F1F',  // Gris muy oscuro
				accent: '#6B21A8',     // Morado oscuro para acentos
				text: '#E5E7EB',       // Texto claro para modo oscuro
				surface: '#3D2952'     // Color para cards y elementos elevados
			}
		},
		textColor: {
			primaryText: '#000000'           // Texto principal en negro
		}
		
	  }
	},
	plugins: []
  }
  