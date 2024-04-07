import { useEffect, useState } from "react"
import data from "../Database/Data"
import {useDispatch} from 'react-redux'

import * as actions from '../Redux/question_reducer'


export const useFetchQ =()=>{
    const [getData,setGetData] = useState({isLoading : false , apiData: [],serverError : null})
    const dispatch = useDispatch();


    useEffect(()=>{
        setGetData(prev => ({...prev, isLoading: true}));


        (async ()=> {
            try{
                let question = await data;
                if (question.length > 0){
                    setGetData(prev => ({...prev, isLoading: false}))
                    setGetData(prev => ({...prev, apiData: question}))
                    dispatch(actions.startExamAction(data))
                    // console.log(data)
                }
            }catch(error){
                setGetData(prev => ({...prev, isLoading: false}))
                setGetData(prev => ({...prev, serverError:error}))

            }
        })();
    },[dispatch]);

    return [getData,setGetData]
}

export const MoveNextQuestion = ()=>async(dispatch)=>{
    try{
        dispatch(actions.moveNextAction())
    }catch (error){
        console.log(error)
    }
}
export const PrevQuestion = ()=>async(dispatch)=>{
    try{
        dispatch(actions.movePrevAction())
    }catch (error){
        console.log(error)
    }
}