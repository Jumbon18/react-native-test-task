import React from 'react'
import {ScrollView, Text,StyleSheet,View} from "react-native";
import {connect, useSelector} from "react-redux";
import VideoList from "../../components/VideoList/VideoList";
import withCardList from "../../hoc/CardList";
const VideoScreen = (props) => {
    const video = useSelector(state => state.video);

    return (
            <VideoList
            videos={video.videos}
            navigation={props.navigation}/>
    )

};

export default withCardList(VideoScreen)