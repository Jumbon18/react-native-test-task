/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {createStore} from "redux";
import reducer from './src/store/reducers/rootReducer'
import {Provider} from "react-redux";
import { createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {createStackNavigator} from 'react-navigation-stack';

import VideoScreen from "./src/screens/Video/VideoScreen";
import PictureScreen from "./src/screens/Pictures/PictureScreen";
import VideoDetailScreen from "./src/screens/Video/VideoDetailScreen";
import {YellowBox}  from "react-native";

const store = createStore(reducer);

export default App = () => {
    YellowBox.ignoreWarnings([
        'Warning: componentWillMount is deprecated',
        'Warning: componentWillReceiveProps is deprecated',
    ]);
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    );
};
const styleHeader = {
    headerStyle: {
        backgroundColor: '#00a1f4',

    },
    headerTitleStyle: {
        textAlign: 'center',
        flexGrow: 1,
        alignSelf: 'center',
        fontWeight: 'bold'
    },

};

const VideoStack = createStackNavigator({
    Videos: {
        screen: VideoScreen,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: 'Videos',
            }
        }
    },
    DetailVideo: {
        screen: VideoDetailScreen,
        navigationOptions: ({navigation}) => {
            return {
                title: `${navigation.getParam('title')}`,
            }
        }
    }
}, {defaultNavigationOptions: ({navigation}) => styleHeader});

const pictureStackNavigator = createStackNavigator({
    Pictures: {
        screen: PictureScreen,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: 'Pictures',
            }
        }
    }
}, {defaultNavigationOptions: ({navigation}) => styleHeader});

const DashboardTabNavigator = createBottomTabNavigator({
        Videos: VideoStack,
        Pictures: pictureStackNavigator,

    }, {
        tabBarOptions: {
            tabStyle: {
                borderWidth: .3,
                borderColor: 'black',
                backgroundColor: '#00a1f4'
            },
            labelStyle: {
                textAlign: 'center',
                flexGrow: 1,
                fontWeight: 'bold',
                alignSelf: 'center',
                fontSize: 18
            },
            activeTintColor: '#9e3aff'
        }
    }
);

const AppContainer = createAppContainer(DashboardTabNavigator);



