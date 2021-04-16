import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
    justifyContent: 'center'
  },
  menu:{
    display: 'flex',

  },
  menuBar:{
    maxWidth: '250px'
  },
  root: {
    flexGrow: 1,
  },
}));