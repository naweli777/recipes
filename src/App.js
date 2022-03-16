import Pages from "./components/pages/Pages";
import {QueryClientProvider, QueryClient} from 'react-query';


const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <h1><Pages/></h1>
    </div>
    </QueryClientProvider>
  );
}

export default App;
