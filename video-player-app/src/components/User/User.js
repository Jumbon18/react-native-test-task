import React, { Component } from 'react';
import { AppRegistry, Image,Text,View } from 'react-native';
import {connect} from "react-redux";

class User extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View>
            <Image source={pic} style={{width: 193, height: 110}}/>
                <Text>{this.props.videos.length}</Text>
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        videos:state.video.videos
    };
};

const mapDispatchToProps = (dispatch)=>{
    return {

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(User)
