import React from 'react'
import {View,Text,Button} from 'react-native'

const Welcome = (props)=>{
    return (
        <View>
            <Button title='Login' onPress={()=> props.navigation.navigate('DashBoard')}/>
            <Button title='Sign up' onPress={()=> alert('button pressed')}/>
        </View>
    )
};
export default Welcome;