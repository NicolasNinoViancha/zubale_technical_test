import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '@shared/hooks';

export function useStyles() {
  const {colors, isDark} = useTheme();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          backgroundColor: colors.primaryText,
        },
        ctnLoading: {
          position: 'absolute',
          zIndex: 10,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.background,
        },
        ctnIndicator: {
          backgroundColor: colors.transparent,
        },
        image: {
          width: '100%',
          height: '100%',
        },
      }),
    [isDark],
  );
}
