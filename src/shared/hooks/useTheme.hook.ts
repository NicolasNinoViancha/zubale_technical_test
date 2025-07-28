import {useContext} from 'react';
import {ThemeContext} from '@shared/context/theme';
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useThme must be used within a ThemeProvider');
  return context;
};
export default useTheme;
