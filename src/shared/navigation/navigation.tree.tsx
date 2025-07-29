import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './main';
import {useTheme} from '@shared/hooks';

const NavigationTree = () => {
  const {isDark, colors} = useTheme();
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <MainNavigation />
    </NavigationContainer>
  );
};
export default NavigationTree;
