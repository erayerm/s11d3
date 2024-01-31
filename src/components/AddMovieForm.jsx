import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

const AddMovieForm = (props) => {
  const { setMovies } = props;
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    genre: "",
    metascore: 0,
    description: "",
  });
  const history = useHistory();
  /*
  useEffect(() => {
    console.log("calistim");
    axios
      .get("https://nextgen-project.onrender.com/api/s11d3/movies/" + id)
      .then((res) => {
        setMovie(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  */
  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    
    e.preventDefault();
    axios
      .post("https://nextgen-project.onrender.com/api/s11d3/movies", movie)
      .then((res) => {setMovies(res.data);history.push("/movies")})
      .catch((err) => console.error(err));
      
  };

  const { title, director, genre, metascore, description } = movie;

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="">
          <h4 className="">
            Yeni Film Ekle <strong>{title}</strong>
          </h4>
        </div>
        <div className="">
          <div className="">
            <label htmlFor="title" className="">
              Title
            </label>
            <input
              className=""
              value={title}
              onChange={handleChange}
              name="title"
              id="title"
              type="text"
            />
          </div>
          <div className="py-2">
            <label htmlFor="director" className="block pb-1 text-lg">
              Director
            </label>
            <input
              className=""
              value={director}
              onChange={handleChange}
              name="director"
              id="director"
              type="text"
            />
          </div>
          <div className="py-2">
            <label htmlFor="genre" className="block pb-1 text-lg">
              Genre
            </label>
            <input
              className="dark:bg-slate-800 dark:text-white"
              value={genre}
              onChange={handleChange}
              name="genre"
              id="genre"
              type="text"
            />
          </div>
          <div className="py-2">
            <label htmlFor="metascore" className="block pb-1 text-lg">
              Metascore
            </label>
            <input
              className="dark:bg-slate-800 dark:text-white"
              value={metascore}
              onChange={handleChange}
              name="metascore"
              id="metascore"
              type="number"
            />
          </div>
          <div className="py-2">
            <label htmlFor="description" className="block pb-1 text-lg ">
              Description
            </label>
            <textarea
              className="dark:bg-slate-800 dark:text-white"
              value={description}
              onChange={handleChange}
              name="description"
              id="description"
            ></textarea>
          </div>
        </div>
        <div className="px-5 py-4 border-t border-zinc-200 flex justify-end gap-2">
          <Link to={`/movies`} className="myButton bg-zinc-500">
            Vazgeç
          </Link>
          <button
            type="submit"
            className="myButton bg-green-700 hover:bg-green-600"
          >
            Yeni Filmi Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;
