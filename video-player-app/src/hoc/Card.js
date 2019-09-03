import React from 'react';
import {StyleSheet, View} from "react-native";

const withCard = (Component) =>{
  return  (props)=>{
      return (
              <View style={styles.test}>
          <Component {...props} />
              </View>

      )
  }
};

const styles = StyleSheet.create({
test:{
        flex:1,
        alignItems:'center',
        flexDirection:'column',
        borderColor:'black',
        backgroundColor:'white',
        borderWidth:1,
        borderRadius:4,
        width:'100%',
        padding:15,
        marginBottom:10,
    },
    info:{
        flex:1,
        alignItems:'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop:10
    }
});
export default withCard