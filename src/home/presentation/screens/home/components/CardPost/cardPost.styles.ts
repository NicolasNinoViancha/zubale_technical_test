import {useMemo} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {useTheme} from '@shared/hooks';
import {THEME} from '@shared/theme';

const {width} = Dimensions.get('window');

const _SIZE_HEADER_POST = width * 0.12;
const _SIZE_CONTENT_POST = width * 1.2;
const _SIZE_AVATAR_POST = width * 0.08;
const _SIZE_AVATAR_USER = width * 0.06;

export function useStyles() {
  const {colors, isDark} = useTheme();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: '100%',
          backgroundColor: colors.background,
        },
        ctnHeader: {
          flexDirection: 'row',
          alignItems: 'center',
          height: _SIZE_HEADER_POST,
          paddingHorizontal: 6,
        },
        ctnAvatarAuthor: {
          width: _SIZE_AVATAR_POST,
          height: _SIZE_AVATAR_POST,
          borderRadius: _SIZE_AVATAR_POST,
          overflow: 'hidden',
        },
        ctnImage: {
          width: '100%',
          height: '100%',
        },
        ctnDetailsAuthor: {
          flex: 1,
          height: '100%',
          justifyContent: 'center',
          marginHorizontal: 10,
        },
        nameAuthor: {
          fontSize: THEME.FONTSIZES[14],
          fontWeight: 'bold',
          lineHeight: THEME.FONTSIZES[16],
        },
        locationAuthor: {
          fontSize: THEME.FONTSIZES[12],
          lineHeight: THEME.FONTSIZES[14],
        },
        ctnMedia: {
          width: '100%',
          height: _SIZE_CONTENT_POST,
          overflow: 'hidden',
        },
        ctnFooter: {
          width: '100%',
          paddingHorizontal: 10,
          paddingTop: 10,
        },
        ctnActions: {
          width: '100%',
          flexDirection: 'row',
          marginBottom: 10,
        },
        ctnMainAction: {
          marginRight: 12,
        },
        ctnSavedAction: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        },
        likes: {
          fontSize: THEME.FONTSIZES[14],
          fontWeight: 'bold',
          lineHeight: THEME.FONTSIZES[16],
          marginBottom: 10,
        },
        ctnDescription: {
          marginBottom: 10,
        },
        description: {
          fontSize: THEME.FONTSIZES[14],
          fontWeight: 'bold',
          lineHeight: THEME.FONTSIZES[16],
        },
        descriptionContent: {
          fontSize: THEME.FONTSIZES[14],
          lineHeight: THEME.FONTSIZES[16],
        },
        comments: {
          fontSize: THEME.FONTSIZES[14],
          lineHeight: THEME.FONTSIZES[16],
          marginBottom: 10,
          color: colors.secondaryText,
        },
        ctnInputComment: {
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        },
        ctnUserAvatar: {
          width: _SIZE_AVATAR_USER,
          height: _SIZE_AVATAR_USER,
          borderRadius: _SIZE_AVATAR_USER,
          overflow: 'hidden',
        },
        placeholder: {
          marginLeft: 5,
          fontSize: THEME.FONTSIZES[14],
          lineHeight: THEME.FONTSIZES[16],
          color: colors.secondaryText,
        },
      }),
    [isDark],
  );
}
