import Header from "../header/header";
import Copyright from '../copyright/copyright';
import Container from '@mui/material/Container';

export default function Solvers() {
    return (
        <>
            <Header />
            <Container component="main" maxWidth="s">
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </>);
}