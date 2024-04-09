import axios from 'axios'
import React,{useState} from 'react'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

function Register() {
    const [data,setData] = useState({
        name :'',
        email:'',
        password:'',
    })
    const navigate = useNavigate()
    
    const registerUser = async(e) => {
        e.preventDefault()

        const {name,email,password} = data
        try {
            
            const {data} = await axios.post('/register',{name,email,password})
            console.log({data})
            if(data.error){
                toast.error(data.error)
            }else{
                setData({})
                toast.success('Register successfull')
                navigate('/')
                setData('')
            }
        }

        catch (error) {
            console.log(error)
        }
      
    }
  return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    Quiz Junction   
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create and account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit = {registerUser}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 
                                text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block 
                                w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required="" value = {data.name} 
                                 onChange={(e)=>setData({...data,name:e.target.value})}/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="password" id="password" placeholder="name@company.com" className="bg-gray-50 border
                                 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 
                                 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                  dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value = {data.email} 
                                  onChange={(e)=>setData({...data,email:e.target.value})}/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
                                <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border 
                                border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                  dark:focus:border-blue-500" required="" value = {data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
                            </div>
                            {/* <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded
                                     bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600
                                      dark:ring-offset-gray-800" required=""/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div> */}
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 
                            font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 
                            dark:focus:ring-primary-800">Create an account</button>
                            
                        </form>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <button onClick={()=>navigate('/')} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</button>
                            </p>
          </div>
      </div>
  </div>
</section>
        <h1>register</h1>
        <form onSubmit = {registerUser}>
            <label >Name</label>
            <input type="text" placeholder='enter Name' value = {data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
            <label >Email</label>
            <input type="text" placeholder='Email' value = {data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
            <label>Password</label>
            <input type="text" placeholder='password'value = {data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
            <button type = 'submit'> Submit</button>
        </form>
    </div>
  )
}

export default Register