import Categories from "./components/Categories";
import Pages from "./components/pages/Pages";
// import {QueryClientProvider, QueryClient} from 'react-query';
// import {ReactQueryDevtools} from 'react-query/devtools'
import {BrowserRouter} from "react-router-dom"
import Search from "./components/Search";

// const queryClient = new QueryClient();
function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <div className="App">
      <Search/>
      <Categories/>
      <Pages/>
      
    </div>
    </BrowserRouter>
    // <ReactQueryDevtools initialIsOpen={true}/>
    // </QueryClientProvider>
  );
}

export default App;
