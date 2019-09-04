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
import {StyleSheet} from 'react-native'
import VideoScreen from "./src/screens/Video/VideoScreen";
import PictureScreen from "./src/screens/Pictures/PictureScreen";
import VideoDetailScreen from "./src/screens/Video/VideoDetailScreen";

import {
    Scene,
    Router,
    Tabs,
    Stack,
    Overlay,
    Modal
} from 'react-native-router-flux';

const store = createStore(reducer);

const styles = StyleSheet.create({
    tabBarStyle: {

        borderWidth: .3,
        borderColor: 'black',
        backgroundColor: '#00a1f4'
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },
    tabLabelStyle:{
        textAlign: 'center',
        flexGrow: 1,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 18
    }
});

export default App = () => {

    return (
        <Provider store={store}>

            <Router>
            <Overlay key="overlay">
                <Modal key="modal" hideNavBar>
                    <Scene hideNavBar>
                        <Tabs key="tabbar"
                              routeName="tabbar"
                              backToInitial
                              tabStyle={styles.tabBarStyle}
                        labelStyle={styles.tabLabelStyle}
                              activeTintColor="white"
                        >
                            <Stack
                                key="tab_videos" title="Video"
                                tabBarLabel="Videos"
                                inactiveBackgroundColor="#FFF"
                                activeBackgroundColor="#DDD"
                                navigationBarStyle={{backgroundColor: '#00a1f4'}}
                                titleStyle={{color: 'white', alignSelf: 'center',  textAlign: 'center', flexGrow: 1, fontWeight: 'bold'}}
                            >
                                <Scene key="tab_videos_all" component={VideoScreen} title="Videos" />
                                <Scene  key="tab_video_detail" component={VideoDetailScreen} back  backButtonTintColor="white"/>

                            </Stack>
                            <Stack
                                key="tab_pictures" title="Pictures"
                                tabBarLabel="Pictures"
                                inactiveBackgroundColor="#FFF"
                                activeBackgroundColor="#DDD"
                                navigationBarStyle={{backgroundColor: '#00a1f4'}}
                                titleStyle={{color: 'white', alignSelf: 'center',  textAlign: 'center', flexGrow: 1, fontWeight: 'bold'}}                            >

                            <Scene key="tab_pictures" component={PictureScreen} title="Pictures" />
                            </Stack>
                        </Tabs>
                    </Scene>
                </Modal>
            </Overlay>


            </Router>
        </Provider>
    );
};
