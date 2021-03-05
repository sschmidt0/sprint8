import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Joke from './cardComponent/Joke';
import Button from './Button';

const useStyles = makeStyles({
  card: {
    width: 500,
    height: 400,
    textAlign: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    boxShadow: '0 10px 10px rgba(0,0,0,0.22)',
    borderRadius: 8,
    opacity: 1,
    backgroundColor: '#fff',
  },
  title: {
      marginTop: 40,
      fontSize: 28,
      fontWeight: 900,
      textAlign: 'center'
  },
});


export default () => {
  const [joke, setJoke] = useState('');
  const classes = useStyles();

  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const loadJoke = () => {
    fetch("https://icanhazdadjoke.com/", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.joke);
        setJoke(result.joke);
      })
      .catch(error => console.log('error', error));
  };

  return (
    <Card className={ classes.card }>
      <CardContent>
        <Typography className={ classes.title } variant="h1">
            Prepara't per riure? 🤣
        </Typography>
        <Joke joke={ joke }/>
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={() => loadJoke()} text="Següent acudit" />
      </CardActions>
    </Card>
  )
};
