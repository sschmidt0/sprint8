import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    padding: '20px 40px',
    marginBottom: 40,
    marginTop: 40,
    color: '#FFFFFF',
    backgroundColor: 'turquoise',
    border: 'none',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 14,
    transition: 'all 0.5s',
    cursor: 'pointer',
},
});


export default (props) => {
  const classes = useStyles();

  return (
    <Button className={ classes.button } onClick={ props.onClick }>{ props.text }</Button>
  );
}
