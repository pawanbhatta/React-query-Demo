import { Link, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import "./styles.css";

const notify = (message = "Data fetch Success", error = false) => {
  if (error)
    return toast.error(message, { position: "bottom-center", autoClose: 50 });
  toast.success(message, { position: "bottom-center", autoClose: 3000 });
};

const onSuccess = (data) => {
  console.log("Data fetching success, here is the data : ", data.data);
  notify();
};

const onError = (error) => {
  console.log("Data fetching failed, here is the error : ", error.message);
  notify(error.message, true);
};

const RQSuperHeroesPage = () => {
  const results = useSuperHeroesData(onSuccess, onError);

  const { isLoading, data, isFetching, refetch } = results;

  if (isLoading || isFetching) return <h4>Loading.....</h4>;

  // if (isError) return <h1>Error : {error?.message} </h1>;

  return (
    <div className="superHeroes">
      {/* <Navbar /> */}
      <h1>RQ Super Heroes Page</h1>
      <button className="rqbtn" onClick={refetch}>
        Fetch Super Heroes
      </button>
      <div>
        {data?.data.map((d) => {
          return (
            <Link to={`${d.id}`} key={d.id}>
              <h5>{d.name}</h5>
            </Link>
          );
        })}
        {/* {data.map((d) => {
          return <h5 key={d}>{d}</h5>;
        })} */}
      </div>
      <Outlet />

      <ToastContainer />
    </div>
  );
};

export default RQSuperHeroesPage;
