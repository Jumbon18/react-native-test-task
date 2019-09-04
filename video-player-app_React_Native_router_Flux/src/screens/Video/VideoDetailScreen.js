import React, {useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import Video from 'react-native-video';

import Icon from 'react-native-vector-icons/dist/Ionicons'
import  filesPath from '../../assets/index'


const VideoDetailScreen = (props) => {

    const [pause, setPause] = useState(false);


    return (
        <View style={styles.detailWrapper}>

            <Video source={filesPath.videos[props.video]}   // Can be a URL or a local file.
                   ref={(ref) => {
                       this.player = ref
                   }}

                   paused={pause}
                    resizeMode="cover"
                   onBuffer={this.onBuffer}                // Callback when remote video is buffering
                   onError={this.videoError}               // Callback when video cannot be loaded
                   style={styles.backgroundVideo}/>

            <Icon name='md-play' size={50} onPress={() => setPause(!pause)} style={{marginBottom:30}} />
        </View>


    )

};

const styles = StyleSheet.create({

    backgroundVideo: {
        flex: 1,
        width:'100%',
        backgroundColor: '#bebebebe',
marginBottom:30

    },
    detailWrapper: {
        flex: 1,
        padding:10,
        justifyContent: "center",
        alignItems: "center",
    width:'100%',
        marginBottom: 15

    }
});
export default VideoDetailScreen;
