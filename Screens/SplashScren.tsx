/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet, Image, Text} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';


const SplashScren = ({navigation}) => {
  const opacity = useSharedValue(0);
  const imageOpacity = useSharedValue(0);
  const size = useSharedValue(150);

  useEffect(() => {
    imageOpacity.value = withDelay(
      500,
      withTiming(1, {duration: 1500, easing: Easing.elastic(2)}),
    );
    opacity.value = withDelay(1000, withTiming(1, {duration: 1500}));
    size.value = withDelay(2500, withTiming(2000, {duration: 1000}));

    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 3300);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{
          ...styles.image,
          opacity: imageOpacity,
          width: size,
          height: size,
        }}
        source={require('../assets/Icons/play.png')}
      />
       <Animated.View style={animatedStyle}>
      <Text style={styles.label}>
        BingePlay
      </Text>
    </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 42,
    fontFamily: 'Badoni',
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginRight: 8,
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  image: {
    tintColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default SplashScren;
