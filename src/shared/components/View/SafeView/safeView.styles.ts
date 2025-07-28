import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '@shared/hooks';

export function useStyles() {
  const {colors, isDark} = useTheme();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: colors.background,
        },
      }),
    [isDark],
  );
}
