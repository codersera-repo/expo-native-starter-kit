import React from 'react';
import {Video} from 'expo';
import {StyleSheet, Text, View, TouchableHighlight, Dimensions, TouchableOpacity} from 'react-native';
import codegen from 'codegen.macro';
import {dismissModal, Modal, showModal} from 'expo-modal';

// TODO: make it using export instead of require
const DeviceInfo = codegen`
  if(process.env.EJECTED==='true') {
    module.exports = 'require("react-native-device-info").default;'
  } else {
    module.exports = 'require("./mocks/DeviceInfoMock").default;'
  }
`;

const {height, width} = Dimensions.get('window');

export default class App extends React.Component {

  render() {

    const innerComponent = <View style={{height: height/2 , width: width, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello world</Text>
      <TouchableOpacity onPress={() => dismissModal()} ><Text>close modal</Text></TouchableOpacity>
    </View>

    return (
        <View style={styles.container}>
          <Modal/>

          <Text>{DeviceInfo.getBrand()}</Text>
          <Video
              source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
              shouldPlay={true}
              resizeMode="cover"
              style={styles.videoPlayer}
          />
          <TouchableHighlight
              onPress={() => {showModal(innerComponent)}}
          >
            <Text> Touch Here </Text>
          </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoPlayer: {
    position: 'relative',
    width: '100%',
    aspectRatio:3/2,
  },
});
