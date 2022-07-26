import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright(props) {
    return (
      <Typography variant="body2"  align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/DmitryShvornev">
          Dmitry Shvornev
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }