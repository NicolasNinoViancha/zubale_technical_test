import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SafeViewComponentModels} from './safeView.models';
import {useStyles} from './safeView.styles';

const SafeView = ({children, style, ...rest}: SafeViewComponentModels.Props) => {
  const insets = useSafeAreaInsets();
  const styles = useStyles();
  return (
    <View
      {...rest}
      style={[
        style,
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}>
      {children}
    </View>
  );
};

export default SafeView;
