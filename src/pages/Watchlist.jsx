import React, { useContext, useState } from "react";
import GenreFilter from "../components/GenreFilter";
import { WatchListContext } from "../context/WatchListContextDef";
import Moviecard from "../components/Moviecard";

const Watchlist = () => {
  const { watchlist, genreList } = useContext(WatchListContext);
  const [search, setsearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  // Filter by search
  let filteredMovies = watchlist.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  // Further filter by genre if selected
  if (selectedGenre) {
    filteredMovies = filteredMovies.filter(
      (movie) => movie.genre_ids && movie.genre_ids.includes(Number(selectedGenre))
    );
  }

  return (
    <div className="p-4 pt-16">
      <input
        type="text"
        placeholder="Search movies..."
        className="p-2 w-3/4 md:w-1/2 border rounded border-gray-700 bg-gray-900 opacity-60 backdrop:blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2 z-10"
        onChange={(e) => setsearch(e.target.value)}
      />
      <div className="mt-16 flex justify-center">
        <GenreFilter genreList={genreList} setSelectedGenre={setSelectedGenre} />
      </div>
      <div className="movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16 ">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Moviecard key={movie.id} movie={movie} />
          ))
        ) : (
          <div className="text-white col-span-full text-center">No movies in your watchlist.</div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
