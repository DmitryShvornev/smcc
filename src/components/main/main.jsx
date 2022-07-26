import { Typography } from "@mui/material";
import Header from "../header/header";
import Copyright from '../copyright/copyright';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Main() {
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
                    component="h1"
                    variant="h1"
                    sx={{ textAlign: 'center' }}
                >
                    СМКК
                </Typography>
                <Typography
                    component="h3"
                    variant="h6"
                    sx={{ textAlign: 'center', mt: 3 }}
                >
                    Система математического моделирования конструкций из композитов
                </Typography>
                <Typography
                    component="h4"
                    variant="h6"
                    sx={{ textAlign: 'center', mt: 3, fontStyle: 'italic' }}
                >
                    Магистерская диссертация, выполненная на кафедре ФН-11 под руководством проф. Ю. И. Димитриенко
                </Typography>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </>
    );
}