import Pages from "./components/pages/Pages";
import {QueryClientProvider, QueryClient} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'


const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <h1><Pages/></h1>
    </div>
    <ReactQueryDevtools initialIsOpen={true}/>
    </QueryClientProvider>
  );
}

export default App;
