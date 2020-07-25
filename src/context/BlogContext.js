// import React from 'react'
import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch(action.type){
        case 'remove_blogpost':
            return state.filter(el => el.id !== action.payload)
        case 'add_blogpost':
            // console.log()
            return [...state, {title: action.payload.title, content: action.payload.content, id: Math.floor(Math.random()*10000)}]
        default:
            return [...state]
    }
}

const addBlogPost = (dispatch) => async(payload, callback) => {
    try{
        dispatch({type: 'add_blogpost', payload})
        callback()
    }catch(e){
        console.log(e)
    }
}
const removeBlogPost = (dispatch) => id => dispatch({ type: 'remove_blogpost', payload: id })


export const {Context, Provider} = createDataContext(blogReducer, { addBlogPost, removeBlogPost }, [])