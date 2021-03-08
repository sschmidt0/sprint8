import { useState } from 'react';
import Welcome from './components/Welcome';
import JokePage from './components/JokePage';

export default () => {
    const [entered, setEntered] = useState(false);
    const onClick = () => setEntered(true);

    return (
        <>
            { entered ? <JokePage /> : <Welcome onClick={ onClick } /> }
        </>
    )
};
