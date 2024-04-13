import React, { FC } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { HomeStackParams } from '@navigator';
import { theme } from '@theme';

type IMainScreenProps = NativeStackScreenProps<HomeStackParams, 'Home'>;

export const MainScreen: FC<IMainScreenProps> = ({ route, navigation }) => {
  return (
    <ScrollView style={styles.sectionBg}>
      <DiscoverMovies navigation={navigation} />
      <YellowButton />
      <MoviesGallery title="Trending Movies" url="/movie/top_rated" navigation={navigation} testID="TrendingMovies" />
      <TrendingPeople title="Trending People" url="/trending/person/week" />
      <MoviesGallery title="Other Movies" url="/movie/top_rated" navigation={navigation} testID="OtherMovies" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionBg: {
    flex: 1,
    width: '100%',
    padding: theme.small,
    backgroundColor: theme.colors.baseColor,
  },
});
