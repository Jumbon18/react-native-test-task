const initialsState={
  pictures:[
      {url:'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',name:'glasses'},
      {url:'https://ichef.bbci.co.uk/news/660/cpsprodpb/4381/production/_107918271_mikerobinson-2.jpg',name:'water'},
      {url:'https://media.istockphoto.com/photos/single-cow-on-a-meadowhappy-view-picture-id538027668?k=6&m=538027668&s=612x612&w=0&h=jyfc7rBix2AehSKeb5JULnwwQNFYogdkVCufkr06qXI=',name:'cow'},

  ]
};
export default function pictureReducer(state = initialsState,action) {
    switch (action.type) {
        default:
            return state

    }
}
