import React, { useEffect } from 'react'
import './Result.css'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'
import {useDispatch ,useSelector} from 'react-redux'
import { resetResultAction } from '../../Redux/Result'
import { answer } from '../../Database/Data'
import { useAuth0 } from "@auth0/auth0-react";



export default function Result() {
  let score =0
  const { user, isAuthenticated, isLoading } = useAuth0();

  const dispatch = useDispatch()
  const  res = useSelector(state => state.result)
  for (let t = 0; t < 15; t++) {
    if (res && answer && res[t] !== undefined && answer[t] !== undefined && answer[t] === res[t]) {
        console.log(answer[t], res[t]);
        score = score + 10;
    }
}
useEffect(()=>{
  // console.log(res)
  // console.log(answer[0])
})
  
  const restart = ()=>{
        dispatch(resetResultAction())
  }


  return (
    <div className='container'> 
      <h1></h1>

      <div className="result flex-center">
            <div className='flex'>
              <span><strong>{user.given_name?user.given_name:"Hello"}</strong></span>
            </div>
            <div className='flex'>
              <span>Total Quiz Question    </span>
              <span className='bold'>15</span>
            </div>
            <div className='flex'>
              <span>Total Correct     </span>
              <span className='bold'>{score}</span>
            </div>
            <div className='flex'>
              <span>Total earn points</span>
              <span className='bold'>{15*10}</span>
            </div>

          
        
      </div>

      <div className='start'>
          <Link className='btn' to={'/'} onClick={restart}>Restart</Link>
      </div>
      <div>
        <ResultTable/>
      </div>
    
    </div>
  )
}
