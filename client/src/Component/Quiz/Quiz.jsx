import React, { useEffect,useState } from 'react'
import Question from '../Question/Question'
import './Quiz.css'
import { useSelector,useDispatch } from 'react-redux'
import {Navigate} from 'react-router-dom'
import Timer from '../Timer'
import Data from '../../Database/Data'
import  { pushResultAction,updateResultAction } from '../../Redux/Result'
import Navbar from '../Navbar'



export default function Quiz() {

  // const [checked,setchecked] = useState(undefined)
  const [count,setCount] = useState(0)

  const result = useSelector(state=>state.result)
  const dispatch = useDispatch()
  

  if(result.length === 1){
    for(let i = 0 ; i < Data.length-1 ; i++ ){
      dispatch(pushResultAction(undefined))
  }
}

useEffect(()=>{
  console.log(result)
})
  
  const Previous = ()=>{
      if(count > 0){
        setCount(count-1);

      }
  }
  const Next = ()=>{
    if (count < Data.length-1){
        setCount(count+1)
    }
    

}
if( count >= Data.length-1){
  return <Navigate to={'/result'} replace = {true}></Navigate>
}

  return (
    <div>
      <Navbar/>
      <Timer/>
      <Question count ={count}/>
      <div className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-20 ml-28">
        <button onClick={Next}>Next</button>
      </div>
    </div>
  )
}
