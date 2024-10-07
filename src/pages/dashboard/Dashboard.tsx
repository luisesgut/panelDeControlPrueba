import * as React from 'react';
import { Box, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WebIcon from '@mui/icons-material/Web';
import SatelliteIcon from '@mui/icons-material/Satellite';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PrintIcon from '@mui/icons-material/Print';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import SettingsIcon from '@mui/icons-material/Settings';

const icons = [
  { icon: PrintIcon, label: 'IMPRESION', path: '/ModulosImpresion' },
  { icon: ArrowUpwardIcon, label: 'ENTRADAS', path: '/ModulosEntradas' },
  { icon: ExitToAppIcon, label: 'SALIDAS', path: '/salidas' },
  { icon: LocationOnIcon, label: 'UBICACIÓN', path: '/ubicacion' },
  { icon: WebIcon, label: 'CONSULTAS', path: '/consultas' },
  { icon: AppRegistrationIcon, label: 'REGISTROS', path: '/ModulosRegistros' },
  { icon: LibraryBooksIcon, label: 'CATALOGOS', path: '/catalogos' },
  { icon: SatelliteIcon, label: 'ANTENAS', path: 'http://172.16.10.31:90/', external: true },
  { icon: SettingsIcon, label: 'CONFIGURACION', path: '/configuracion' },
];

export const Dashboard: React.FC = () => {
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const iconSize = isXSmall ? 40 : 60; // Smaller icons on very small devices

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Grid container spacing={4}>
        {icons.map((item, index) => {
          const Icon = item.icon; // Ensure the icon component is capitalized
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link to={item.path} style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 150, // Usar minHeight en lugar de una altura fija
                  backgroundColor: '#46707e',
                  borderRadius: 2,
                  boxShadow: 3,
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#3b5c6b',
                  },
                  padding: theme.spacing(2), // Aplica padding uniformemente alrededor del contenido
                  paddingTop: theme.spacing(2), // Añade padding en la parte superior específicamente
                  paddingBottom: theme.spacing(2) // Añade padding en la parte inferior específicamente
                }}
                >
                <Icon sx={{ fontSize: iconSize }} />
                <Typography variant="h6" sx={{ mt: 2, fontSize: isXSmall ? '0.875rem' : '1rem' }}>
                  {item.label}
                </Typography>
              </Box>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
