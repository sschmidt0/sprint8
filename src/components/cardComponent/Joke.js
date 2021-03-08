import Typography from '@material-ui/core/Typography';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paragraph: {
    marginTop: 70,
  },
});


const Joke = ({ joke }) => {
  const classes = useStyles();

  return (
    <Typography component="p" className={ classes.paragraph }>
      { joke }
    </Typography>
  )
};

Joke.propTypes = {
  joke: propTypes.string
};

export default Joke;


