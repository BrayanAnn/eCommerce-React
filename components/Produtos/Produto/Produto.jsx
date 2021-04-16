import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles"



const Produto = ({ product, onAddToCart }) => {
    
    const classes = useStyles();
        return (
            <Card container className={classes.root}>
                <CardMedia className={ classes.media } alt="complex" image={product.media.source} tittle={product.name}></CardMedia>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography fontSize='20px' gutterBottom>
                            {product.name}
                        </Typography >
                        <Typography fontSize='1.5rem' gutterBottom>
                            {product.price.raw.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </Typography>
                    </div>
                    {/*<div className={classes.description} >
                        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" className={classes.div}/>
                    </div>*/}
                    <div className={classes.item}>
                    <CardActions disableSpacing className={classes.cardActions}>
                        <IconButton aria-label = "Adicionar ao carrinho" className={classes.cardActionsCartShop} onClick={() => onAddToCart(product.id, 1)}>
                            <AddShoppingCart  />
                        </IconButton>
                    </CardActions>
                    </div>
                </CardContent>
                
               
            
            </Card>
            
        
    )
}

export default Produto
