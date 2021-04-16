import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from '../Cart/styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom'


const Cart = ({cart , handleUpdateCartQtd, handleRemoveFromCart, handleEmptyCart}) => {
    
    const classes = useStyles();

    const EmptyCart = () =>(
        <Typography variant='h5'>
            Você não tem itens no carrinho!!!
            <div/>
            <Link to='/' className={classes.link} >
                Voltar para a loja
            </Link>
        </Typography>
    );

    const FilledCart = () =>(
        <>
            <Grid container spacing={3}>
                { cart.line_items.map((item) => (
                    <Grid item xs={12} sm={3} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQtd} onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                )) }
                </Grid>
                <div className={classes.cardDetails}>
                    <Typography variant='h5'>
                        Subtotal<span className={classes.itensCart}>({cart.total_unique_items} itens)</span>: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Esvaziar carrinho</Button>
                        <Button component={Link}to="/pagamento" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Comprar</Button>

                    </div>
                </div>
            
        </>
    )
    if(!cart.line_items){
        return 'Carregando...';
    }
    

    
    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.tittle} variant='h3' gutterBottom>Seu carrinho de compras</Typography>
            {  !cart.line_items.length ? <EmptyCart /> : <FilledCart/>  }
        </Container>
    )
}

export default Cart
