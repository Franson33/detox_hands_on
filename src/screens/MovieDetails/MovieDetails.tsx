import React, { FC, useEffect, useState } from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { GET, IMAGE_POSTER_URL } from '@api';
import { Loader, MoviesGallery, TrendingPeople } from '@components';
import { HomeStackParams } from '@navigator';
import { theme } from '@theme';

type IMainScreenProps = NativeStackScreenProps<HomeStackParams, 'Movie Details'>;

interface IMovieDetails {
  original_title: string;
  overview: string;
  release_date: string;
  runtime: number;
  budget: number;
  homepage: string;
  backdrop_path: string;
  genres: any[];
}

export const MovieDetails: FC<IMainScreenProps> = ({ route, navigation }) => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<IMovieDetails | undefined>();

  useEffect(() => {
    const getDetails = async () => {
      const data = await GET(`/movie/${route?.params?.movieId}`);
      setDetails(data);
      setLoading(false);
    };

    getDetails();
  }, []);

  const getGenre = () => {
    return details?.genres.map((genre: any) => (
      <View style={styles.genreContainer}>
        <Text style={styles.genre}>{genre.name}</Text>
      </View>
    ));
  };

  return (
    <ScrollView style={styles.sectionBg} testID="MovieDetailsScrollView">
      {loading ? (
        <Loader />
      ) : (
        <View>
          <View>
            <Image
              source={{ uri: `${IMAGE_POSTER_URL}${details?.backdrop_path}` }}
              style={styles.imageBg}
              testID="MovieDetailsImage"
            />
          </View>
          <Text style={styles.detailsMovieTitle} testID="MovieDetailsTitle">
            {details?.original_title}
          </Text>
          {details?.homepage ? (
            <View style={styles.linkContainer}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(details?.homepage);
                }}></TouchableOpacity>
            </View>
          ) : null}

          <Text style={styles.heading}>OVERVIEW</Text>
          <Text style={styles.overview}>{details?.overview}</Text>

          <View style={styles.detailsContainer}>
            <View>
              <Text style={styles.heading}>BUDGET</Text>
              <Text style={styles.details}>$ {details?.budget}</Text>
            </View>

            <View>
              <Text style={styles.heading}>DURATION</Text>
              <Text style={styles.details}>{details?.runtime} min.</Text>
            </View>

            <View>
              <Text style={styles.heading}>RELEASE DATE</Text>
              <Text style={styles.details}>{details?.release_date}</Text>
            </View>
          </View>

          <Text style={styles.heading}>GENRE</Text>
          <View style={{ display: 'flex', flexDirection: 'row' }}>{getGenre()}</View>

          <TrendingPeople title="CAST" url={`/movie/${route.params.movieId}/credits`} isForPage="details" />

          <MoviesGallery
            title="SIMILAR MOVIES"
            navigation={navigation}
            url={`/movie/${route.params.movieId}/similar`}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: theme.small,
    color: theme.colors.fadedColor,
    margin: theme.smallest,
  },
  details: {
    color: theme.colors.secondaryColor,
    fontSize: theme.small,
    marginLeft: theme.smallest,
    fontWeight: 'bold',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: theme.medium,
  },
  overview: {
    color: theme.colors.textColor,
    marginHorizontal: 10,
    textAlign: 'justify',
    fontSize: 16,
  },
  linkContainer: {
    backgroundColor: theme.colors.secondaryColor,
    borderRadius: 100,
    padding: theme.smallest,
    width: theme.scale(45),
    marginLeft: theme.medium,
    marginTop: -theme.medium,
  },
  detailsMovieTitle: {
    fontSize: theme.scale(28),
    color: theme.colors.textColor,
    textAlign: 'center',
    marginTop: -theme.large,
  },
  genreContainer: {
    borderWidth: theme.scale(1),
    borderRadius: 5,
    borderColor: theme.colors.textColor,
    paddingHorizontal: theme.smallest,
    paddingVertical: theme.miniscule,
    marginHorizontal: theme.smallest,
  },
  genre: {
    color: theme.colors.textColor,
    fontSize: theme.small,
  },
  imageBg: {
    width: '100%',
    height: theme.scale(250),
  },
  sectionBg: {
    backgroundColor: theme.colors.baseColor,
    height: '100%',
  },
});
