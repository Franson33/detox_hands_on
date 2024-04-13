import { IIOSShadow } from '@styles';

export type ScaleFunction = (size: number) => number;
type SpacingParameter = number | 'auto';

export interface Theme {
  scale: ScaleFunction;
  verticalScale: ScaleFunction;
  moderateScale: ScaleFunction;
  moderateVerticalScale: ScaleFunction;

  shadowNone: IIOSShadow;
  shadowSmall: IIOSShadow;
  shadowMiddle: IIOSShadow;

  none: SpacingParameter;
  auto: SpacingParameter;
  miniscule: SpacingParameter;
  smallest: SpacingParameter;
  small: SpacingParameter;
  medium: SpacingParameter;
  large: SpacingParameter;
  xlarge: SpacingParameter;
  xxlarge: SpacingParameter;
  massive: SpacingParameter;
}
