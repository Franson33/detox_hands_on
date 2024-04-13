import React, { FC, useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import { GET, IMAGE_POSTER_URL } from '@api';
import { Loader } from '@components';
import { theme } from '@theme';

interface ITrendingPeopleProps {
  url: string;
  title: string;
  isForPage?: string;
}

export const TrendingPeople: FC<ITrendingPeopleProps> = ({ url, title, isForPage }) => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState();

  useEffect(() => {
    const getPeople = async () => {
      const data = await GET(url);
      setPeople(isForPage === 'details' ? data.cast : data.results);
      setLoading(false);
    };

    getPeople();
  }, []);

  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text style={styles.heading}>{title}</Text>
          <FlatList keyExtractor={item => item.id} data={people} renderItem={displayPeople} horizontal />
        </View>
      )}
    </View>
  );
};

const displayPeople = ({ item }) => {
  return (
    <View style={styles.trendingPeopleContainer}>
      <Image source={{ uri: `${IMAGE_POSTER_URL}${item.profile_path}` }} style={styles.trendingPeopleImage} />
      <Text style={styles.trendingPeopleName}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: theme.small,
    color: theme.colors.fadedColor,
    margin: theme.smallest,
  },
  trendingPeopleImage: {
    height: theme.scale(70),
    width: theme.scale(70),
    borderRadius: 500,
  },
  trendingPeopleName: {
    width: theme.scale(60),
    color: theme.colors.textColor,
    fontSize: theme.small,
    textAlign: 'center',
    marginTop: theme.smallest,
  },
  trendingPeopleContainer: {
    margin: theme.smallest,
  },
});
