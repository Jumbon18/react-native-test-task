import React from 'react'
import {View,Text} from "react-native";
import PictureList from "../../components/PictureList/PictureList";
import {useSelector} from "react-redux";
import withCardList from "../../hoc/CardList";
const PictureScreen = (props) =>{
    const picture = useSelector(state => state.picture);
    return (
            <PictureList
                pictures={picture.pictures}
             />
    )

};
export default withCardList(PictureScreen)