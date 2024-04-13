import React from 'react';
import { ActivityIndicator } from 'react-native';

import { theme } from '@theme';

export const Loader = () => {
  return <ActivityIndicator size="large" color={theme.colors.textColor} />;
};
