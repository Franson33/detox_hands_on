import React, { FC, useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { GET, POSTER_IMAGE } from '@api';
import { Loader } from '@components';
import { homeStackScreens } from '@navigator';
import { theme } from '@theme';

interface IMoviesGalleryProps {
  title: string;
  url: string;
  navigation: any;
  testID?: string;
}

export const MoviesGallery: FC<IMoviesGalleryProps> = ({ title, url, navigation, testID }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const data = await GET(url);
      setMovies(data.results);
      setLoading(false);
    };

    getMovies();
  }, []);

  return (
    <View testID={testID}>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text style={styles.heading}>{title}</Text>
          <FlatList
            keyExtractor={item => item.id}
            data={movies}
            horizontal
            renderItem={item => displayMovies(item, { navigation, testID })}
          />
        </View>
      )}
    </View>
  );
};

const displayMovies = ({ item }, { navigation, testID }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push(homeStackScreens.DETAILS, { movieId: item.id });
      }}
      style={{ marginHorizontal: 10 }}>
      <Image
        source={{ uri: `${POSTER_IMAGE}${item.poster_path}` }}
        style={styles.posterImage}
        testID={testID + '.image'}
      />
      <Text style={styles.movieTitle} testID={testID + '.title'}>
        {item.original_title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: theme.small,
    color: theme.colors.fadedColor,
    margin: theme.smallest,
  },
  posterImage: {
    height: theme.scale(250),
    width: theme.scale(150),
    borderRadius: theme.smallest,
  },
  movieTitle: {
    color: theme.colors.textColor,
    width: theme.scale(150),
    textAlign: 'center',
    marginTop: theme.smallest,
    fontSize: theme.small,
  },
});
