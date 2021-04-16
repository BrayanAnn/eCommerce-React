import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography, InputBase} from '@material-ui/core';
import { ShoppingCart, Home, Search } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom'
import MenuPrincipal from './Menu/MenuPrincipal'


import useStyles from "../Barra-Navegação/styles";
import logo_loja from "../../arquivos/icon_loja.png";   


const BarraNavegacao = ({totalItems }) => {
    const classes = useStyles();
    const [searchItem, setSearchItem] = useState('')
    const location = useLocation();

    return (
        
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar >
                {location.pathname === '/' ? null : 
                    (<div className={classes.button}>
                        <IconButton component={Link} to="/">
                            <Home/>
                        </IconButton>
                        
                    </div>)}
                    
                    <MenuPrincipal/>
                    <div className={classes.grow}/>
                    {location.pathname === '/' ? (
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase
                        placeholder="Procurar..."
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        value={searchItem}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={(e) => {
                            
                            setSearchItem(e.target.value)
                            console.log(searchItem)
                        }}/>
                    </div>) : 
                        null}
                    
                    {location.pathname === '/' ? (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/carrinho" aria-label="Mostrar conteúdo do carrinho">
                            <Badge badgeContent={totalItems} color="secondary" className={classes.navShopCart}>
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>) : null}
                </Toolbar>
            </AppBar>  
        </>
    )
}

export default BarraNavegacao;
