import React, { useEffect, useState } from 'react'


import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
// import ListItemText from '@material-ui/core/ListItemText'

import styles from './Cart.module.css'
import { userKey } from '../../../consts/userKey'
// import { changeCurrentProduct } from '../../../store/actions/currentProduct'

function Cart(props) {
    
    // const { auth } = props
    // console.log(auth)

    // useEffect(() => {
    //     if(user) {
    //         console.log('validateToken')
    //         // props.validateToken(user.token)
    //     }
    // }, [])
    
    // if(auth)
    // let cart = auth.user.cart || [] 
    // console.log(cart)
    const [ user, setUser] = useState(JSON.parse(localStorage.getItem(userKey)))
    // const cart = user.cart
    
    const Icon = props.icon
    
    if (user === null) {
        return (
            <List>
                <ListItem className="" >
                    <Icon />
                    <h3 >{props.label}</h3>
                </ListItem>
                <ListItem>
                    <i>Entre na sua conta ou cadastre-se para acessar o carrinho</i> 
                </ListItem>
            </List>
        )

    } else if(user.cart.length >= 1) {
        return (
            <List>
                <ListItem className="" >
                    <Icon />
                    <h3 >{props.label}</h3>
                </ListItem>
                <Divider />
                <ListItem key={'cart-titles'}>
                    <div className="cartItem">
                        <span className="cartItemName"><strong>Nome</strong></span>
                            <span className="cartItemPrice"><strong>Preço</strong></span>
                        {/* <div className="cartRight">
                            <span className="cartItemPrice"><strong>Quant.</strong></span>
                        </div> */}
                    </div>   
                </ListItem>
                <Divider/>
                {user.cart.map((item, index) => {
                    return (
                        <div key={index}>
                            <ListItem className="cartItem" >
                                <span className="cartItemName">{item.name}</span>
                                    <span className="cartItemPrice">R$ {item.price}</span>
                                {/* <div className="cartRight">
                                    <span className="cartItemPrice">Qu{item.amount}</span>
                                </div> */}
                            </ListItem>
                            <Divider />
                        </div>
                    )
                })}
                
            </List>
        )
    } else {
        return (
            <List>
                <ListItem className="" >
                    <Icon />
                    <h3 >{props.label}</h3>
                </ListItem>
                <ListItem>
                    <i>Ainda não há itens no carrinho.</i> 
                </ListItem>
            </List>
        )
    }
}

export default Cart
