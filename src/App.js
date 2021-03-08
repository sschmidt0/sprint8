import { makeStyles } from '@material-ui/core/styles';
import Card from './components/Card';
import Weather from './components/Weather';

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
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
});

export default () => {
    const classes = useStyles();
    return (
        <div>
            <div className={ classes.imageContainer }></div>
            <Weather />
            <div className={ classes.wrapper }>
                <Card />
            </div>
        </div>
    )
};
