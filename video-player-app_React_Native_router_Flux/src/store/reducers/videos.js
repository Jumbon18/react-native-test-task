const initialsState={
    videos:[
        {title:'Summer wakeBoarding',duration:'00:32',
            thumb:'wake',
           },
        {title:'Funny Husky',duration:'00:12',
            thumb:'dog',
            },
        {title:'Winter snowboarding',duration:'00:15',
            thumb:'snow',
           }
            ]
};
export default function videoReducer(state = initialsState,action) {
    switch (action.type) {
        default:
            return state

    }
}
