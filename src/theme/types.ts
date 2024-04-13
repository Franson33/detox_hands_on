import { colors, IIOSShadow } from '@styles';

export type ScaleFunction = (size: number) => number;
type SpacingParameter = number;

export interface Theme {
  scale: ScaleFunction;
  verticalScale: ScaleFunction;
  moderateScale: ScaleFunction;
  moderateVerticalScale: ScaleFunction;

  colors: typeof colors;

  shadowNone: IIOSShadow;
  shadowSmall: IIOSShadow;
  shadowMiddle: IIOSShadow;

  none: SpacingParameter;
  miniscule: SpacingParameter;
  smallest: SpacingParameter;
  small: SpacingParameter;
  medium: SpacingParameter;
  large: SpacingParameter;
  xlarge: SpacingParameter;
  xxlarge: SpacingParameter;
  massive: SpacingParameter;
}
