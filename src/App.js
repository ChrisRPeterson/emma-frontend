import logo from './logo.svg';
import './App.css';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Container, Grid } from '@mui/material';
import Article from './components/Article';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Source Sans Pro"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

theme.typography.h1 = {
  fontFamily: '"Source Serif Pro"',
};

theme.typography.h3 = {
  fontFamily: '"Source Serif Pro"',
};

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          color: 'rgb(102, 102, 102)',
          // letterSpacing: 0.5,
          lineHeight: '23.4px',
        }}
      >
        <Container maxWidth="lg">
          <ThemeProvider theme={theme}>
            <Box sx={{ margin: '1em' }}>
              <Typography sx={{ fontWeight: 700 }} variant="h1">
                Emma Mascarenas
              </Typography>
            </Box>
            <Grid container>
              <Grid item xs={12} md={8}>
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ border: '1px solid white', height: '100%' }}>
                  <Typography>fdsfsdsfd</Typography>
                </Box>
              </Grid>
            </Grid>
          </ThemeProvider>
        </Container>
      </Box>
    </div>
  );
}

export default App;
