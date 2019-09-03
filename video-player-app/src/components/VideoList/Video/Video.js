import React from 'react'
import {View,Text,Image,StyleSheet,Button,TouchableNativeFeedback} from "react-native";
import  filesPath from '../../../assets/index'
import withCard from "../../../hoc/Card";

const Video = (props) => {
console.log(props);

    return (
        <TouchableNativeFeedback  onPress={()=>props.navigation.navigate('DetailVideo',{title:props.video.title,video:props.video.thumb})}>
        <View style={{width:'100%'}} >
        <Image source={filesPath.images[props.video.thumb]}
           style={{width:'100%',height: 300}}
            />

    <View style={styles.info}>
    <Text style={{fontSize:18,fontWeight:'bold',marginRight:15}}>{props.video.title}</Text>
    <Text>{props.video.duration}</Text>
    </View>

</View>
        </TouchableNativeFeedback>
    )

};
const styles = StyleSheet.create({

    info:{
        flex:1,
        alignItems:'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop:10
    }
    });
export default withCard(Video)