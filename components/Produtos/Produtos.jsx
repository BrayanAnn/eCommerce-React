import React from 'react'
import Produto from './Produto/Produto.jsx'
import {Grid, Box} from '@material-ui/core';
import useStyles from './styles';


const Produtos = ({ products, onAddToCart }) => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            
            <div className={classes.toolbar} />
            
                    <Grid container justify="center" spacing={2}>
                    {
                        products.map((product) => (
                            <Grid item key={product.id} xs={12} md={4} lg={3}>
                                <Produto product={product} onAddToCart={onAddToCart}/>
                            </Grid>
                            
                        ))
                    }
                    </Grid>       
        </main>
    )
}

export default Produtos
