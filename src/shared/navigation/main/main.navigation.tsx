import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '@home/presentation/screens';
import {SearchScreen} from '@search/presentation/screens';
import {MarketplaceScreen} from '@marketplace/presentation/screens';
import {ReelsScreen} from '@reels/presentation/screens';
import {ProfileScreen} from '@profile/presentation/screens';
import {NavigationModels} from '../navigation.models';
import {SCREEN_OPTIONS} from './constants';

const BottomTap = createBottomTabNavigator<NavigationModels.MainStackParamList>();

const MainNavigation = () => (
  <BottomTap.Navigator screenOptions={SCREEN_OPTIONS}>
    <BottomTap.Screen name={NavigationModels.MAIN_ROUTES_NAMES.HOME} component={HomeScreen} />
    <BottomTap.Screen name={NavigationModels.MAIN_ROUTES_NAMES.SEARCH} component={SearchScreen} />
    <BottomTap.Screen
      name={NavigationModels.MAIN_ROUTES_NAMES.MARKET_PLACE}
      component={MarketplaceScreen}
    />
    <BottomTap.Screen name={NavigationModels.MAIN_ROUTES_NAMES.REELS} component={ReelsScreen} />
    <BottomTap.Screen name={NavigationModels.MAIN_ROUTES_NAMES.PROFILE} component={ProfileScreen} />
  </BottomTap.Navigator>
);

export default MainNavigation;
