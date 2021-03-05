import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  weather: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontWeight: 800,
    opacity: 1,
  }
});

export default () => {
  const [weather, setWeather] = useState('');
  const classes = useStyles();

  useEffect(() => {
    const url = "https://dark-sky.p.rapidapi.com/41.43734803122302,2.1829782495544583?lang=es&units=auto";
    fetch(url, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "30d40c3001msh527354931e78864p172a86jsn02a0d70e4f72",
        "x-rapidapi-host": "dark-sky.p.rapidapi.com"
      }
    })
    .then(response => {
      if (response.ok) return response.json();
    })
    .then(data => {
      console.log(data.currently.summary);
      setWeather(data.currently.summary);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  return (
    <Typography variant="body1" component="p" className={ classes.weather }>
      Avui: { weather }
    </Typography>
  );
}
