import { useContext, useEffect, useState } from 'react'
import InputLogin from '../components/Input/InputLogin'
import userLogo from '../assets/logouser.png'
import imagemLogin from '../assets/icon-1728552_1280.jpg'
import { toast } from 'react-toastify';
import ToastMessage from '../components/ToastMessage/ToastMessage';

import { AuthContext } from '../context/AuthContext';

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [toggleToast,setToggleToast] = useState(false)
    const [messageToast,setMessageToast] = useState('')
    const [typeToast,setTypeToast] = useState('')

    const { login } = useContext(AuthContext)

    const notify = () => toast(messageToast, {type: typeToast});



    async function handleSubmit(e){
        e.preventDefault()
        setEmail(email)
        setPassword(password)
        const data = {email,password}
        await login(data)
    }

  return (
    <div className='flex justify-between items-center'>
        {toggleToast && <ToastMessage notify={notify} message={messageToast}/>}
        <div className='w-1/2 max-[1150px]:w-[65%] max-[860px]:w-full flex flex-col mt-32'>
            <div className='border-2 rounded-2xl mx-auto w-[60%] max-[550px]:w-[90%] flex flex-col gap-5 h-[400px]'>
                <img className='w-[70px] -translate-y-9 rounded-full mx-auto h-[70px]' src={userLogo}/>
                <h1 className='text-3xl text-center'>Login</h1>
                <InputLogin label='Email' onChange={setEmail}/>         
                <InputLogin label='Senha' onChange={setPassword}/>
                <button className='bg-green-600 hover:bg-red-500 w-[300px] mx-auto rounded-lg py-3 text-white font-bold' onClick={handleSubmit} type='button'>Logar</button>      
            </div>
        </div>
        <div className='w-1/2 max-[1150px]:w-[35%] max-[860px]:hidden flex justify-center pt-8'>
            <img alt='Banner LOGIN' src={imagemLogin} className='h-[400px] w-[400px]'/>
        </div>
    </div>
  )
}

export default Login