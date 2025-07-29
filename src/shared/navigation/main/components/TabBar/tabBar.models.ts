import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {IconComponentModels} from '@shared/components/Icon/icon.models';
import {NavigationModels} from '@shared/navigation/navigation.models';

export namespace TabBarComponentModels {
  export interface Props extends BottomTabBarProps {}

  export type LookupTableIcon = Record<
    NavigationModels.MAIN_ROUTES_NAMES,
    IconComponentModels.IconName
  >;
}
