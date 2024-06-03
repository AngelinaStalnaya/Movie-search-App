import { colorsTuple, createTheme } from "@mantine/core";


const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  primaryColor: 'purple_500_main',
  cursorType: 'pointer',
  headings: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    textWrap: 'nowrap',
    sizes: {
      h1: {
        fontSize: '50px',
        fontWeight: '600',
      },
      h2: {
        fontSize: '45px',
      }
    }
  },
  colors: {
    my_white: colorsTuple('#ffffff'),
    grey_100: colorsTuple('#f5f5f6'),
    grey_200: colorsTuple('#eaebed'),
    grey_300: colorsTuple('#d5d6dc'),
    grey_500: colorsTuple('#acadb9'),
    grey_600: colorsTuple('#7b7c88'),
    my_black: colorsTuple('#232134'),
    purple_100: colorsTuple('#f2ecfa'),
    purple_200: colorsTuple('#e5d5fa'),
    purple_300: colorsTuple('#d1b4f8'),
    purple_400: colorsTuple('#bd93f7'),
    purple_500_main: colorsTuple('#9854f6'),
    purple_600: colorsTuple('#541f9d'),
    my_yellow: colorsTuple('#fab005'),
  }
});

export default theme;
