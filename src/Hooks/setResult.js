import * as actions from '../Redux/result_reducer'

export const PushAnswer = (res) => async (dispatch)=>{
    try {
        await dispatch(actions.pushResultAction(res))
    } catch (error) {
        console.log(error)
    }
}

export const updateResult = (index ) => async(dispatch)=>{
    try {
        dispatch(actions.updateResultAction(index))
    } catch (error) {
        console.log(error)
    }
}