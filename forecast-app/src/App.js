import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import './App.css';
import { Stack } from '@mui/system';
import { useEffect } from 'react';

const NYC_URL = 'https://api.weather.gov/gridpoints/OKX/31,37/forecast';
const LA_URL = 'https://api.weather.gov/gridpoints/LOX/154,44/forecast';
const HOUSTON_URL = 'https://api.weather.gov/gridpoints/HGX/65,97/forecast';

const cities = [{
  name: 'NYC',
  api: NYC_URL,
},{
  name: 'LA',
  api: LA_URL,
},{
  name: 'Houston',
  api: HOUSTON_URL,
},]

function App() {
  const [forecasts, setForecasts] = useState([]);
  const onClick = () => undefined;

  return (
    <main className="App">
      <Box paddingBottom={'32px'}>
        <Typography variant="h3">
          10 Day Forecast NYC
        </Typography>
      </Box>

      <Box paddingBottom={'32px'}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={() => onClick(0)}>
            NYC Forecast
          </Button>
          <Button variant="contained" onClick={() => onClick(1)}>
            LA Forecast
          </Button>
          <Button variant="contained" onClick={() => onClick(2)}>
            Houston Forecast
          </Button>
        </Stack>
      </Box>

      <Grid container spacing={2}>
        {forecasts.map((forecast, i) => 
          (<Grid>
            <Card sx={{ display: 'flex', width: 180 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {forecast.name}
                  </Typography>
                </CardContent>
                <Box component='div' sx={{ margin: 'auto' }} >
                  <CardMedia
                    component="img"
                    sx={{ width: 90, height: 90 }}
                    image={forecast.icon}
                    alt={forecast.name}
                  />
                </Box>
                <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '16px'
                  }}>
                  <Typography variant="h3">
                    {forecast.temperature}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h5">
                      {forecast.temperatureUnit}
                    </Typography>
                    <Typography variant="caption">
                      {forecast.temperatureTrend}
                    </Typography>
                  </Box>
                </Box>
                <CardContent>
                  <Typography variant="body2">
                    {forecast.detailedForecast}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>))}
      </Grid>
    </main>
  );
}

export default App;
