import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const colors = {
  white: '#FFFFFF',
  gray: '#A9A9A9',
  button: '#00B8B0',
  black: '#000000',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  titleText: {
    fontSize: 36,
    color: colors.white,
    marginBottom: 10,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 20,
    fontWeight: '400',
  },
  button: {
    backgroundColor: colors.button,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 36,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '700',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./src/assets/bg-android.png')}
        style={{ flex: 1 }}
      >
        <View style={styles.contentWrapper}>
          <Text style={styles.titleText}>Your Next Adventure Starts Here</Text>
          <Text style={styles.subTitle}>
            Life’s too short to stay in one place. Find your next favorite city, beach, or mountain and let's get moving
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Start Exploring
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;

