import {PropsWithChildren} from 'react';
import {THEME} from '@shared/theme';

export namespace ThemeContextModels {
  type Color =
    | keyof typeof THEME.COLORS.light
    | keyof typeof THEME.COLORS.dark
    | keyof typeof THEME.COLORS.common;
  export type ContextProps = {
    isDark: boolean;
    colors: {
      [key in Color]: string;
    };
    setScheme: () => void;
  };
  export type ProviderProps = PropsWithChildren;
  export enum THEME_SETTINGS {
    DARK = 'dark',
    LIGHT = 'light',
    NO_PREFERENCE = 'no-preference',
  }
}
