import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Stack, ThemeProvider, createTheme } from '@mui/material';
import { Navbar } from '@/components/Navbar';
import { DetailDrawer } from '@/components/DetailDrawer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const theme = createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        direction: 'row',
      },
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
