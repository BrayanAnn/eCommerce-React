import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from '@material-ui/core'
import useStyles from './styles';
import PagamentoForm from '../PagamentoForm';
import EnderecoForm from '../EnderecoForm';
import { commerce } from '../../../lib/commerce'
import { Link, useHistory } from 'react-router-dom'

const steps = ['Endereço de entrega', 'Informações de pagamento'];

const Pagamento = ({ cart, order, onCaptureCheckout, error  }) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingData, setShippingData] = useState({})
    const [isFinished, setIsFinished] = useState()
    const history = useHistory();

    useEffect(() => {
        const generateToken = async() =>{
            try{
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

                setCheckoutToken(token);
            }catch (error){
                history.pushState("/");
            }
        }
        
        generateToken();
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep)=> prevActiveStep + 1 )
    const backStep = () => setActiveStep((prevActiveStep)=> prevActiveStep - 1 )

    const next = (data) =>{
        setShippingData(data);
        nextStep();
    }

    const timeout = () =>
        setTimeout(()=>{
            setIsFinished(true);
        }, 5000)

    let Confirmation = () => order.customer ? (
        <>  
            <div>
                <Typography variant='h5'>Obrigado pela sua compra, {order.customer.firstname}</Typography>
                <Divider className={classes.divider}/>
                <Typography variant='subtitle1'>Pedido: {order.customer_reference}</Typography>
                <br/>
                <Button component={Link} to="/" variant="outlined" type="button">Voltar ao início</Button>
            </div>
           
        </>
    ): isFinished ? (
        <>  
            <div>
                <Typography variant='h5'>Obrigado pela sua compra!</Typography>
                <Divider className={classes.divider}/>     
                <br/>
                <Button component={Link} to="/" variant="outlined" type="button">Voltar ao início</Button>
            </div>
           
        </>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress/>
        </div>
    );
    
    if(error){
        <>
            <Typography variant='h5'>Erro? {error}</Typography>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Voltar ao início</Button>
        </>
    }

    const Form = () => activeStep === 0
        ?<EnderecoForm checkoutToken={checkoutToken} next={next} />
        :<PagamentoForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout} timeout={timeout}/>

    return (
        <>
            <CssBaseline/>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' align='center'>Pagamento</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}> 
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation/> : checkoutToken && <Form/>}
                </Paper>
            </main>  
        </>
    )
}

export default Pagamento
