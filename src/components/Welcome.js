import { Typography } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Button from './Button';

export default (props) => (
  <Container style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }}>
    <Typography variant="h4">🤣🤣 Has vingut per riure una estoneta? 🤣🤣</Typography>
    <Button onClick={ props.onClick } text="Entra i riu" />
  </Container>
);
