import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast, ToastContainer } from "react-toastify";

const fetchColors = (pageNo) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNo}`);
};

const notify = (message = "Data fetch Success!", error = false) => {
  if (error)
    return toast.error(message, { position: "bottom-center", autoClose: 100 });
  toast.success(message, { position: "bottom-center", autoClose: 100 });
};

const onSuccess = () => notify();

const onError = (error) => notify(error.message);

const PaginatedQueries = () => {
  const [pageNo, setPageNo] = useState(1);
  const { data, isLoading, isFetching } = useQuery(
    ["colors", pageNo],
    () => fetchColors(pageNo),
    {
      onSuccess,
      onError,
      keepPreviousData: true,
    }
  );

  if (isLoading) return <h3>Loading....</h3>;
  return (
    <div className="superHeroes">
      <h1>Paginated Query while fetching colors data</h1>
      <div>
        {data?.data.map((d) => {
          return (
            <h5 key={d.id}>
              {" "}
              {d.id}. {d.label}
            </h5>
          );
        })}
      </div>

      <div>
        <button
          onClick={() => setPageNo((pageNo) => pageNo - 1)}
          disabled={pageNo === 1}
          style={{ marginRight: "10px" }}
        >
          Perv Page
        </button>
        <button
          onClick={() => setPageNo((pageNo) => pageNo + 1)}
          disabled={pageNo === 4}
        >
          Next Page
        </button>
      </div>
      {isFetching && "Loading..."}
      <ToastContainer />
    </div>
  );
};

export default PaginatedQueries;
