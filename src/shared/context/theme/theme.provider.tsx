import {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import ThemeContext from './theme.context';
import {ThemeContextModels} from './theme.models';
import {THEME} from '@shared/theme';

const ThemeProvider = ({children}: ThemeContextModels.ProviderProps) => {
  const colorScheme = useColorScheme(); //dark | light | no-preference
  const [isDark, setIsDark] = useState<boolean>(
    colorScheme === ThemeContextModels.THEME_SETTINGS.DARK,
  );
  useEffect(() => {
    setIsDark(colorScheme === ThemeContextModels.THEME_SETTINGS.DARK);
  }, [colorScheme]);
  const defaultTheme: ThemeContextModels.ContextProps = {
    isDark,
    colors: isDark
      ? {
          ...THEME.COLORS.dark,
          ...THEME.COLORS.common,
        }
      : {
          ...THEME.COLORS.light,
          ...THEME.COLORS.common,
        },
    setScheme: () => setIsDark(prev => !prev),
  };
  return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
