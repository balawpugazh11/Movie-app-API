import React, { useEffect, useState } from "react";
import Moviecard from "../components/Moviecard";

const Home = () => {
  const [movies, setmovies] = useState([]);
  const [page, setpage] = useState(1);
  const [search, setsearch] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=8ca3efc0124283b1ee02aec0b0a2974a`;
    if (search) {
      url =`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=8ca3efc0124283b1ee02aec0b0a2974a`
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.results)) {
          setmovies(data.results);
          setTotalPages(data.total_pages || 1);
        } else {
          setmovies([]);
          setTotalPages(1);
        }
      })
      .catch(() => {
        setmovies([]);
        setTotalPages(1);
      });
  }, [page ,search]);

  return (
    <div className="p-4 pt-16">
      <input
        type="text"
        placeholder="Search movies..."
        className="p-2 w-3/4 md:w-1/2 border rounded border-gray-700
         bg-gray-900 opacity-60 backdrop:blur-md
         text-white fixed top-16 left-1/2 
         transform -translate-x-1/2 z-10"
         onChange={(e) =>setsearch(e.target.value)}
      />
      <div
        className="movies-container grid grid-cols-1 
      md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16 "
      >
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie) => {
            return <Moviecard key={movie.id} movie={movie} />;
          })
        ) : (
          <div className="text-white col-span-full text-center">No movies found.</div>
        )}
      </div>
      <div className="flex justify-between items-center gap-4 mt-6">
        <button
          onClick={() => setpage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-blue-900 text-white rounded disabled:bg-gray-400"
        >
          Prev
        </button>
        <span className="text-blue-900">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setpage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-3 py-1 bg-blue-900 text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
