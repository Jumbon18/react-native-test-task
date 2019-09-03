import React from 'react'
import {View, FlatList, Text, } from "react-native";
import Picture from "./Picture/Picture";

const PictureList = (props) => {
    return (
        <View>
            {props.pictures.length > 0 ?
                <FlatList
                    data={props.pictures}
                    keyExtractor={(item,index)=>item.name}
                    renderItem={({item, index}) => (<Picture  key={index} picture={item} />)
                    }
                />:
                <Text>No pictures</Text>}


        </View>
    )
};




export default PictureList