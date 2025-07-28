import {PixelRatio} from 'react-native';

const fontScale = PixelRatio.getFontScale();

const getFontSize = (size: number) => size / fontScale;

export const FONTSIZES = {
  10: getFontSize(10),
  11: getFontSize(11),
  12: getFontSize(12),
  13: getFontSize(13),
  14: getFontSize(14),
  15: getFontSize(15),
  16: getFontSize(16),
  17: getFontSize(17),
  18: getFontSize(18),
  19: getFontSize(19),
  20: getFontSize(20),
  21: getFontSize(21),
  22: getFontSize(22),
  23: getFontSize(23),
  24: getFontSize(24),
  25: getFontSize(25),
  26: getFontSize(26),
  27: getFontSize(27),
  28: getFontSize(28),
  29: getFontSize(29),
  30: getFontSize(30),
  31: getFontSize(31),
  32: getFontSize(32),
  33: getFontSize(33),
  34: getFontSize(34),
  35: getFontSize(35),
  36: getFontSize(36),
};
