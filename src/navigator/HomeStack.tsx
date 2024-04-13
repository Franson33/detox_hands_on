import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { homeStackScreens } from '@navigator';
import { MainScreen, MovieDetails } from '@screens';

export type HomeStackParams = {
  [homeStackScreens.HOME]: undefined;
  [homeStackScreens.DETAILS]: {
    movieId: string;
  };
};

const Stack = createNativeStackNavigator<HomeStackParams>();

export const HomeStack = () => (
  <Stack.Navigator initialRouteName={homeStackScreens.HOME}>
    <Stack.Screen name={homeStackScreens.HOME} component={MainScreen} />
    <Stack.Screen name={homeStackScreens.DETAILS} component={MovieDetails} />
  </Stack.Navigator>
);
