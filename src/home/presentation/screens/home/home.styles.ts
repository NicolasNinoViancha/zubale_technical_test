import {useMemo} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '@shared/hooks';

const {height} = Dimensions.get('window');

export function useStyles() {
  const {colors, isDark} = useTheme();
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          paddingTop: insets.top,
          backgroundColor: colors.background,
        },
        ctnEmpty: {
          height: height * 0.8,
          justifyContent: 'center',
          alignItems: 'center',
        },
        itemSeparator: {
          width: '100%',
          height: 10,
        },
      }),
    [isDark],
  );
}
