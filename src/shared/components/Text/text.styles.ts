import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '@shared/hooks';

export function useStyles() {
  const {colors, isDark} = useTheme();
  return useMemo(
    () =>
      StyleSheet.create({
        primary: {
          color: colors.primaryText,
        },
        secondary: {
          color: colors.secondaryText,
        },
      }),
    [isDark],
  );
}
