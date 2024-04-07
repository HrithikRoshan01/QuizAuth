import {combineReducers,configureStore } from '@reduxjs/toolkit'
import  resultreducer  from './Result'


export default configureStore({
    reducer : resultreducer
})