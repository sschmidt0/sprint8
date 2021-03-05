import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import JokePage from './components/JokePage';

export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ Welcome } />
                <Route path="/joke" component={ JokePage } />
            </Switch>
        </Router>
    )
};
