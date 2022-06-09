import axios from "axios";
import React, { Fragment } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { toast, ToastContainer } from "react-toastify";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};

const InfiniteQueries = () => {
  const notify = (message = "Fetch Success", error = false) => {
    if (error) return toast.error(message, { position: "bottom-center" });
    return toast.success(message, { position: "bottom-center" });
  };

  const onSuccess = () => notify();

  const onError = (error) => notify(error.message, true);

  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery("colors", fetchColors, {
    onSuccess,
    onError,
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="superHeroes">
      <h1>Infinite Queries while fetching colors data </h1>

      <div>
        {data?.pages.map((group, index) => (
          <Fragment key={index}>
            {group.data.map((color) => (
              <h2 key={color.id}>
                {color.id}. {color.label}{" "}
              </h2>
            ))}
          </Fragment>
        ))}
      </div>
      <div>
        <button onClick={fetchNextPage} disabled={!hasNextPage}>
          Load More
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      <ToastContainer />
    </div>
  );
};

export default InfiniteQueries;
