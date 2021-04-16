import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    height: '100%',
  },
  media: {
    width: 0,
    padding:'30%',
    margin: 'auto'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
  },

  cardActionsCartShop:{
    border: ' 2px solid rgb(63 81 181)'
  },
  
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '30px'

  },
}));