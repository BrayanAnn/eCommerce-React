import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    width: 0,
    padding:'30%',
    margin: 'auto'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));