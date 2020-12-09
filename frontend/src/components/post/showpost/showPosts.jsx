import React from 'react';

const ShowPosts = (props) => {
    const sort_posts = []
    // posts item들을 postindex에 맞춰 분류해주는 작업
    props.posts.forEach(post => {
        if (sort_posts[post.postIndex]) {
            sort_posts[post.postIndex].push({
                post
            })
        } else {
            sort_posts[post.postIndex] = []
            sort_posts[post.postIndex].push({
                post
            })
        }
    });
    return (
        <>
        {sort_posts.map(postidx => {
            const post_index = Object.keys(postidx)
            return (
                <div>
                    <p>{post_index}</p>
                    {postidx.map(contents => {
                        return(
                            <ul>
                                <li>{contents.title}</li>
                                <li>{contents.content}</li>
                            </ul>
                        )
                    })}
                </div>
            )
        })}
        </>
    )
};

export default ShowPosts;