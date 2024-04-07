import React, { useEffect,useState } from 'react'
import Question from '../Question/Question'
import './Quiz.css'
import { useSelector,useDispatch } from 'react-redux'
import { MoveNextQuestion, PrevQuestion } from '../../Hooks/FetchQuestion'
import { PushAnswer } from '../../Hooks/setResult'
import {Navigate} from 'react-router-dom'
import Timer from '../Timer'

export default function Quiz() {

  const [checked,setchecked] = useState(0)

  const result = useSelector(state=>state.result.result)
  const { queue, trace } = useSelector(state => state.questions);
  const dispatch = useDispatch()
  
  function oncheck(i){
    setchecked(i)
  }
  // button
  const Previous = ()=>{
      if(trace >0){
        dispatch(PrevQuestion());

      }
  }
  const Next = ()=>{
    if(trace < queue.length){
      dispatch(MoveNextQuestion());

      if(result.length <= trace){
          dispatch(PushAnswer(checked))
      }
  }

  setchecked(undefined)

}
if(result.length && result.length >= queue.length){
  return <Navigate to={'/result'} replace = {true}></Navigate>
}

  return (
    <div>
      <Timer/>
      <Question oncheck = {oncheck}/>
      <div className='btn button'>
        <button onClick={Previous}>Prev</button>
        <button onClick={Next}>Next</button>
      </div>
    </div>
  )
}
