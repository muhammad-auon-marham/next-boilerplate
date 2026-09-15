import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

export const metadata = {
  title: CONFIG.appName,
  description: 'The starting point for your next project.',
};

export default function Page() {
  return (
    <Container sx={{ py: { xs: 10, md: 15 } }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h2">{CONFIG.appName}</Typography>

        <Typography sx={{ mt: 2, mb: 5, color: 'text.secondary' }}>
          Start building by adding a route in <code>src/app</code> and a view in{' '}
          <code>src/sections</code>.
        </Typography>

        <Button href={paths.dashboard.root} variant="contained" size="large">
          Go to dashboard
        </Button>
      </Box>
    </Container>
  );
}
