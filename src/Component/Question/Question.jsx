import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'



import './Question.css'
import data from '../../Database/Data'

import { useFetchQ } from '../../Hooks/FetchQuestion'
import { updateResultAction } from '../../Redux/result_reducer'
import { updateResult } from '../../Hooks/setResult'

function Question({oncheck}) {

    const dispatch = useDispatch()
    const {trace} = useSelector(state => state.questions)
    const result = useSelector(state => state.result.result)

    const [checked,setchecked] = useState(false)
    const [{ isLoading, apiData, serverError }] = useFetchQ();   
    // let ques = data[0]
    const  questions  = useSelector(state=>state.questions.queue[state.questions.trace])
    


    useEffect(() => {
        console.log({trace,checked})
        dispatch(updateResult({trace,checked}))
    },[checked]);
    
    const onselect = (i)=>{
        oncheck(i)
        // console.log(i)
        setchecked(i)
    }

    if(isLoading) return <h3>isLoading</h3>;
    if(serverError) return <h3>ServerError</h3>;


  return (
    <div className='question'>
       <h2>{questions?.id}.{questions?.question}</h2>
       <ul key={questions?.id}>
            {
                questions?.options.map((q,i)=>(
                    <li key={i}>
                        <input 
                            type="radio" 
                            value = {checked} 
                            name="options" 
                            id={`q${i}option`} 
                            onChange={()=>onselect(i)}
                        />
                        <label htmlFor={`q${i}option`}>{q}</label>
                        <div className={`checked`}></div>
                     </li>
                ))
            }
       </ul>

    </div>
  )
}

export default Question