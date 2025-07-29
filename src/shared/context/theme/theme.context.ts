import {createContext} from 'react';
import {THEME} from '@shared/theme';
import {ThemeContextModels} from './theme.models';

const ThemeContext = createContext<ThemeContextModels.ContextProps>({
  isDark: false,
  colors: {
    ...THEME.COLORS.light,
    ...THEME.COLORS.common,
  },
  setScheme: () => {},
});

export default ThemeContext;
