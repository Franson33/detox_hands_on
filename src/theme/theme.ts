import { Platform } from 'react-native';

import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';

import { colors, shadowSizes, spacing } from '@styles';

import { Theme } from './types';

export const theme: Theme = {
  // Functions from react-native-size-matters
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,

  colors,

  // Platform specific shadows
  shadowNone: {
    ...Platform.select({
      ...shadowSizes.none,
    }),
  },
  shadowSmall: {
    ...Platform.select({
      ...shadowSizes.small,
    }),
  },
  shadowMiddle: {
    ...Platform.select({
      ...shadowSizes.middle,
    }),
  },

  // Scaled spacing sizes
  none: spacing.None,
  miniscule: scale(spacing.Miniscule),
  smallest: scale(spacing.Smallest),
  small: scale(spacing.Small),
  medium: scale(spacing.Medium),
  large: scale(spacing.Large),
  xlarge: scale(spacing.XLarge),
  xxlarge: scale(spacing.XXLarge),
  massive: scale(spacing.Massive),
};
