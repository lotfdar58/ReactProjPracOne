import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function AppTabOne() {
  
  return (
    <Box>
        <Typography variant="h6" color={(theme) => theme.palette.text.primary}>
            Item One
        </Typography>
    </Box>
  );
}