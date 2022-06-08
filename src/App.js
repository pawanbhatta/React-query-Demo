import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import SuperHeroesPage from "./components/SuperHeroes.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes";
import HomePage from "./components/Home.page";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Navbar from "./components/Navbar";
import RQSuperHero from "./components/RQSuperHero";
import PageNotFound from "./components/PageNotFound";
import ParallelQueries from "./components/ParallelQueries.page";
import DynamicParallel from "./components/DynamicParallel.page";
import DependentQueries from "./components/DependentQueries.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="super-heroes" element={<SuperHeroesPage />} />
        <Route
          path="rq-dependent"
          element={<DependentQueries email="pawanbhatta00@gmail.com" />}
        />
        <Route path="rq-parallel" element={<ParallelQueries />} />
        <Route
          path="rq-dynamic-parallel"
          element={<DynamicParallel heroIds={[1, 3]} />}
        />
        <Route path="rq-super-heroes" element={<RQSuperHeroesPage />}>
          <Route path=":heroId" element={<RQSuperHero />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
