import styles from './Header.module.css'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


import Drawer from '../../common/Drawer/Drawer'
// import Drawer from '../../common/platform/LeftDrawer'

import Cart from '../../platform/Cart/Cart'
import Menu from '../../platform/Menu/Menu'
import Account from '../../platform/Account/Account'

import MenuIcon from '@material-ui/icons/Menu';
import { TextField } from '@material-ui/core';


function Header(props) {

    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.left} >
                    <div className={styles.drawer} >
                        <Drawer anchor="left" label={MenuIcon} color="#eee">
                            <Menu />
                        </Drawer> 
                    </div>
                    <a href="/" className={styles.link} >
                        <h1 className={styles.logoh1}>Ecommerce</h1>
                    </a>
                    {/* <ShoppingCartIcon fontSize="large" />    */}
                </div>
                <div className={styles.middle}>
                    <input type="text"
                        className={styles.headerInput}
                        placeholder="Buscar"/>
                        {/* <TextField className={styles.headerInput} variant="filled"/> */}
                </div>
                <div className={styles.right}>
                    {/* <img src="/images/logoBelight.png" alt="" className={styles.img} /> */}
                    <div className={styles.center} >
                        {/* <Conta label="Conta"/> */}
                        <Drawer anchor="right" label={AccountCircleIcon} color="#eee" title="Conta">
                            <Account title="Conta" />
                        </Drawer>
                    </div>
                    <div className={styles.center} >
                        {/* <Cart label="Carrinho">
                            <ShoppingCartIcon />
                        </Cart>  */}
                        <Drawer anchor="right" label={ShoppingCartIcon} color="#eee" title="Carrinho">
                            <Cart label="Carrinho" icon={ShoppingCartIcon} />
                        </Drawer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header