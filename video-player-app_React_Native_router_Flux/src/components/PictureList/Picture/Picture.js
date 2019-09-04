import React from 'react'
import {View,Image,StyleSheet} from "react-native";
import  filesPath from '../../../assets/index'
import withCard from "../../../hoc/Card";

const Picture = (props) => {
    return (
            <View style={{width:'100%'}} >
                <Image source={{uri:props.picture.url}}
                       style={{width:'100%',height: 300}}
                />
            </View>
    )

};

export default withCard(Picture)