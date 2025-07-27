import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './main';

const NavigationTree = () => (
  <NavigationContainer>
    <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
    <MainNavigation />
  </NavigationContainer>
);
export default NavigationTree;
