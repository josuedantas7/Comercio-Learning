import {useState, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const Navigate = useNavigate()
    const [user,setUser] = useState(null)

    useEffect(() => {
        const loadingStoreData = async () => {
            const storeToken = localStorage.getItem('token')
            const storeUser = localStorage.getItem('user')
    
            if (storeToken) {
                const data = await axios.post('https://comercialluna.onrender.com/validate-token', { token: storeToken })
                if (data) {
                    setUser(JSON.parse(storeUser))
                } else {
                    Navigate('/login')
                }
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
                setUser(response.data.user)

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