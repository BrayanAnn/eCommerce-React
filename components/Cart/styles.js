import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  
  title: {
    marginTop: '5%',

  },
  emptyButton: {
    minWidth: '200px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '200px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '5%',
    marginBottom: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
  itensCart:{
      display: 'flex-box',
      fontSize: 20,
      justifyContent: 'center'
  }
}));