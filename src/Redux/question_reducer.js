import {createSlice} from '@reduxjs/toolkit'


export const questionreducer= createSlice({
    name: 'question',
    initialState:{
        queue:[],
        answer : [],
        trace : 0
    },
    reducers:{
        startExamAction:(state,action)=>{
            // console.log(state)
            return {
                ...state,
                queue: action.payload
            }
        },
        moveNextAction : (state)=>{
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevAction : (state)=>{
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllAction:()=>{
            return {
                queue:[],
                answer : [],
                trace : 0
            }
        }
    }
})

export const {startExamAction , moveNextAction ,movePrevAction , resetAllAction}  =questionreducer.actions
export default questionreducer.reducer;