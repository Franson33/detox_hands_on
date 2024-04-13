import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { GET, IMAGE_POSTER_URL } from '@api';
import { SliderBox } from 'react-native-image-slider-box';

export const DiscoverMovies = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await GET('/discover/movie');
      setMovies(response.results);

      const images = response.results.map((data: any) => `${IMAGE_POSTER_URL}${data.backdrop_path}`);

      let backImages: an = [];
      for (let i = 0; i < 10; ++i) {
        backImages = [...backImages, images[i]];
      }

      setImages(backImages);
    };

    getMovies();
  }, []);

  return (
    <View>
      <SliderBox
        images={images}
        onCurrentImagePressed={(index: any) => navigation.navigate('movieDetails', { movieId: movies[index].id })}
      />
    </View>
  );
};
