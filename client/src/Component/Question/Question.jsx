import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import './Question.css'
import data from '../../Database/Data'
import  { pushResultAction,updateResultAction } from '../../Redux/Result'


function Question({count}) {
    const result = useSelector(state=>state.result)
    const dispatch = useDispatch()
    const [checked,setchecked] = useState(false)  
    const [option,setOption]  = useState(undefined)     

    const questions = data[count]
    useEffect(()=>{
        if(option !== undefined){
            console.log(count,option)
            dispatch(updateResultAction([count,option]))
            console.log(result)
            setOption(undefined)
        }
       
    })
    

  return (
    <div className='question'>
       <h2>{questions?.id}.{questions?.question}</h2>
       <ul key={questions?.id}>
            {
                questions?.options?.map((q,i)=>(
                    <li key={i}>
                        <input 
                            type="radio" 
                            value = {checked} 
                            name="options" 
                            id={`q${i}option`} 
                            onClick={()=>{setOption(i)}}
                        />
                        <label htmlFor={`q${i}option`}>{q}</label>
                     </li>
                ))
            }
       </ul>

    </div>
  )
}

export default Question