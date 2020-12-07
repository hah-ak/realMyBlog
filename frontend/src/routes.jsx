import React from 'react';
import Home from './components/home/home';
import Post from './components/post/post';

const Routes = (props) => {
    "/"= () => <Home />,
    "Post"= () => <Post />
};

export default Routes;