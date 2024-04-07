import {createSlice} from '@reduxjs/toolkit'


export const resultreducer= createSlice({
    name: 'result',
    initialState:{
       result:[]
    },
    reducers:{
        pushResultAction : (state,action) => {
            state.result.push(action.payload)
        },
        updateResultAction :(state,action)=>{
            const {trace,checked} = action.payload;
            state.result.fill(checked,trace,trace+1)
        },
        resetResultAction:()=>{
            return{
                result:[]
            }
        }
    },
   
})

export const {pushResultAction ,resetResultAction,updateResultAction}  =resultreducer.actions
export default resultreducer.reducer;