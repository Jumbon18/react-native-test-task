import React from 'react'
import {View,Text,Button} from 'react-native'

const Feed = (props)=>{
    return (
        <View>
           <Button title='Go to Detail Screen' onPress={()=> props.navigation.navigate('Detail')} />

        </View>
    )
};
export default Feed;