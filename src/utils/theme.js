import {
    createTheme
} from '@mui/material/styles';
import {
    indigo,
    grey
} from '@mui/material/colors';

const PRIMARY_MAIN_INDEX = 900;
const SECONDARY_MAIN_INDEX = 500;
const PRIMARY_CONTRAST_TEXT_INDEX = 50;
const SECONDARY_CONTRAST_TEXT_INDEX = 900;

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: grey[PRIMARY_MAIN_INDEX],
            contrastText: grey[PRIMARY_CONTRAST_TEXT_INDEX]
        },
        secondary: {
            main: indigo[SECONDARY_MAIN_INDEX],
            contrastText: grey[SECONDARY_CONTRAST_TEXT_INDEX]
        }
    }
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});