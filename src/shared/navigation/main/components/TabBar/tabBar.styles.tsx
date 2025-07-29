import {useMemo} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '@shared/hooks';

const {width} = Dimensions.get('window');

export function useStyles() {
  const insets = useSafeAreaInsets();
  const {colors, isDark} = useTheme();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: colors.background,
          paddingBottom: insets.bottom,
          borderTopWidth: 0.8,
          borderColor: colors.border,
        },
        button: {
          flex: 1,
          height: width * 0.12,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }),
    [isDark],
  );
}
