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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="super-heroes" element={<SuperHeroesPage />} />
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
