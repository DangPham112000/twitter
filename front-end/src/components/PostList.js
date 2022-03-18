import React, { useContext, useEffect } from 'react'
import PostItem from './PostItem'
import '../css/Post.css'
import axios from 'axios'
import AppContext from './AppContext'

export default function PostList() {
    const {state, dispatch} = useContext(AppContext);

    useEffect(() => {
        const getAllPost = async () => {
            try {
                const option = {
                    method: 'get',
                    url: '/api/v1/posts'
                };
                const response = await axios(option);
                let { posts } = response.data.data;
                posts = posts.map(post => {
                    if (state.user) {
                        return post.author.name === state.user.userName ? {...post, isEditable: true} : post
                    } else {
                        return post;
                    }
                })
                dispatch({type: 'GET_ALL_POSTS', payload: posts});
            } catch (error) {
                console.log(error);
            }
        }
        getAllPost();
    }, [state.user]);
    // Truyền state.user này vì thỉnh thoảng api gọi xong all post trước khi nhận được current user

    return (
        <section className="post-section">
            <div className="post-list">
                {state.posts && (
                    state.posts.map(post => {
                        return (<PostItem key={post._id} post={post} />)
                    })
                )}
            </div>
        </section>
    )
}
