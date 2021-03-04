import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    imageContainer: {
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("src/img/happy-people.jpg")',
        backgroundSize: 'cover',
        opacity: 0.3,
        zIndex: -1,
    },
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
    paragraph: {
        marginTop: 70,
    },
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
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    weather: {
        position: 'absolute',
        top: 20,
        left: 20,
        fontWeight: 800,
        opacity: 1,
      }
});

export default () => {
    const [joke, setJoke] = useState('');
    const [weather, setWeather] = useState('');
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
        <div>
            <div className={ classes.imageContainer }></div>
            <Typography variant="body1" component="p" className={ classes.weather }>
                Avui: { weather }
            </Typography>
            <div className={ classes.wrapper }>
                <Card className={ classes.card }>
                    <CardContent>
                        <Typography className={ classes.title } variant="h1">
                            Prepara't per riure? 🤣
                        </Typography>
                        <Typography component="p" className={ classes.paragraph }>
                            { joke }
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button className={ classes.button } onClick={() => loadJoke()}>Següent acudit</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};
