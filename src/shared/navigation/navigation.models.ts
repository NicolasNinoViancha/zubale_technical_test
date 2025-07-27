/**
 * @* -- global declaration --
 * @* The RootParamList interface lets React Navigation know about
 * @* the params accepted by your root navigator.
 * @* Here I extend the type AuthStackParamList because that's the
 * @* type of params for me stack navigator at the root.
 * @* The name of this type isn't important.
 * @* Specifying this type is important if you heavily use useNavigation,
 * @* Link etc. in your app since it'll ensure type-safety. It will also
 * @* make sure that you have correct nesting on the linking prop.
 */
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export namespace NavigationModels {
  export enum MAIN_ROUTES_NAMES {
    HOME = 'Home',
    SEARCH = 'Search',
    MARKET_PLACE = 'Marketplace',
    REELS = 'Reels',
    PROFILE = 'Profile',
  }

  export type MainStackParamList = {
    [MAIN_ROUTES_NAMES.HOME]: undefined;
    [MAIN_ROUTES_NAMES.SEARCH]: undefined;
    [MAIN_ROUTES_NAMES.MARKET_PLACE]: undefined;
    [MAIN_ROUTES_NAMES.REELS]: undefined;
    [MAIN_ROUTES_NAMES.PROFILE]: undefined;
  };

  export type RootBottomTapParamList = MainStackParamList;

  export type RootBottomTapScreenProps<T extends keyof RootBottomTapParamList> =
    BottomTabScreenProps<RootBottomTapParamList, T>;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigationModels.RootBottomTapParamList {}
  }
}
