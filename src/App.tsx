import React, { JSX } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { HomeStack } from '@navigator';

const queryClient = new QueryClient();

export const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <HomeStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};
