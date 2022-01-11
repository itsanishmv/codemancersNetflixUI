import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BaseUrl from "./BaseUrl";
import "./rowContents.css";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
function RowContents({ title, apiCall, styling }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    BaseUrl.get(apiCall).then((data) => setData(data.data.results));
  }, [apiCall]);

  //   console.log(data);

  const imag_url = "https://image.tmdb.org/t/p/w500/";
  return (
    <div>
      <h1 className="row__name">{title}</h1>
      <div
        style={styling && { flexWrap: "wrap", width: "100vw" }}
        className="trending__movie__list"
      >
        {data?.map((item) => (
          <Link style={{ textDecoration: "none" }} to={`/details/${item.id}`}>
            <img
              key={item.id}
              className="poster__images"
              style={
                styling && {
                  width: "300px",
                  marginLeft: "20px",
                  marginTop: "10px",
                }
              }
              src={`${imag_url}${item.poster_path}`}
              alt="img"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RowContents;
