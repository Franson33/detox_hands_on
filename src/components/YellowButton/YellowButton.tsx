import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { theme } from '@theme';

export const YellowButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity testID="ButtonID">
        <Text style={styles.buttonText} onPress={() => Alert.alert('Button pressed')}>
          Tap on me
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: theme.colors.secondaryColor,
    borderRadius: theme.small,
    paddingVertical: theme.smallest,
    paddingHorizontal: theme.small,
    marginVertical: theme.smallest,
    marginHorizontal: theme.smallest,
  },
  buttonText: {
    fontSize: theme.small,
    color: '#000',
    alignSelf: 'center',
  },
});
