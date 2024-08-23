/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import Video, {VideoRef} from 'react-native-video';

const HomeScreen = () => {
  type Size = {
    id: number;
    thumbnail: string;
    video: string;
  };
  const videoList: Size[] = [
    {
      id: 1,
      thumbnail: '',
      video: 'https://cdn.pixabay.com/video/2020/05/15/39116-420985147_large.mp4',
    },
    // {
    //   id: 2,
    //   thumbnail: 'S',
    //   video: 'false',
    // },
    // {
    //   id: 3,
    //   thumbnail: 'M',
    //   video: '',
    // },
    // {
    //   id: 4,
    //   thumbnail: 'L',
    //   video: '',
    // },
    // {
    //   id: 5,
    //   thumbnail: 'XL',
    //   video: '',
    // },
  ];

  const videoRef = useRef<VideoRef>(null);
  //const background = require('./background.mp4');

  return (
    <View style={styles.container}>
      <FlatList
        data={videoList}
        contentContainerStyle={{paddingVertical: 5}}
        renderItem={({item}) => (
          <View style={styles.cell}>
            <Video
              ref={videoRef}
              controls={true}
              repeat={true}
              resizeMode="contain"
              style={{
                width: '100%',
                height: '80%',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
              source={{
                uri: item.video,
              }}
            />
            <Text style={styles.text2}>This is a title</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FBF8F8',
  },
  cell: {
    backgroundColor: 'white',
    elevation: 10,
    padding: 0,
    borderRadius: 10,
    marginHorizontal: 10,
    height: 240,
    marginVertical: 10,
    flexDirection: 'column',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Badoni',
    color: 'black',
  },
  text2: {
    textAlign: 'left',
    fontFamily: 'Urbanist-Medium',
    color: 'black',
    marginStart: 10,
    fontSize: 17,
  },
  statusBar: {
    flexDirection: 'row',
    backgroundColor: 'red',
    elevation: 5,
    height: 50,
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    fontFamily: 'AbrilFatface-Regular',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20,
  },
});

export default HomeScreen;
