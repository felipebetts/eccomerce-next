import { useState } from 'react'
import axios from 'axios'

import styles from '../styles/Auth.module.css'

import { Paper, Button } from "@material-ui/core";
import PageTemplate from '../components/PageTemplate'
import LabelAndInput from '../components/common/Form/LabelAndInput';
import consts from '../consts/apiURLS';

function AuthForm(props) {

    const initialFormValues = {
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    }

    const [ formValues, setFormValues ] = useState(initialFormValues)

    const onFormSubmit = (values) => {
        // const { login, signup } = props
        // const value = JSON.stringify(values)
        props.loginMode ? login(values) : signup(values)
        if(localStorage.getItem('_eccomerce_user') !== undefined) {
            // props.history.push('/')
        }
        // console.log(values)
        // setFormValues(initialFormValues)
    }

    // onSubmit={() => onFormSubmit(formValues)}

    if(props.loginMode) {
        return (
            <form   className={styles.authForm} >
                <LabelAndInput 
                    type="input" 
                    label="Email"
                    value={formValues.email} 
                    onChange={e => setFormValues({ ...formValues, email: e.target.value})}
                />
                <LabelAndInput 
                    type="password" 
                    label="Senha"
                    value={formValues.password} 
                    onChange={e => setFormValues({ ...formValues, password: e.target.value})}
                />             
                <Button variant="contained" color="primary" style={{ margin: "10px" }} type="button" onClick={() => onFormSubmit(formValues)}>{props.loginMode ? 'Login' : 'Cadastre-se'}</Button>   
            </form>
        )
        
    } else {
        return (
            <form onSubmit={() => onFormSubmit(formValues)}  className={styles.authForm} >
                <LabelAndInput 
                    type="input" 
                    label="Nome"
                    value={formValues.name} 
                    onChange={e => setFormValues({ ...formValues, name: e.target.value })}
                />
                <LabelAndInput
                    type="input"
                    label="Email"
                    value={formValues.email}
                    onChange={e => setFormValues({ ...formValues, email: e.target.value })}
                />
                <LabelAndInput
                    type="password"
                    label="Senha"
                    value={formValues.password}
                    onChange={e => setFormValues({ ...formValues, password: e.target.value })}
                />
                <LabelAndInput
                    type="password" 
                    label="Confirmar Senha"
                    value={formValues.confirm_password} 
                    onChange={e => setFormValues({ ...formValues, confirm_password: e.target.value })}
                />  
                <Button variant="contained" color="primary" style={{ margin: "10px" }} type="submit">{props.loginMode ? 'Login' : 'Cadastre-se'}</Button>
            </form>
        )
    }
    
}

function Auth(props) {

    const [ loginMode, setLoginMode ] = useState(true)

    const renderLogin = () => {
        return (
            <p>Ainda não está cadastrado? <button className={styles.loginSwap} onClick={() => setLoginMode(!loginMode)} type="button">Cadastre-se</button></p>
        )
    }

    const renderRegister = () => {
        return (
            <p>Já é cadastrado? <button className={styles.loginSwap} onClick={() => setLoginMode(!loginMode)} type="button">Faça o login</button></p>
        )
    }

    return (
        <PageTemplate>
            <div className={styles.auth}>
                <Paper className={styles.authContainer} >
                    <h2>{loginMode ? 'Login' : 'Cadastro'}</h2>
                    <AuthForm loginMode={loginMode} history={props.history} />
                    {loginMode ? renderLogin() : renderRegister()}
                </Paper>
            </div>
        </PageTemplate>
    )
}

export default (Auth)


function login(values) {

    const userKey = '_eccomerce_user'
    // const INITIAL_STATE = {
    //     user: JSON.parse(localStorage.getItem(userKey)),
    //     validToken: false
    // }

    

    axios.post(`${consts.OAPI_URL}/login`, values)
        .then(resp => getUserData(resp.data.email, resp.data.token))
        .then(resp => {
            console.log(resp)
            localStorage.setItem(userKey, JSON.stringify(resp))
        })
        .catch(e => {
            e.response.data.errors.forEach(
                error => console.log(error))
        })

}

function getUserData(email, token) {
    return axios.get(`${consts.API_URL}/users?email=` + email)
        .then(resp => {
            // console.log(resp)
            const userData = resp.data[0]
            userData.token = token
            // console.log(userData)
            return userData
        })
}
