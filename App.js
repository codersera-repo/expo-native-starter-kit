import React from 'react';
import {Video} from 'expo-av';
import {Dimensions, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import Modal from 'expo-modal';
import DeviceInfo from 'react-native-device-info';

const {height, width} = Dimensions.get('window');

export default class App extends React.Component {

    render() {

        const innerComponent = <View
            style={{height: height / 2, width: width / 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Hello world</Text>
            <TouchableOpacity onPress={() => Modal.dismissModal()}><Text>close modal</Text></TouchableOpacity>
        </View>

        return Modal.wrapIntoModal((
            <View style={styles.container}>
                <Text>{DeviceInfo.getBrand()}</Text>
                <Video
                    source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                    shouldPlay={true}
                    resizeMode="cover"
                    style={styles.videoPlayer}
                />
                <TouchableHighlight
                    onPress={() => {
                        Modal.showModal(innerComponent)
                    }}
                >
                    <Text> Touch Here </Text>
                </TouchableHighlight>
            </View>
        ), styles.modalStyle)
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
        aspectRatio: 3 / 2,
    },
    modalStyle: {
        backgroundColor: 'rgba(1,1,56,0.3)',
    }
});
