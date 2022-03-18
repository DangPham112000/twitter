import React, { useContext } from 'react'
import AppContext from './AppContext'
import Form from './Form'
import PostList from './PostList'

export default function Main() {
    const {state} = useContext(AppContext);
    return (
        <div>
            {state.user && (<Form />)}
            <PostList />
        </div>
    )
}
