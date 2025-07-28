import {View, TouchableOpacity} from 'react-native';
import {Icon} from '@shared/components';
import {useTheme} from '@shared/hooks';
import {TabBarComponentModels} from './tabBar.models';
import {NavigationModels} from '@shared/navigation/navigation.models';
import {useStyles} from './tabBar.styles';
import {LOOKUP_TABLE_ICON} from './tabBar.constants';

const TabBar = ({state, navigation}: TabBarComponentModels.Props) => {
  const {colors} = useTheme();
  const styles = useStyles();
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) navigation.navigate(route.name, route.params);
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            key={`bottom_tap_${route.name}`}
            activeOpacity={0.9}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.button}>
            <Icon
              name={LOOKUP_TABLE_ICON[route.name as NavigationModels.MAIN_ROUTES_NAMES]}
              size={20}
              color={isFocused ? colors.primaryText : colors.secondaryText}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
