import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const styles = {
  global: props => ({
    body: {
      color: mode('#c4c0b9', 'whiteAlpha.900')(props),
      bg: mode('gray.200', '#2A2B46')(props),
    },
  }),
};

const components = {
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: props => ({
      dialog: {
        bg: mode('white', '#141214')(props),
      },
    }),
  },
};

const theme = extendTheme({
  components,
  styles,
});

export default theme;