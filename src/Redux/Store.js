import {combineReducers,configureStore } from '@reduxjs/toolkit'
import  questionreducer  from './question_reducer'
import  resultreducer  from './result_reducer'


const rootreducer = combineReducers({
    questions : questionreducer,
    result : resultreducer
})


export default configureStore({reducer : rootreducer})