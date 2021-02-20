import React, { useEffect, useState } from 'react'


import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
// import ListItemText from '@material-ui/core/ListItemText'

import styles from './Cart.module.css'
import { userKey } from '../../../consts/userKey'
import { InputLabel, MenuItem, Select, Button } from '@material-ui/core'
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
    let user = JSON.parse(localStorage.getItem(userKey))
    console.log(user)
    // const cart = user.cart
    
    const Icon = props.icon
    
    if (user === null) {
        return (
            <List>
                <ListItem className="styles." >
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
            <List className={styles.cartDrawer}>
                <ListItem>
                    <h2>{props.label}</h2>
                </ListItem>
                <Divider/>
                {/* <Divider />
                <ListItem key={'cart-titles'}>
                    <div className={styles.cartItem}>
                        <span className="styles.cartItemName"><strong>Nome</strong></span>
                            <span className="styles.cartItemPrice"><strong>Preço</strong></span>
                        <div className="styles.cartRight">
                            <span className="styles.cartItemPrice"><strong>Quant.</strong></span>
                        </div>
                    </div>   
                </ListItem> */}
                {user.cart.map((item, index) => {
                    // console.log(index)
                    return (
                        <div key={index}>
                            <ListItem >
                                <div className={styles.cartItem}>
                                    <div className={styles.imageContainer}>
                                        <img src={item.imageSrc} alt="" className={styles.image}/>
                                    </div>
                                    <div className={styles.description}>
                                        <h4 style={{ marginTop: "5px" }}>{item.name}</h4>
                                        <div className={styles.select}>
                                            <InputLabel id="demo-simple-select-label" className={styles.inputLabel}>Qtd.</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                defaultValue={1}
                                                // value={age}
                                                // onChange={handleChange}
                                            >
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                                <MenuItem value={3}>3</MenuItem>
                                                <MenuItem value={4}>4</MenuItem>
                                                <MenuItem value={5}>5</MenuItem>
                                                <MenuItem value={6}>6</MenuItem>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className={styles.price}>
                                        <p>R${item.price}</p>
                                    </div>
                                </div>
                            </ListItem>
                            <Divider />
                        </div>
                    )
                })}
                <ListItem >
                    <div className={styles.goToCart}>
                        <Button variant="contained" color="primary">Ir para o carrinho</Button>
                    </div>
                </ListItem>
            </List>
        )
    } else {
        return (
            <List className={styles.cartDrawer}>
                <ListItem >
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
