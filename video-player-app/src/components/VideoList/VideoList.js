import React from 'react'
import {View, FlatList, Text, StyleSheet} from "react-native";
import Video from "./Video/Video";
import {Colors} from "react-native/Libraries/NewAppScreen";

const VideoList = (props) => {
    return (
        <View>
            {props.videos.length > 0 ?
                <FlatList
                    data={props.videos}
                    keyExtractor={(item,index)=>item.title}
                    renderItem={({item, index}) => (<Video  key={index} video={item} navigation={props.navigation}/>)
                    }
                />:
                <Text>No videos</Text>}


        </View>
    )
};




export default VideoList