import axios from 'axios';
import React, { useContext, useState } from 'react'
import '../css/Form.css'
import AppContext from './AppContext';

export default function Form() {
    const {state, dispatch} = useContext(AppContext);
    const [postInput, setPostInput] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);    

    const handleSubmitPost = async (e) => {
        try {
            e.preventDefault();
            const token = localStorage.getItem('token');
            const option = {
                method: 'POST',
                url: '/api/v1/posts',
                data: { content: postInput },
                headers: {
                    authorization: 'Bearer ' + token,
                }
            }
            const response = await axios(option);
            const { post } = response.data.data;
            dispatch({type: 'CREATE_ONE_POST', payload: {
                ...post, 
                author: {
                    _id: post.author, 
                    name: state.user.userName
                },
                isEditable: true
            }})
            setPostInput('');
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    }
    
    return (
        <section className="form-section">
            <form className="form" onSubmit={handleSubmitPost}>
                {errorMessage && (
                    <div className="error-message">{errorMessage}</div>
                )}
                <textarea
                    type="text"
                    name="content"
                    id="content"
                    className="content"
                    placeholder="What's happen?"
                    value={postInput}
                    onChange={(e) => {setErrorMessage(null); setPostInput(e.target.value)}}
                ></textarea>
                <button className="btn" type="submit">Tweet</button>
            </form>
        </section>
    )
}
