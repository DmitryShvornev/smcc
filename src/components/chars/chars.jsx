import Header from "../header/header";
import Copyright from '../copyright/copyright';
import Plot from 'react-plotly.js';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { theta, phi } from '../../utils/temp';
import { Typography } from "@mui/material";

export default function Chars() {
    return (
        <>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ textAlign: 'left' }}><Plot
                    data={[
                        {
                            x: theta,
                            y: phi,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: 'red' },
                        },
                    ]}
                    layout={{ width: 1020, height: 590, title: 'Изменение фазовой концентрации' }}
                /></div>
                <Stack spacing={1} sx={{ ml: 3, width: 600, mt: 3 }}>
                    <Typography
                        component="h4"
                        variant="h6"
                    >
                        Параметры модели
                    </Typography>
                    <Autocomplete
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                            <TextField label="disableCloseOnSelect" variant="standard" />
                        )}
                    />
                    <Autocomplete
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                            <TextField label="disableCloseOnSelect" variant="standard" />
                        )}
                    />
                    <Autocomplete
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                            <TextField label="disableCloseOnSelect" variant="standard" />
                        )}
                    />
                    <Autocomplete
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                            <TextField label="disableCloseOnSelect" variant="standard" />
                        )}
                    />
                    <Autocomplete
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                            <TextField label="disableCloseOnSelect" variant="standard" />
                        )}
                    />
                </Stack>
            </div>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </>);
}