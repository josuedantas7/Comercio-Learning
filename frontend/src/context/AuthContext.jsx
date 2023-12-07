import {useState, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const Navigate = useNavigate()
    const [user,setUser] = useState(null)

    useEffect(() => {
        const loadingStoreData = () => {
            const storeUser = localStorage.getItem('user')
            const storeToken = localStorage.getItem('token')
    
            if (storeUser && storeToken) {
                setUser(JSON.parse(storeUser))
            }
        }
    
        loadingStoreData();
    }, [])


    const login = async ({email, password}) => {
        try {
            const response = await axios.post('https://comercialluna.onrender.com/auth/login', { email, password})
            if (response.data.error) {
                alert(response.data.error)
            } else {
                setUser(response.data)

                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`

                localStorage.setItem('user', JSON.stringify(response.data.user))
                localStorage.setItem('token', response.data.token)
                Navigate('/home')
            }
        } catch (error) {
            alert(error)
        }
    }

    const logout = () => {
        localStorage.clear()
        setUser(null)
        return <Navigate to="/login" />
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, signed: !!user }}>
            {children}
        </AuthContext.Provider>
    )
}