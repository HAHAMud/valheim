import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Navbar } from '@/components/Navbar';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-screen">
        <Navbar />
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;
