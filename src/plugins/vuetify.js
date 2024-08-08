// plugins/vuetify.js

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';

// Crie temas personalizados
const lightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#3C52E5',
    secondary: '#03DAC6',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    botao: '#032E63',
    cardProjeto: '#475DF0',
    cardDestaque: '#FFFFFF',
  },
};

const darkTheme = {
  dark: true,
  colors: {
    background: '#121212',
    surface: '#121212',
    primary: '#3C52E5',
    secondary: '#03DAC6',
    error: '#CF6679',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    botao: '#032E63',
    cardProjeto: '#475DF0',
    cardDestaque: '#3C52E5',
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'light', // Define o tema padrão
  },
});
