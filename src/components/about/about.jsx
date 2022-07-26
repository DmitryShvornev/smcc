import { Typography } from "@mui/material";
import Header from "../header/header";
import Copyright from '../copyright/copyright';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function About() {
    return (
        <>
            <Header />
            <Container component="main" maxWidth="s">
                <div style={{ textAlign: 'center' }}>
                    <Box
                        component="img"
                        sx={{
                            height: 180,
                            width: 170,
                        }}
                        alt="BMSTU shield"
                        src="/bmstu.svg"
                    /></div>
                <Typography
                    component="h3"
                    variant="h3"
                    sx={{ textAlign: 'center' }}
                >
                    О программе
                </Typography>
                <Typography
                    component="h3"
                    variant="h6"
                    sx={{ textAlign: 'center', mt: 3 }}
                >
                    Здесь будет документация ПО
                </Typography>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </>
    );
}