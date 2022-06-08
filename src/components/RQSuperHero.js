import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

const RQSuperHero = () => {
  const { heroId } = useParams();

  const notify = (message = "Data fetch Success", error = false) => {
    if (error)
      return toast.error(message, { position: "bottom-center", autoClose: 50 });
    toast.success(message, { position: "bottom-center", autoClose: 3000 });
  };

  const {
    // data: { data:hero },
    data,
    isLoading,
    isError,
    error,
  } = useSuperHeroData(heroId);

  if (isLoading) return <h3>Loading....</h3>;

  if (isError) return notify(error.message, true);

  return (
    <div>
      <h3>RQSuperHero Details</h3>
      <h5> Details of hero {heroId} </h5>
      <p> Name : {data?.data.name} </p>
      <p> AlterEgo : {data?.data.alterEgo} </p>
      <ToastContainer />
    </div>
  );
};

export default RQSuperHero;
