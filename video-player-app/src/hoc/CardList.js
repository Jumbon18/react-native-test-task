import React from 'react';
import {ScrollView, StyleSheet, View} from "react-native";

const withCardList = (Component) =>{
    return  (props)=>{
        return (
            <ScrollView>
                <View style={styles.wrapper}>
                <Component {...props} />
                </View>
            </ScrollView>

        )
    }
};

const styles = StyleSheet.create({
  wrapper:{
      padding:20,
      backgroundColor:'#125d7b'
  }
});
export default withCardList