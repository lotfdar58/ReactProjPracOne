import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import AppTabs from './AppTabs';
import Header from './header/Header';
import CssBaseline from '@mui/material/CssBaseline';
import { useThemeContext } from './theme/ThemeContextProvider';

function AppWrapper() {
  const { theme } = useThemeContext();

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container>
          <Grid item xs={12} sm={12}>
              <Header />
          </Grid>
          <Grid item xs={12} sm={12} sx={{ height: '100vh' }}>
            <AppTabs />
          </Grid>
        </Grid>
      </ThemeProvider>
  );
}

export default AppWrapper;
