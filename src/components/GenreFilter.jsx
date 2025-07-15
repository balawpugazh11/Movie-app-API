import React from "react";


const GenreFilter = ({ genreList , setSelectedGenre }) => {
  return (
    <div>
      <select
        name=""
        id=""
        className="p-2 mb-4 bg-gray-900 bg-opacity-60 text-white backdrop-blur-md border rounded-md"
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option
          className="text-white bg-gray-900 bg-opacity-60 backdrop-blur-md border rounded-md"
          value=""
        >
          All Genres
        </option>
        {(genreList || []).map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
