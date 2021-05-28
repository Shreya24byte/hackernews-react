import React from 'react'

export const selectField = ({ id, by, url, time, title} = {}) => ({
    id, 
    by, 
    url, 
    time, 
    title
})
export const selectJob = ({ id,url, time, title} = {}) => ({
    id,  
    url, 
    time, 
    title
})
export const selectShow = ({ id,url, time, title, score} = {}) => ({
    id,  
    url, 
    time, 
    title, 
    score
})
export const selectPast = ({ id,url, time, title, score} = {}) => ({
    id,  
    url, 
    time, 
    title, 
    score
})
