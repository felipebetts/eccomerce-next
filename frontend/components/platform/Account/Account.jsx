import React, { useEffect, useState } from 'react'
// import axios from 'axios'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

// import Drawer from '../../layout/Drawer/Drawer'
// import RegisterForm from './RegisterForm'

// import Messages from '../../common/messages/messages'

import styles from './Account.module.css'
import { userKey } from '../../../consts/userKey'


const URL = "http://localhost:3003/api/users"


function Account(props) {


    // useEffect(() => {
    //     console.log(props.auth) 
    //     if (props.auth !== undefined) {
    //         if(!props.auth.validToken) {
    //             if(props.auth.user !== null) {
    //                 // props.validateToken(props.auth.user.token)
    //             }
    //         }
    //     }
    //     // props.validateToken(props.auth.user.token)
    //     // if(props.auth.user) {
    //     //     console.log('validateToken')
    //     //     console.log(props.auth.user.token)
    //     //     console.log(props.validateToken)
    //     // }
    // }, [props.auth.user])


    // const {  validToken, user } = props.auth 
    // const user = JSON.parse(localStorage.getItem('_eccomerce_user'))
    // console.log(props)
    // console.log(props.auth.user)

    // const registerNewUser = () => {

    //     // const username = user.name
    //     // const password = user.password

    //     if(user.name && user.password) {
    //         axios.post(URL, { ...user })
    //             .then(resp => {
    //                 console.log('novo usuario')
    //                 // console.log(user)
    //                 setUser(initialUser)
    //             })
    //             .then(resp => axios.get(URL).then(resp => console.log(resp)))
    //     }
    // }

    const [ user, setUser] = useState(JSON.parse(localStorage.getItem(userKey)))
    console.log(user)

    if(user) {
        return (
                <div >
                    <List className={styles.accountDrawerContainer} >
                        <ListItem>
                            <h3>Seja bem vinde, {user.name}</h3>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                            <ListItemText>Dados Cadastrais</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                            <ListItemText>Pedidos</ListItemText>
                        </ListItem>
                        <a href="#" onClick={() => {
                            setUser(null)
                            logout()
                        }}>
                            <ListItem button>
                                <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                                <ListItemText>Sair</ListItemText>
                            </ListItem>
                        </a>
                        {/* <a href={`#${props.title.toLowerCase()}`} key={`${props.title.toLowerCase()}`} >
                            <ListItem button >
                                <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                                <ListItemText primary={props.title} />
                            </ListItem>
                        </a>
                        <Divider />
                        <ListItem>
                            <RegisterForm 
                                // handleClick={() => registerNewUser()}
                                user={user}
                                setUser={(a) => setUser(a)} /> 
                        </ListItem> */}
                    </List> 
                </div>
        )
    } else {
        return(
            <div>
                <List className={styles.accountDrawerContainer}>
                    <a href="/login">
                        <ListItem button>
                            <h3>
                                Entre na sua conta, ou cadastre-se
                            </h3>
                        </ListItem>
                    </a>
                    <Divider />
                </List>
                <div className={styles.center} style={{ marginTop: "50px" }}>
                    Logo
                </div>
            </div>
        )
    }
}

export default Account


function logout() {
    localStorage.removeItem(userKey)
}