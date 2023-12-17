import {useState, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Proptypes from 'prop-types'

const apiUrl = import.meta.env.VITE_APP_API_URL


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const Navigate = useNavigate()
    const [user,setUser] = useState(null)

    useEffect(() => {
        const loadingStoreData = async () => {
            const storeToken = localStorage.getItem('token')
            const storeUser = localStorage.getItem('user')
    
            if (storeToken) {
                const data = await axios.post(
                    `${apiUrl}/validate-token`,
                    {},
                    {
                      headers: {
                        Authorization: `Bearer ${storeToken}`
                      }
                    }
                  );
                if (data.status === 200) {
                    setUser(JSON.parse(storeUser));
                } else {
                    Navigate('/login');
                }
            }
        }
    
        loadingStoreData();
    }, [])


    const login = async ({ email, password }) => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, { email, password });
    
            if (response.data.error) {
                // Tratamento de erro caso haja algum erro retornado pela API
                return { type: false, msg: response.data.msg }; // Retornar um objeto indicando um erro
            } else {
                setUser(response.data.user);
    
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    
                localStorage.setItem('user', JSON.stringify(response.data.user));
                localStorage.setItem('token', response.data.token);
                
                // Retorna um objeto indicando sucesso
                return { type: true, msg: 'Logado com sucesso' };
            }
        } catch (error) {
            // Tratamento de erro caso ocorra uma exceção durante a chamada à API
            return { type: false, msg: 'Erro ao realizar o login.' };
        }
    };

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


AuthProvider.propTypes = {
    children: Proptypes.node.isRequired
}