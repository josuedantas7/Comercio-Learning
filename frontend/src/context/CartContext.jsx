import { useState, useEffect, createContext } from 'react'

import Proptypes from 'prop-types'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)


    useEffect(() => {
        const loadingStoreData = async () => {
            const storeCart = localStorage.getItem('cart')

            if (storeCart) {
                setCart(JSON.parse(storeCart));
            }
        }

        loadingStoreData();
        getTotal()
    }, [])

    const addCart = (product) => {
        const check = cart.every(item => {
            return item.produto !== product.produto
        })

        if (check) {
            setCart([...cart, product])
        } else {
            alert("O produto já está no carrinho")
        }
    }

    const removeItem = (produto) => {
        cart.forEach((item, index) => {
            if (item.produto === produto) {
                cart.splice(index, 1)
            }
        })

        setCart([...cart])

    }

    const getTotal = () => {

        setTotal(cart.reduce((prev, item) => {
            return prev + (item.price)
        }, 0))
    }

    useEffect(() => {
        getTotal()
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{cart, addCart, total, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: Proptypes.node.isRequired
}